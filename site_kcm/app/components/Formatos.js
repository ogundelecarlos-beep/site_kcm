import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { beneficios, formatos } from '../content/site.js';
import { useRevelar } from '../hooks/useRevelar.js';
import { IconeAlerta, IconeCheck, IconeSeta } from './Icones.js';
export function Formatos() {
    const [ativo, setAtivo] = useState(0);
    const refs = useRef([]);
    const cabecalho = useRevelar();
    const grade = useRevelar();
    const extras = useRevelar();
    const formato = formatos[ativo];
    const aoTeclar = (ev, indice) => {
        let proximo = null;
        if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight')
            proximo = (indice + 1) % formatos.length;
        if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft')
            proximo = (indice - 1 + formatos.length) % formatos.length;
        if (ev.key === 'Home')
            proximo = 0;
        if (ev.key === 'End')
            proximo = formatos.length - 1;
        if (proximo === null)
            return;
        ev.preventDefault();
        setAtivo(proximo);
        refs.current[proximo]?.focus();
    };
    return (_jsx("section", { className: "secao", id: "o-que-criamos", "aria-labelledby": "formatos-titulo", children: _jsxs("div", { className: "container", children: [_jsxs("div", { ref: cabecalho.ref, className: `formatos__cabecalho ${cabecalho.className}`, children: [_jsxs("div", { children: [_jsx("p", { className: "rotulo", children: "O que criamos" }), _jsx("h2", { className: "secao__titulo", id: "formatos-titulo", children: "Formatos de projeto, avaliados conforme a sua necessidade." })] }), _jsx("p", { className: "secao__intro", children: "Nem todo neg\u00F3cio precisa do mesmo site. Estes s\u00E3o os formatos com que trabalhamos hoje \u2014 o que faz sentido para voc\u00EA sai da primeira conversa, n\u00E3o de um pacote pronto." })] }), _jsxs("div", { ref: grade.ref, className: `formatos__grade ${grade.className}`, children: [_jsx("div", { className: "formatos__lista", role: "tablist", "aria-label": "Formatos de projeto", children: formatos.map((f, i) => (_jsxs("button", { ref: (el) => {
                                    refs.current[i] = el;
                                }, type: "button", role: "tab", id: `formato-aba-${f.id}`, className: "formatos__item", "aria-selected": i === ativo, "aria-controls": "formato-painel", tabIndex: i === ativo ? 0 : -1, onClick: () => setAtivo(i), onKeyDown: (ev) => aoTeclar(ev, i), children: [_jsx("span", { className: "formatos__numero", children: String(i + 1).padStart(2, '0') }), _jsx("span", { className: "formatos__nome", children: f.titulo }), _jsx(IconeSeta, { tamanho: 17, className: "formatos__seta" })] }, f.id))) }), _jsx("div", { className: "formatos__painel", id: "formato-painel", role: "tabpanel", "aria-labelledby": `formato-aba-${formato.id}`, tabIndex: 0, children: _jsxs("div", { className: "formatos__painel-conteudo", children: [_jsx("h3", { children: formato.titulo }), _jsx("p", { className: "formatos__resumo", children: formato.resumo }), _jsx("ul", { className: "formatos__itens", children: formato.itens.map((item) => (_jsxs("li", { children: [_jsx(IconeCheck, {}), _jsx("span", { children: item })] }, item))) }), formato.nota && (_jsxs("p", { className: "formatos__nota", children: [_jsx(IconeAlerta, {}), _jsx("span", { children: formato.nota })] }))] }, formato.id) })] }), _jsx("div", { ref: extras.ref, className: `beneficios ${extras.className}`, children: beneficios.map((b, i) => (_jsxs("div", { className: "beneficio", children: [_jsx("span", { className: "beneficio__indice", children: String(i + 1).padStart(2, '0') }), _jsx("h4", { children: b.titulo }), _jsx("p", { children: b.texto })] }, b.titulo))) })] }) }));
}
//# sourceMappingURL=Formatos.js.map