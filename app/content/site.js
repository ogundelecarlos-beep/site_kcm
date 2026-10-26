/**
 * Fonte única de conteúdo do site da KCM SITES.
 * Textos e contatos ficam aqui para facilitar alterações
 * sem mexer em componentes.
 */
export const empresa = {
    nome: 'KCM SITES',
    assinatura: 'Keep Creating More',
    descricaoCurta: 'Criação de sites personalizados para negócios, com atendimento próximo do começo ao fim.',
    atendimento: 'Atendemos todo o Brasil, com reuniões presenciais em São Paulo.',
    horario: 'Todos os dias, das 06h às 23h (horário de Brasília).',
};
export const contatos = {
    principal: {
        papel: 'Atendimento e orçamentos pelo WhatsApp',
        telefoneExibicao: '+55 11 99973-1375',
        whatsapp: 'https://wa.me/5511999731375',
        numeroWhatsapp: '5511999731375',
    },
    email: 'siteskcm@gmail.com',
};
/**
 * Configurações gerais. Campos vazios ('') não aparecem no site.
 */
export const configuracao = {
    /**
     * Endereço público do site, sem barra no final. Ao trocar pelo domínio próprio,
     * altere aqui e rode `node tools/aplicar-url.mjs` (atualiza index.html, robots.txt e sitemap.xml).
     */
    urlSite: 'https://site-kcm.vercel.app',
    redesSociais: {
        instagram: '', // ex.: 'https://www.instagram.com/kcmsites'
        googleMeuNegocio: '', // ex.: 'https://g.page/r/...'
    },
    /** Preço inicial exibido no FAQ "Quanto custa um site?". Ex.: 'R$ 1.500'. Vazio = não publica preço. */
    precoInicial: '',
};
/**
 * Portfólio. Com a lista vazia, a seção "Projetos" e o link dela no menu não aparecem.
 * Imagens: salvar em /assets/projetos/ (WebP, 1200 × 750 px de preferência).
 */
export const projetos = [
    // {
    //     nome: 'Padaria Exemplo',
    //     segmento: 'Padaria e confeitaria',
    //     tipo: 'Cliente', // 'Cliente' ou 'Projeto próprio'
    //     descricao: 'Os pedidos chegavam soltos pelo WhatsApp. Criamos um catálogo com categorias e envio direto da encomenda, já com os itens escolhidos.',
    //     imagem: '/assets/projetos/padaria-exemplo.webp',
    //     link: 'https://padariaexemplo.com.br',
    // },
];
/** Depoimentos de clientes. Com a lista vazia, o bloco não aparece. */
export const depoimentos = [
    // {
    //     nome: 'Ana Souza',
    //     empresa: 'Padaria Exemplo',
    //     texto: 'O site ficou pronto no prazo e hoje recebemos as encomendas organizadas.',
    // },
];
export const navegacao = [
    { id: 'o-que-criamos', rotulo: 'O que criamos' },
    ...(projetos.length ? [{ id: 'projetos', rotulo: 'Projetos' }] : []),
    { id: 'processo', rotulo: 'Como trabalhamos' },
    { id: 'briefing', rotulo: 'Briefing' },
    { id: 'perguntas', rotulo: 'Perguntas' },
];
export const abertura = {
    etiqueta: 'Keep Creating More',
    titulo: ['Seu negócio merece uma', 'presença digital', 'à altura.'],
    texto: 'A KCM SITES cria sites personalizados para negócios de diferentes segmentos. Cada projeto começa por entender como a empresa trabalha — e termina em um site que funciona bem no celular, no computador e na rotina de quem atende o cliente.',
    botaoPrimario: { rotulo: 'Começar meu projeto', destino: '#briefing' },
    botaoSecundario: { rotulo: 'Conhecer nosso processo', destino: '#processo' },
};
export const historia = {
    titulo: 'Uma conversa que virou empresa.',
    paragrafos: [
        'A KCM SITES nasceu de conversas e planejamento entre colegas interessados em programação e desenvolvimento de sistemas. O que começou como troca de ideias sobre código virou uma forma de trabalhar: entender o negócio antes de abrir o editor.',
        'Atendimento e desenvolvimento andam juntos desde o primeiro dia. Quem conversa com você acompanha o projeto até a entrega, e o que foi combinado chega ao código sem telefone sem fio.',
    ],
};
export const formatos = [
    {
        id: 'institucional',
        titulo: 'Sites institucionais',
        resumo: 'A presença principal do negócio: quem é, o que oferece e como falar com você — organizado para quem chega sem contexto.',
        itens: ['Estrutura de páginas definida com você', 'Textos e seções pensados para o seu público', 'Caminhos claros de contato'],
    },
    {
        id: 'apresentacao',
        titulo: 'Páginas de apresentação e campanhas',
        resumo: 'Uma página com um objetivo só — divulgar um serviço, uma data, um lançamento — sem concorrer com o resto do site.',
        itens: ['Foco em uma única ação', 'Leitura rápida no celular', 'Publicação independente do site principal'],
    },
    {
        id: 'catalogo',
        titulo: 'Catálogos e vitrines digitais',
        resumo: 'Seus produtos ou serviços organizados para consulta, com o contato a um toque de distância.',
        itens: ['Organização por categorias', 'Fichas de produto ou serviço', 'Envio direto para o WhatsApp'],
    },
    {
        id: 'sob-medida',
        titulo: 'Projetos com funcionalidades sob medida',
        resumo: 'Quando o negócio precisa de algo além das páginas — áreas restritas, formulários específicos, integrações.',
        itens: ['Levantamento do que é realmente necessário', 'Escopo técnico escrito antes de começar', 'Entrega por etapas quando fizer sentido'],
        nota: 'Avaliamos viabilidade, prazo e escopo com você antes de começar.',
    },
];
export const beneficios = [
    {
        titulo: 'Um endereço que você controla',
        texto: 'Um site próprio não depende do alcance de uma rede social nem do algoritmo do dia. É o lugar para onde você manda quem já demonstrou interesse.',
    },
    {
        titulo: 'A informação certa, sem repetir',
        texto: 'Horário, formas de atendimento, o que o negócio faz e o que não faz. O que hoje é respondido de novo a cada conversa fica disponível o tempo todo.',
    },
    {
        titulo: 'Contato organizado',
        texto: 'Formulário e botões de WhatsApp posicionados onde a pessoa realmente decide falar com você, com as informações que a sua equipe precisa receber.',
    },
];
export const processo = [
    {
        numero: '01',
        titulo: 'Entendemos o negócio',
        texto: 'Primeira conversa pelo WhatsApp ou em reunião. Queremos saber como você atende hoje, quem procura o seu negócio e o que precisa aparecer no site.',
    },
    {
        numero: '02',
        titulo: 'Alinhamos escopo e proposta',
        texto: 'Registramos páginas, funcionalidades e materiais e enviamos por e-mail um resumo do trabalho. Nada entra em desenvolvimento sem estar confirmado com você.',
    },
    {
        numero: '03',
        titulo: 'Criamos e desenvolvemos',
        texto: 'Design e desenvolvimento seguem o escopo registrado, com o site construído e testado no celular e no computador. Você acompanha o andamento pelo WhatsApp.',
    },
    {
        numero: '04',
        titulo: 'Revisamos com você',
        texto: 'Você vê o site antes de ele ir ao ar e aponta ajustes, nas rodadas de revisão combinadas no escopo.',
    },
    {
        numero: '05',
        titulo: 'Publicamos e acompanhamos',
        texto: 'Colocamos o site no ar e, se você quiser, combinamos um plano de manutenção — com escopo e valor definidos antes.',
    },
];
export const perguntas = [
    {
        pergunta: 'Vocês atendem empresas fora de São Paulo?',
        resposta: 'Sim. Atendemos todo o Brasil, com todo o processo por WhatsApp, e-mail e chamadas. Em São Paulo, também fazemos reuniões presenciais.',
    },
    {
        pergunta: 'Quanto custa um site?',
        resposta: configuracao.precoInicial
            ? `Sites institucionais simples começam a partir de ${configuracao.precoInicial}. O valor final depende do escopo: quantidade de páginas, funcionalidades e materiais. Preencha o briefing desta página e respondemos com uma proposta sob medida.`
            : 'O valor depende do escopo: quantidade de páginas, funcionalidades e materiais. Preencha o briefing desta página e respondemos com uma proposta sob medida.',
    },
    {
        pergunta: 'Quanto tempo leva?',
        resposta: 'Projetos simples costumam levar de 5 a 12 dias úteis. O prazo de cada projeto é definido no alinhamento, conforme a complexidade e a entrega dos materiais (textos, imagens, acessos).',
    },
    {
        pergunta: 'Preciso ter domínio?',
        resposta: 'Não para começar. Se você já tem domínio, usamos o seu. Se não tem, orientamos sobre o registro e a hospedagem durante o alinhamento — a contratação é feita por você ou com a sua autorização.',
    },
    {
        pergunta: 'Como funciona o atendimento?',
        resposta: 'Tudo começa pelo WhatsApp da KCM SITES, onde também combinamos reuniões. Atendemos todos os dias, das 06h às 23h (horário de Brasília).',
    },
    {
        pergunta: 'Há manutenção após a entrega?',
        resposta: 'Sim, se você quiser. A manutenção é opcional: escopo e mensalidade são combinados antes da entrega. Sem plano de manutenção, o site é entregue publicado e sem cobrança recorrente.',
    },
];
//# sourceMappingURL=site.js.map