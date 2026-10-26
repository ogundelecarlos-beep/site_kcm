import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { empresa, historia } from '../content/site.js';
import { useRevelar } from '../hooks/useRevelar.js';
export function Historia() {
    const bloco = useRevelar();
    return (_jsx("section", { className: "secao historia", "aria-labelledby": "historia-titulo", children: _jsxs("div", { ref: bloco.ref, className: `container historia__grade ${bloco.className}`, children: [_jsxs("div", { children: [_jsx("p", { className: "rotulo", children: "Quem somos" }), _jsx("h2", { className: "historia__titulo", id: "historia-titulo", children: historia.titulo })] }), _jsxs("div", { className: "historia__texto", children: [historia.paragrafos.map((p) => (_jsx("p", { children: p }, p.slice(0, 24)))), _jsx("p", { className: "historia__assinatura", children: empresa.assinatura })] })] }) }));
}
//# sourceMappingURL=Historia.js.map