import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { processo } from '../content/site.js';
import { useRevelar } from '../hooks/useRevelar.js';
import { IconeEmail } from './Icones.js';
function Etapa({ numero, titulo, texto }) {
    const bloco = useRevelar('0px 0px -18% 0px');
    return (_jsxs("li", { ref: bloco.ref, className: `etapa ${bloco.className}`, children: [_jsxs("div", { className: "etapa__trilho", "aria-hidden": "true", children: [_jsx("span", { className: "etapa__ponto", children: numero }), _jsx("span", { className: "etapa__linha" })] }), _jsxs("div", { className: "etapa__corpo", children: [_jsx("h3", { className: "etapa__titulo", children: titulo }), _jsx("p", { className: "etapa__texto", children: texto })] })] }));
}
export function Processo() {
    const cabecalho = useRevelar();
    return (_jsxs("section", { className: "secao processo", id: "processo", "aria-labelledby": "processo-titulo", children: [_jsx("span", { className: "brilho processo__brilho", "aria-hidden": "true" }), _jsxs("div", { className: "container processo__conteudo", children: [_jsxs("div", { ref: cabecalho.ref, className: `processo__cabecalho ${cabecalho.className}`, children: [_jsx("p", { className: "rotulo", children: "Como trabalhamos" }), _jsx("h2", { className: "secao__titulo", id: "processo-titulo", children: "Cinco etapas, sem surpresa no meio do caminho." }), _jsx("p", { className: "secao__intro", children: "O processo \u00E9 o mesmo para todo projeto. O que muda \u00E9 o tamanho de cada etapa \u2014 definido no alinhamento, antes de qualquer linha de c\u00F3digo." })] }), _jsxs("div", { className: "processo__coluna", children: [_jsx("ol", { className: "processo__etapas", children: processo.map((e) => (_jsx(Etapa, { numero: e.numero, titulo: e.titulo, texto: e.texto }, e.numero))) }), _jsxs("p", { className: "processo__aviso", children: [_jsx(IconeEmail, {}), _jsx("span", { children: "O resumo do trabalho enviado por e-mail depois do alinhamento \u00E9 uma a\u00E7\u00E3o da equipe, feita por uma pessoa. Nada nesta p\u00E1gina aprova proposta, gera contrato ou confirma valores automaticamente." })] })] })] })] }));
}
//# sourceMappingURL=Processo.js.map