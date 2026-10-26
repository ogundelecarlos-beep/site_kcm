/**
 * Servidor local para conferir o site gerado em dist/.
 *
 *   npm run preview   serve dist/ (rode npm run build antes)
 *   npm run dev       gera o build, serve dist/ e refaz o build a cada arquivo salvo
 *
 * Porta padrão 4173; outra: npm run dev -- --porta 5000
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(raiz, 'dist');
const args = process.argv.slice(2);
const dev = args.includes('--dev');
const porta = Number(args[args.indexOf('--porta') + 1]) || 4173;

const construir = () => spawnSync(process.execPath, [path.join(raiz, 'tools', 'build.mjs')], { stdio: 'inherit' }).status === 0;

if (dev) {
  construir();
  let espera;
  for (const pasta of ['app', 'styles', 'assets']) {
    fs.watch(path.join(raiz, pasta), { recursive: true }, () => {
      clearTimeout(espera);
      espera = setTimeout(construir, 150);
    });
  }
  fs.watch(path.join(raiz, 'index.html'), () => {
    clearTimeout(espera);
    espera = setTimeout(construir, 150);
  });
} else if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/ não existe. Rode "npm run build" antes (ou use "npm run dev").');
  process.exit(1);
}

const tipos = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
};

http
  .createServer((req, res) => {
    let rel = decodeURIComponent(new URL(req.url, 'http://local').pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    const arquivo = path.join(dist, rel);
    if (!arquivo.startsWith(dist) || !fs.existsSync(arquivo) || fs.statSync(arquivo).isDirectory()) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('404');
      console.log('404', rel);
      return;
    }
    res.writeHead(200, { 'content-type': tipos[path.extname(arquivo)] ?? 'application/octet-stream', 'cache-control': 'no-store' });
    fs.createReadStream(arquivo).pipe(res);
  })
  .listen(porta, () => console.log(`\nsite em http://localhost:${porta}${dev ? '  (refaz o build ao salvar)' : ''}`));
