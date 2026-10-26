import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { projetos } from '../content/site.js';
import { useRevelar } from '../hooks/useRevelar.js';
import { IconeSeta } from './Icones.js';
function CartaoProjeto({ projeto, indice }) {
    const bloco = useRevelar('0px 0px -10% 0px');
    return (_jsxs("li", { ref: bloco.ref, className: `projeto ${bloco.className}`, style: { transitionDelay: bloco.visivel ? `${(indice % 3) * 0.08}s` : '0s' }, children: [projeto.imagem && (_jsx("div", { className: "projeto__imagem", children: _jsx("img", { src: projeto.imagem, alt: projeto.alt || `Página inicial do site ${projeto.nome}`, width: 1200, height: 750, loading: "lazy", decoding: "async" }) })), _jsxs("div", { className: "projeto__corpo", children: [_jsxs("p", { className: "projeto__meta", children: [_jsx("span", { className: "projeto__tipo", children: projeto.tipo }), _jsx("span", { children: projeto.segmento })] }), _jsx("h3", { className: "projeto__nome", children: projeto.nome }), _jsx("p", { className: "projeto__descricao", children: projeto.descricao }), projeto.link && (_jsxs("a", { className: "link-sub projeto__link", href: projeto.link, target: "_blank", rel: "noopener noreferrer", children: ["Ver projeto", _jsx("span", { className: "oculto-visual", children: ` ${projeto.nome} (abre em nova aba)` }), _jsx(IconeSeta, { tamanho: 16 })] }))] })] }));
}
/** Portfólio. Some (junto com o link do menu) quando a lista em content/site.js está vazia. */
export function Projetos() {
    const cabecalho = useRevelar();
    if (!projetos.length)
        return null;
    return (_jsx("section", { className: "secao projetos", id: "projetos", "aria-labelledby": "projetos-titulo", children: _jsxs("div", { className: "container", children: [_jsxs("div", { ref: cabecalho.ref, className: cabecalho.className, children: [_jsx("p", { className: "rotulo", children: "Projetos" }), _jsx("h2", { className: "secao__titulo", id: "projetos-titulo", children: "Sites que já colocamos no ar." }), _jsx("p", { className: "secao__intro", children: "Cada projeto parte de um desafio diferente. Veja como resolvemos alguns deles." })] }), _jsx("ul", { className: "projetos__grade", children: projetos.map((p, i) => (_jsx(CartaoProjeto, { projeto: p, indice: i }, p.nome))) })] }) }));
}
