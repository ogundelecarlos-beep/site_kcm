/**
 * Fonte única de conteúdo do site da KCM SITES.
 * Textos, contatos e dados da equipe ficam aqui para facilitar alterações
 * sem mexer em componentes.
 */
export const empresa = {
    nome: 'KCM SITES',
    assinatura: 'Keep Creating More',
    descricaoCurta: 'Criação de sites personalizados para negócios, com atendimento próximo do começo ao fim.',
    atendimento: 'Atendemos todo o Brasil. Reuniões presenciais em São Paulo mediante alinhamento.',
    horario: 'Todos os dias, das 06h às 23h (horário de Brasília).',
};
export const contatos = {
    principal: {
        nome: 'Miguel',
        papel: 'Relacionamento com clientes',
        telefoneExibicao: '+55 11 99973-1375',
        whatsapp: 'https://wa.me/5511999731375',
        numeroWhatsapp: '5511999731375',
    },
    email: 'siteskcm@gmail.com',
    secundarios: [
        { nome: 'Carlos', telefoneExibicao: '+55 11 99107-0465', whatsapp: 'https://wa.me/5511991070465' },
        { nome: 'Kauan', telefoneExibicao: '+55 11 91694-2191', whatsapp: 'https://wa.me/5511916942191' },
    ],
};
export const navegacao = [
    { id: 'o-que-criamos', rotulo: 'O que criamos' },
    { id: 'processo', rotulo: 'Como trabalhamos' },
    { id: 'responsabilidade', rotulo: 'Responsabilidade' },
    { id: 'equipe', rotulo: 'Equipe' },
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
    titulo: 'Três pessoas, uma conversa que virou empresa.',
    paragrafos: [
        'A KCM SITES nasceu de conversas e planejamento entre três colegas interessados em programação e desenvolvimento de sistemas. O que começou como troca de ideias sobre código virou uma forma de trabalhar: entender o negócio antes de abrir o editor.',
        'Hoje a divisão é simples e proposital. Uma pessoa cuida do relacionamento e do primeiro atendimento, duas cuidam do desenvolvimento. Quem conversa com você não desaparece quando o projeto entra em produção, e quem programa não recebe o pedido por telefone sem fio.',
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
        nota: 'Sujeito a análise. Avaliamos viabilidade, prazo e escopo antes de assumir o projeto.',
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
        texto: 'Registramos o que foi combinado — páginas, funcionalidades, materiais necessários. Depois do alinhamento, a equipe envia por e-mail um resumo do trabalho.',
    },
    {
        numero: '03',
        titulo: 'Criamos e desenvolvemos',
        texto: 'Design e desenvolvimento acontecem com base no escopo registrado. Você acompanha o andamento pelo contato direto com a equipe.',
    },
    {
        numero: '04',
        titulo: 'Revisamos com o cliente',
        texto: 'Você vê o site antes de ele ir ao ar e aponta ajustes. As etapas de revisão são combinadas junto com o escopo.',
    },
    {
        numero: '05',
        titulo: 'Publicamos e combinamos o acompanhamento',
        texto: 'Colocamos o site no ar e definimos com você como será o acompanhamento depois da entrega.',
    },
];
export const compromissos = [
    {
        titulo: 'Escopo alinhado antes do desenvolvimento',
        texto: 'Nada entra em produção sem estar escrito e confirmado entre você e a equipe.',
    },
    {
        titulo: 'Comunicação direta',
        texto: 'Você fala com quem está no projeto, sem camadas intermediárias.',
    },
    {
        titulo: 'Etapas e revisões combinadas',
        texto: 'A quantidade e o momento das revisões fazem parte do combinado inicial de cada projeto.',
    },
    {
        titulo: 'Adaptado para celular e computador',
        texto: 'O site é construído e verificado nos dois contextos, não apenas na tela grande.',
    },
    {
        titulo: 'Suporte e manutenção conforme o plano contratado',
        texto: 'Se houver acompanhamento após a entrega, o escopo e o valor são acordados antes.',
    },
];
export const prazo = {
    titulo: 'Sobre prazo',
    texto: 'O prazo é definido conforme a complexidade do projeto e o recebimento dos materiais (textos, imagens, acessos). Como referência inicial, projetos simples costumam ser discutidos na faixa de 5 a 12 dias úteis — mas essa faixa depende do escopo e só vale depois de confirmada pela equipe no alinhamento.',
};
export const equipe = [
  {
    nome: 'Miguel',
    papel: 'Relacionamento com clientes e primeiro atendimento',
    descricao: 'É com o Miguel que a conversa começa. Ele entende o que o negócio precisa, registra o escopo e mantém o contato durante o projeto.',
    foto: '/assets/equipe/miguel.png',
    fotoWebp: '/assets/equipe/miguel.png',
    alt: 'Retrato de Miguel, responsável pelo relacionamento com clientes da KCM SITES.',
    whatsapp: 'https://wa.me/5511999731375',
    telefoneExibicao: '+55 11 99973-1375'
  },
  {
    nome: 'Carlos',
    papel: 'Desenvolvimento',
    descricao: 'Transforma o escopo alinhado em site — do código à estrutura de navegação.',
    foto: '/assets/equipe/carlos.png',
    fotoWebp: '/assets/equipe/carlos.png',
    alt: 'Retrato de Carlos, desenvolvedor da KCM SITES.'
  },
  {
    nome: 'Kauan',
    papel: 'Desenvolvimento',
    descricao: 'Desenvolve, ajusta e garante a entrega técnica do projeto.',
    foto: '/assets/equipe/kauan.png',
    fotoWebp: '/assets/equipe/kauan.png',
    alt: 'Retrato de Kauan, desenvolvedor da KCM SITES.'
  }
];
export const perguntas = [
    {
        pergunta: 'Vocês atendem empresas fora de São Paulo?',
        resposta: 'Sim. Atendemos todo o Brasil, com todo o processo por WhatsApp, e-mail e chamadas. Reuniões presenciais acontecem em São Paulo, mediante alinhamento prévio.',
    },
    {
        pergunta: 'Quanto custa um site?',
        resposta: 'Valores são tratados diretamente com o cliente, depois de entendermos o escopo. Como cada projeto tem um tamanho diferente, não publicamos tabela nem estimativa automática — o briefing desta página é o caminho mais rápido para chegarmos a um número.',
    },
    {
        pergunta: 'Quanto tempo leva?',
        resposta: 'Depende da complexidade e de quando recebemos os materiais. Projetos simples costumam ser discutidos na faixa de 5 a 12 dias úteis, mas essa referência só se confirma depois do alinhamento de escopo com a equipe.',
    },
    {
        pergunta: 'Preciso ter domínio?',
        resposta: 'Não para começar. Se você já tem domínio, trabalhamos com ele. Se não tem, orientamos sobre o registro e a hospedagem durante o alinhamento — a contratação é feita por você ou com a sua autorização.',
    },
    {
        pergunta: 'Como funciona o atendimento?',
        resposta: 'O primeiro contato é com o Miguel, pelo WhatsApp. Reuniões são combinadas por lá. Durante o projeto você fala diretamente com quem está desenvolvendo. Estamos disponíveis todos os dias, das 06h às 23h (horário de Brasília).',
    },
    {
        pergunta: 'Há manutenção após a entrega?',
        resposta: 'A manutenção é opcional. Quando o cliente quer acompanhamento contínuo, escopo e mensalidade são acordados antes da entrega. Sem esse acordo, o site é entregue publicado e sem cobrança recorrente da nossa parte.',
    },
];
export const rodape = {
    aviso: 'A KCM SITES ainda não possui domínio próprio e hospedagem definidos. Endereço físico, CNPJ e perfis em redes sociais não estão publicados nesta versão do site.',
};
//# sourceMappingURL=site.js.map