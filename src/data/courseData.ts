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
  courseTitle: 'Inteligência Artificial na Educação',
  moduleTitle: 'Módulo 2: IA Generativa e Prompts',
  subtitle: 'Transcrição na Íntegra e Estruturação Pedagógica do Conteúdo',
  author: 'Carla Oliveira',
  date: '26 de janeiro de 2026',
  originalTitle: 'Modulo2 | Genially',
  scope: 'Formação em Inteligência Artificial na Educação',
  motto: 'Explorar • Experimentar • Aplicar na Educação',
  quote: {
    text: 'A IA generativa é uma aliada poderosa para potenciar a criatividade, a inclusão e a qualidade da aprendizagem.',
    author: 'Princípio Pedagógico do Curso',
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
    description: 'As seis etapas do ciclo de funcionamento e a limitação fundamental.',
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
    title: '6. Exemplos Práticos por Disciplina e Área',
    shortTitle: '6. Exemplos Curriculares',
    iconName: 'BookOpen',
    description: 'Prompts reais para Português, Matemática, História, Ciências e Multimédia.',
    category: 'prompts',
  },
  {
    id: 'atividades-sala',
    number: 7,
    title: '7. Atividades Práticas em Sala de Aula',
    shortTitle: '7. Atividades em Aula',
    iconName: 'Users',
    description: 'As 4 atividades completas com etapas, objetivos e critérios de avaliação.',
    category: 'pratica',
  },
  {
    id: 'magicschool',
    number: 8,
    title: '8. Exploração da Ferramenta MagicSchool.ai',
    shortTitle: '8. MagicSchool.ai',
    iconName: 'Wand2',
    description: 'Raina, Student Chatbots e os 8 geradores especializados.',
    category: 'recursos',
  },
  {
    id: 'desafio-final',
    number: 9,
    title: 'Desafio Prático Final do Módulo 2',
    shortTitle: 'Desafio Final & Portfólio',
    iconName: 'Award',
    description: 'Planeamento, registo de prompts e entrega do recurso pedagógico.',
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
  {
    id: 'simuladores-quizzes',
    number: 11,
    title: 'Laboratório de Simuladores (Índice Geral)',
    shortTitle: 'Índice de Simuladores',
    iconName: 'Sliders',
    description: 'Catálogo dos 5 simuladores didáticos e questionário formativo.',
    category: 'pratica',
  },
  {
    id: 'simulador-modelos',
    number: 12,
    title: 'Simulador do Funcionamento dos Modelos',
    shortTitle: 'Simulador de Modelos',
    iconName: 'Cpu',
    description: 'Exploração passo a passo do ciclo das 6 fases e do cálculo de tokens.',
    category: 'pratica',
  },
  {
    id: 'simulador-difusao',
    number: 13,
    title: 'Simulador de Difusão e Geração de Imagens',
    shortTitle: 'Simulador de Difusão',
    iconName: 'Layers',
    description: 'Denoising progressivo a partir de ruído gaussiano orientado por prompts.',
    category: 'pratica',
  },
  {
    id: 'laboratorio-prompts',
    number: 14,
    title: 'Laboratório de Engenharia de Prompts',
    shortTitle: 'Laboratório de Prompts',
    iconName: 'Terminal',
    description: 'Bancada interativa para composição, teste e comparação vago vs. otimizado.',
    category: 'pratica',
  },
  {
    id: 'quiz-interativo',
    number: 15,
    title: 'Questionário Interativo Formativo',
    shortTitle: 'Questionário Formativo',
    iconName: 'HelpCircle',
    description: 'Teste formativo com feedback imediato e justificação pedagógica.',
    category: 'pratica',
  },
  {
    id: 'criador-recursos',
    number: 16,
    title: 'Criador de Recursos Pedagógicos com IA',
    shortTitle: 'Criador de Recursos',
    iconName: 'FileCheck',
    description: 'Assistente para criação de planos, quizzes, fichas e rubricas.',
    category: 'pratica',
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
    'A plataforma MagicSchool.ai é uma das ferramentas mais completas de IA dedicada à Educação, oferecendo dezenas de geradores especializados para professores e alunos.',
  raina: {
    title: 'MagicSchool - Raina (Assistente do Professor)',
    description:
      'Assistente de chat integrado para professores, desenhado para criar conteúdos interativos e personalizar materiais.',
    examples: [
      {
        name: 'Exemplo 1 (Poema Rap)',
        prompt:
          '“Cria um poema de rap inspirador sobre a amizade verdadeira com 3 estrofes, rimas consistentes e metáforas.”',
        context: 'Excelente para atividades de Português e Educação para a Cidadania.',
      },
      {
        name: 'Exemplo 2 (Plano Ético)',
        prompt:
          '“Cria um plano de aula sobre a utilização ética da IA para o 2.º ciclo (45-90 min) com atividades práticas.”',
        context: 'Alinhado com a reflexão deontológica da tecnologia nas escolas.',
      },
    ],
  },
  studentChatbots: {
    title: 'MagicSchool - Student Chatbots (Alunos)',
    description: 'Assistentes configuráveis desenhados para interação pedagógica segura com os alunos.',
    chatbots: [
      {
        name: 'Tutor de IA',
        detail: 'Tira dúvidas pontuais em estudo autónomo (ex.: “Explica-me o que é a fotossíntese”).',
      },
      {
        name: 'Assistente de Aprendizagem de IA',
        detail:
          'Respostas guiadas e pedagógicas que incentivam o raciocínio passo a passo em vez de dar a resposta final.',
      },
      {
        name: 'Chatbot Personalizado',
        detail: 'Limitado a um tema ou disciplina específico definido previamente pelo professor.',
      },
      {
        name: 'IA - Questões Éticas',
        detail:
          'Chatbot programado exclusivamente com base no documento “Orientações Éticas para Educadores” (Comissão Europeia, 2022), abordando a ação humana, transparência, equidade e bem-estar, sem adicionar fontes externas.',
      },
    ],
  },
  specificGenerators: [
    {
      id: 'fichas',
      name: 'Gerador de Fichas de Trabalho',
      description: 'Exercícios personalizados.',
      example: 'Camadas da Terra; tabuada do 2, 3 e 4 com pequenos problemas.',
      promptPattern: 'Gera uma ficha de trabalho diferenciada sobre [TEMA] com 3 níveis de dificuldade.',
    },
    {
      id: 'questionario',
      name: 'Questionário',
      description: 'Provas automáticas de escolha múltipla.',
      example:
        '15 questões de funções afins/quadráticas do 9.º ano com distratores baseados em erros frequentes dos alunos.',
      promptPattern: 'Cria um quiz de escolha múltipla com 10 questões, justificando a opção correta e os distratores.',
    },
    {
      id: 'plano-aula',
      name: 'Plano de Aula',
      description: 'Planos detalhados alinhados com Aprendizagens Essenciais.',
      example: 'Daily Routines em Inglês do 5.º ano.',
      promptPattern: 'Desenvolve um plano de aula completo de 50 minutos alinhado com as Aprendizagens Essenciais.',
    },
    {
      id: 'conteudo-academico',
      name: 'Conteúdo Académico',
      description: 'Textos explicativos longos (~1000 palavras) com analogias e diagramas.',
      example: 'Fotossíntese para 7.º ano.',
      promptPattern: 'Escreve um texto expositivo rigoroso com recurso a analogias pedagógicas claras.',
    },
    {
      id: 'rubricas',
      name: 'Gerador de Rubricas',
      description: 'Matrizes de avaliação com escalas e critérios bem definidos.',
      example: 'Apresentação oral sobre o sistema digestivo no 7.º ano.',
      promptPattern: 'Constrói uma rubrica de avaliação formativa em matriz de 4 níveis de desempenho.',
    },
    {
      id: 'nivelador-texto',
      name: 'Nivelador de Texto',
      description: 'Ajuste da complexidade sintática e do vocabulário, mantendo a essência.',
      example: 'Revolução Industrial.',
      promptPattern: 'Simplifica a complexidade léxica deste texto mantendo integralmente o rigor conceptual.',
    },
    {
      id: 'compreensao-conceitual',
      name: 'Compreensão Conceitual',
      description: 'Estratégias para ultrapassar erros comuns.',
      example: 'Discurso direto versus indireto no 9.º ano.',
      promptPattern: 'Identifica os erros conceptuais mais frequentes em [CONTEÚDO] e propõe estratégias de remediação.',
    },
    {
      id: 'resumidor-youtube',
      name: 'Resumidor de Vídeo do YouTube',
      description: 'Transcrição de vídeos, resumos por secções, conceitos-chave e perguntas.',
      example: 'Transcrição de vídeo educativo, resumos por secções temáticas, conceitos-chave e perguntas de verificação.',
      promptPattern: 'Transcreve o vídeo, divide em blocos temáticos e formula 5 perguntas de verificação de leitura.',
    },
  ],
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
