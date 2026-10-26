import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const base = (tamanho) => ({
    width: tamanho,
    height: tamanho,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
});
export function IconeSeta({ tamanho = 18, className }) {
    return (_jsx("svg", { ...base(tamanho), className: className, children: _jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }) }));
}
export function IconeSetaEsquerda({ tamanho = 18, className }) {
    return (_jsx("svg", { ...base(tamanho), className: className, children: _jsx("path", { d: "M19 12H5M11 18l-6-6 6-6" }) }));
}
export function IconeCheck({ tamanho = 16, className }) {
    return (_jsx("svg", { ...base(tamanho), className: className, children: _jsx("path", { d: "M20 6 9 17l-5-5" }) }));
}
export function IconeInfo({ tamanho = 16, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("circle", { cx: "12", cy: "12", r: "9" }), _jsx("path", { d: "M12 16v-4M12 8h.01" })] }));
}
export function IconeAlerta({ tamanho = 16, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("path", { d: "M12 3.5 2.8 19.5h18.4L12 3.5Z" }), _jsx("path", { d: "M12 10v4M12 17h.01" })] }));
}
export function IconeRelogio({ tamanho = 18, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("circle", { cx: "12", cy: "12", r: "9" }), _jsx("path", { d: "M12 7v5l3.2 2" })] }));
}
export function IconeMapa({ tamanho = 16, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("path", { d: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" }), _jsx("circle", { cx: "12", cy: "10", r: "2.5" })] }));
}
export function IconeWhatsapp({ tamanho = 18, className }) {
    return (_jsx("svg", { width: tamanho, height: tamanho, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", focusable: "false", className: className, children: _jsx("path", { d: "M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.19-1.36a9.93 9.93 0 0 0 4.85 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 1.84c2.17 0 4.2.85 5.74 2.38a8.07 8.07 0 0 1 2.38 5.74c0 4.49-3.64 8.13-8.13 8.13a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.81.82-3-.19-.31a8.06 8.06 0 0 1-1.24-4.32c0-4.48 3.65-8.12 8.13-8.12Zm-3.2 4.18c-.15 0-.4.06-.6.29-.21.22-.79.77-.79 1.88s.81 2.18.92 2.33c.12.15 1.59 2.43 3.86 3.4.54.24.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.06 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.09-.21-.15-.44-.26-.23-.12-1.34-.66-1.55-.74-.21-.08-.36-.11-.51.11-.15.23-.58.74-.71.89-.13.15-.26.17-.49.06-.23-.12-.96-.36-1.84-1.13-.68-.6-1.14-1.35-1.27-1.58-.13-.23-.02-.35.1-.47.1-.1.23-.27.34-.4.11-.14.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39h-.43Z" }) }));
}
export function IconeInstagram({ tamanho = 16, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }), _jsx("circle", { cx: "12", cy: "12", r: "4" }), _jsx("circle", { cx: "17.5", cy: "6.5", r: "0.6", fill: "currentColor" })] }));
}
export function IconeEmail({ tamanho = 16, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("rect", { x: "2.75", y: "5", width: "18.5", height: "14", rx: "2.5" }), _jsx("path", { d: "m3.5 7 8.5 6 8.5-6" })] }));
}
export function IconeCopiar({ tamanho = 17, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("rect", { x: "9", y: "9", width: "11", height: "11", rx: "2.2" }), _jsx("path", { d: "M5.5 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.5" })] }));
}
export function IconeLapis({ tamanho = 15, className }) {
    return (_jsx("svg", { ...base(tamanho), className: className, children: _jsx("path", { d: "M4 20h4l10.5-10.5a2.4 2.4 0 0 0-3.4-3.4L4.6 16.6 4 20Z" }) }));
}
export function IconeMonitor({ tamanho = 15, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("rect", { x: "2.75", y: "4", width: "18.5", height: "12.5", rx: "2" }), _jsx("path", { d: "M8.5 20h7M12 16.5V20" })] }));
}
export function IconeCelular({ tamanho = 15, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("rect", { x: "7", y: "2.75", width: "10", height: "18.5", rx: "2.4" }), _jsx("path", { d: "M11 18.5h2" })] }));
}
export function IconeCamadas({ tamanho = 16, className }) {
    return (_jsxs("svg", { ...base(tamanho), className: className, children: [_jsx("path", { d: "m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" }), _jsx("path", { d: "m3.5 12.5 8.5 4.5 8.5-4.5" })] }));
}
//# sourceMappingURL=Icones.js.map