import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { depoimentos } from '../content/site.js';
import { useRevelar } from '../hooks/useRevelar.js';
/** Depoimentos de clientes. Some quando a lista em content/site.js está vazia. */
export function Depoimentos() {
    const cabecalho = useRevelar();
    const lista = useRevelar();
    if (!depoimentos.length)
        return null;
    return (_jsx("section", { className: "secao secao--calma depoimentos", "aria-labelledby": "depoimentos-titulo", children: _jsxs("div", { className: "container", children: [_jsxs("div", { ref: cabecalho.ref, className: cabecalho.className, children: [_jsx("p", { className: "rotulo", children: "Depoimentos" }), _jsx("h2", { className: "secao__titulo", id: "depoimentos-titulo", children: "O que dizem os nossos clientes." })] }), _jsx("ul", { ref: lista.ref, className: `depoimentos__grade ${lista.className}`, children: depoimentos.map((d) => (_jsx("li", { children: _jsxs("figure", { className: "depoimento", children: [_jsx("blockquote", { className: "depoimento__texto", children: _jsx("p", { children: d.texto }) }), _jsxs("figcaption", { className: "depoimento__autor", children: [_jsx("strong", { children: d.nome }), d.empresa && _jsx("span", { children: d.empresa })] })] }) }, `${d.nome}-${d.empresa}`))) })] }) }));
}
