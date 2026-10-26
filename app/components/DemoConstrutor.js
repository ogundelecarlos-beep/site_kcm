import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { useMovimentoReduzido } from '../hooks/useRevelar.js';
import { IconeCamadas, IconeCelular, IconeMonitor } from './Icones.js';
const layouts = [
    {
        id: 'institucional',
        rotulo: 'Institucional',
        endereco: 'seunegocio.com.br',
        blocos: [
            { id: 'nav', tipo: 'nav', desk: '1 / -1', cel: '1 / -1', alturaDesk: 22, alturaCel: 22 },
            { id: 'titulo', tipo: 'titulo', desk: '1 / 4', cel: '1 / -1', alturaDesk: 96, alturaCel: 78 },
            { id: 'midia', tipo: 'midia', desk: '4 / -1', cel: '1 / -1', alturaDesk: 96, alturaCel: 92 },
            { id: 'c1', tipo: 'cartao', desk: '1 / 3', cel: '1 / 2', alturaDesk: 70, alturaCel: 62 },
            { id: 'c2', tipo: 'cartao', desk: '3 / 5', cel: '2 / 3', alturaDesk: 70, alturaCel: 62 },
            { id: 'c3', tipo: 'cartao', desk: '5 / -1', cel: '1 / -1', alturaDesk: 70, alturaCel: 62 },
            { id: 'texto', tipo: 'texto', desk: '1 / 5', cel: '1 / -1', alturaDesk: 54, alturaCel: 54 },
            { id: 'cta', tipo: 'cta', desk: '5 / -1', cel: '1 / -1', alturaDesk: 28, alturaCel: 28 },
            { id: 'rodape', tipo: 'rodape', desk: '1 / -1', cel: '1 / -1', alturaDesk: 18, alturaCel: 18 },
        ],
    },
    {
        id: 'catalogo',
        rotulo: 'Catálogo',
        endereco: 'seunegocio.com.br/catalogo',
        blocos: [
            { id: 'nav', tipo: 'nav', desk: '1 / -1', cel: '1 / -1', alturaDesk: 22, alturaCel: 22 },
            { id: 'titulo', tipo: 'titulo', desk: '1 / -1', cel: '1 / -1', alturaDesk: 56, alturaCel: 56 },
            { id: 'p1', tipo: 'cartao', desk: '1 / 3', cel: '1 / 2', alturaDesk: 74, alturaCel: 66 },
            { id: 'p2', tipo: 'cartao', desk: '3 / 5', cel: '2 / 3', alturaDesk: 74, alturaCel: 66 },
            { id: 'p3', tipo: 'cartao', desk: '5 / -1', cel: '1 / 2', alturaDesk: 74, alturaCel: 66 },
            { id: 'p4', tipo: 'cartao', desk: '1 / 3', cel: '2 / 3', alturaDesk: 74, alturaCel: 66 },
            { id: 'p5', tipo: 'cartao', desk: '3 / 5', cel: '1 / 2', alturaDesk: 74, alturaCel: 66 },
            { id: 'p6', tipo: 'cartao', desk: '5 / -1', cel: '2 / 3', alturaDesk: 74, alturaCel: 66 },
            { id: 'cta', tipo: 'cta', desk: '1 / -1', cel: '1 / -1', alturaDesk: 28, alturaCel: 28 },
            { id: 'rodape', tipo: 'rodape', desk: '1 / -1', cel: '1 / -1', alturaDesk: 18, alturaCel: 18 },
        ],
    },
    {
        id: 'campanha',
        rotulo: 'Campanha',
        endereco: 'seunegocio.com.br/campanha',
        blocos: [
            { id: 'nav', tipo: 'nav', desk: '1 / -1', cel: '1 / -1', alturaDesk: 22, alturaCel: 22 },
            { id: 'midia', tipo: 'midia', desk: '1 / 4', cel: '1 / -1', alturaDesk: 164, alturaCel: 110 },
            { id: 'titulo', tipo: 'titulo', desk: '4 / -1', cel: '1 / -1', alturaDesk: 118, alturaCel: 86 },
            { id: 'cta', tipo: 'cta', desk: '4 / -1', cel: '1 / -1', alturaDesk: 30, alturaCel: 30 },
            { id: 'texto', tipo: 'texto', desk: '1 / -1', cel: '1 / -1', alturaDesk: 52, alturaCel: 58 },
            { id: 'rodape', tipo: 'rodape', desk: '1 / -1', cel: '1 / -1', alturaDesk: 18, alturaCel: 18 },
        ],
    },
];
function ConteudoBloco({ tipo }) {
    switch (tipo) {
        case 'nav':
            return (_jsxs(_Fragment, { children: [_jsx("span", { className: "bloco__marca" }), _jsxs("span", { className: "bloco__itens", children: [_jsx("i", {}), _jsx("i", {}), _jsx("i", {})] })] }));
        case 'titulo':
            return (_jsxs(_Fragment, { children: [_jsx("span", { className: "bloco__linha bloco__linha--g bloco__linha--grad bloco__linha--media" }), _jsx("span", { className: "bloco__linha bloco__linha--g" }), _jsx("span", { className: "bloco__linha bloco__linha--fina" }), _jsx("span", { className: "bloco__linha bloco__linha--fina bloco__linha--curta" })] }));
        case 'cartao':
            return (_jsxs(_Fragment, { children: [_jsx("i", {}), _jsx("span", { className: "bloco__linha bloco__linha--fina bloco__linha--media" }), _jsx("span", { className: "bloco__linha bloco__linha--fina bloco__linha--curta" })] }));
        case 'cta':
            return _jsx("i", {});
        case 'texto':
            return (_jsxs(_Fragment, { children: [_jsx("span", { className: "bloco__linha bloco__linha--fina" }), _jsx("span", { className: "bloco__linha bloco__linha--fina bloco__linha--media" }), _jsx("span", { className: "bloco__linha bloco__linha--fina bloco__linha--curta" })] }));
        default:
            return null;
    }
}
export function DemoConstrutor() {
    const [layoutIdx, setLayoutIdx] = useState(0);
    const [celular, setCelular] = useState(false);
    const reduzido = useMovimentoReduzido();
    const refsChips = useRef([]);
    // Muda a cada troca para reiniciar a animação de montagem dos blocos.
    const [ciclo, setCiclo] = useState(0);
    useEffect(() => {
        setCiclo((c) => c + 1);
    }, [layoutIdx, celular]);
    const layout = layouts[layoutIdx];
    const aoTeclarChip = (ev, indice) => {
        let proximo = null;
        if (ev.key === 'ArrowRight')
            proximo = (indice + 1) % layouts.length;
        if (ev.key === 'ArrowLeft')
            proximo = (indice - 1 + layouts.length) % layouts.length;
        if (ev.key === 'Home')
            proximo = 0;
        if (ev.key === 'End')
            proximo = layouts.length - 1;
        if (proximo === null)
            return;
        ev.preventDefault();
        setLayoutIdx(proximo);
        refsChips.current[proximo]?.focus();
    };
    return (_jsxs("div", { className: "demo", children: [_jsxs("div", { className: "demo__controles", children: [_jsx("div", { className: "demo__chips", role: "tablist", "aria-label": "Modelo de layout", children: layouts.map((l, i) => (_jsx("button", { ref: (el) => {
                                refsChips.current[i] = el;
                            }, type: "button", role: "tab", id: `demo-chip-${l.id}`, className: "demo__chip", "aria-selected": i === layoutIdx, "aria-controls": "demo-palco", tabIndex: i === layoutIdx ? 0 : -1, onClick: () => setLayoutIdx(i), onKeyDown: (ev) => aoTeclarChip(ev, i), children: l.rotulo }, l.id))) }), _jsxs("div", { className: "demo__dispositivo", children: [_jsxs("button", { type: "button", className: "demo__disp-botao", "aria-pressed": !celular, onClick: () => setCelular(false), children: [_jsx(IconeMonitor, {}), _jsx("span", { children: "Desktop" })] }), _jsxs("button", { type: "button", className: "demo__disp-botao", "aria-pressed": celular, onClick: () => setCelular(true), children: [_jsx(IconeCelular, {}), _jsx("span", { children: "Celular" })] })] })] }), _jsxs("div", { className: "demo__palco", id: "demo-palco", role: "tabpanel", "aria-labelledby": `demo-chip-${layout.id}`, tabIndex: 0, children: [_jsxs("p", { className: "oculto-visual", children: ["Anima\u00E7\u00E3o de um layout sendo montado. Modelo: ", layout.rotulo, ". Tela: ", celular ? 'celular' : 'desktop', "."] }), _jsxs("div", { className: "demo__moldura", "data-dispositivo": celular ? 'celular' : 'desktop', "aria-hidden": "true", children: [_jsxs("div", { className: "demo__barra", children: [_jsxs("span", { className: "demo__pontos", children: [_jsx("i", {}), _jsx("i", {}), _jsx("i", {})] }), _jsx("span", { className: "demo__endereco", children: layout.endereco })] }), _jsx("div", { className: "demo__tela", children: layout.blocos.map((bloco, i) => (_jsx("div", { className: `bloco bloco--${bloco.tipo}`, style: {
                                        gridColumn: celular ? bloco.cel : bloco.desk,
                                        minHeight: celular ? bloco.alturaCel : bloco.alturaDesk,
                                        ['--atraso']: reduzido ? '0ms' : `${i * 55}ms`,
                                    }, children: _jsx(ConteudoBloco, { tipo: bloco.tipo }) }, bloco.id))) }, `${layout.id}-${celular}-${ciclo}`)] })] }), _jsxs("p", { className: "demo__legenda", children: [_jsx(IconeCamadas, {}), _jsx("span", { children: "Do rascunho ao layout: blocos, hierarquia e adapta\u00E7\u00E3o entre telas." })] })] }));
}
//# sourceMappingURL=DemoConstrutor.js.map