import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useId, useMemo, useRef, useState } from 'react';
import { contatos } from '../content/site.js';
import { useRevelar } from '../hooks/useRevelar.js';
import { IconeAlerta, IconeCheck, IconeCopiar, IconeInfo, IconeLapis, IconeSeta, IconeSetaEsquerda, IconeWhatsapp, } from './Icones.js';
const dadosIniciais = {
    nome: '',
    empresa: '',
    segmento: '',
    tipoSite: '',
    objetivo: '',
    funcionalidades: [],
    detalheCatalogo: '',
    detalheAgendamento: '',
    detalheArea: '',
    possuiSite: '',
    enderecoAtual: '',
    possuiDominio: '',
    prazoDesejado: '',
    descricao: '',
    email: '',
    whatsapp: '',
};
const tiposDeSite = [
    'Site institucional',
    'Página de apresentação ou campanha',
    'Catálogo ou vitrine digital',
    'Projeto com funcionalidades sob medida',
    'Ainda não sei — quero avaliar com vocês',
];
const objetivos = [
    'Receber contatos de novos clientes',
    'Apresentar a empresa de forma profissional',
    'Mostrar produtos ou serviços em um catálogo',
    'Divulgar uma campanha, data ou lançamento',
    'Organizar informações que hoje repito no atendimento',
    'Outro — explico na descrição',
];
const funcionalidades = [
    { id: 'catalogo', rotulo: 'Catálogo de produtos ou serviços', ajuda: 'Itens organizados por categoria' },
    { id: 'whatsapp', rotulo: 'Botão de WhatsApp', ajuda: 'Contato direto a partir do site' },
    { id: 'formulario', rotulo: 'Formulário de contato', ajuda: 'Mensagens recebidas pela equipe' },
    { id: 'agendamento', rotulo: 'Pedido de agendamento', ajuda: 'Solicitação de horário, sem reserva automática' },
    { id: 'area', rotulo: 'Área restrita', ajuda: 'Acesso com login para clientes ou equipe' },
    { id: 'blog', rotulo: 'Blog ou área de conteúdo', ajuda: 'Publicações atualizadas ao longo do tempo' },
    { id: 'mapa', rotulo: 'Mapa e localização', ajuda: 'Endereço do negócio no site' },
    { id: 'multilingue', rotulo: 'Mais de um idioma', ajuda: 'Versões do site em outros idiomas' },
];
const prazos = [
    'O quanto antes',
    'Nas próximas duas semanas',
    'Neste mês',
    'Nos próximos dois ou três meses',
    'Sem data definida',
];
const simNaoNaoSei = [
    { valor: 'sim', rotulo: 'Sim' },
    { valor: 'nao', rotulo: 'Não' },
    { valor: 'nao-sei', rotulo: 'Não sei' },
];
const etapas = [
    { id: 'voce', titulo: 'Sobre você', curto: 'Você' },
    { id: 'projeto', titulo: 'O projeto', curto: 'Projeto' },
    { id: 'funcionalidades', titulo: 'Funcionalidades', curto: 'Funções' },
    { id: 'situacao', titulo: 'Situação atual', curto: 'Situação' },
    { id: 'contato', titulo: 'Detalhes e contato', curto: 'Contato' },
    { id: 'resumo', titulo: 'Resumo', curto: 'Resumo' },
];
/* -------------------------------------------------------------------------- */
/* Validação                                                                   */
/* -------------------------------------------------------------------------- */
const soDigitos = (v) => v.replace(/\D/g, '');
function formatarTelefone(valor) {
    const d = soDigitos(valor).slice(0, 11);
    if (d.length <= 2)
        return d;
    if (d.length <= 6)
        return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10)
        return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function validarEtapa(indice, d) {
    const e = {};
    if (indice === 0) {
        if (d.nome.trim().length < 2)
            e.nome = 'Informe o seu nome.';
        if (d.empresa.trim().length < 2)
            e.empresa = 'Informe o nome da empresa.';
        if (d.segmento.trim().length < 2)
            e.segmento = 'Informe o segmento do negócio.';
    }
    if (indice === 1) {
        if (!d.tipoSite)
            e.tipoSite = 'Escolha um tipo de site.';
        if (!d.objetivo)
            e.objetivo = 'Escolha o objetivo principal.';
    }
    if (indice === 3) {
        if (!d.possuiSite)
            e.possuiSite = 'Escolha uma opção.';
        if (!d.possuiDominio)
            e.possuiDominio = 'Escolha uma opção.';
        if (!d.prazoDesejado)
            e.prazoDesejado = 'Escolha um prazo desejado.';
    }
    if (indice === 4) {
        const email = d.email.trim();
        if (!email)
            e.email = 'Informe um e-mail para contato.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
            e.email = 'Esse e-mail não parece válido.';
        const tel = soDigitos(d.whatsapp);
        if (!tel)
            e.whatsapp = 'Informe um WhatsApp com DDD.';
        else if (tel.length < 10 || tel.length > 11)
            e.whatsapp = 'Use DDD + número (10 ou 11 dígitos).';
    }
    return e;
}
/* -------------------------------------------------------------------------- */
/* Resumo                                                                      */
/* -------------------------------------------------------------------------- */
function montarResumo(d) {
    const linhas = [];
    const add = (r, v) => {
        if (v && v.trim())
            linhas.push(`${r}: ${v.trim()}`);
    };
    linhas.push('BRIEFING — KCM SITES');
    linhas.push('');
    add('Nome', d.nome);
    add('Empresa', d.empresa);
    add('Segmento', d.segmento);
    linhas.push('');
    add('Tipo de site', d.tipoSite);
    add('Objetivo principal', d.objetivo);
    if (d.funcionalidades.length) {
        linhas.push('');
        linhas.push('Funcionalidades desejadas:');
        for (const id of d.funcionalidades) {
            const f = funcionalidades.find((x) => x.id === id);
            if (f)
                linhas.push(`- ${f.rotulo}`);
        }
        if (d.detalheCatalogo.trim())
            linhas.push(`  Catálogo: ${d.detalheCatalogo.trim()}`);
        if (d.detalheAgendamento.trim())
            linhas.push(`  Agendamento: ${d.detalheAgendamento.trim()}`);
        if (d.detalheArea.trim())
            linhas.push(`  Área restrita: ${d.detalheArea.trim()}`);
    }
    linhas.push('');
    const rotuloSimNao = (v) => simNaoNaoSei.find((o) => o.valor === v)?.rotulo ?? v;
    add('Já possui site', rotuloSimNao(d.possuiSite));
    add('Endereço atual', d.enderecoAtual);
    add('Já possui domínio', rotuloSimNao(d.possuiDominio));
    add('Prazo desejado', d.prazoDesejado);
    if (d.descricao.trim()) {
        linhas.push('');
        linhas.push('Descrição adicional:');
        linhas.push(d.descricao.trim());
    }
    linhas.push('');
    add('E-mail', d.email);
    add('WhatsApp', d.whatsapp);
    return linhas.join('\n');
}
/* -------------------------------------------------------------------------- */
/* Campos                                                                      */
/* -------------------------------------------------------------------------- */
function Campo({ id, rotulo, erro, dica, opcional, largo, children, }) {
    return (_jsxs("div", { className: `campo${largo ? ' campo--largo' : ''}`, "data-invalido": erro ? 'true' : undefined, children: [_jsxs("label", { className: "campo__rotulo", htmlFor: id, children: [rotulo, opcional && _jsx("span", { className: "campo__opcional", children: "(opcional)" })] }), children, dica && !erro && (_jsx("p", { className: "campo__dica", id: `${id}-dica`, children: dica })), erro && (_jsxs("p", { className: "campo__erro", id: `${id}-erro`, children: [_jsx(IconeAlerta, { tamanho: 14 }), erro] }))] }));
}
function GrupoRadio({ nome, rotulo, opcoes, valor, erro, aoMudar, }) {
    return (_jsxs("fieldset", { className: "campo campo--largo", "data-invalido": erro ? 'true' : undefined, "aria-describedby": erro ? `${nome}-erro` : undefined, style: { border: 0, margin: 0, padding: 0 }, children: [_jsx("legend", { className: "campo__rotulo", style: { padding: 0, marginBottom: '0.45rem' }, children: rotulo }), _jsx("div", { className: "opcoes opcoes--duplo", children: opcoes.map((o) => (_jsxs("label", { className: "opcao", children: [_jsx("input", { type: "radio", name: nome, value: o.valor, checked: valor === o.valor, onChange: () => aoMudar(o.valor) }), _jsx("span", { className: "opcao__texto", children: o.rotulo })] }, o.valor))) }), erro && (_jsxs("p", { className: "campo__erro", id: `${nome}-erro`, style: { marginTop: '0.45rem' }, children: [_jsx(IconeAlerta, { tamanho: 14 }), erro] }))] }));
}
/* -------------------------------------------------------------------------- */
/* Componente principal                                                        */
/* -------------------------------------------------------------------------- */
export function Briefing() {
    const [dados, setDados] = useState(dadosIniciais);
    const [etapa, setEtapa] = useState(0);
    const [erros, setErros] = useState({});
    const [tentou, setTentou] = useState(false);
    const [estadoCopia, setEstadoCopia] = useState('');
    const formRef = useRef(null);
    const tituloRef = useRef(null);
    const uid = useId().replace(/:/g, '');
    const aside = useRevelar();
    const cartao = useRevelar();
    const campo = (n) => `${uid}-${n}`;
    const atualizar = useCallback((chave, valor) => {
        setDados((d) => ({ ...d, [chave]: valor }));
        setErros((e) => ({ ...e, [chave]: undefined }));
    }, []);
    const alternarFuncionalidade = (id) => {
        setDados((d) => ({
            ...d,
            funcionalidades: d.funcionalidades.includes(id)
                ? d.funcionalidades.filter((f) => f !== id)
                : [...d.funcionalidades, id],
        }));
    };
    const resumo = useMemo(() => montarResumo(dados), [dados]);
    const ultima = etapas.length - 1;
    const progresso = Math.round((etapa / ultima) * 100);
    const irPara = (proximo) => {
        setEtapa(proximo);
        setTentou(false);
        setEstadoCopia('');
        requestAnimationFrame(() => tituloRef.current?.focus());
    };
    const avancar = () => {
        const novos = validarEtapa(etapa, dados);
        setErros(novos);
        setTentou(true);
        if (Object.keys(novos).length) {
            // O atributo data-invalido só existe depois do próximo render.
            requestAnimationFrame(() => {
                const primeiro = formRef.current?.querySelector('[data-invalido="true"] input, [data-invalido="true"] select, [data-invalido="true"] textarea');
                primeiro?.focus();
            });
            return;
        }
        irPara(Math.min(etapa + 1, ultima));
    };
    const voltar = () => irPara(Math.max(etapa - 1, 0));
    const copiar = async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(resumo);
            }
            else {
                const area = document.createElement('textarea');
                area.value = resumo;
                area.setAttribute('readonly', '');
                area.style.position = 'fixed';
                area.style.opacity = '0';
                document.body.appendChild(area);
                area.select();
                document.execCommand('copy');
                document.body.removeChild(area);
            }
            setEstadoCopia('Resumo copiado para a área de transferência.');
        }
        catch {
            setEstadoCopia('Não foi possível copiar automaticamente. Selecione o texto acima e copie.');
        }
    };
    const abrirWhatsapp = () => {
        const url = `${contatos.principal.whatsapp}?text=${encodeURIComponent(resumo)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        setEstadoCopia('O WhatsApp foi aberto com a mensagem preenchida. Toque em enviar para concluir — nada é enviado automaticamente.');
    };
    const temFuncionalidade = (id) => dados.funcionalidades.includes(id);
    return (_jsxs("section", { className: "secao briefing", id: "briefing", "aria-labelledby": "briefing-titulo", children: [_jsx("span", { className: "brilho briefing__brilho", "aria-hidden": "true" }), _jsxs("div", { className: "container briefing__grade", children: [_jsxs("div", { ref: aside.ref, className: aside.className, children: [_jsx("p", { className: "rotulo", children: "Briefing inteligente" }), _jsx("h2", { className: "secao__titulo", id: "briefing-titulo", children: "Conte o essencial. O resto a gente conversa." }), _jsx("p", { className: "secao__intro", children: "S\u00E3o poucas perguntas, em etapas. Ao final voc\u00EA recebe um resumo do que escreveu, pode revisar, copiar e levar direto para a conversa com o Miguel." }), _jsxs("div", { className: "briefing__aside-nota", children: [_jsx("strong", { children: "Como os seus dados s\u00E3o usados" }), "Pedimos e-mail e WhatsApp apenas para responder ao seu contato. Nada \u00E9 enviado nem gravado por esta p\u00E1gina: as respostas ficam na mem\u00F3ria do seu navegador enquanto voc\u00EA preenche e somem ao fechar a aba. O envio acontece quando voc\u00EA conclui a mensagem no WhatsApp ou nos escreve por e-mail."] }), _jsxs("div", { className: "briefing__aside-nota", children: [_jsx("strong", { children: "N\u00E3o pedimos" }), "CPF, documentos, dados banc\u00E1rios ou qualquer informa\u00E7\u00E3o sens\u00EDvel. Se algum formul\u00E1rio pedir isso em nome da KCM SITES, n\u00E3o \u00E9 nosso."] })] }), _jsx("div", { ref: cartao.ref, className: cartao.className, children: _jsxs("form", { className: "form", ref: formRef, noValidate: true, onSubmit: (ev) => {
                                ev.preventDefault();
                                if (etapa < ultima)
                                    avancar();
                            }, children: [_jsxs("div", { className: "progresso", children: [_jsxs("div", { className: "progresso__topo", children: [_jsxs("span", { className: "progresso__etapa", children: ["Etapa ", etapa + 1, " de ", etapas.length] }), _jsx("span", { className: "progresso__titulo", children: etapas[etapa].titulo })] }), _jsx("div", { className: "progresso__trilho", role: "progressbar", "aria-valuenow": progresso, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Progresso do briefing", children: _jsx("span", { className: "progresso__barra", style: { width: `${Math.max(progresso, 4)}%` } }) }), _jsx("ol", { className: "progresso__pontos", children: etapas.map((e, i) => (_jsx("li", { className: "progresso__ponto", "data-estado": i === etapa ? 'atual' : i < etapa ? 'feita' : 'futura', children: e.curto }, e.id))) })] }), _jsxs("div", { className: "etapa-form", children: [_jsx("h3", { className: "etapa-form__titulo", tabIndex: -1, ref: tituloRef, children: etapas[etapa].titulo }), etapa === 0 && (_jsxs(_Fragment, { children: [_jsx("p", { className: "etapa-form__texto", children: "Para come\u00E7ar, o b\u00E1sico sobre voc\u00EA e o neg\u00F3cio." }), _jsxs("div", { className: "campos campos--duplo", children: [_jsx(Campo, { id: campo('nome'), rotulo: "Seu nome", erro: erros.nome, children: _jsx("input", { id: campo('nome'), type: "text", autoComplete: "name", value: dados.nome, "aria-invalid": erros.nome ? true : undefined, "aria-describedby": erros.nome ? `${campo('nome')}-erro` : undefined, onChange: (e) => atualizar('nome', e.target.value) }) }), _jsx(Campo, { id: campo('empresa'), rotulo: "Nome da empresa", erro: erros.empresa, children: _jsx("input", { id: campo('empresa'), type: "text", autoComplete: "organization", value: dados.empresa, "aria-invalid": erros.empresa ? true : undefined, "aria-describedby": erros.empresa ? `${campo('empresa')}-erro` : undefined, onChange: (e) => atualizar('empresa', e.target.value) }) }), _jsx(Campo, { id: campo('segmento'), rotulo: "Segmento", largo: true, erro: erros.segmento, dica: "Ex.: padaria, cl\u00EDnica odontol\u00F3gica, loja de materiais, est\u00FAdio de tatuagem.", children: _jsx("input", { id: campo('segmento'), type: "text", value: dados.segmento, "aria-invalid": erros.segmento ? true : undefined, "aria-describedby": erros.segmento ? `${campo('segmento')}-erro` : `${campo('segmento')}-dica`, onChange: (e) => atualizar('segmento', e.target.value) }) })] })] })), etapa === 1 && (_jsxs(_Fragment, { children: [_jsx("p", { className: "etapa-form__texto", children: "Se ainda n\u00E3o souber, escolha a op\u00E7\u00E3o mais pr\u00F3xima \u2014 ajustamos na conversa." }), _jsxs("div", { className: "campos", children: [_jsx(Campo, { id: campo('tipo'), rotulo: "Tipo de site desejado", erro: erros.tipoSite, children: _jsxs("select", { id: campo('tipo'), value: dados.tipoSite, "aria-invalid": erros.tipoSite ? true : undefined, "aria-describedby": erros.tipoSite ? `${campo('tipo')}-erro` : undefined, onChange: (e) => atualizar('tipoSite', e.target.value), children: [_jsx("option", { value: "", children: "Selecione\u2026" }), tiposDeSite.map((t) => (_jsx("option", { value: t, children: t }, t)))] }) }), _jsx(Campo, { id: campo('objetivo'), rotulo: "Objetivo principal do site", erro: erros.objetivo, children: _jsxs("select", { id: campo('objetivo'), value: dados.objetivo, "aria-invalid": erros.objetivo ? true : undefined, "aria-describedby": erros.objetivo ? `${campo('objetivo')}-erro` : undefined, onChange: (e) => atualizar('objetivo', e.target.value), children: [_jsx("option", { value: "", children: "Selecione\u2026" }), objetivos.map((o) => (_jsx("option", { value: o, children: o }, o)))] }) })] })] })), etapa === 2 && (_jsxs(_Fragment, { children: [_jsx("p", { className: "etapa-form__texto", children: "Marque o que faz sentido hoje. Nada aqui \u00E9 obrigat\u00F3rio e tudo pode mudar no alinhamento." }), _jsxs("fieldset", { className: "campos", style: { border: 0, margin: 0, padding: 0 }, children: [_jsx("legend", { className: "oculto-visual", children: "Funcionalidades desejadas" }), _jsx("div", { className: "opcoes opcoes--duplo", children: funcionalidades.map((f) => (_jsxs("label", { className: "opcao", children: [_jsx("input", { type: "checkbox", checked: temFuncionalidade(f.id), onChange: () => alternarFuncionalidade(f.id) }), _jsxs("span", { className: "opcao__texto", children: [f.rotulo, _jsx("small", { children: f.ajuda })] })] }, f.id))) })] }), temFuncionalidade('catalogo') && (_jsxs("div", { className: "condicional", children: [_jsx("p", { className: "condicional__rotulo", children: "Sobre o cat\u00E1logo" }), _jsx(Campo, { id: campo('cat'), rotulo: "Quantos itens, aproximadamente, e como eles se dividem?", opcional: true, children: _jsx("input", { id: campo('cat'), type: "text", placeholder: "Ex.: cerca de 60 itens em 4 categorias", value: dados.detalheCatalogo, onChange: (e) => atualizar('detalheCatalogo', e.target.value) }) })] })), temFuncionalidade('agendamento') && (_jsxs("div", { className: "condicional", children: [_jsx("p", { className: "condicional__rotulo", children: "Sobre o agendamento" }), _jsx(Campo, { id: campo('agd'), rotulo: "Como os hor\u00E1rios s\u00E3o combinados hoje?", opcional: true, dica: "Nesta etapa o site envia um pedido de hor\u00E1rio. Reserva autom\u00E1tica n\u00E3o faz parte desta vers\u00E3o.", children: _jsx("input", { id: campo('agd'), type: "text", placeholder: "Ex.: o cliente chama no WhatsApp e confirmamos manualmente", value: dados.detalheAgendamento, "aria-describedby": `${campo('agd')}-dica`, onChange: (e) => atualizar('detalheAgendamento', e.target.value) }) })] })), temFuncionalidade('area') && (_jsxs("div", { className: "condicional", children: [_jsx("p", { className: "condicional__rotulo", children: "Sobre a \u00E1rea restrita" }), _jsx(Campo, { id: campo('area'), rotulo: "Quem acessaria e o que veria l\u00E1 dentro?", opcional: true, children: _jsx("input", { id: campo('area'), type: "text", placeholder: "Ex.: alunos veem a ficha de treino e os avisos da semana", value: dados.detalheArea, onChange: (e) => atualizar('detalheArea', e.target.value) }) })] }))] })), etapa === 3 && (_jsxs(_Fragment, { children: [_jsx("p", { className: "etapa-form__texto", children: "Isso nos ajuda a saber por onde come\u00E7ar \u2014 e o que j\u00E1 existe para aproveitar." }), _jsxs("div", { className: "campos", children: [_jsx(GrupoRadio, { nome: campo('site'), rotulo: "Voc\u00EA j\u00E1 tem um site?", opcoes: [...simNaoNaoSei], valor: dados.possuiSite, erro: erros.possuiSite, aoMudar: (v) => atualizar('possuiSite', v) }), dados.possuiSite === 'sim' && (_jsx("div", { className: "condicional", children: _jsx(Campo, { id: campo('end'), rotulo: "Qual \u00E9 o endere\u00E7o atual?", opcional: true, children: _jsx("input", { id: campo('end'), type: "text", inputMode: "url", placeholder: "exemplo.com.br", value: dados.enderecoAtual, onChange: (e) => atualizar('enderecoAtual', e.target.value) }) }) })), _jsx(GrupoRadio, { nome: campo('dom'), rotulo: "Voc\u00EA j\u00E1 tem um dom\u00EDnio registrado?", opcoes: [...simNaoNaoSei], valor: dados.possuiDominio, erro: erros.possuiDominio, aoMudar: (v) => atualizar('possuiDominio', v) }), _jsx(Campo, { id: campo('prazo'), rotulo: "Prazo desejado", erro: erros.prazoDesejado, dica: "Uma refer\u00EAncia. O prazo real \u00E9 definido pela equipe conforme o escopo e os materiais.", children: _jsxs("select", { id: campo('prazo'), value: dados.prazoDesejado, "aria-invalid": erros.prazoDesejado ? true : undefined, "aria-describedby": erros.prazoDesejado ? `${campo('prazo')}-erro` : `${campo('prazo')}-dica`, onChange: (e) => atualizar('prazoDesejado', e.target.value), children: [_jsx("option", { value: "", children: "Selecione\u2026" }), prazos.map((p) => (_jsx("option", { value: p, children: p }, p)))] }) })] })] })), etapa === 4 && (_jsxs(_Fragment, { children: [_jsx("p", { className: "etapa-form__texto", children: "Pedimos apenas o necess\u00E1rio para responder: um e-mail e um WhatsApp." }), _jsxs("div", { className: "campos campos--duplo", children: [_jsx(Campo, { id: campo('desc'), rotulo: "Quer contar mais alguma coisa?", largo: true, opcional: true, dica: "Refer\u00EAncias que voc\u00EA gosta, o que n\u00E3o pode faltar, o que j\u00E1 tentou antes.", children: _jsx("textarea", { id: campo('desc'), value: dados.descricao, "aria-describedby": `${campo('desc')}-dica`, onChange: (e) => atualizar('descricao', e.target.value) }) }), _jsx(Campo, { id: campo('email'), rotulo: "E-mail", erro: erros.email, dica: !erros.email ? 'Usado para enviar o resumo do trabalho após o alinhamento.' : undefined, children: _jsx("input", { id: campo('email'), type: "email", autoComplete: "email", inputMode: "email", placeholder: "voce@empresa.com.br", value: dados.email, "aria-invalid": erros.email ? true : undefined, "aria-describedby": erros.email ? `${campo('email')}-erro` : `${campo('email')}-dica`, onChange: (e) => atualizar('email', e.target.value) }) }), _jsx(Campo, { id: campo('zap'), rotulo: "WhatsApp", erro: erros.whatsapp, dica: !erros.whatsapp ? 'Com DDD. Usado apenas para retornar o seu contato.' : undefined, children: _jsx("input", { id: campo('zap'), type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "(11) 99999-9999", value: dados.whatsapp, "aria-invalid": erros.whatsapp ? true : undefined, "aria-describedby": erros.whatsapp ? `${campo('zap')}-erro` : `${campo('zap')}-dica`, onChange: (e) => atualizar('whatsapp', formatarTelefone(e.target.value)) }) })] })] })), etapa === 5 && (_jsxs(_Fragment, { children: [_jsx("p", { className: "etapa-form__texto", children: "Confira o que voc\u00EA escreveu. Se algo estiver errado, volte e ajuste \u2014 nada foi enviado ainda." }), _jsxs("div", { className: "resumo__caixa", children: [_jsxs("div", { className: "resumo__topo", children: [_jsx("span", { children: "Resumo do briefing" }), _jsxs("button", { type: "button", className: "resumo__editar", onClick: () => irPara(0), children: [_jsx(IconeLapis, {}), "Editar respostas"] })] }), _jsx("pre", { className: "resumo__texto", tabIndex: 0, "aria-label": "Resumo do briefing", children: resumo })] }), _jsxs("div", { className: "resumo__acoes", children: [_jsxs("button", { type: "button", className: "botao botao--secundario", onClick: copiar, children: [_jsx(IconeCopiar, {}), _jsx("span", { children: "Copiar resumo" })] }), _jsxs("button", { type: "button", className: "botao botao--primario", onClick: abrirWhatsapp, children: [_jsx(IconeWhatsapp, { tamanho: 17 }), _jsx("span", { children: "Abrir WhatsApp do Miguel" })] })] }), _jsx("p", { className: "resumo__estado", role: "status", "aria-live": "polite", children: estadoCopia }), _jsxs("p", { className: "resumo__aviso", children: [_jsx(IconeInfo, {}), _jsxs("span", { children: ["Abrir o WhatsApp ", _jsx("strong", { children: "n\u00E3o envia" }), " a mensagem: ela chega preenchida na conversa e voc\u00EA conclui o envio. Esta p\u00E1gina n\u00E3o registra, n\u00E3o armazena e n\u00E3o envia e-mails por conta pr\u00F3pria."] })] })] }))] }, etapa), tentou && Object.keys(erros).length > 0 && etapa !== 5 && (_jsxs("p", { className: "form__erro-geral", role: "alert", children: [_jsx(IconeAlerta, {}), _jsxs("span", { children: ["Faltou preencher ", Object.keys(erros).length === 1 ? 'um campo' : 'alguns campos', ' ', "nesta etapa. As mensagens est\u00E3o logo acima de cada um."] })] })), _jsxs("div", { className: "form__acoes", children: [etapa > 0 && (_jsxs("button", { type: "button", className: "form__voltar", onClick: voltar, children: [_jsx(IconeSetaEsquerda, { tamanho: 16 }), "Voltar"] })), etapa < ultima ? (_jsxs("button", { type: "submit", className: "botao botao--primario", children: [_jsx("span", { children: etapa === ultima - 1 ? 'Ver meu resumo' : 'Continuar' }), _jsx(IconeSeta, { className: "botao__seta" })] })) : (_jsxs("p", { className: "campo__dica", style: { alignSelf: 'center', margin: 0, maxWidth: '34ch' }, children: [_jsx(IconeCheck, { tamanho: 13 }), " Briefing pronto para ser enviado por voc\u00EA."] }))] })] }) })] })] }));
}
//# sourceMappingURL=Briefing.js.map