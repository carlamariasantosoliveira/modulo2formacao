import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  Copy,
  Check,
  Download,
  CheckSquare,
  Square,
  Loader2,
  Sliders,
  Send,
  HelpCircle,
} from 'lucide-react';
import { NoticeBanner } from '../Common/NoticeBanner';

interface ResourceType {
  id: string;
  name: string;
  defaultTopic: string;
  defaultDiscipline: string;
  defaultGrade: string;
  defaultDuration: string;
  template: (params: {
    discipline: string;
    grade: string;
    topic: string;
    duration: string;
    differentiation: string;
  }) => string;
}

const RESOURCE_TYPES: ResourceType[] = [
  {
    id: 'plano-aula',
    name: 'Plano de Aula Detalhado',
    defaultTopic: 'A Revolução Francesa e a Queda do Antigo Regime',
    defaultDiscipline: 'História',
    defaultGrade: '9.º Ano',
    defaultDuration: '90 minutos',
    template: ({ discipline, grade, topic, duration, differentiation }) => `# PLANO DE AULA: ${topic.toUpperCase()}
**Disciplina:** ${discipline} | **Ano de Escolaridade:** ${grade}
**Duração:** ${duration} | **Alinhamento:** Aprendizagens Essenciais
${differentiation ? `**Medidas de Diferenciação:** ${differentiation}` : ''}

---

### 1. OBJETIVOS DE APRENDIZAGEM
• Identificar e explicar as principais causas e acontecimentos centrais relativos a: ${topic}.
• Desenvolver a capacidade de análise crítica de fontes e documentos de época.
• Relacionar os conceitos estudados com o contexto social e político contemporâneo.

---

### 2. ESTRUTURA E SEQUÊNCIA DIDÁTICA

#### Fase 1: Introdução e Motivação (15 minutos)
• Apresentação de uma questão-problema desafiadora ou imagem de época.
• Ativação de conhecimentos prévios através de um breve diálogo socrático com a turma.
• Enunciação explícita dos objetivos da aula.

#### Fase 2: Desenvolvimento e Trabalho Ativo (50 minutos)
• Trabalho em pares ou pequenos grupos sobre documentos didáticos e guiões estruturados.
• Discussão guiada sobre as causas estruturais e os pontos de viragem do tema.
• Aplicação prática de exercícios de consolidação e confronto de hipóteses.

#### Fase 3: Síntese e Avaliação Formativa (25 minutos)
• Partilha em plenário das conclusões de cada grupo.
• Preenchimento de um bilhete de saída (*exit ticket*) com 2 ideias-chave e 1 dúvida remanescente.
• Registo no caderno diário dos conceitos nucleares.

---

### 3. RECURSOS E MATERIAIS
• Manual escolar adotado e documentos de apoio selecionados.
• Apresentação multimédia de suporte e computador com projetor.
• Ficha de trabalho diferenciada com apoio lexical para quem necessitar.

---

### 4. AVALIAÇÃO FORMATIVA
• Observação direta do envolvimento e cooperação no trabalho de grupo.
• Verificação da clareza e rigor nas respostas ao bilhete de saída.`,
  },
  {
    id: 'ficha-trabalho',
    name: 'Ficha de Trabalho com Níveis Diferenciados',
    defaultTopic: 'Resolução de Equações do 1.º Grau e Problemas do Quotidiano',
    defaultDiscipline: 'Matemática',
    defaultGrade: '7.º Ano',
    defaultDuration: '45 minutos',
    template: ({ discipline, grade, topic, differentiation }) => `# FICHA DE TRABALHO: ${topic.toUpperCase()}
**Disciplina:** ${discipline} | **Ano de Escolaridade:** ${grade}
${differentiation ? `**Adaptação:** ${differentiation}` : ''}

Nome do Aluno: _____________________________________ N.º: ____ Turma: ____
Data: ____ / ____ / 2026

---

### GRUPO I — COMPREENSÃO CONCEPTUAL (Nível Inicial)
1. Observa a seguinte igualdade: \`2x + 6 = 18\`.
   a) Identifica a incógnita da equação: _______
   b) Identifica os termos do 1.º membro: _______
   c) Explica por palavras tuas o que significa encontrar a solução da equação.

2. Resolve as equações passo a passo, mostrando todos os cálculos:
   a) x + 7 = 15
   b) 3x = 24
   c) 2x - 5 = 9

---

### GRUPO II — APLICAÇÃO E PROCEDIMENTOS (Nível Intermédio)
3. Determina a solução de cada uma das seguintes equações em Q:
   a) 5x - 4 = 2x + 11
   b) 2(x + 3) = 16
   c) 4x - (x - 2) = 14

4. Verifica se x = 3 é solução da equação \`4x - 2 = 10\`. Justifica calculando.

---

### GRUPO III — RESOLUÇÃO DE PROBLEMAS (Nível Avançado)
5. A Mariana comprou três cadernos iguais e um estojo que custou 5 €. No total pagou 17 €.
   a) Escreve uma equação que traduza a situação, considerando \`x\` o preço de cada caderno.
   b) Resolve a equação e indica o preço de cada caderno.

6. DESAFIO CRIATIVO: Cria tu próprio um problema do quotidiano que possa ser resolvido pela equação \`2x + 3 = 15\`. Apresenta a tua proposta e a respetiva resolução.`,
  },
  {
    id: 'quiz',
    name: 'Quiz com Justificação e Distratores',
    defaultTopic: 'Fotossíntese e Respiração Celular nas Plantas',
    defaultDiscipline: 'Ciências Naturais',
    defaultGrade: '8.º Ano',
    defaultDuration: '20 minutos',
    template: ({ discipline, grade, topic }) => `# QUESTIONÁRIO DE AVALIAÇÃO FORMATIVA: ${topic.toUpperCase()}
**Disciplina:** ${discipline} | **Ano:** ${grade}
*Grelha com 4 questões de escolha múltipla e análise de distratores frequentes.*

---

### Pergunta 1: Reagentes da Fotossíntese
Qual das seguintes opções apresenta exclusivamente os reagentes necessários para a ocorrência da fotossíntese?
A) Glicose e oxigénio
B) Dióxido de carbono, água e luz solar [CORRETA]
C) Dióxido de carbono, oxigénio e solo
D) Água, sais minerais e oxigénio

• **Justificação Pedagógica da Opção B:** A fotossíntese converte dióxido de carbono e água em glicose e oxigénio na presença de energia luminosa.
• **Distrator Típico (Opção A):** Inverte os reagentes com os produtos finais, um erro frequente de leitura rápida nos alunos.

---

### Pergunta 2: Localização Celular
Em que organelo da célula vegetal ocorre o processo fotossintético?
A) Mitocôndria
B) Ribossoma
C) Cloroplasto [CORRETA]
D) Parede celular

• **Justificação Pedagógica da Opção C:** É no interior dos cloroplastos, devido à presença de clorofila, que a energia solar é captada.
• **Distrator Típico (Opção A):** A mitocôndria é responsável pela respiração celular, sendo habitual a confusão entre ambos os organelos.

---

### Pergunta 3: Produtos da Reação
O oxigénio libertado pelas plantas durante o dia resulta diretamente de:
A) Da respiração celular da planta à noite.
B) Da quebra da molécula de água na presença de luz (fotólise da água) [CORRETA].
C) Da absorção direta de ar puro pelas raízes.
D) Do consumo de glicose no citoplasma.

• **Justificação:** A água absorvida do solo é cindida durante a fase luminosa, libertando o oxigénio para a atmosfera.`,
  },
  {
    id: 'slides',
    name: 'Guião de Apresentação em Slides (6 Slides)',
    defaultTopic: 'Inteligência Artificial: Conceitos e Uso Responsável',
    defaultDiscipline: 'TIC / Cidadania',
    defaultGrade: '8.º Ano',
    defaultDuration: 'Apresentação de 15 min',
    template: ({ discipline, grade, topic }) => `# GUIÃO DE APRESENTAÇÃO MULTIMÉDIA: ${topic.toUpperCase()}
**Público-Alvo:** ${discipline} - ${grade}
**Formato:** 6 Diapositivos estruturados com pontos principais e sugestões visuais.

---

### SLIDE 1: Título e Abertura
• **Título:** O que é a Inteligência Artificial e Como Funciona?
• **Subtítulo:** Desmistificar a tecnologia no nosso dia a dia
• **Pontos Principais:** Apresentação do tema; porque é que todos usamos IA sem nos darmos conta.
• **Sugestão Visual:** Fotografia de alta qualidade de jovens a interagir com tecnologia moderna em contexto escolar.

---

### SLIDE 2: Como a IA Aprende (Dados e Padrões)
• **Título:** A IA Não Pensa: Reconhece Padrões!
• **Pontos Principais:** A analogia da culinária (receitas vs. prática); aprendizagem através de milhões de exemplos; ajuste de probabilidades estatísticas.
• **Sugestão Visual:** Diagrama simples mostrando: Dados de Entrada ➡ Redes Neuronais ➡ Previsão.

---

### SLIDE 3: O Que São LLMs e Prompts?
• **Título:** Conversar com a Máquina: O Poder do Prompt
• **Pontos Principais:** O texto dividido em tokens; a importância de dar instruções claras (Contexto, Tarefa, Restrições e Formato).
• **Sugestão Visual:** Comparação lado a lado entre um prompt vago ("Fala de IA") e um prompt estruturado.

---

### SLIDE 4: Resposta Convincente ≠ Resposta Correta
• **Título:** Atenção às Alucinações da IA!
• **Pontos Principais:** Os modelos não compreendem a verdade; geram texto plausível que pode conter erros; a verificação humana é obrigatória.
• **Sugestão Visual:** Ícone de lupa a inspecionar uma resposta digital com carimbo de "Verificar Sempre!".

---

### SLIDE 5: Ética e Cidadania Digital
• **Título:** Usar a IA com Responsabilidade
• **Pontos Principais:** Direitos de autor e plágio; privacidade dos dados pessoais; combate a preconceitos e desinformação.
• **Sugestão Visual:** Balança equilibrando a inovação tecnológica com a ética humana.

---

### SLIDE 6: Conclusão e Desafio
• **Título:** O Futuro Está nas Vossas Mãos!
• **Pontos Principais:** A tecnologia potencia quem a sabe questionar; desafio prático para a próxima aula.
• **Sugestão Visual:** Imagem inspiradora com a frase: "Sê o piloto, não o passageiro da tecnologia".`,
  },
];

export const PedagogicalResourceCreator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ResourceType>(RESOURCE_TYPES[0]);
  const [discipline, setDiscipline] = useState(RESOURCE_TYPES[0].defaultDiscipline);
  const [grade, setGrade] = useState(RESOURCE_TYPES[0].defaultGrade);
  const [topic, setTopic] = useState(RESOURCE_TYPES[0].defaultTopic);
  const [duration, setDuration] = useState(RESOURCE_TYPES[0].defaultDuration);
  const [differentiation, setDifferentiation] = useState('Apoio a vocabulário complexo e exercícios de extensão.');

  const [generatedContent, setGeneratedContent] = useState<string>(() =>
    RESOURCE_TYPES[0].template({
      discipline: RESOURCE_TYPES[0].defaultDiscipline,
      grade: RESOURCE_TYPES[0].defaultGrade,
      topic: RESOURCE_TYPES[0].defaultTopic,
      duration: RESOURCE_TYPES[0].defaultDuration,
      differentiation: 'Apoio a vocabulário complexo e exercícios de extensão.',
    })
  );

  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sourceType, setSourceType] = useState<'template' | 'gemini'>('template');

  // Checklist state
  const [checklist, setChecklist] = useState({
    scientificRigor: true,
    gradeAppropriate: true,
    clearObjectives: true,
    explicitEvaluation: false,
    criticalThinking: false,
  });

  const handleTypeChange = (resType: ResourceType) => {
    setSelectedType(resType);
    setDiscipline(resType.defaultDiscipline);
    setGrade(resType.defaultGrade);
    setTopic(resType.defaultTopic);
    setDuration(resType.defaultDuration);
    const content = resType.template({
      discipline: resType.defaultDiscipline,
      grade: resType.defaultGrade,
      topic: resType.defaultTopic,
      duration: resType.defaultDuration,
      differentiation,
    });
    setGeneratedContent(content);
    setSourceType('template');
  };

  const handleGenerate = async () => {
    setIsLoading(true);

    const promptText = `Age como professor especialista em ${discipline} do ${grade} em Portugal. Cria um ${selectedType.name} completo e rigoroso sobre o tema "${topic}". Duração: ${duration}. Medidas de diferenciação: ${differentiation}. Alinha o conteúdo com as Aprendizagens Essenciais e a terminologia curricular oficial em português de Portugal. No final, inclui uma secção de auto-revisão de rigor científico e didático.`;

    try {
      const response = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          systemInstruction: 'És um consultor pedagógico e professor titular em Portugal com vasta experiência em didática e desenho curricular.',
        }),
      });

      const data = await response.json();

      if (response.ok && data.text) {
        setGeneratedContent(data.text);
        setSourceType('gemini');
      } else {
        // Fallback to high-quality curricular template
        const fallback = selectedType.template({
          discipline,
          grade,
          topic,
          duration,
          differentiation,
        });
        setGeneratedContent(fallback);
        setSourceType('template');
      }
    } catch {
      const fallback = selectedType.template({
        discipline,
        grade,
        topic,
        duration,
        differentiation,
      });
      setGeneratedContent(fallback);
      setSourceType('template');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedContent], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedType.id}_${grade.replace(/\s+/g, '_')}_${topic.slice(0, 20).replace(/\s+/g, '_')}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const toggleChecklist = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="px-6 py-5 border-b border-slate-100 bg-linear-to-r from-blue-50/70 via-indigo-50/20 to-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Simulador de Autoria Pedagógica</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Criador de Recursos Pedagógicos com IA
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Configura parâmetros curriculares, gera materiais estruturados e valida com a checklist de qualidade docente.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descarregar .md</span>
            </button>
          </div>
        </div>

        {/* Resource Type selector */}
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-200/60">
          <span className="text-xs font-semibold text-slate-700 flex items-center gap-1 mr-2">
            Tipo de Recurso:
          </span>
          {RESOURCE_TYPES.map((res) => (
            <button
              key={res.id}
              onClick={() => handleTypeChange(res)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedType.id === res.id
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {res.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Form Settings (5 cols) */}
        <div className="lg:col-span-5 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">
              Parâmetros Curriculares
            </h3>
            <span className="text-xs text-slate-400">Currículo Nacional</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Disciplina
              </label>
              <input
                type="text"
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
                placeholder="Ex: Português, Matemática..."
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Ano de Escolaridade
              </label>
              <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Ex: 8.º Ano"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tema / Conteúdo Curricular
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: As Alterações Climáticas e a Pegada Ecológica"
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Duração Prevista
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Ex: 50 min / 90 min"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Registo de Linguagem
              </label>
              <input
                type="text"
                readOnly
                value="Português de Portugal"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Medidas de Diferenciação Pedagógica (Inclusão)
            </label>
            <textarea
              rows={2}
              value={differentiation}
              onChange={(e) => setDifferentiation(e.target.value)}
              placeholder="Ex: Apoio a vocabulário, pistas visuais, perguntas de extensão..."
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 py-2.5 px-4 rounded-lg shadow-xs transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>A gerar recurso pedagógico...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Gerar / Atualizar Recurso</span>
              </>
            )}
          </button>

          {/* Teacher Quality Checklist */}
          <div className="mt-6 pt-4 border-t border-slate-200 space-y-2.5 bg-slate-50/80 p-4 rounded-xl border">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-emerald-600" />
                <span>Checklist de Qualidade Pedagógica</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-sm">
                {checklistCount} de 5 validados
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              O documento do curso recomenda que o docente valide sempre antes de levar para a sala de aula:
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-slate-700">
              <label
                onClick={() => toggleChecklist('scientificRigor')}
                className="flex items-start gap-2 cursor-pointer hover:text-slate-900 select-none"
              >
                {checklist.scientificRigor ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span>1. Rigor científico e factual dos conteúdos e dados apresentados.</span>
              </label>

              <label
                onClick={() => toggleChecklist('gradeAppropriate')}
                className="flex items-start gap-2 cursor-pointer hover:text-slate-900 select-none"
              >
                {checklist.gradeAppropriate ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span>2. Adequação sintática e vocabular ao ano de escolaridade ({grade}).</span>
              </label>

              <label
                onClick={() => toggleChecklist('clearObjectives')}
                className="flex items-start gap-2 cursor-pointer hover:text-slate-900 select-none"
              >
                {checklist.clearObjectives ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span>3. Clareza das instruções e alinhamento com as Aprendizagens Essenciais.</span>
              </label>

              <label
                onClick={() => toggleChecklist('explicitEvaluation')}
                className="flex items-start gap-2 cursor-pointer hover:text-slate-900 select-none"
              >
                {checklist.explicitEvaluation ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span>4. Critérios de avaliação formativa explícitos e transparentes.</span>
              </label>

              <label
                onClick={() => toggleChecklist('criticalThinking')}
                className="flex items-start gap-2 cursor-pointer hover:text-slate-900 select-none"
              >
                {checklist.criticalThinking ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span>5. Estímulo ao pensamento crítico, reflexão ou trabalho colaborativo.</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Editable Preview (7 cols) */}
        <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">
                  Documento Produzido (Editável):
                </span>
                {sourceType === 'gemini' ? (
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md font-medium">
                    Gerado via Gemini AI
                  </span>
                ) : (
                  <span className="text-[10px] text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md font-medium">
                    Modelo Curricular Alinhado
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400">
                Pode editar o texto diretamente na caixa
              </span>
            </div>

            <textarea
              rows={22}
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              className="w-full text-xs font-mono p-4 rounded-xl border border-slate-300 focus:border-blue-500 bg-slate-50/50 leading-relaxed text-slate-800 shadow-inner"
            />
          </div>

          <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
            <span>Dica: Copie ou descarregue o ficheiro em formato Markdown para utilizar nas suas aulas.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
