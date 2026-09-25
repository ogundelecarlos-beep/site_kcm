import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { compromissos, prazo } from '../content/site.js';
import { useRevelar } from '../hooks/useRevelar.js';
import { IconeCheck, IconeRelogio } from './Icones.js';
export function Responsabilidade() {
    const cabecalho = useRevelar();
    const lista = useRevelar();
    const caixa = useRevelar();
    return (_jsx("section", { className: "secao", id: "responsabilidade", "aria-labelledby": "responsabilidade-titulo", children: _jsxs("div", { className: "container", children: [_jsxs("div", { ref: cabecalho.ref, className: cabecalho.className, children: [_jsx("p", { className: "rotulo", children: "Responsabilidade e clareza" }), _jsx("h2", { className: "secao__titulo", id: "responsabilidade-titulo", children: "O que prometemos \u00E9 o que conseguimos sustentar." }), _jsx("p", { className: "secao__intro", children: "Preferimos listar poucos compromissos e cumprir todos. O que n\u00E3o est\u00E1 aqui n\u00E3o \u00E9 garantia nossa \u2014 e se voc\u00EA precisar de algo al\u00E9m, isso entra no escopo com combinado pr\u00F3prio." })] }), _jsx("dl", { ref: lista.ref, className: `compromissos ${lista.className}`, children: compromissos.map((c) => (_jsxs("div", { className: "compromisso", children: [_jsxs("dt", { className: "compromisso__titulo", children: [_jsx(IconeCheck, {}), _jsx("span", { children: c.titulo })] }), _jsx("dd", { className: "compromisso__texto", children: c.texto })] }, c.titulo))) }), _jsxs("div", { ref: caixa.ref, className: `prazo ${caixa.className}`, children: [_jsxs("h3", { children: [_jsx(IconeRelogio, {}), prazo.titulo] }), _jsx("p", { children: prazo.texto })] })] }) }));
}
//# sourceMappingURL=Responsabilidade.js.map