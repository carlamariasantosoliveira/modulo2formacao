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
  date: '28 de outubro de 2026',
  scope:
    'Documento estruturado para o Curso de Inteligência Artificial na Educação. Formato digital autónomo concebido para a formação contínua de professores a distância.',
  motto: 'Explorar • Experimentar • Aplicar na Educação',
  quote: {
    text: 'A tecnologia pode ampliar as possibilidades pedagógicas, mas a sua utilização deve responder a objetivos de aprendizagem, critérios de qualidade e necessidades concretas dos alunos.',
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
  objectiveEvidenceMapping: [
    {
      outcome: 'Distinção conceptual (modelo, interface e sistema)',
      instrument: 'Questionário formativo e análise de arquiteturas',
      criteria: 'Identificação correta dos componentes e limites de cada camada',
    },
    {
      outcome: 'Conceção de prompts estruturados',
      instrument: 'Laboratório prático de prompts (Atividade de Grupo)',
      criteria: 'Inclusão dos 4 elementos estruturais com critérios de verificação explícitos',
    },
    {
      outcome: 'Auditoria crítica de afirmações',
      instrument: 'Atividade "O Prompt de Ouro" e simulação de limitações',
      criteria: 'Confronto factual demonstrado com fontes primárias e deteção de incongruências',
    },
    {
      outcome: 'Conformidade ética e RGPD',
      instrument: 'Protocolo de boas práticas e análise de cenários',
      criteria: 'Minimização de dados, ausência de dados biométricos/pessoais de menores e consentimento',
    },
    {
      outcome: 'Transparência e validação pedagógica',
      instrument: 'Ficha de partilha no Moodle e rubrica de avaliação',
      criteria: 'Declaração explícita de uso de IA e alinhamento verificado com as Aprendizagens Essenciais',
    },
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
    title: '3. Tipos de Modelos e Ferramentas',
    shortTitle: '3. Tipos de Modelos e Ferramentas',
    iconName: 'Layers',
    description: 'Texto (LLMs), Imagem, Áudio/Voz, Vídeo, Multimodais e Ferramentas.',
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
    title: '5. Formulação de Prompts',
    shortTitle: '5. Formulação de Prompts',
    iconName: 'Sparkles',
    description: 'As 8 estratégias com comparação integral entre prompts vagos e otimizados.',
    category: 'prompts',
  },
  {
    id: 'exemplos-disciplina',
    number: 6,
    title: '6. Exemplo de Prompts',
    shortTitle: '6. Exemplo de Prompts',
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
    title: '8. Ideias de Atividade a dinamizar com os alunos em contexto de sala de aula',
    shortTitle: '8. Ideias de Atividades',
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
    title: '10. Atividade Prática',
    shortTitle: '10. Atividade Prática',
    iconName: 'Users',
    description: 'Atividade prática de grupo: laboratório de escrita, teste e melhoria de prompts (45 min).',
    category: 'pratica',
  },
  {
    id: 'ferramentas-referencias',
    number: 11,
    title: 'Referências Bibliográficas e Ferramentas Usadas',
    shortTitle: 'Referências e Ferramentas',
    iconName: 'FileText',
    description: 'Catálogo de ferramentas e as 19 referências científicas completas.',
    category: 'recursos',
  },
];


export const PROMPT_ELEMENTS = [
  {
    label: 'Contexto / Papel Solicitado',
    sublabel: 'Papel ou perspetiva pretendida (opcional)',
    description:
      'Indica a perspetiva, o registo ou o enquadramento temático pretendido. Orienta o tom e o vocabulário, mas não confere competências pedagógicas ao sistema nem substitui a validação docente.',
    example: '“Enquadra a resposta no âmbito do programa curricular de História do 9.º ano”',
    color: 'blue',
  },
  {
    label: 'Tarefa',
    sublabel: 'O que deve fazer?',
    description: 'Identifica a ação direta, o conteúdo e o produto pedagógico pretendido.',
    example: '“Elabora uma proposta de guião de debate com três perspetivas argumentativas fundamentadas”',
    color: 'green',
  },
  {
    label: 'Restrições e Critérios',
    sublabel: 'O que deve evitar e que regras cumprir?',
    description: 'Limites de extensão, termos proibidos, salvaguardas éticas e critérios de verificação factual.',
    example: '“Usa apenas terminologia do manual adotado; não inventes factos e sinaliza lacunas com [CONFIRMAR]”',
    color: 'amber',
  },
  {
    label: 'Formato',
    sublabel: 'Como apresentar a resposta?',
    description: 'Organização visual da resposta (tópicos, tabela comparativa, grelha com rubrica, código).',
    example: '“Em tabela com colunas para Afirmação, Evidência e Fonte Documental”',
    color: 'rose',
  },
];

export const PROMPT_TECHNIQUES: PromptTechnique[] = [
  {
    id: 1,
    name: '1. Clareza e Especificidade',
    description:
      'Instruções claras podem melhorar a adequação da resposta ao objetivo pedagógico, mas não garantem exatidão factual nem eliminam alucinações. É indispensável verificar afirmações importantes em fontes independentes e adequadas.',
    vaguePrompt: 'Fala sobre sustentabilidade.',
    vagueContext: 'Gera um texto abstrato, longo e sem foco concreto aplicável à realidade escolar.',
    optimizedPrompt:
      'Apresenta três propostas de práticas de sustentabilidade ambiental aplicáveis ao espaço físico de uma escola do 3.º ciclo e fundamenta a relevância pedagógica de cada uma com base nas metas da Estratégia Nacional de Educação para a Cidadania.',
    optimizedNotes:
      'Define o número exato de propostas (3), o contexto delimitado (escola do 3.º ciclo) e o referencial pedagógico formal para justificação.',
  },
  {
    id: 2,
    name: '2. Fornecer Contexto Relevante',
    description:
      'Indicar o público-alvo, os pré-requisitos e a finalidade educativa ajuda o modelo a calibrar o registo e a profundidade concetual. Não garante, contudo, adequação curricular automática.',
    vaguePrompt: 'Explica o que é a inteligência artificial.',
    vagueContext: 'Resposta genérica que oscila entre a complexidade técnica e a simplificação infantil.',
    optimizedPrompt:
      'Explica o conceito de inteligência artificial a alunos do 8.º ano, numa atividade introdutória de TIC. Identifica três conceitos essenciais, apresenta um exemplo do quotidiano e uma limitação dos sistemas de IA. Termina com duas questões de reflexão. Distingue factos de exemplos ilustrativos e utiliza terminologia adequada ao nível de ensino.',
    optimizedNotes:
      'Especifica público (8.º ano), momento didático (introdução de unidade), estilo (analogias do dia a dia) e organização estruturada.',
  },
  {
    id: 3,
    name: '3. Definir Estrutura e Formato de Saída',
    description:
      'Especificar estruturas claras (guiões, tabelas com critérios, checklists) facilita a leitura e a integração curricular. Requer confirmação e adaptação docente face às Aprendizagens Essenciais, ao perfil da turma e aos objetivos da aula.',
    vaguePrompt: 'Explica equações do 1.º grau.',
    vagueContext: 'Texto contínuo sem distinção evidente entre passos operatórios e fundamentos algébricos.',
    optimizedPrompt:
      'Apresenta um guião para a resolução de equações do 1.º grau com parêntesis. Explicita cada transformação algébrica e a propriedade de equivalência utilizada. Indica o conjunto de referência e verifica a solução por substituição na equação original. Se existirem casos sem solução ou com infinitas soluções, distingue-os.',
    optimizedNotes:
      'Exige uma estrutura sequencial com justificação formal das propriedades, fornecendo uma base didática a rever e validar pelo professor.',
  },
  {
    id: 4,
    name: '4. Few-Shot Prompting (Exemplificar)',
    description:
      'Os exemplos fornecidos podem orientar o formato e o padrão de resposta. A sua qualidade influencia a orientação dada ao modelo, mas exemplos incorretos ou ambíguos podem propagar erros. Verifique os exemplos antes de os utilizar.',
    vaguePrompt: 'Classifica as frases como verdadeiras ou falsas.',
    vagueContext: 'O modelo pode adotar critérios díspares, inventar justificações desnecessárias ou alterar a nomenclatura solicitada.',
    optimizedPrompt:
      'Classifica as seguintes afirmações sobre termodinâmica e física como Verdadeiras ou Falsas, indicando uma frase de evidência científica, seguindo estritamente o modelo:\n\nExemplo 1: Frase: A Terra completa uma rotação sobre o seu eixo em aproximadamente 24 horas. Classificação: Verdadeira (evidência: movimento de rotação diurno).\nExemplo 2: Frase: Água pura ferve aproximadamente a 100 °C à pressão padrão de 1 atm. Classificação: Verdadeira (evidência: ponto de ebulição da água à pressão atmosférica ao nível do mar).\n\nAgora classifica as afirmações seguintes: ...',
    optimizedNotes:
      'Exemplos científicos rigorosos orientam o formato e evitam a propagação de erros concetuais.',
  },
  {
    id: 5,
    name: '5. Papel ou Perspetiva Solicitada (Opcional)',
    description:
      'Pode indicar a perspetiva ou o registo pretendido (ex.: explicação didática para o 9.º ano). Isso orienta o tom, a ênfase e o vocabulário, mas não confere qualificações pedagógicas ao sistema nem assegura por si só adequação curricular sem validação humana.',
    vaguePrompt: 'Explica o que é um texto argumentativo.',
    vagueContext: 'Produz uma definição enciclopédica desprovida de critérios operatórios de escrita.',
    optimizedPrompt:
      'Prepara um recurso didático para o 9.º ano de Português sobre o texto argumentativo. Apresenta uma estrutura possível, identificando tese, argumentos fundamentados, eventual contra-argumento e conclusão. Inclui um exemplo anotado e três critérios de avaliação. Distingue os elementos essenciais das opções estruturais e confirma a adequação ao género textual e à tarefa proposta.',
    optimizedNotes:
      'Orienta o registo sem promessas irrealistas de autoridade, exigindo os descritores formais do género textual para verificação docente.',
  },
  {
    id: 6,
    name: '6. Iteração com Critério de Paragem',
    description:
      'A reformulação sucessiva pode melhorar a resposta face aos critérios definidos, mas não garante maior exatidão nem constitui, por si só, uma validação dos factos. Recomenda-se um ciclo de revisão com critérios explícitos, comparação com o texto de origem, verificação independente através de fontes ou procedimentos adequados à tarefa e decisão fundamentada sobre a conclusão do trabalho.',
    vaguePrompt: 'Resume o texto. (Aceitar passivamente o primeiro resultado)',
    vagueContext: 'Aceitação acrítica da primeira saída gerada, que pode omitir nuances fundamentais ou introduzir extrapolações.',
    optimizedPrompt:
      'Resume o texto em 150 palavras, preservando as duas teses principais e a distinção entre correlação e causalidade.\n\nCompara o resumo com o original. Identifica omissões, alterações de sentido ou afirmações sem suporte e revê o texto, se necessário.\n\nCritério de conclusão: fidelidade ao original, cumprimento da extensão solicitada e ausência de alterações conceptuais não justificadas. Regista os aspetos que não foi possível confirmar.',
    optimizedNotes:
      'Apresenta um ciclo controlado de melhoria baseado na verificação de fidelidade ao texto de origem, com critério explícito de paragem.',
  },
  {
    id: 7,
    name: '7. Solicitar Referências e Indicação de Incerteza',
    description:
      'As referências fornecidas pelo modelo devem ser tratadas como pistas de pesquisa. Confirme a existência da publicação, os dados bibliográficos e a correspondência entre a fonte original e a afirmação. Pedir referências ou uma autoverificação não garante autenticidade nem veracidade.',
    vaguePrompt: 'Explica as causas das alterações climáticas.',
    vagueContext: 'Sem restrições de verificação, o modelo pode citar estudos fictícios com aparência plausível ou atribuir afirmações a autores inexistentes.',
    optimizedPrompt:
      'Identifica os principais fatores responsáveis pelo aumento da temperatura média global, distinguindo a influência humana das variações naturais.\n\nUtiliza como referência os relatórios de avaliação do IPCC. Para cada afirmação relevante, indica o relatório, a secção e a página, quando disponíveis.\n\nNão inventes referências nem dados bibliográficos. Se não conseguires confirmar uma fonte ou estabelecer a correspondência entre a afirmação e o documento, assinala «por verificar».\n\nDistingue as conclusões sustentadas pela avaliação científica das incertezas ou limitações identificadas nas fontes.',
    optimizedNotes:
      'Exige alinhamento com organismos científicos de referência (IPCC) e explicita a autorização para declarar incerteza, alertando o utilizador para a necessidade de conferência cruzada.',
  },
  {
    id: 8,
    name: '8. Revisão de Clareza e Preservação de Sentido',
    description:
      'Pode solicitar revisão textual ao sistema para melhorar a clareza sintática e a acessibilidade lexical. Instrua expressamente o modelo a marcar as alterações efetuadas, a preservar integralmente o significado original e a não inventar novos factos ou citações.',
    vaguePrompt: 'Escreve um texto sobre a água. (Aceitar sem revisão)',
    vagueContext: 'Risco de aceitar um texto com construções passivas em excesso ou terminologia desajustada à faixa etária.',
    optimizedPrompt:
      'Revê o seguinte excerto pedagógico destinado ao 6.º ano: simplifica as orações subordinadas longas e melhora a coesão frásica, sem alterar os factos científicos nem acrescentar conceitos não mencionados. Lista no final as três principais alterações realizadas e a respetiva justificação.',
    optimizedNotes:
      'Separa claramente a revisão estilística e sintática da validação científica, exigindo a prestação de contas sobre o que foi alterado.',
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
      '«Elabora um guião didático sobre o texto argumentativo para alunos do 9.º ano. Apresenta uma estrutura possível, identificando a tese, os argumentos e respetiva fundamentação, e a conclusão. Quando adequado ao tema, inclui um contra-argumento e a sua refutação. Apresenta um exemplo comentado e propõe três critérios para uma rubrica de avaliação formativa. Confirma a adequação do guião às Aprendizagens Essenciais e às características da tarefa antes de o utilizar.»',
    keyAspects: [
      'Estrutura formal completa (tese, argumentos com fundamentação, refutação, conclusão)',
      'Exemplo comentado com critérios para rubrica formativa',
      'Confirmação com as Aprendizagens Essenciais e a tarefa',
    ],
  },
  {
    id: 'matematica-7',
    discipline: 'Matemática',
    grade: '7.º Ano',
    title: 'Equações do 1.º Grau',
    category: 'curriculo',
    prompt:
      '«Explica, passo a passo, a resolução de equações do 1.º grau com uma incógnita para alunos do 7.º ano. Justifica cada transformação algébrica com a propriedade de equivalência utilizada. Apresenta dois exemplos resolvidos e verifica cada solução por substituição na equação original. Quando aplicável, distingue equações com uma solução, com infinitas soluções e sem solução. Indica o conjunto de referência considerado e solicita a verificação independente dos cálculos.»',
    keyAspects: [
      'Justificação formal pelas propriedades de equivalência',
      'Verificação obrigatória por substituição na equação original',
      'Distinção de casos de soluções e conjunto de referência',
      'Verificação independente dos cálculos',
    ],
  },
  {
    id: 'historia-9',
    discipline: 'História',
    grade: '9.º Ano',
    title: 'Revolução Francesa',
    category: 'curriculo',
    prompt:
      '«Explica as principais causas e etapas iniciais da Revolução Francesa para alunos do 9.º ano. Distingue fatores estruturais, circunstâncias conjunturais e acontecimentos políticos de 1789, estabelecendo relações de causalidade sem reduzir o processo a uma causa única. Distingue a convocação dos Estados Gerais, a formação da Assembleia Nacional e os acontecimentos posteriores. Confirma datas, conceitos e interpretações com o manual adotado e fontes históricas credíveis.»',
    keyAspects: [
      'Distinção entre fatores estruturais, conjunturais e acontecimentos de 1789',
      'Relações de causalidade sem reduzir a causa única',
      'A revisão pelo próprio modelo não substitui a verificação com fontes históricas credíveis; a autorrevisão da IA não garante rigor histórico',
    ],
  },
  {
    id: 'ciencias-8',
    discipline: 'Ciências Naturais',
    grade: '8.º Ano',
    title: 'Fotossíntese',
    category: 'curriculo',
    prompt:
      '«Explica a fotossíntese para alunos do 8.º ano, abordando a função da luz, dos pigmentos fotossintéticos, da água e do dióxido de carbono na produção de matéria orgânica e na libertação de oxigénio. Apresenta a equação global simplificada em palavras e símbolos, identificando os reagentes, os produtos e a energia luminosa. Distingue esta representação global das etapas bioquímicas do processo e confirma a terminologia e o nível de detalhe com o currículo e o manual adotado.»',
    keyAspects: [
      'Função da luz, pigmentos, água e CO2 na produção orgânica e O2',
      'Equação global simplificada em palavras e símbolos (reagentes e produtos)',
      'Confirmação da terminologia e nível de detalhe com o currículo e manual adotado',
    ],
  },
  {
    id: 'imagem-5',
    discipline: 'Criação de Imagens',
    grade: '5.º Ano',
    title: 'Ciclo da Água',
    category: 'multimedia',
    prompt:
      '«Cria uma proposta de ilustração didática do ciclo da água para alunos do 5.º ano. Inclui evaporação, transpiração vegetal, condensação, precipitação, infiltração e escoamento superficial e subterrâneo. Representa os processos com setas direcionais coerentes. Evita inserir texto na imagem gerada; apresenta separadamente as legendas a adicionar na edição gráfica. Confirma a correção dos processos, das setas e das legendas antes de utilizar a imagem. Verifica também os direitos de utilização do recurso produzido.»',
    keyAspects: [
      'Processos completos do ciclo hidrológico e setas direcionais coerentes',
      'Evitar texto na imagem gerada e apresentar legendas separadamente',
      'Confirmação dos processos e verificação dos direitos de utilização',
    ],
  },
  {
    id: 'slides-8',
    discipline: 'Apresentação Multimédia',
    grade: '8.º Ano',
    title: 'Inteligência Artificial',
    category: 'multimedia',
    prompt:
      '«Elabora um guião de seis diapositivos introdutórios sobre inteligência artificial para alunos do 8.º ano, na disciplina de TIC. Para cada diapositivo, indica um título, três ideias-chave e uma proposta de recurso visual. Aborda o conceito de IA, a aprendizagem a partir de dados, aplicações, limitações, privacidade e utilização responsável. Indica fontes verificáveis para as afirmações factuais e propõe uma bibliografia final. Prevê legibilidade, contraste adequado, texto alternativo para imagens e linguagem ajustada à turma. O docente deve validar o conteúdo e os recursos antes da apresentação.»',
    keyAspects: [
      'Guião de 6 diapositivos com título, 3 ideias-chave e recurso visual',
      'Conceito, aprendizagem, aplicações, limitações, privacidade e responsabilidade',
      'Fontes verificáveis, acessibilidade e validação docente prévia',
    ],
  },
  {
    id: 'video-7',
    discipline: 'Vídeo com Avatares Falantes',
    grade: '7.º Ano',
    title: 'Privacidade e Redes Sociais',
    category: 'multimedia',
    prompt:
      '«Elabora um guião para um vídeo de aproximadamente dois minutos, dirigido a alunos do 7.º ano, sobre privacidade e respeito nas redes sociais. Aborda o consentimento antes da publicação de imagens de terceiros, a pegada digital e a identificação de mensagens suspeitas. Prevê legendagem integral e linguagem adequada à idade. Utiliza avatares sintéticos ou recursos cuja utilização esteja autorizada; não reproduzas a imagem ou a voz de pessoas reais sem fundamento legítimo e as autorizações aplicáveis. Indica que o conteúdo foi gerado ou editado com IA, quando pertinente, e valida a informação antes da divulgação.»',
    keyAspects: [
      'Vídeo de 2 minutos sobre privacidade, consentimento, pegada digital e mensagens suspeitas',
      'Uso autorizado de avatares sem reproduzir imagem/voz de pessoas reais sem autorização',
      'Indicação de conteúdo gerado/editado com IA e validação prévia',
    ],
  },
  {
    id: 'comunicacao-escola',
    discipline: 'Comunicação Escolar',
    grade: 'Geral (Escola)',
    title: 'Regras de Utilização do Telemóvel',
    category: 'comunicacao',
    prompt:
      '«Utiliza exclusivamente o regulamento escolar em vigor, identificado pela versão e data fornecidas. Não inventes regras nem extrapoles disposições omissas. Assinala as informações que exijam confirmação com a indicação «[CONFIRMAR COM A DIREÇÃO]». Prepara versões distintas para alunos e encarregados de educação, mantendo o conteúdo normativo fiel ao documento. A versão final deve ser validada e aprovada pela entidade responsável antes da divulgação.»',
    keyAspects: [
      'Uso exclusivo do regulamento escolar em vigor sem inventar regras',
      'Marcação de omissões com [CONFIRMAR COM A DIREÇÃO]',
      'Versões distintas para alunos e encarregados de educação',
      'Validação e aprovação da versão final pela entidade responsável',
    ],
  },
];

export const CLASSROOM_ACTIVITIES: ClassroomActivity[] = [
  {
    id: 'atividade-1',
    number: 1,
    title: 'Ideia 1: O Prompt de Ouro (50 min)',
    subtitle:
      'Transformar um texto básico gerado pela IA num conto rico através de 3 comandos de melhoria e revisão humana',
    implementation: [
      {
        step: 'Etapa 1 – Gerar o "Texto Cinzento" e Detetar 3 Falhas (10 min)',
        description:
          'No computador do professor projetado no quadro (ou em pares num tablet), escreve-se um prompt propositadamente pobre na IA: "Escreve uma história curta sobre um jovem que encontra uma porta secreta na escola." Os alunos leem este primeiro texto gerado e anotam no caderno 3 problemas concretos (ex.: vocabulário repetitivo, personagens sem emoção, final apressado).',
      },
      {
        step: 'Etapa 2 – Aplicar os 3 Prompts de Melhoria (20 min)',
        description:
          'Na mesma janela de conversa da IA, os alunos enviam 3 novos prompts seguidos para corrigir os problemas detetados, observando como o texto muda em cada passo: 1.º Prompt (Tom): "Reescreve a história num tom de mistério e suspense adequado a alunos do 7.º ano." | 2.º Prompt (Estilo): "Substitui expressões vagas por descrições de sons, luzes e emoções da personagem." | 3.º Prompt (Estrutura): "Altera o início para começar com um diálogo curto e termina num momento de dúvida."',
      },
      {
        step: 'Etapa 3 – O Toque Final no Papel sem IA (10 min)',
        description:
          'Os alunos copiam a última versão do texto para o caderno (ou processador de texto) e fazem 3 alterações obrigatórias pela sua própria mão: 1) riscam uma frase que soe artificial; 2) acrescentam uma frase original criada pelo par; 3) inventam um título criativo.',
      },
      {
        step: 'Etapa 4 – Preencher a Tabela "Antes vs. Depois" (10 min)',
        description:
          'Cada par preenche e entrega ao professor uma tabela simples de 3 colunas numa folha de papel: [Coluna 1: Qual foi a melhor instrução que demos à IA?] | [Coluna 2: O que melhorou no texto com essa instrução?] | [Coluna 3: Que frase mudámos ou acrescentámos pela nossa mão?].',
      },
    ],
    objectivesAndEvaluation: {
      objectives:
        'Compreender como instruções específicas (tom, estilo e estrutura) melhoram a resposta da IA; praticar a revisão crítica de textos; distinguir texto gerado por máquina de edição autoral humana.',
      evaluation:
        'Avaliação da tabela entregue em 3 pontos: 1) Identificou 3 fragilidades reais no texto inicial; 2) Formulou comandos concretos de melhoria nos 3 parâmetros (Tom, Estilo e Estrutura); 3) Realizou e assinalou as 3 alterações manuais no texto final.',
    },
  },
  {
    id: 'atividade-2',
    number: 2,
    title: 'Ideia 2: Coautoria Controlada com IA (50 min)',
    subtitle:
      'Escrever uma narrativa em grupo usando a IA apenas para desbloquear ideias a meio da história',
    implementation: [
      {
        step: 'Etapa 1 – Planificar a História de Ecrãs Fechados (10 min)',
        description:
          'Sem usar computadores, cada grupo de 3 alunos define numa folha o plano da sua história: 1) Nome e característica principal do protagonista; 2) Local onde decorre a ação; 3) Problema ou perigo que a personagem enfrenta.',
      },
      {
        step: 'Etapa 2 – Escrever o 1.º Parágrafo pela Própria Mão (15 min)',
        description:
          'Os alunos escrevem no papel o primeiro parágrafo da história (6 a 8 linhas) apresentando a personagem e o problema. Devem parar de escrever exatamente num momento de impasse ("E agora, o que faz a personagem?").',
      },
      {
        step: 'Etapa 3 – Pedir 3 Ideias Curtas à IA (10 min)',
        description:
          'O grupo abre a IA (ou dita ao professor no computador da sala) e usa este prompt exato: "Lê este início de história que escrevemos: [inserir o 1.º parágrafo]. NÃO continues a escrever a história. Sugere apenas 3 ideias curtas (máximo de 1 linha cada) para o que pode acontecer a seguir: uma ideia realista, uma inesperada e uma engraçada."',
      },
      {
        step: 'Etapa 4 – Escrever o Final e Preencher o Selo de Autoria (15 min)',
        description:
          'Os alunos desligam a IA, escolhem (ou modificam) uma das 3 ideias sugeridas e escrevem o resto da história pelas suas palavras. No fim da folha, preenchem a Declaração de Uso de IA: "Ideia da IA que aproveitámos: [...] | O que mudámos nessa ideia: [...] | Parágrafos escritos 100% por nós: [...]".',
      },
    ],
    objectivesAndEvaluation: {
      objectives:
        'Planificar e redigir textos narrativos em equipa; utilizar a IA como ferramenta de chuva de ideias (brainstorming) sem delegar a redação do texto; declarar de forma transparente o uso de IA.',
      evaluation:
        '1) Coerência entre o plano inicial no papel e a história final; 2) Qualidade e criatividade dos parágrafos redigidos pelos alunos; 3) Preenchimento completo e honesto da Declaração de Uso de IA no final da folha.',
    },
  },
  {
    id: 'atividade-3',
    number: 3,
    title: 'Ideia 3: Caça aos 3 Erros Escondidos (50 min)',
    subtitle:
      'Usar o manual escolar para descobrir e corrigir 3 erros científicos ou históricos escondidos num texto da IA',
    implementation: [
      {
        step: 'Etapa 1 – Gerar o Texto com 3 "Armadilhas" (10 min)',
        description:
          'O professor (no projetor ou em fichas impressas) ou os grupos inserem na IA este prompt sobre a matéria da aula: "Escreve um texto de 12 linhas para alunos do [X.º] ano sobre [tema da aula, ex.: a fotossíntese / a vida num castelo medieval]. Mistura factos corretos com exatamente 3 erros científicos/históricos subtis que pareçam plausíveis. NÃO digas quais são os erros."',
      },
      {
        step: 'Etapa 2 – Investigação com o Manual Escolar Aberto (15 min)',
        description:
          'Em pares, e sem usar a internet, os alunos leem o texto gerado pela IA e consultam o manual escolar e o caderno diário. Sublinham a vermelho as 3 frases que consideram falsas e anotam ao lado a página do manual onde encontraram a prova.',
      },
      {
        step: 'Etapa 3 – Preencher a Ficha de Correção (15 min)',
        description:
          'No caderno, cada par escreve para cada um dos 3 erros detetados: 1) "Frase falsa da IA: [...]"; 2) "Porque está errada segundo a matéria (pág. X do manual): [...]"; 3) "Frase corrigida pelo grupo: [...]".',
      },
      {
        step: 'Etapa 4 – Desmascarar a IA em Turma (10 min)',
        description:
          'Os pares partilham as suas descobertas em voz alta. No final, o professor escreve na IA projetada no quadro: "Revela quais foram os 3 erros que incluíste no texto." A turma verifica se apanhou os 3 erros e se a IA cometeu ainda algum erro extra involuntário (alucinação).',
      },
    ],
    objectivesAndEvaluation: {
      objectives:
        'Aplicar conteúdos das Aprendizagens Essenciais para validar textos; desenvolver o hábito de confirmar informações no manual escolar; compreender que a IA escreve de forma convincente mesmo quando erra.',
      evaluation:
        '1) Identificação correta dos 3 erros escondidos no texto; 2) Indicação correta da página/conceito do manual escolar que refuta o erro; 3) Rigor científico ou histórico das 3 frases corrigidas pelo par.',
    },
  },
  {
    id: 'atividade-4',
    number: 4,
    title: 'Ideia 4: Auditores da Matemática na IA (50 min)',
    subtitle:
      'Gerar enunciados de problemas reais na IA, resolver primeiro no caderno e verificar se a IA erra nas contas',
    implementation: [
      {
        step: 'Etapa 1 – Gerar Apenas o Enunciado do Problema (10 min)',
        description:
          'No quadro (ou em pares), pede-se à IA que crie um problema sobre a matéria da aula com este prompt: "Cria um problema de Matemática do [X.º] ano sobre proporcionalidade [direta ou inversa] passado numa situação real (ex.: receita de culinária, velocidade de uma viagem ou tempo de uma obra). Escreve APENAS o enunciado e NÃO mostres a resolução nem o resultado."',
      },
      {
        step: 'Etapa 2 – Resolver no Caderno sem Ajuda da IA (15 min)',
        description:
          'Os alunos copiam o enunciado para o caderno e resolvem o problema manualmente em 3 passos obrigatórios: 1) escrevem quais são as duas grandezas e as respetivas unidades; 2) justificam se a proporcionalidade é direta ou inversa; 3) fazem todos os cálculos até ao resultado final.',
      },
      {
        step: 'Etapa 3 – Pedir a Resolução à IA e Auditar Passo a Passo (15 min)',
        description:
          'Só depois de terem o problema resolvido no caderno, pedem à IA: "Agora resolve o problema anterior passo a passo e apresenta a resposta final." Os alunos comparam a resolução da IA com a sua e verificam linha a linha: A IA escolheu a proporcionalidade certa? Usou as unidades corretas? Acertou nas contas?',
      },
      {
        step: 'Etapa 4 – Atribuir o "Selo de Auditoria" (10 min)',
        description:
          'No fundo da folha, cada par escreve o seu veredito fundamentado sobre a IA: [ ] "Resolução da IA 100% correta" OU [ ] "A IA falhou neste passo: [...] e a correção certa é [...]". Dois pares partilham com a turma os casos em que apanharam falhas ou diferenças de método.',
      },
    ],
    objectivesAndEvaluation: {
      objectives:
        'Resolver problemas de proporcionalidade em contextos reais; identificar grandezas e unidades de medida; desenvolver o hábito de calcular autonomamente antes de confiar em resultados gerados por IA.',
      evaluation:
        '1) Identificação explícita das grandezas, unidades e tipo de proporcionalidade no caderno; 2) Correção matemática da resolução manual; 3) Rigor na verificação da resposta gerada pela IA.',
    },
  },
  {
    id: 'atividade-5',
    number: 5,
    title: 'Ideia 5: O Advogado do Diabo — Debate com IA (50 min)',
    subtitle:
      'Construir argumentos em equipa e pô-los à prova contra perguntas difíceis colocadas pela IA',
    implementation: [
      {
        step: 'Etapa 1 – Escrever 3 Argumentos sem Usar a IA (10 min)',
        description:
          'O professor escreve no quadro uma questão de debate ligada à disciplina (ex.: "Deve ser proibido o trânsito automóvel no centro das cidades?" ou "As redes sociais aproximam ou isolam os jovens?"). Em grupos de 3 e sem computador, os alunos escolhem uma posição e escrevem no papel 3 argumentos apoiados na matéria da aula.',
      },
      {
        step: 'Etapa 2 – Enfrentar o "Advogado do Diabo" na IA (15 min)',
        description:
          'Cada grupo (ou o professor no quadro) insere este prompt na IA: "Estamos numa aula do [X.º] ano a debater a questão: [inserir pergunta]. O nosso grupo defende que [inserir posição] com estes 3 argumentos: [inserir os 3 argumentos]. Age como um \'Advogado do Diabo\' respeitoso: aponta o ponto mais fraco da nossa defesa e faz-nos 2 perguntas difíceis que nos obriguem a pensar melhor (máximo de 8 linhas)."',
      },
      {
        step: 'Etapa 3 – Responder às 2 Perguntas com o Manual (15 min)',
        description:
          'Os alunos copiam as 2 perguntas difíceis feitas pela IA para a sua folha, consultam o manual escolar ou materiais da aula para encontrar factos/exemplos mais fortes e escrevem uma resposta sólida para superar cada crítica.',
      },
      {
        step: 'Etapa 4 – Partilha Oral de 2 Minutos por Grupo (10 min)',
        description:
          'Cada grupo apresenta oralmente à turma em 2 minutos: 1) Qual foi a crítica ou pergunta mais difícil que a IA lhes fez; 2) Que novo argumento ou dado descobriram para responder a essa pergunta.',
      },
    ],
    objectivesAndEvaluation: {
      objectives:
        'Desenvolver a argumentação e contra-argumentação fundamentada; antecipar pontos de vista contrários sobre temas curriculares; usar a IA para fazer perguntas que estimulam o pensamento em vez de dar respostas prontas.',
      evaluation:
        '1) Clareza e fundamentação dos 3 argumentos iniciais escritos sem IA; 2) Qualidade dos factos/conceitos usados na Etapa 3 para responder às 2 perguntas da IA; 3) Clareza na síntese oral apresentada à turma.',
    },
  },
];

export const MAGICSCHOOL_DATA = {
  description:
    'A MagicSchool.ai é uma plataforma desenhada para contextos educativos que reúne ferramentas de apoio ao trabalho docente, como a diferenciação pedagógica, o planeamento de aulas e a criação de materiais didáticos.\n\nA disponibilidade e as condições de utilização dos recursos podem variar consoante o plano de subscrição.',
  officialUrl: 'https://www.magicschool.ai',
  possibilidades: [
    {
      id: 'magicstudent',
      title: 'MagicStudent',
      description: 'Permite aos professores criar salas virtuais e disponibilizar atividades mediadas por IA com supervisão pedagógica (requere conformidade com RGPD, idades mínimas e consentimento).',
      iconName: 'UserCheck',
      tag: 'Ambiente de Alunos',
    },
    {
      id: 'planos-aula',
      title: 'Gerador de Planos de Aula',
      description: 'Permite solicitar propostas estruturadas de aula; requer conferência e adaptação face às Aprendizagens Essenciais.',
      iconName: 'BookOpen',
      tag: 'Planeamento',
    },
    {
      id: 'quizzes',
      title: 'Gerador de Questionários Formativos',
      description: 'Sugestões de itens de avaliação com proposta preliminar de classificação por níveis de Bloom a validar pelo docente.',
      iconName: 'HelpCircle',
      tag: 'Avaliação',
    },
    {
      id: 'fichas-trabalho',
      title: 'Gerador de Fichas de Trabalho',
      description: 'Exercícios personalizados e materiais didáticos para adaptação e diferenciação pedagógica em sala de aula.',
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
      description: 'Apoio na elaboração de sugestões de comentários formativos para revisão docente sobre o trabalho do aluno.',
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
      'Raina — Assistente para Docentes: Assistente conversacional orientada para o apoio ao planeamento e à reflexão pedagógica. Funciona como interlocutor para estruturar ideias, sugerir abordagens e rever materiais. A sua utilização não substitui a validação técnica e científica dos conteúdos pelo professor.',
    description:
      'Assistente conversacional orientada para o apoio ao planeamento e à reflexão pedagógica. Funciona como interlocutor para estruturar ideias, sugerir abordagens e rever materiais. A sua utilização não substitui a validação técnica e científica dos conteúdos pelo professor.',
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
        'Identificação de conceções alternativas e dificuldades gramaticais frequentes',
        'Criação de pontes cognitivas entre o uso intuitivo e a sistematização gramatical',
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
    publication: '',
    category: 'prompts',
    url: 'https://blog.apportugal.com/pt/prompt-engineering?utm_source=chatgpt.com',
  },
  {
    id: 'ref-2',
    authors: 'Bommasani, R., Hudson, D. A., Adeli, E., Altman, R., Arora, S., von Arx, S., … Liang, P.',
    year: '2021',
    title: 'On the opportunities and risks of foundation models',
    publication: 'Stanford University.',
    category: 'ia-geral',
    url: 'https://arxiv.org/abs/2108.07258',
  },
  {
    id: 'ref-3',
    authors: 'DataCamp',
    year: 'n.d.',
    title: 'Guia de engenharia de prompts no ChatGPT',
    publication: '',
    category: 'prompts',
    url: 'https://www.datacamp.com',
  },
  {
    id: 'ref-4',
    authors: 'European Commission',
    year: '2022',
    title: 'Ethical guidelines on the use of artificial intelligence (AI) and data in teaching and learning for educators',
    publication: 'Publications Office of the European Union.',
    category: 'etica',
    url: 'https://education.ec.europa.eu',
  },
  {
    id: 'ref-5',
    authors: 'Holmes, W., Deusdad, B., & Redecker, C.',
    year: '2021',
    title: 'Artificial intelligence in education: Promises and implications for teaching and learning',
    publication: 'European Commission – Joint Research Centre.',
    category: 'etica',
  },
  {
    id: 'ref-6',
    authors: 'Kasneci, E., Sessler, K., Küchemann, S., Bannert, M., Dementieva, D., Fischer, F., ... Kasneci, G.',
    year: '2023',
    title: 'ChatGPT for good? On opportunities and challenges of large language models for education',
    publication: '',
    category: 'ia-geral',
  },
  {
    id: 'ref-7',
    authors: 'Khosravi, H., et al.',
    year: '2023',
    title: 'Generative AI in education: Opportunities, challenges, and policy implications',
    publication: '',
    category: 'ia-geral',
  },
  {
    id: 'ref-8',
    authors: 'Knoth, S.',
    year: '2024',
    title: 'Studies on AI literacy and prompt engineering',
    publication: '',
    category: 'prompts',
    url: 'https://arxiv.org',
  },
  {
    id: 'ref-9',
    authors: 'Luckin, R.',
    year: '2024',
    title: 'AI for learning: Why it matters and how to use it',
    publication: '',
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
    publication: 'OECD Publishing.',
    category: 'relatorios',
  },
  {
    id: 'ref-13',
    authors: 'OpenAI',
    year: '2023',
    title: 'GPT-4 technical report',
    publication: '',
    category: 'ia-geral',
    url: 'https://arxiv.org/abs/2303.08774',
  },
  {
    id: 'ref-14',
    authors: 'OpenAI',
    year: 'n.d.',
    title: 'Best practices for prompt engineering with ChatGPT',
    publication: '',
    category: 'prompts',
    url: 'https://platform.openai.com',
  },
  {
    id: 'ref-15',
    authors: 'Prompt Engineering Guide',
    year: 'n.d.',
    title: 'Prompt engineering guide',
    publication: '',
    category: 'prompts',
    url: 'https://www.promptingguide.ai',
  },
  {
    id: 'ref-16',
    authors: 'Schulhoff, S.',
    year: '2024',
    title: 'A systematic survey of prompt engineering techniques',
    publication: '',
    category: 'prompts',
    url: 'https://arxiv.org',
  },
  {
    id: 'ref-17',
    authors: 'UNESCO',
    year: '2021',
    title: 'AI and education: Guidance for policy-makers',
    publication: 'UNESCO Publishing.',
    category: 'relatorios',
  },
  {
    id: 'ref-18',
    authors: 'UNESCO',
    year: '2023',
    title: 'Guidance for generative AI in education and research',
    publication: 'UNESCO Publishing.',
    category: 'relatorios',
    url: 'https://www.unesco.org',
  },
  {
    id: 'ref-19',
    authors: 'UNESCO',
    year: '2024',
    title: 'Artificial intelligence and education: A global report',
    publication: 'UNESCO Publishing.',
    category: 'relatorios',
  },
];

export const LLM_TOOLS_LIST = [
  {
    name: 'ChatGPT',
    organization: 'OpenAI',
    role: 'Modelo de Linguagem e Chatbot',
    description: 'Utilizado para redação de rascunhos, ideação pedagógica, sugestões de atividades e exploração de temas educativos.',
    badge: 'OpenAI',
  },
  {
    name: 'Google Gemini',
    organization: 'Google',
    role: 'Modelo Multimodal e Chatbot',
    description: 'Capacidade multimodal para processamento de imagens, esquemas conceptuais, documentos de texto e dados estruturados.',
    badge: 'Google',
  },
  {
    name: 'Copilot',
    organization: 'Microsoft',
    role: 'Assistente Integrado',
    description: 'Integração no ecossistema Microsoft e motor de busca com apresentação de hiperligações da web para conferência de fontes.',
    badge: 'Microsoft',
  },
  {
    name: 'Claude',
    organization: 'Anthropic',
    role: 'Modelo de Linguagem Focado em Análise Textual',
    description: 'Concebido para processamento de contextos alargados, análise de textos e redação estruturada com vocabulário cuidado.',
    badge: 'Anthropic',
  },
  {
    name: 'NotebookLM',
    organization: 'Google',
    role: 'Caderno de Estudo e Síntese com Grounding Documental',
    description: 'Ancoragem de contexto em documentos carregados pelo professor (PDFs, notas de aula) para síntese e estudo com referências.',
    badge: 'Google',
  },
  {
    name: 'Google Ai Studio',
    organization: 'Google',
    role: 'Ambiente de Prototipagem e Engenharia de Prompts',
    description: 'Ambiente de experimentação com modelos da família Gemini, prototipagem de prompts de sistema e calibração de parâmetros (temperatura, top-k).',
    badge: 'Google',
  },
];
