/**
 * Sincroniza a URL pública do site em todos os arquivos que precisam dela.
 *
 * Fonte única: `configuracao.urlSite` em app/content/site.js.
 * Ao trocar o domínio: altere a URL lá e rode `node tools/aplicar-url.mjs`.
 *
 * Atualiza: index.html (canonical, og:url, og:image, twitter:image e JSON-LD),
 * robots.txt e sitemap.xml.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { configuracao, contatos, empresa } = await import(pathToFileURL(path.join(raiz, 'app/content/site.js')).href);

const url = configuracao.urlSite.replace(/\/+$/, '');
if (!/^https:\/\/[^/]+$/.test(url)) {
  console.error(`urlSite inválida: "${configuracao.urlSite}". Use só o endereço, ex.: https://kcmsites.com.br`);
  process.exit(1);
}

const escrever = (arquivo, conteudo) => {
  const destino = path.join(raiz, arquivo);
  const anterior = fs.existsSync(destino) ? fs.readFileSync(destino, 'utf8') : '';
  // Mantém a quebra de linha que o arquivo já usa (o Git no Windows costuma usar CRLF).
  const final = anterior.includes('\r\n') ? conteudo.replace(/\r?\n/g, '\r\n') : conteudo;
  if (final !== anterior) fs.writeFileSync(destino, final);
  console.log(`${final === anterior ? 'sem mudança' : 'atualizado '}  ${arquivo}`);
};

/* index.html ------------------------------------------------------------- */

const redes = Object.values(configuracao.redesSociais).filter(Boolean);
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: empresa.nome,
  slogan: empresa.assinatura,
  description: 'Criação de sites personalizados para negócios.',
  url: `${url}/`,
  logo: `${url}/assets/logo-kcm.png`,
  image: `${url}/assets/compartilhamento.png`,
  email: contatos.email,
  telephone: contatos.principal.telefoneExibicao,
  areaServed: { '@type': 'Country', name: 'Brasil' },
  ...(redes.length ? { sameAs: redes } : {}),
};
const blocoJsonLd = JSON.stringify(jsonLd, null, 2).replace(/\n/g, '\n      ');

let html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8').replace(/\r\n/g, '\n');
const trocas = [
  [/(<link rel="canonical" href=")[^"]*(")/, `$1${url}/$2`],
  [/(<meta property="og:url" content=")[^"]*(")/, `$1${url}/$2`],
  [/(<meta property="og:image" content=")[^"]*(")/, `$1${url}/assets/compartilhamento.png$2`],
  [/(<meta name="twitter:image" content=")[^"]*(")/, `$1${url}/assets/compartilhamento.png$2`],
  [/(<script type="application\/ld\+json">\n\s*)[\s\S]*?(\n\s*<\/script>)/, `$1${blocoJsonLd}$2`],
];
for (const [padrao, novo] of trocas) {
  if (!padrao.test(html)) {
    console.error(`Não encontrei no index.html: ${padrao}`);
    process.exit(1);
  }
  html = html.replace(padrao, novo);
}
escrever('index.html', html);

/* robots.txt e sitemap.xml ----------------------------------------------- */

escrever('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`);

const hoje = new Date().toISOString().slice(0, 10);
const sitemapAtual = fs.existsSync(path.join(raiz, 'sitemap.xml')) ? fs.readFileSync(path.join(raiz, 'sitemap.xml'), 'utf8') : '';
// Só muda a data quando a URL muda, para não gerar diferença a cada execução.
const lastmod = sitemapAtual.includes(`<loc>${url}/</loc>`) ? (sitemapAtual.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? hoje) : hoje;
escrever(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`,
);
