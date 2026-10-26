import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { contatos } from '../content/site.js';
import { IconeWhatsapp } from './Icones.js';
// Áreas que o botão não pode cobrir: ele some enquanto encosta em alguma delas.
const areasLivres = 'footer, #contato, .form__acoes, .resumo__acoes, .menu-movel';
const FOLGA = 12;
function encosta(caixa, el) {
    const r = el.getBoundingClientRect();
    return (r.width > 0 &&
        r.top < caixa.bottom + FOLGA &&
        r.bottom > caixa.top - FOLGA &&
        r.left < caixa.right + FOLGA &&
        r.right > caixa.left - FOLGA);
}
/**
 * WhatsApp flutuante no canto inferior direito. Em destaque no celular, discreto
 * no computador (só aparece depois da abertura).
 */
export function BotaoWhatsapp() {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);
    useEffect(() => {
        let agendado = false;
        const avaliar = () => {
            agendado = false;
            const botao = ref.current;
            if (!botao)
                return;
            const caixa = botao.getBoundingClientRect();
            const cobre = [...document.querySelectorAll(areasLivres)].some((el) => encosta(caixa, el));
            const computador = window.matchMedia('(min-width: 900px)').matches;
            const rolou = window.scrollY > (computador ? window.innerHeight * 0.8 : 120);
            setVisivel(rolou && !cobre);
        };
        const agendar = () => {
            if (agendado)
                return;
            agendado = true;
            requestAnimationFrame(avaliar);
        };
        avaliar();
        window.addEventListener('scroll', agendar, { passive: true });
        window.addEventListener('resize', agendar);
        // As etapas do briefing e o menu mudam o layout sem rolagem.
        document.addEventListener('click', agendar);
        document.addEventListener('input', agendar);
        return () => {
            window.removeEventListener('scroll', agendar);
            window.removeEventListener('resize', agendar);
            document.removeEventListener('click', agendar);
            document.removeEventListener('input', agendar);
        };
    }, []);
    return (_jsx("a", { ref: ref, className: `whatsapp-flutuante${visivel ? ' whatsapp-flutuante--visivel' : ''}`, href: contatos.principal.whatsapp, target: "_blank", rel: "noopener noreferrer", "aria-label": "Conversar no WhatsApp", "aria-hidden": visivel ? undefined : 'true', tabIndex: visivel ? undefined : -1, children: _jsx(IconeWhatsapp, { tamanho: 28 }) }));
}
