import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from 'react';
import { contatos, empresa, navegacao } from '../content/site.js';
import { useSecaoAtiva } from '../hooks/useRevelar.js';
import { IconeSeta, IconeWhatsapp } from './Icones.js';
const idsNavegacao = navegacao.map((item) => item.id);
export function Marca() {
    return (_jsxs("span", { className: "marca", children: [_jsx("img", { className: "marca__logo", src: "/assets/logo-kcm.png", alt: "", width: 488, height: 399 }), _jsx("span", { className: "marca__kcm", children: "KCM" }), _jsx("span", { className: "marca__sites", children: "SITES" }), _jsx("span", { className: "marca__ponto", "aria-hidden": "true" })] }));
}
export function Cabecalho() {
    const [fixo, setFixo] = useState(false);
    const [aberto, setAberto] = useState(false);
    const ativa = useSecaoAtiva(idsNavegacao);
    const painelRef = useRef(null);
    const botaoRef = useRef(null);
    useEffect(() => {
        const aoRolar = () => setFixo(window.scrollY > 12);
        aoRolar();
        window.addEventListener('scroll', aoRolar, { passive: true });
        return () => window.removeEventListener('scroll', aoRolar);
    }, []);
    const fechar = useCallback(() => {
        setAberto(false);
        botaoRef.current?.focus();
    }, []);
    // Escape fecha, Tab circula dentro do painel, rolagem do corpo travada.
    useEffect(() => {
        if (!aberto)
            return;
        const anterior = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const aoTeclar = (ev) => {
            if (ev.key === 'Escape') {
                ev.preventDefault();
                fechar();
                return;
            }
            if (ev.key !== 'Tab')
                return;
            const painel = painelRef.current;
            if (!painel)
                return;
            const focaveis = painel.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (!focaveis.length)
                return;
            const primeiro = focaveis[0];
            const ultimo = focaveis[focaveis.length - 1];
            const atual = document.activeElement;
            if (ev.shiftKey && (atual === primeiro || atual === botaoRef.current)) {
                ev.preventDefault();
                ultimo.focus();
            }
            else if (!ev.shiftKey && atual === ultimo) {
                ev.preventDefault();
                primeiro.focus();
            }
        };
        document.addEventListener('keydown', aoTeclar);
        const primeiroLink = painelRef.current?.querySelector('a[href]');
        primeiroLink?.focus();
        return () => {
            document.removeEventListener('keydown', aoTeclar);
            document.body.style.overflow = anterior;
        };
    }, [aberto, fechar]);
    return (_jsxs("header", { className: `cabecalho${fixo ? ' cabecalho--fixo' : ''}`, children: [_jsxs("div", { className: "container cabecalho__barra", children: [_jsx("a", { href: "#topo", "aria-label": `${empresa.nome} — início`, children: _jsx(Marca, {}) }), _jsx("nav", { className: "nav", "aria-label": "Se\u00E7\u00F5es do site", children: navegacao.map((item) => (_jsx("a", { className: "nav__link", href: `#${item.id}`, "aria-current": ativa === item.id ? 'true' : undefined, children: item.rotulo }, item.id))) }), _jsxs("div", { className: "cabecalho__acoes", children: [_jsxs("a", { className: "botao botao--primario cabecalho__cta", href: contatos.principal.whatsapp, target: "_blank", rel: "noopener noreferrer", children: [_jsx(IconeWhatsapp, { tamanho: 16 }), _jsx("span", { children: "Conversar com a KCM" })] }), _jsxs("button", { ref: botaoRef, type: "button", className: "menu-botao", "aria-expanded": aberto, "aria-controls": "menu-movel", onClick: () => (aberto ? fechar() : setAberto(true)), children: [_jsxs("span", { className: "menu-botao__icone", "aria-hidden": "true", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), aberto ? 'Fechar' : 'Menu'] })] })] }), aberto && (_jsxs("div", { className: "menu-movel", id: "menu-movel", ref: painelRef, role: "dialog", "aria-modal": "true", "aria-label": "Navega\u00E7\u00E3o do site", children: [_jsx("nav", { children: _jsx("ul", { className: "menu-movel__lista", children: navegacao.map((item, i) => (_jsx("li", { children: _jsxs("a", { className: "menu-movel__link", href: `#${item.id}`, onClick: fechar, children: [_jsx("span", { children: String(i + 1).padStart(2, '0') }), item.rotulo] }) }, item.id))) }) }), _jsxs("div", { className: "menu-movel__rodape", children: [_jsxs("a", { className: "botao botao--primario botao--bloco", href: contatos.principal.whatsapp, target: "_blank", rel: "noopener noreferrer", onClick: fechar, children: [_jsx(IconeWhatsapp, { tamanho: 16 }), _jsx("span", { children: "Conversar com a KCM" }), _jsx(IconeSeta, { tamanho: 16, className: "botao__seta" })] }), _jsxs("p", { className: "menu-movel__contato", children: [_jsx("strong", { children: contatos.principal.nome }), contatos.principal.telefoneExibicao, " \u00B7 ", contatos.email] }), _jsx("p", { className: "menu-movel__contato", children: empresa.horario })] })] }))] }));
}
//# sourceMappingURL=Cabecalho.js.map