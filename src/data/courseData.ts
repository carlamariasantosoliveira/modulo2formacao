import {
  PageMeta,
  PromptTechnique,
  DisciplinePrompt,
  ClassroomActivity,
  QuizQuestion,
  BibliographicReference,
  MagicSchoolTool,
} from '../types';

export const COURSE_INFO = {
  courseTitle: 'Inteligência Artificial na Educação: Estratégias, Ferramentas e Práticas Pedagógicas',
  moduleTitle: 'Módulo 2: IA Generativa e Prompts',
  type: 'Oficina de Formação',
  subtitle: 'Transcrição na Íntegra e Estruturação Pedagógica do Conteúdo',
  author: 'Carla Oliveira',
  date: '26 de janeiro de 2026',
  originalTitle: 'Modulo2 | Genially',
  scope: '',
  motto: 'Explorar • Experimentar • Aplicar na Educação',
  quote: {
    text: 'A IA generativa é uma aliada poderosa para potenciar a criatividade, a inclusão e a qualidade da aprendizagem.',
    author: 'Princípio Pedagógico da Oficina de Formação',
  },
  secondaryQuote: {
    text: 'A tecnologia não substitui o professor, mas o professor que usa tecnologia pode substituir aquele que não usa.',
    author: 'George Couros',
  },
  objectives: [
    'Compreender o funcionamento dos modelos generativos.',
    'Aprender a formular prompts claros e eficazes.',
    'Aplicar boas práticas para otimizar a qualidade dos resultados.',
  ],
};

export const PAGES_NAV: PageMeta[] = [
  {
    id: 'home',
    number: 0,
    title: 'Página Inicial',
    shortTitle: 'Início',
    iconName: 'Home',
    description: 'Apresentação do módulo, objetivos e visão geral.',
    category: 'intro',
  },
  {
    id: 'ia-generativa',
    number: 1,
    title: '1. Objetivos e Conceito de IA Generativa',
    shortTitle: '1. IA Generativa',
    iconName: 'Cpu',
    description: 'Conceito, tecnologia Deep Learning e lógica probabilística.',
    category: 'conceitos',
  },
  {
    id: 'como-funcionam',
    number: 2,
    title: '2. Funcionamento dos Modelos Generativos',
    shortTitle: '2. Como Funcionam',
    iconName: 'GitBranch',
    description: 'O ciclo de processamento em 5 etapas e a chamada de atenção para a limitação fundamental.',
    category: 'conceitos',
  },
  {
    id: 'tipos-modelos',
    number: 3,
    title: '3. Tipos de Modelos (Áudio, Vídeo, Multimodal)',
    shortTitle: '3. Tipos de Modelos',
    iconName: 'Layers',
    description: 'Texto (LLMs), Imagem, Áudio/Voz, Vídeo e Multimodais.',
    category: 'conceitos',
  },
  {
    id: 'prompts',
    number: 4,
    title: '4. Prompts e Engenharia de Prompts',
    shortTitle: '4. Prompts',
    iconName: 'Terminal',
    description: 'Definição e os 4 elementos estruturais de um prompt.',
    category: 'prompts',
  },
  {
    id: 'tecnicas',
    number: 5,
    title: '5. Técnicas de Formulação de Prompts',
    shortTitle: '5. Técnicas e Estratégias',
    iconName: 'Sparkles',
    description: 'As 8 estratégias com comparação integral entre prompts vagos e otimizados.',
    category: 'prompts',
  },
  {
    id: 'exemplos-disciplina',
    number: 6,
    title: '6. Bons Prompts por Disciplina e Área',
    shortTitle: '6. Bons Prompts',
    iconName: 'BookOpen',
    description: 'Prompts reais para Português, Matemática, História, Ciências e Multimédia.',
    category: 'prompts',
  },
  {
    id: 'boas-praticas',
    number: 7,
    title: '7. Boas Práticas no Uso da IA na Educação',
    shortTitle: '7. Boas Práticas',
    iconName: 'ShieldCheck',
    description: 'Os 6 pilares de boas práticas e o princípio orientador de uso pedagógico intencional.',
    category: 'pratica',
  },
  {
    id: 'atividades-sala',
    number: 8,
    title: '8. Atividades Práticas em Sala de Aula',
    shortTitle: '8. Atividades em Aula',
    iconName: 'Users',
    description: 'As 4 atividades completas com etapas, objetivos e critérios de avaliação.',
    category: 'pratica',
  },
  {
    id: 'magicschool',
    number: 9,
    title: '9. Exploração da Ferramenta MagicSchool.ai',
    shortTitle: '9. MagicSchool.ai',
    iconName: 'Wand2',
    description: 'Raina, Student Chatbots e os 8 geradores especializados.',
    category: 'recursos',
  },
  {
    id: 'atividade-sessao',
    number: 10,
    title: '10. Atividade da Sessão: Do prompt ao recurso pedagógico',
    shortTitle: '10. Atividade da Sessão',
    iconName: 'Users',
    description: 'Laboratório de escrita, teste e melhoria de prompts em grupo (45 min).',
    category: 'pratica',
  },
  {
    id: 'ferramentas-referencias',
    number: 10,
    title: 'Ferramentas Citadas e Referências Bibliográficas',
    shortTitle: 'Referências & Créditos',
    iconName: 'FileText',
    description: 'Catálogo de ferramentas e as 19 referências científicas completas.',
    category: 'recursos',
  },
];


export const PROMPT_ELEMENTS = [
  {
    label: 'Contexto',
    sublabel: 'Quem é a IA?',
    description: 'Define a persona, especialidade ou papel adotado pelo modelo.',
    example: '“Age como um historiador” ou “Age como professor de Português do 9.º ano”',
    color: 'blue',
  },
  {
    label: 'Tarefa',
    sublabel: 'O que deve fazer?',
    description: 'Identifica a ação direta, o conteúdo e o produto pretendido.',
    example: '“Resume este texto” ou “Explica como resolver equações do 1.º grau”',
    color: 'green',
  },
  {
    label: 'Restrições',
    sublabel: 'O que deve evitar?',
    description: 'Limites de extensão, termos proibidos, orientações de tom e segurança.',
    example: '“Não uses termos técnicos” ou “Em cerca de 100 palavras”',
    color: 'amber',
  },
  {
    label: 'Formato',
    sublabel: 'Como apresentar a resposta?',
    description: 'Organização visual da resposta (tópicos, tabela, guião, código, checklist).',
    example: '“Em tabela”, “Em tópicos curtos”, “Em forma de guião passo a passo”',
    color: 'rose',
  },
];

export const PROMPT_TECHNIQUES: PromptTechnique[] = [
  {
    id: 1,
    name: '1. Clareza e Especificidade',
    description:
      'Evite ambiguidades. Quanto mais preciso for o pedido, menor a probabilidade de alucinação. Prompts vagos tendem a gerar respostas genéricas ou pouco relevantes.',
    vaguePrompt: 'Fala sobre sustentabilidade.',
    vagueContext: 'Gera um texto abstrato, longo e sem foco concreto aplicável à realidade escolar.',
    optimizedPrompt:
      'Explica três estratégias de sustentabilidade ambiental aplicáveis em escolas e justifica por que são eficazes.',
    optimizedNotes:
      'Define o número exato de estratégias (3), o contexto delimitado (escolas) e a exigência de justificação.',
  },
  {
    id: 2,
    name: '2. Fornecer Contexto Relevante',
    description:
      'Indicar o público-alvo e a finalidade da resposta ajuda o modelo a adaptar a linguagem. Sugestões: definir público-alvo (ex.: professores, alunos) e finalidade (ex.: material didático, avaliação).',
    vaguePrompt: 'Explica o que é a inteligência artificial.',
    vagueContext: 'Resposta genérica que pode ser demasiado técnica ou demasiado infantil.',
    optimizedPrompt:
      'Explica o que é a inteligência artificial para alunos do 8.º ano, com o objetivo de servir como material didático para uma aula de TIC. Usa linguagem simples, exemplos do dia a dia e apresenta a resposta em lista de tópicos.',
    optimizedNotes:
      'Inclui público (8.º ano), finalidade (aula de TIC), tom (linguagem simples, exemplos quotidianos) e formato (tópicos).',
  },
  {
    id: 3,
    name: '3. Definir Estrutura e Formato de Saída',
    description:
      'Peça formatos específicos para poupar tempo de edição (tabelas comparativas, checklists, código, guiões de vídeo ou ficheiros).',
    vaguePrompt: 'Explica equações do 1.º grau.',
    vagueContext: 'Texto contínuo difícil de transformar rapidamente numa explicação de quadro ou aula.',
    optimizedPrompt:
      'Explica como resolver equações do 1.º grau em forma de guião passo a passo, usando exemplos simples e linguagem adequada a alunos do 7.º ano.',
    optimizedNotes:
      'Exige uma estrutura sequencial passo a passo, perfeitamente alinhada com as necessidades pedagógicas do 7.º ano.',
  },
  {
    id: 4,
    name: '4. Few-Shot Prompting (Exemplificar)',
    description:
      'Incluir exemplos auxilia o modelo a seguir um padrão específico de resposta, sendo útil em tarefas com formato ou estilo bem definido.',
    vaguePrompt: 'Classifica as frases como verdadeiras ou falsas.',
    vagueContext: 'O modelo pode inventar formatos variados, explicar o porquê sem ser pedido ou desformatar a resposta.',
    optimizedPrompt:
      'Classifica as frases como verdadeiras ou falsas, seguindo o exemplo abaixo:\nExemplo 1: Frase: A Terra é plana. Classificação: Falsa\nExemplo 2: Frase: A água ferve a 100 °C ao nível do mar. Classificação: Verdadeira\nAgora classifica as frases seguintes: ...',
    optimizedNotes:
      'Fornece instâncias concretas do formato pretendido, garantindo que a IA reproduz o padrão exato de classificação.',
  },
  {
    id: 5,
    name: '5. Role Prompting (Definir Persona)',
    description:
      'Definir um papel, função ou tom para a IA ajuda a orientar o estilo, a profundidade e o tipo de linguagem da resposta.',
    vaguePrompt: 'Explica o que é um texto argumentativo.',
    vagueContext: 'Explicação teórica ou enciclopédica desprovida de empatia pedagógica.',
    optimizedPrompt:
      'Age como professor de Português do 9.º ano e explica o que é um texto argumentativo, usando linguagem clara e exemplos simples adequados a alunos de 13 anos.',
    optimizedNotes:
      'Atribui o papel de professor de Português, delimitando com rigor a faixa etária (13 anos) e o registo discursivo.',
  },
  {
    id: 6,
    name: '6. Iteração e Refinamento',
    description:
      'O primeiro resultado raramente é o perfeito. Ciclo de melhoria: pedir para encurtar, adicionar exemplos ou verificar fontes.',
    vaguePrompt: 'Resume o texto. (Aceitar a primeira resposta sem ajustes)',
    vagueContext: 'Aceitação passiva da primeira geração, muitas vezes desajustada ao objetivo específico.',
    optimizedPrompt:
      'Resume o texto em cerca de 100 palavras. ➡ Após a primeira resposta: Agora torna o resumo mais simples e adequado a alunos do 8.º ano.',
    optimizedNotes:
      'Demonstra o ciclo iterativo de diálogo onde a resposta inicial é sucessivamente calibrada para o nível pretendido.',
  },
  {
    id: 7,
    name: '7. Incluir Pedidos de Verificação / Referências',
    description:
      'Pedir à IA que verifique, justifique ou explique a própria resposta pode aumentar a precisão. Para garantir veracidade, peça fontes ou instrua o modelo a admitir incerteza.',
    vaguePrompt: 'Explica as causas das alterações climáticas.',
    vagueContext: 'Sem salvaguardas de verificação, o modelo pode misturar especulação com consenso científico.',
    optimizedPrompt:
      'Explica as causas das alterações climáticas e justifica cada uma. Sempre que possível, indica as fontes utilizadas. Se não tiveres informação segura sobre algum ponto, diz explicitamente "não sei".',
    optimizedNotes:
      'Força a justificação, solicitação de fontes e autorização explícita para expressar incerteza ("não sei").',
  },
  {
    id: 8,
    name: '8. Solicitar Revisão ou Melhoria',
    description:
      'Incluir no prompt pedidos como "melhora esta resposta" ou "refina este texto" faz parte da iteração. Pode pedir-se revisão de clareza e vocabulário.',
    vaguePrompt: 'Escreve um texto sobre a água. (Aceitar primeira versão)',
    vagueContext: 'Texto cru gerado no primeiro disparo, que pode ter repetições ou tom desajustado.',
    optimizedPrompt:
      'Revê o texto abaixo, tornando-o mais claro e organizado. Mantém linguagem simples, adequada a alunos do 6.º ano, e melhora o vocabulário sem aumentar a complexidade.',
    optimizedNotes:
      'Orienta a revisão focando em clareza, organização e enriquecimento lexical controlado para o 6.º ano.',
  },
];

export const DISCIPLINE_PROMPTS: DisciplinePrompt[] = [
  {
    id: 'portugues-9',
    discipline: 'Português',
    grade: '9.º Ano',
    title: 'Texto Argumentativo',
    category: 'curriculo',
    prompt:
      '“Age como professor de Português do 9.º ano. Explica o que é um texto argumentativo para alunos do 9.º ano. Organiza a explicação em tópicos curtos, utilizando linguagem clara e acessível. Inclui um exemplo simples de texto argumentativo. No final, revê o texto, verificando se a explicação é adequada ao nível de ensino.”',
    keyAspects: ['Papel de docente especializado', 'Tópicos curtos e acessíveis', 'Exemplo contextual', 'Auto-revisão final'],
  },
  {
    id: 'matematica-7',
    discipline: 'Matemática',
    grade: '7.º Ano',
    title: 'Equações do 1.º Grau',
    category: 'curriculo',
    prompt:
      '“Age como professor de Matemática do 7.º ano. Explica como resolver equações do 1.º grau, utilizando linguagem simples e adequada a alunos do 7.º ano. Apresenta a explicação passo a passo e inclui dois exemplos resolvidos.”',
    keyAspects: ['Didática sequencial passo a passo', 'Linguagem nivelada ao 7.º ano', '2 exemplos resolvidos completos'],
  },
  {
    id: 'historia-9',
    discipline: 'História',
    grade: '9.º Ano',
    title: 'Revolução Francesa (Apoio ao Estudo)',
    category: 'curriculo',
    prompt:
      '“Age como professor de História do 9.º ano. Explica as principais causas da Revolução Francesa para alunos do 9.º ano, com o objetivo de apoiar o estudo para uma avaliação. Organiza a resposta em 5 pontos e usa frases curtas. Sempre que possível, justifica cada causa. Revê o texto para garantir rigor histórico e clareza.”',
    keyAspects: ['Finalidade explícita: estudo para teste', 'Exatamente 5 causas estruturadas', 'Frases curtas com justificação', 'Garantia de rigor histórico'],
  },
  {
    id: 'ciencias-8',
    discipline: 'Ciências Naturais',
    grade: '8.º Ano',
    title: 'Processo da Fotossíntese',
    category: 'curriculo',
    prompt:
      '“Age como professor de Ciências Naturais do 8.º ano. Explica o processo da fotossíntese para alunos do 8.º ano, como material didático. Usa linguagem simples, exemplos do dia a dia e apresenta a resposta em tópicos. No final, verifica se a explicação está cientificamente correta e melhora a clareza.”',
    keyAspects: ['Material didático em tópicos', 'Exemplos do quotidiano', 'Verificação explícita de correção científica'],
  },
  {
    id: 'imagem-5',
    discipline: 'Criação de Imagens',
    grade: '5.º Ano',
    title: 'Ilustração Educativa do Ciclo da Água',
    category: 'multimedia',
    prompt:
      '“Age como ilustrador educativo. Descreve uma imagem que represente o ciclo da água, destinada a alunos do 5.º ano. Indica os elementos visuais principais, as cores sugeridas e os rótulos a incluir. Usa linguagem simples e organizada em tópicos. No final, verifica se a descrição está cientificamente correta.”',
    keyAspects: ['Elementos visuais e paleta cromática', 'Rótulos explicativos essenciais', 'Validação da precisão científica'],
  },
  {
    id: 'slides-8',
    discipline: 'Apresentação Multimédia',
    grade: '8.º Ano',
    title: 'Guião de Slides sobre Inteligência Artificial',
    category: 'multimedia',
    prompt:
      '“Age como professor. Cria o guião de uma apresentação com 6 slides sobre inteligência artificial para alunos do 8.º ano. Para cada slide, indica o título, os pontos principais e uma sugestão visual. Usa linguagem simples e exemplos do dia a dia. No final, melhora o guião para maior clareza pedagógica.”',
    keyAspects: ['Estrutura fixa de 6 slides', 'Pontos-chave + sugestão visual para cada slide', 'Clareza pedagógica reforçada'],
  },
  {
    id: 'video-7',
    discipline: 'Vídeo com Avatares Falantes',
    grade: '7.º Ano',
    title: 'Diálogo sobre Uso Responsável das Redes Sociais',
    category: 'multimedia',
    prompt:
      '“Age como professor de TIC. Cria um diálogo curto entre dois avatares sobre o uso responsável das redes sociais, destinado a alunos do 7.º ano. Divide o diálogo em falas alternadas, usa linguagem simples e exemplos do quotidiano. No final, revê o texto para garantir clareza e adequação ao público.”',
    keyAspects: ['Falas alternadas para dois avatares', 'Exemplos do quotidiano de jovens de 12 anos', 'Foco na cidadania digital'],
  },
  {
    id: 'comunicacao-escola',
    discipline: 'Comunicação Escolar',
    grade: 'Geral (Escola)',
    title: 'Regras de Uso do Telemóvel na Escola',
    category: 'comunicacao',
    prompt:
      '“Age como responsável pela comunicação escolar. Cria um pequeno vídeo informativo para alunos e encarregados de educação sobre regras de uso do telemóvel na escola. Indica o texto da mensagem, o tom a utilizar e sugestões visuais. Usa linguagem clara e adequada ao público. Revê o conteúdo antes de finalizar.”',
    keyAspects: ['Público duplo: alunos e encarregados de educação', 'Tom da mensagem e sugestões visuais', 'Revisão antes da emissão'],
  },
];

export const CLASSROOM_ACTIVITIES: ClassroomActivity[] = [
  {
    id: 'atividade-1',
    number: 1,
    title: "'O Prompt de Ouro'",
    subtitle: 'Engenharia de Prompt iterativa e comunicação escrita',
    implementation: [
      {
        step: 'Etapa 1 – O Primeiro Rascunho',
        description:
          'O aluno pede à IA que escreva um conto curto (ex.: astronauta perdido, animal com superpoderes) como base de trabalho.',
      },
      {
        step: 'Etapa 2 – A Arte de Refinar (Engenharia de Prompt)',
        description:
          'O aluno deve instruir a IA a alterar o texto pelo menos 3 vezes, focando-se no Tom (engraçado/misterioso), Estilo (simplificar vocabulário) e Estrutura (mudar final/incluir diálogo).',
      },
      {
        step: 'Etapa 3 – Reflexão e Entrega',
        description:
          'O aluno analisa o processo e entrega o histórico de comandos e uma reflexão crítica sobre a evolução do texto.',
      },
    ],
    objectivesAndEvaluation: {
      objectives: 'Estimular a criatividade e a comunicação escrita através da refinação intencional de pedidos.',
      evaluation: 'Avalia-se o histórico do chat, a reflexão crítica e a capacidade demonstrada de aprimorar o texto.',
    },
  },
  {
    id: 'atividade-2',
    number: 2,
    title: "'História Interativa'",
    subtitle: 'Escrita colaborativa e integração tecnológica',
    implementation: [
      {
        step: 'Passo 1 – Introdução do Aluno',
        description: 'Os alunos escrevem uma introdução curta para uma história (ficção científica, mistério, aventura).',
      },
      {
        step: 'Passo 2 – Desenvolvimento com IA',
        description: 'Utilizam a IA para gerar o desenvolvimento da história a partir dos primeiros parágrafos redigidos pelos alunos.',
      },
      {
        step: 'Passo 3 – Análise e Refinamento Crítico',
        description: 'Analisam e refinam o texto gerado, ajustando detalhes para a direção pretendida.',
      },
      {
        step: 'Passo 4 – Continuação Colaborativa e Partilha',
        description: 'Em grupos, continuam a história colaborativamente e partilham o resultado final (blog, e-book).',
      },
    ],
    objectivesAndEvaluation: {
      objectives: 'Promover a escrita colaborativa, a imaginação e a integração crítica da tecnologia no processo autoral.',
      evaluation: 'Avalia-se a versão inicial vs. final e a reflexão crítica sobre o uso da IA como co-autora.',
    },
  },
  {
    id: 'atividade-3',
    number: 3,
    title: "'Projeto Criativo com a IA - Inventar e Explicar'",
    subtitle: 'Análise crítica e aplicação do conhecimento curricular',
    implementation: [
      {
        step: 'Etapa 1 – Criação com IA',
        description:
          'Gerar um elemento criativo disciplinar (ex.: Ciências: "animal imaginário do deserto"; História: "navegador português fictício").',
      },
      {
        step: 'Etapa 2 – Justificação Obrigatória',
        description:
          'Os alunos justificam cientificamente as características com base na matéria curricular (regulação térmica, adaptações morfológicas, contexto histórico e náutico).',
      },
      {
        step: 'Etapa 3 – Revisão Crítica',
        description:
          'Questionar e corrigir incoerências, falhas de lógica ou erros conceituais produzidos pela IA.',
      },
    ],
    objectivesAndEvaluation: {
      objectives: 'Desenvolver a análise crítica e a aplicação contextualizada do conhecimento curricular em cenários ficcionais.',
      evaluation: 'Avalia-se a coerência, o realismo e o rigor demonstrado na justificação científica dos elementos.',
    },
  },
  {
    id: 'atividade-4',
    number: 4,
    title: "'Problemas com Proporções' (Matemática)",
    subtitle: 'Explicação matemática, formulação e resolução de problemas',
    implementation: [
      {
        step: 'Etapa 1 – Compreensão com IA',
        description:
          'Pedir à IA uma explicação detalhada sobre o conceito de proporções e como resolver problemas.',
      },
      {
        step: 'Etapa 2 – Criando um Problema com IA',
        description:
          'Solicitar à IA um problema de proporção para os alunos resolverem em sala de aula.',
      },
      {
        step: 'Etapa 3 – Criação do Próprio Problema',
        description:
          'Os alunos criam o seu próprio problema baseado nos seus interesses reais (viagens, receitas de culinária, compras).',
      },
    ],
    objectivesAndEvaluation: {
      objectives: 'Aprofundar a explicação matemática e a transferência de conceitos para situações reais do quotidiano.',
      evaluation: 'Avalia-se a clareza da explicação, a lógica dos problemas criados e o rigor da respetiva resolução.',
    },
  },
];

export const MAGICSCHOOL_DATA = {
  description:
    'A plataforma MagicSchool.ai é uma das ferramentas de IA mais avançadas e completas dedicadas especificamente à Educação. Desenvolvida para apoiar professores na preparação de aulas, diferenciação pedagógica e avaliação, integra dezenas de geradores especializados e um ambiente fechado e seguro para trabalho com alunos (MagicStudent).',
  officialUrl: 'https://www.magicschool.ai',
  possibilidades: [
    {
      id: 'magicstudent',
      title: 'MagicStudent',
      description: 'Espaço seguro onde os alunos interagem com tutores e ferramentas com supervisão direta do professor.',
      iconName: 'UserCheck',
      tag: 'Ambiente de Alunos',
    },
    {
      id: 'planos-aula',
      title: 'Gerador de Planos de Aula',
      description: 'Estruturação curricular detalhada por etapas pedagógicas e alinhada com as Aprendizagens Essenciais.',
      iconName: 'BookOpen',
      tag: 'Planeamento',
    },
    {
      id: 'quizzes',
      title: 'Gerador de Quizzes / Provas / Questionários',
      description: 'Criação de avaliações formativas e sumativas com ajuste pelo nível da Taxonomia de Bloom.',
      iconName: 'HelpCircle',
      tag: 'Avaliação',
    },
    {
      id: 'fichas-trabalho',
      title: 'Gerador de Fichas de Trabalho',
      description: 'Exercícios personalizados, atividades formativas e fichas diferenciadas por ritmo de aprendizagem.',
      iconName: 'FileText',
      tag: 'Materiais',
    },
    {
      id: 'rubricas',
      title: 'Gerador de Rubricas de Avaliação',
      description: 'Matrizes descritivas com critérios claros, escalas graduadas e níveis de desempenho.',
      iconName: 'CheckSquare',
      tag: 'Critérios',
    },
    {
      id: 'resumos',
      title: 'Resumos e Reformulação de Textos',
      description: 'Adaptação de extensão, nivelamento de complexidade lexical e sintática para inclusão pedagógica.',
      iconName: 'FileEdit',
      tag: 'Diferenciação',
    },
    {
      id: 'feedback',
      title: 'Ferramentas de Feedback',
      description: 'Apoio na elaboração de comentários qualitativos e diagnósticos personalizados sobre o trabalho do aluno.',
      iconName: 'MessageSquare',
      tag: 'Acompanhamento',
    },
    {
      id: 'apresentacoes',
      title: 'Gerador de Apresentações',
      description: 'Estruturação de diapositivos e propostas de conteúdos visuais para apoio às aulas.',
      iconName: 'Layout',
      tag: 'Apoio Visual',
    },
  ],
  raina: {
    title: 'MagicSchool - Raina',
    badge: 'Assistente do Professor',
    subtitle: 'Converse com a Raina, a sua assistente de IA',
    pedagogicalDefinition:
      'Chatbot desenhado especificamente para professores, que permite uma interação contínua para obter ideias, adaptar materiais e planear atividades pedagógicas.',
    description:
      'A Raina funciona como uma copiloto pedagógica que compreende o vocabulário e a lógica escolar, sugerindo planos, adaptações e dinâmicas motivadoras.',
    examples: [
      {
        id: 'raina-rap',
        name: 'Exemplo 1: Poema / Rap sobre a Amizade',
        grade: '5.º Ano',
        subject: 'Português / Cidadania e Desenvolvimento',
        prompt:
          'Cria um poema tipo rap sobre a amizade com 3 estrofes, linguagem informal e uma mensagem positiva no final para o 5.º ano.',
        pedagogicalGoal:
          'Explorar rima, métrica, linguagem expressiva e reflexão ética sobre relações interpessoais e empatia.',
      },
      {
        id: 'raina-plano-etica',
        name: 'Exemplo 2: Plano de Aula sobre Ética da IA',
        grade: '2.º Ciclo (5.º / 6.º Ano)',
        subject: 'Cidadania e Desenvolvimento / TIC',
        prompt:
          'Plano de aula detalhado sobre ética da IA para o 2.º ciclo (5.º/6.º ano), com objetivos de aprendizagem, duração de 45-90 min., recursos necessários, introdução/aquecimento, desenvolvimento com atividades práticas/discussão, conclusão/avaliação formativa e adaptações/diferenciação pedagógica.',
        pedagogicalGoal:
          'Estruturar uma sessão completa com debate ativo, trabalho colaborativo e verificação formativa sobre os limites e responsabilidade na utilização da IA.',
      },
    ],
  },
  generators: [
    {
      id: 'plano-aula',
      number: 1,
      title: 'Plano de Aula',
      subtitle: 'Gera um plano de aula completo com base num tópico e objetivos curriculares.',
      pedagogicalDefinition:
        'Ferramenta que produz planos de aula detalhados, estruturados por fases pedagógicas, alinhados com metas de aprendizagem e estratégias de diferenciação.',
      parameters: [
        { label: 'Nível de Ensino', value: '5.º Ano' },
        { label: 'Disciplina / Tópico', value: 'Inglês - "Daily Routines"' },
        { label: 'Duração Prevista', value: '45 minutos' },
        { label: 'Conjunto de Padrões / Alinhamento', value: 'Aprendizagens Essenciais de Inglês 5.º ano' },
      ],
      examplePrompt:
        'Plano de aula de 45 minutos sobre "Daily Routines" para o 5.º ano de Inglês, com atividades orais, trabalho a pares e um jogo de consolidação de vocabulário, alinhado com as Aprendizagens Essenciais.',
      keyFeatures: [
        'Organização por momentos didáticos: Aquecimento, Desenvolvimento e Conclusão',
        'Sugestão de atividades orais comunicativas e jogos pedagógicos',
        'Inclusão de estratégias de apoio e extensão para diferenciação pedagógica',
      ],
    },
    {
      id: 'fichas-trabalho',
      number: 2,
      title: 'Gerador de Fichas de Trabalho',
      subtitle: 'Gerar uma ficha de trabalho com base num tópico ou conteúdo.',
      pedagogicalDefinition:
        'Ferramenta que cria automaticamente fichas de exercícios personalizadas com base num tema, objetivo ou texto fornecido.',
      parameters: [
        { label: 'Nível de Ensino', value: '2.º Ano a 3.º Ciclo (adaptável a qualquer nível)' },
        { label: 'Tipologia de Itens', value: 'Escolha múltipla, resposta curta, V/F com justificação' },
        { label: 'Recursos Gráficos', value: 'Possibilidade de incluir problemas contextualizados e ilustrações' },
      ],
      promptsList: [
        {
          subject: 'Ciências Naturais / Geografia (3.º Ciclo)',
          prompt:
            'Ficha de trabalho sobre as camadas da Terra com 5 questões de escolha múltipla, 2 de resposta curta e 1 de verdadeiro/falso com justificação.',
        },
        {
          subject: 'Matemática (2.º Ano - 1.º Ciclo)',
          prompt:
            'Ficha de trabalho para o 2.º ano sobre a tabuada do 2, 3 e 4, com problemas contextualizados do quotidiano infantil e ilustrações para pintar.',
        },
      ],
      keyFeatures: [
        'Equilíbrio entre questões de retenção e aplicação prática',
        'Adaptação do tom ao escalão etário dos estudantes',
        'Facilidade de exportação pronta para fotocópia ou publicação digital',
      ],
    },
    {
      id: 'questionario',
      number: 3,
      title: 'Questionário',
      subtitle: 'Gerar uma avaliação de múltipla escolha com base num texto ou tópico.',
      pedagogicalDefinition:
        'Ferramenta que gera questionários de escolha múltipla com base num texto, tópico ou página web, com possibilidade de ajustar o nível da taxonomia de Bloom.',
      parameters: [
        { label: 'Nível de Ensino', value: '9.º Ano' },
        { label: 'Número de Questões', value: '15 questões' },
        { label: 'Disciplina e Tópico', value: 'Matemática - Funções e Equações do 2.º Grau' },
        { label: 'Taxonomia / Dificuldade', value: 'Distribuição calibrada (fácil, médio e difícil)' },
        { label: 'Alinhamento Curricular', value: 'Aprendizagens Essenciais do 3.º Ciclo' },
      ],
      examplePrompt:
        'Cria um questionário de 15 questões de Matemática para o 9.º ano sobre funções e equações do 2.º grau com: 5 de cálculo direto, 5 de interpretação gráfica e 5 com distratores baseados em erros comuns dos alunos. Distribui por níveis fácil, médio e difícil, alinhando com as Aprendizagens Essenciais.',
      keyFeatures: [
        'Opções distratoras concebidas com base em concepções alternativas frequentes',
        'Classificação dos itens por níveis cognitivos de Bloom',
        'Solução e justificação imediata para cada alínea',
      ],
    },
    {
      id: 'conteudo-academico',
      number: 4,
      title: 'Conteúdo Académico',
      subtitle: 'Gerar conteúdo académico personalizado com base nos critérios da sua escolha.',
      pedagogicalDefinition:
        'Ferramenta que cria textos académicos e explicativos (resumos, fichas teóricas e glossários), adaptados ao nível da turma, com exemplos, analogias e questões para reflexão.',
      parameters: [
        { label: 'Nível de Ensino', value: '7.º Ano' },
        { label: 'Tipo de Conteúdo', value: 'Explicação detalhada com recurso a exemplos e diagramas' },
        { label: 'Comprimento do Texto', value: 'Médio a longo | 1000 palavras' },
        {
          label: 'Tema, Padrão, Objetivo',
          value:
            'Explicar o processo da fotossíntese, os seus componentes e a sua importância, recorrendo a exemplos práticos para facilitar a compreensão dos alunos.',
        },
      ],
      examplePrompt:
        'Desenvolve um conteúdo académico para alunos do 7.º ano sobre a fotossíntese, com explicações detalhadas, diagramas e exemplos do quotidiano. Comprimento médio a longo (aproximadamente 1000 palavras).',
      keyFeatures: [
        'Vocabulário rigoroso adaptado ao escalão etário',
        'Uso de analogias que tornam conceitos invisíveis em processos compreensíveis',
        'Secções de síntese e perguntas finais para guiar o estudo autónomo',
      ],
    },
    {
      id: 'rubricas',
      number: 5,
      title: 'Gerador de Rubrica',
      subtitle: 'Gere uma rubrica personalizada para qualquer tarefa.',
      pedagogicalDefinition:
        'Ferramenta que cria rubricas personalizadas para qualquer tarefa, projeto, atividade.',
      parameters: [
        { label: 'Nível de Ensino', value: '7.º Ano' },
        { label: 'Escala de Pontos', value: '5 níveis de desempenho (ex.: 1 a 5 ou Insuficiente a Excelente)' },
        {
          label: 'Padrão / Objetivo',
          value:
            'Os alunos serão capazes de identificar as principais partes do sistema digestivo e explicar, de forma simples, como acontece a digestão dos alimentos.',
        },
        {
          label: 'Descrição da Tarefa',
          value:
            'Apresentação oral (2 a 3 minutos) sobre o sistema digestivo humano. Devem indicar os órgãos principais (boca, estômago, intestinos...) e explicar a digestão.',
        },
        {
          label: 'Personalização Adicional (Opcional)',
          value: 'Foco na clareza expositiva oral, no rigor científico e na terminologia anatómica correta.',
        },
        { label: 'Conjunto de Padrões para Alinhar', value: 'Aprendizagens Essenciais de Ciências Naturais – 7.º ano' },
      ],
      examplePrompt:
        'Cria uma rubrica com escala de 5 pontos para avaliar uma apresentação oral (2-3 min) de Ciências Naturais no 7.º ano sobre o sistema digestivo humano. Critérios: identificação de órgãos, explicação da digestão dos alimentos, clareza expositiva e rigor científico.',
      keyFeatures: [
        'Descritores qualitativos transparentes para autoavaliação e heteroavaliação',
        'Facilita o feedback objetivo fundamentado em evidências de desempenho',
        'Alinhamento direto com os critérios de avaliação da disciplina',
      ],
    },
    {
      id: 'nivelador-texto',
      number: 6,
      title: 'Nivelador de Texto',
      subtitle: 'Nivelar qualquer texto para adaptá-lo ao nível de leitura/habilidades de um aluno.',
      pedagogicalDefinition:
        'Ferramenta que ajusta a complexidade de um texto (vocabulário, sintaxe e extensão) a diferentes níveis de leitura, mantendo o conteúdo essencial. Também pode gerar atividades de leitura diferenciadas.',
      parameters: [
        { label: 'Nível de Ensino Alvo', value: '8.º Ano (personalizável para qualquer ano ou nível CEFR)' },
        { label: 'Texto Original', value: 'Inserção de excerto textual ou inserção de ficheiros (DOCX / PDF)' },
        {
          label: 'Instrução de Diferenciação',
          value: 'Redução de jargão arcaico, encurtamento de orações subordinadas e manutenção das ideias-chave',
        },
      ],
      examplePrompt:
        'Simplifica este texto sobre a Revolução Industrial: reduz o vocabulário complexo, mantém as ideias principais e cria 3 perguntas de leitura com resposta curta para o 8.º ano.',
      keyFeatures: [
        'Suporta inserção direta de texto ou carregamento de ficheiros',
        'Garante acessibilidade e diferenciação pedagógica (DUA)',
        'Gera simultaneamente questões para testar a retenção da leitura simplificada',
      ],
    },
    {
      id: 'compreensao-conceitual',
      number: 7,
      title: 'Compreensão Conceitual',
      subtitle: 'Gere ideias sobre como ajudar seus alunos a desenvolver a compreensão conceitual.',
      pedagogicalDefinition:
        'Ferramenta que apoia o professor a planear estratégias para desenvolver a compreensão conceptual dos alunos sobre um determinado tema.',
      parameters: [
        { label: 'Nível de Ensino', value: '9.º Ano' },
        { label: 'Padrão / Tópico', value: 'Discurso direto e discurso indireto' },
        {
          label: 'Contexto Adicional (Opcional)',
          value:
            'Os alunos confundem os tempos verbais e a mudança de pronomes quando transformam discurso direto em indireto.',
        },
      ],
      examplePrompt:
        'Gera ideias pedagógicas e analogias para apoiar alunos do 9.º ano a desenvolver a compreensão conceptual sobre discurso direto e discurso indireto, superando a confusão comum com tempos verbais e mudança de pronomes.',
      keyFeatures: [
        'Diagnóstico proativo dos erros conceituais recorrentes',
        'Criação de pontes cognitivas entre a experiência intuitiva e a regra gramatical',
        'Sugestões de exercícios dinâmicos de comparação contrastiva',
      ],
    },
    {
      id: 'resumidor-youtube',
      number: 8,
      title: 'Resumidor de Vídeo do YouTube',
      subtitle: 'Resumir um vídeo do YouTube no comprimento que você escolher.',
      pedagogicalDefinition:
        'Ferramenta que transcreve vídeos do YouTube e gera um resumo conciso (ou um resumo por secções), uma lista de conceitos-chave e perguntas.',
      parameters: [
        { label: 'Entrada de Dados', value: 'URL / Link do vídeo do YouTube' },
        { label: 'Comprimento Escolhido', value: 'Resumo conciso, detalhado ou com carimbos temporais (timestamps)' },
        { label: 'Elementos Produzidos', value: 'Transcrição, resumo temático, conceitos-chave e perguntas de interpretação' },
      ],
      examplePrompt:
        'Resumir este vídeo educativo do YouTube em 3 blocos cronológicos com timestamps, destacando os 5 conceitos-chave e gerando 5 perguntas de verificação para os alunos responderem durante o visionamento.',
      keyFeatures: [
        'Poupança substancial de tempo na triagem de recursos audiovisuais',
        'Transformação de vídeos passivos em materiais de visionamento ativo com perguntas orientadoras',
        'Apoio a alunos com dificuldades de processamento auditivo através do texto transcrito',
      ],
    },
  ],
  studentChatbots: {
    title: 'MagicSchool - MagicStudent (Alunos)',
    badge: 'Para o Trabalho Autónomo e Seguro dos Alunos',
    description:
      'O MagicStudent é uma sala de aula virtual fechada onde o professor convida os alunos via código de turma, permitindo-lhes utilizar ferramentas e tutores de IA sem recolha de dados pessoais nem necessidade de criar contas de correio eletrónico externas.',
    chatbots: [
      {
        name: 'Tutor de IA',
        detail: 'Tira dúvidas pontuais em estudo autónomo com linguagem acessível (ex.: “Explica-me o que é a fotossíntese”).',
        color: 'blue',
      },
      {
        name: 'Assistente de Aprendizagem de IA',
        detail:
          'Abordagem pedagógica socrática: não fornece a resposta pronta; guia o raciocínio do aluno através de perguntas graduais.',
        color: 'emerald',
      },
      {
        name: 'Chatbot Personalizado',
        detail:
          'Configurado previamente pelo professor com documentos específicos da turma (manuais, sebentas ou textos do projeto).',
        color: 'violet',
      },
      {
        name: 'IA - Questões Éticas',
        detail:
          'Chatbot treinado estritamente com base no documento “Orientações Éticas para Educadores” (Comissão Europeia, 2022), focado na supervisão humana, transparência, equidade e bem-estar escolar.',
        color: 'amber',
      },
    ],
    ethicalNote:
      'O chatbot "IA - Questões Éticas" constitui um modelo de referência pedagógico internacional, assegurando que o aluno discute os desafios deontológicos dos algoritmos sem exposição a alucinações de dados abertos.',
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é o principal objetivo de um prompt bem formulado?',
    options: [
      'Garantir que a IA dá sempre respostas verdadeiras.',
      'Obter respostas mais claras, relevantes e adequadas ao contexto.',
      'Fazer a IA memorizar informações.',
      'Acelerar o processamento interno da IA.',
    ],
    correctAnswer: 1,
    explanation:
      'Um prompt bem formulado ajuda a obter respostas mais claras, relevantes e adequadas ao contexto.',
    conceptCovered: 'Objetivo de um Prompt Bem Formulado',
  },
  {
    id: 2,
    question: 'Qual é o fundamento tecnológico e lógico central da IA Generativa?',
    options: [
      'Bases de dados relacionais que memorizam e reproduzem respostas previamente guardadas.',
      'Redes neuronais profundas (Deep Learning) que calculam probabilidades estatísticas com base em padrões de treino.',
      'Sistemas periciais baseados em regras lógicas booleanas rígidas escritas por programadores.',
      'Motores de busca web que realizam cópias literais dos artigos mais visitados.',
    ],
    correctAnswer: 1,
    explanation:
      'A IA Generativa utiliza redes neuronais profundas (Deep Learning) e identifica padrões estatísticos em grandes volumes de dados (Big Data) para gerar respostas coerentes que resultam de cálculos de probabilidade.',
    conceptCovered: 'Conceito de IA Generativa',
  },
  {
    id: 3,
    question: 'Na analogia do processo de treino apresentada no Módulo, a que corresponde a aprendizagem de padrões?',
    options: [
      'A decorar integralmente cada receita do livro de culinária para a repetir sem erros.',
      'A comprar os ingredientes no supermercado sem saber como utilizá-los.',
      'A aprender a cozinhar percebendo como os sabores interagem (ex.: açúcar adoça, sal realça) sem memorizar cada receita.',
      'A provar a comida já confecionada apenas para validar a temperatura.',
    ],
    correctAnswer: 2,
    explanation:
      'O documento destaca o exemplo analógico de aprender a cozinhar: dados = receitas; aprendizagem = perceber regularidades e associações (que o açúcar adoça ou o sal realça sabores) sem necessidade de memorizar todas as receitas.',
    conceptCovered: 'Aprendizagem de Padrões (Ciclo de Funcionamento)',
  },
  {
    id: 4,
    question: 'Qual é a «Limitação Fundamental» dos modelos generativos assinalada como MUITO IMPORTANTE?',
    options: [
      'A incapacidade de gerar textos com mais de duas frases.',
      'A obrigatoriedade de necessitar de um microfone para processar áudio.',
      'Não compreende como um ser humano, não valida factos e não possui consciência: Resposta convincente ≠ Resposta correcta.',
      'A impossibilidade de responder em português de Portugal.',
    ],
    correctAnswer: 2,
    explanation:
      'O documento sublinha como advertência primordial: «Não compreende como um ser humano, não valida factos e não possui consciência. ■■ Resposta convincente ≠ Resposta correcta.»',
    conceptCovered: 'Limitação Fundamental dos Modelos Generativos',
  },
  {
    id: 5,
    question: 'Como operam os Modelos de Linguagem (LLMs) ao processar e predizer linguagem natural?',
    options: [
      'Fatiam o texto em tokens e usam o mecanismo de Atenção (Transformers) para predizer o próximo token mais provável.',
      'Traduzem diretamente cada letra para código morse antes de produzir a resposta.',
      'Consultam uma enciclopédia física digitalizada e leem os parágrafos linha a linha.',
      'Executam verificações lógicas formais em tempo real de cada facto com a comunidade científica.',
    ],
    correctAnswer: 0,
    explanation:
      'Os LLMs fatiam o texto em unidades semânticas (tokens), utilizam a arquitetura Transformer com mecanismo de Atenção para relacionar palavras distantes e calculam a predição do próximo token com base no contexto anterior.',
    conceptCovered: 'Funcionamento dos LLMs',
  },
  {
    id: 6,
    question: 'Quais são os quatro elementos estruturais essenciais na formulação de um prompt eficaz?',
    options: [
      'Introdução, Desenvolvimento, Conclusão e Bibliografia.',
      'Contexto (Quem é a IA), Tarefa (O que deve fazer), Restrições (O que evitar) e Formato (Como apresentar).',
      'Nome do utilizador, morada da escola, ano letivo e data de nascimento.',
      'Código do modelo, temperatura matemática, top-k e chave de autenticação.',
    ],
    correctAnswer: 1,
    explanation:
      'O documento define como Elementos Principais de um Prompt: Contexto (ex.: "Age como um historiador"), Tarefa (ex.: "Resume este texto"), Restrições (ex.: "Não uses termos técnicos") e Formato (ex.: "Em tabela", "Em tópicos").',
    conceptCovered: 'Elementos Principais de um Prompt',
  },
  {
    id: 7,
    question: 'Em que consiste a técnica de "Few-Shot Prompting" na elaboração de instruções pedagógicas?',
    options: [
      'Em limitar o prompt a menos de cinco palavras no total.',
      'Em incluir exemplos concretos para auxiliar o modelo a seguir um padrão específico de resposta.',
      'Em reiniciar a conversa a cada pergunta enviada.',
      'Em exigir que o modelo responda com imagens em vez de texto.',
    ],
    correctAnswer: 1,
    explanation:
      'Few-Shot Prompting consiste em incluir exemplos concretos para orientar o modelo a seguir um padrão consistente de resposta (como no exemplo do PDF de classificação de frases em Verdadeiro ou Falso).',
    conceptCovered: 'Técnicas de Formulação de Prompts',
  },
  {
    id: 8,
    question: 'Na Atividade 1 ("O Prompt de Ouro"), quais são os três eixos em que o aluno deve refinar o texto?',
    options: [
      'Ortografia, Margens e Cor da fonte.',
      'Tom (engraçado/misterioso), Estilo (simplificar vocabulário) e Estrutura (mudar final/incluir diálogo).',
      'Número de páginas, tipo de papel e encadernação.',
      'Tradução para inglês, francês e espanhol.',
    ],
    correctAnswer: 1,
    explanation:
      'Na Etapa 2 de "O Prompt de Ouro", o aluno deve instruir a IA a alterar o texto pelo menos 3 vezes, focando-se no Tom, no Estilo e na Estrutura.',
    conceptCovered: 'Atividades Práticas em Sala de Aula',
  },
  {
    id: 9,
    question: 'Qual é a base documental específica do chatbot "IA - Questões Éticas" do MagicSchool.ai?',
    options: [
      'A legislação comercial geral dos Estados Unidos da América.',
      'O documento "Orientações Éticas para Educadores" (Comissão Europeia, 2022).',
      'Um conjunto arbitrário de fóruns online da Internet.',
      'Os manuais escolares do 1.º ciclo.',
    ],
    correctAnswer: 1,
    explanation:
      'O chatbot de Questões Éticas para alunos foi programado exclusivamente com base no documento "Orientações Éticas para Educadores" (Comissão Europeia, 2022), focando-se na ação humana, transparência, equidade e bem-estar.',
    conceptCovered: 'MagicSchool.ai - Student Chatbots',
  },
];

export const BIBLIOGRAPHIC_REFERENCES: BibliographicReference[] = [
  {
    id: 'ref-1',
    authors: 'AP Portugal',
    year: '2024',
    title: 'Prompt engineering: Maximize a IA generativa na sua organização',
    publication: 'Blog AP Portugal.',
    category: 'prompts',
  },
  {
    id: 'ref-2',
    authors: 'Bommasani, R. et al.',
    year: '2021',
    title: 'On the opportunities and risks of foundation models',
    publication: 'Stanford University.',
    category: 'ia-geral',
  },
  {
    id: 'ref-3',
    authors: 'DataCamp',
    year: 'n.d.',
    title: 'Guia de engenharia de prompts no ChatGPT',
    publication: 'DataCamp Community.',
    category: 'prompts',
  },
  {
    id: 'ref-4',
    authors: 'European Commission',
    year: '2022',
    title: 'Ethical guidelines on the use of artificial intelligence (AI) and data in teaching and learning for educators',
    publication: 'Publications Office of the EU.',
    category: 'etica',
  },
  {
    id: 'ref-5',
    authors: 'Holmes, W., Deusdad, B., & Redecker, C.',
    year: '2021',
    title: 'Artificial intelligence in education: Promises and implications for teaching and learning',
    publication: 'European Commission – Joint Research Centre (JRC).',
    category: 'etica',
  },
  {
    id: 'ref-6',
    authors: 'Kasneci, E. et al.',
    year: '2023',
    title: 'ChatGPT for good? On opportunities and challenges of large language models for education',
    publication: 'Learning and Individual Differences.',
    category: 'ia-geral',
  },
  {
    id: 'ref-7',
    authors: 'Khosravi, H. et al.',
    year: '2023',
    title: 'Generative AI in education: Opportunities, challenges, and policy implications',
    publication: 'Computers and Education: Artificial Intelligence.',
    category: 'ia-geral',
  },
  {
    id: 'ref-8',
    authors: 'Knoth, S.',
    year: '2024',
    title: 'Studies on AI literacy and prompt engineering',
    publication: 'arXiv:2401.xxxxx.',
    category: 'prompts',
  },
  {
    id: 'ref-9',
    authors: 'Luckin, R.',
    year: '2024',
    title: 'AI for learning: Why it matters and how to use it',
    publication: 'Routledge / Educational Studies.',
    category: 'ia-geral',
  },
  {
    id: 'ref-10',
    authors: 'Luckin, R., Holmes, W., Griffiths, M., & Forcier, L. B.',
    year: '2016',
    title: 'Intelligence unleashed: An argument for AI in education',
    publication: 'Pearson Education.',
    category: 'ia-geral',
  },
  {
    id: 'ref-11',
    authors: 'Mollick, E.',
    year: '2024',
    title: 'Co-intelligence: Living and working with AI',
    publication: 'Penguin Press.',
    category: 'ia-geral',
  },
  {
    id: 'ref-12',
    authors: 'OECD',
    year: '2024',
    title: 'Using artificial intelligence in schools: A focus on generative AI',
    publication: 'OECD Publishing, Paris.',
    category: 'relatorios',
  },
  {
    id: 'ref-13',
    authors: 'OpenAI',
    year: '2023',
    title: 'GPT-4 technical report',
    publication: 'arXiv:2303.08774.',
    category: 'ia-geral',
  },
  {
    id: 'ref-14',
    authors: 'OpenAI',
    year: 'n.d.',
    title: 'Best practices for prompt engineering with ChatGPT',
    publication: 'OpenAI Documentation.',
    category: 'prompts',
  },
  {
    id: 'ref-15',
    authors: 'Prompt Engineering Guide',
    year: 'n.d.',
    title: 'Prompt engineering guide',
    publication: 'promptingguide.ai / DAIR.AI.',
    category: 'prompts',
  },
  {
    id: 'ref-16',
    authors: 'Schulhoff, S.',
    year: '2024',
    title: 'A systematic survey of prompt engineering techniques',
    publication: 'arXiv:2402.07927.',
    category: 'prompts',
  },
  {
    id: 'ref-17',
    authors: 'UNESCO',
    year: '2021',
    title: 'AI and education: Guidance for policy-makers',
    publication: 'UNESCO Publishing, Paris.',
    category: 'relatorios',
  },
  {
    id: 'ref-18',
    authors: 'UNESCO',
    year: '2023',
    title: 'Guidance for generative AI in education and research',
    publication: 'UNESCO Publishing, Paris.',
    category: 'relatorios',
  },
  {
    id: 'ref-19',
    authors: 'UNESCO',
    year: '2024',
    title: 'Artificial intelligence and education: A global report',
    publication: 'UNESCO Publishing, Paris.',
    category: 'relatorios',
  },
];

export const LLM_TOOLS_LIST = [
  {
    name: 'ChatGPT',
    organization: 'OpenAI',
    role: 'Modelo de Linguagem e Chatbot',
    description: 'Utilizado para redação de textos, ideação pedagógica, diálogos socráticos e criação de materiais didáticos.',
    badge: 'OpenAI',
  },
  {
    name: 'Google Gemini',
    organization: 'Google',
    role: 'Modelo Multimodal e Chatbot',
    description: 'Capacidade multimodal nativa para análise de imagens, esquemas, documentos científicos e textos educativos longos.',
    badge: 'Google',
  },
  {
    name: 'Microsoft Copilot',
    organization: 'Microsoft',
    role: 'Assistente Integrado',
    description: 'Integração no ecossistema educativo com pesquisa na web em tempo real e produção de diapositivos e resumos.',
    badge: 'Microsoft',
  },
  {
    name: 'Claude',
    organization: 'Anthropic',
    role: 'Modelo de Linguagem Focado em Rigor e Nuance',
    description: 'Excelente capacidade de processamento de textos extensos, análise de manuais escolares e escrita cuidada.',
    badge: 'Anthropic',
  },
  {
    name: 'NotebookLM',
    organization: 'Google',
    role: 'Caderno de Estudo e Síntese com Fontes Confiáveis',
    description: 'Baseia as respostas exclusivamente nos documentos fornecidos pelo professor (PDFs, notas de aula, manuais), minimizando alucinações.',
    badge: 'Google',
  },
  {
    name: 'MagicSchool.ai',
    organization: 'MagicSchool',
    role: 'Plataforma Educativa Integrada',
    description: 'Dezenas de geradores especializados para apoio à docência (Raina, planos de aula, rubricas, quizzes e chatbots para alunos).',
    badge: 'Específico para Professores',
  },
];
