import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useState } from 'react';
import { contatos, perguntas } from '../content/site.js';
import { useRevelar } from '../hooks/useRevelar.js';
import { IconeSeta } from './Icones.js';
export function Perguntas() {
    const [aberta, setAberta] = useState(0);
    const uid = useId().replace(/:/g, '');
    const cabecalho = useRevelar();
    const lista = useRevelar();
    return (_jsx("section", { className: "secao secao--calma", id: "perguntas", "aria-labelledby": "perguntas-titulo", children: _jsxs("div", { className: "container perguntas__grade", children: [_jsxs("div", { ref: cabecalho.ref, className: cabecalho.className, children: [_jsx("p", { className: "rotulo", children: "Perguntas frequentes" }), _jsx("h2", { className: "secao__titulo", id: "perguntas-titulo", children: "O que costumam perguntar antes de come\u00E7ar." }), _jsx("p", { className: "secao__intro", children: "Se a sua d\u00FAvida n\u00E3o estiver aqui, mande no WhatsApp \u2014 respondemos todos os dias, das 06h \u00E0s 23h." }), _jsx("p", { style: { marginTop: '1.5rem' }, children: _jsxs("a", { className: "link-sub", href: contatos.principal.whatsapp, target: "_blank", rel: "noopener noreferrer", children: ["Tirar dúvida no WhatsApp", _jsx(IconeSeta, { tamanho: 16 })] }) })] }), _jsx("div", { ref: lista.ref, className: `acordeao ${lista.className}`, children: perguntas.map((p, i) => {
                        const estaAberta = aberta === i;
                        return (_jsxs("div", { className: "acordeao__item", children: [_jsx("h3", { style: { margin: 0 }, children: _jsxs("button", { type: "button", className: "acordeao__botao", "aria-expanded": estaAberta, "aria-controls": `${uid}-painel-${i}`, id: `${uid}-botao-${i}`, onClick: () => setAberta(estaAberta ? null : i), children: [_jsx("span", { children: p.pergunta }), _jsx("span", { className: "acordeao__icone", "aria-hidden": "true" })] }) }), _jsx("div", { className: "acordeao__painel", id: `${uid}-painel-${i}`, role: "region", "aria-labelledby": `${uid}-botao-${i}`, "data-aberto": estaAberta ? 'true' : 'false', children: _jsx("div", { children: _jsx("p", { className: "acordeao__resposta", children: p.resposta }) }) })] }, p.pergunta));
                    }) })] }) }));
}
//# sourceMappingURL=Perguntas.js.map