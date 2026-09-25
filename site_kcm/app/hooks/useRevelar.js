import { useEffect, useRef, useState } from 'react';
/** Detecta a preferência por movimento reduzido do sistema. */
export function useMovimentoReduzido() {
    const [reduzido, setReduzido] = useState(() => {
        if (typeof window === 'undefined' || !window.matchMedia)
            return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });
    useEffect(() => {
        if (!window.matchMedia)
            return;
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const ouvir = (ev) => setReduzido(ev.matches);
        mq.addEventListener('change', ouvir);
        return () => mq.removeEventListener('change', ouvir);
    }, []);
    return reduzido;
}
/**
 * Revela um elemento quando ele entra na viewport.
 * Sem IntersectionObserver ou com movimento reduzido, o conteúdo já nasce visível.
 */
export function useRevelar(margem = '0px 0px -12% 0px') {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);
    useEffect(() => {
        const alvo = ref.current;
        if (!alvo)
            return;
        if (typeof IntersectionObserver === 'undefined') {
            setVisivel(true);
            return;
        }
        let ativo = true;
        const revelar = () => {
            if (!ativo)
                return;
            ativo = false;
            observador.disconnect();
            window.removeEventListener('scroll', aoRolar);
            setVisivel(true);
        };
        const observador = new IntersectionObserver((entradas) => {
            for (const entrada of entradas) {
                if (entrada.isIntersecting)
                    revelar();
            }
        }, { rootMargin: margem, threshold: 0.08 });
        // Rede de segurança: rolagem muito rápida (inércia no celular) pode fazer o
        // observador não disparar. Este teste garante que nada fique invisível.
        let agendado = false;
        const aoRolar = () => {
            if (agendado || !ativo)
                return;
            agendado = true;
            requestAnimationFrame(() => {
                agendado = false;
                if (!ativo || !ref.current)
                    return;
                const caixa = ref.current.getBoundingClientRect();
                if (caixa.top < window.innerHeight * 0.96 && caixa.bottom > 0)
                    revelar();
            });
        };
        observador.observe(alvo);
        window.addEventListener('scroll', aoRolar, { passive: true });
        return () => {
            ativo = false;
            observador.disconnect();
            window.removeEventListener('scroll', aoRolar);
        };
    }, [margem]);
    return { ref, visivel, className: visivel ? 'revelar e-visivel' : 'revelar' };
}
/** Marca a seção visível na navegação do cabeçalho. */
export function useSecaoAtiva(ids) {
    const [ativa, setAtiva] = useState(null);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined')
            return;
        const secoes = ids
            .map((id) => document.getElementById(id))
            .filter((el) => el !== null);
        if (!secoes.length)
            return;
        const observador = new IntersectionObserver((entradas) => {
            const visiveis = entradas
                .filter((e) => e.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            if (visiveis[0])
                setAtiva(visiveis[0].target.id);
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
        secoes.forEach((s) => observador.observe(s));
        return () => observador.disconnect();
    }, [ids]);
    return ativa;
}
//# sourceMappingURL=useRevelar.js.map