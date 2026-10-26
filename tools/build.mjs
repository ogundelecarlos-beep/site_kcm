/**
 * Build do site: gera dist/ pronto para a Vercel.
 *
 * 1. Sincroniza a URL pública (tools/aplicar-url.mjs).
 * 2. Empacota todo o JS (app + React) num único arquivo minificado.
 * 3. Junta os CSS num único arquivo minificado.
 * 4. Pré-renderiza a página com react-dom/server e grava o HTML pronto em dist/index.html.
 * 5. Copia assets, robots.txt e sitemap.xml.
 *
 * Uso: npm run build
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as esbuild from 'esbuild';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(raiz, 'dist');
const tmp = path.join(raiz, 'node_modules', '.cache', 'site-kcm');
const inicio = Date.now();

// 1. URL pública em index.html, robots.txt e sitemap.xml.
execFileSync(process.execPath, [path.join(raiz, 'tools', 'aplicar-url.mjs')], { stdio: 'inherit' });

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.mkdirSync(tmp, { recursive: true });

const producao = { 'process.env.NODE_ENV': '"production"' };

// 2. JS do navegador: um arquivo só, com hash no nome para cache longo.
const js = await esbuild.build({
  entryPoints: { app: path.join(raiz, 'app', 'main.js') },
  bundle: true,
  minify: true,
  format: 'esm',
  target: 'es2020',
  define: producao,
  legalComments: 'none',
  entryNames: '[name]-[hash]',
  outdir: path.join(dist, 'app'),
  metafile: true,
  absWorkingDir: raiz,
  logLevel: 'warning',
});

// 3. CSS: mesma ordem do index.html, num arquivo só.
let html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8').replace(/\r\n/g, '\n');
const folhas = [...html.matchAll(/^\s*<link rel="stylesheet" href="(\/styles\/[^"]+)" \/>\n/gm)];
if (!folhas.length) throw new Error('Nenhuma folha de estilo /styles/ encontrada no index.html');
const css = await esbuild.build({
  stdin: {
    contents: folhas.map((f) => `@import ".${f[1]}";`).join('\n'),
    resolveDir: raiz,
    loader: 'css',
    sourcefile: 'estilos.css',
  },
  bundle: true,
  minify: true,
  legalComments: 'none',
  entryNames: 'site-[hash]',
  outdir: path.join(dist, 'styles'),
  metafile: true,
  absWorkingDir: raiz,
  logLevel: 'warning',
});

// Caminhos do metafile são relativos a absWorkingDir (a raiz do projeto).
const saida = (resultado, ext) => {
  const arquivo = Object.keys(resultado.metafile.outputs).find((f) => f.endsWith(ext));
  return '/' + path.relative(dist, path.resolve(raiz, arquivo)).replace(/\\/g, '/');
};
const arquivoJs = saida(js, '.js');
const arquivoCss = saida(css, '.css');

// 4. Pré-renderização: o mesmo App, executado no Node.
const ssr = path.join(tmp, 'ssr.mjs');
await esbuild.build({
  stdin: {
    contents: `
      import { StrictMode, createElement } from 'react';
      import { renderToString } from 'react-dom/server';
      import { App } from './app/App.js';
      export const renderizar = () => renderToString(createElement(StrictMode, null, createElement(App)));
    `,
    resolveDir: raiz,
    loader: 'js',
    sourcefile: 'ssr-entrada.js',
  },
  bundle: true,
  platform: 'node',
  packages: 'external', // React vem do node_modules na hora de renderizar
  format: 'esm',
  define: producao,
  outfile: ssr,
  logLevel: 'warning',
});
const { renderizar } = await import(`${pathToFileURL(ssr).href}?v=${Date.now()}`);
// O React põe as dicas de carregamento (<link rel="preload">) no começo do HTML gerado;
// elas vão para o <head>, e só a página fica dentro de #raiz.
let dicas = '';
const conteudo = renderizar().replace(/^(?:<link [^>]*\/>)+/, (links) => {
  dicas = links.replace(/\/>/g, ' />\n    ').replace(/^/, '    ');
  return '';
});

const substituir = (padrao, novo, descricao) => {
  if (!padrao.test(html)) throw new Error(`index.html: não encontrei ${descricao}`);
  html = html.replace(padrao, novo);
};
for (const [i, f] of folhas.entries()) html = html.replace(f[0], i === 0 ? `    <link rel="stylesheet" href="${arquivoCss}" />\n` : '');
substituir(/<script type="module" src="\/app\/main\.js"><\/script>/, `<script type="module" src="${arquivoJs}"></script>`, 'o script /app/main.js');
substituir(/<div id="raiz"><\/div>/, () => `<div id="raiz">${conteudo}</div>`, '<div id="raiz"></div>');
substituir(/ *<!-- Modelo:[\s\S]*?-->\n/, '', 'o comentário de modelo antes de #raiz');
if (dicas) substituir(/( *<link rel="icon")/, (m) => `${dicas.trimEnd()}\n${m}`, '<link rel="icon">');

fs.writeFileSync(path.join(dist, 'index.html'), html);

// 5. Arquivos estáticos.
fs.cpSync(path.join(raiz, 'assets'), path.join(dist, 'assets'), { recursive: true });
for (const f of ['robots.txt', 'sitemap.xml']) fs.copyFileSync(path.join(raiz, f), path.join(dist, f));

const kb = (f) => (fs.statSync(path.join(dist, f)).size / 1024).toFixed(1) + ' KB';
console.log(`\nbuild pronto em ${Date.now() - inicio} ms → dist/`);
console.log(`  index.html  ${kb('index.html')}`);
console.log(`  ${arquivoJs.slice(1)}  ${kb(arquivoJs.slice(1))}`);
console.log(`  ${arquivoCss.slice(1)}  ${kb(arquivoCss.slice(1))}`);
