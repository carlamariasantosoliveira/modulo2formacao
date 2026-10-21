import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Database,
  Brain,
  MessageSquare,
  Cpu,
  FileOutput,
  AlertTriangle,
  Sparkles,
  Info,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from 'lucide-react';
import { NoticeBanner } from '../Common/NoticeBanner';

interface StageData {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  analogousExample?: string;
  bullets?: Array<{ label: string; text: string }>;
  keyTakeaway?: string;
  isVeryImportant?: boolean;
  icon: React.ElementType;
  circleBg: string;
  titleBg: string;
  color: string;
}

const STAGES: StageData[] = [
  {
    number: 1,
    title: '1. Dados de Treino',
    subtitle: 'A fase de recolha massiva',
    description:
      'A IA é treinada com grandes volumes de textos e imagens (livros, artigos, páginas web, conteúdos educativos). Nesta fase inicial, o modelo apenas "vê" os dados sem ainda aprender.',
    analogousExample:
      'Aprender a cozinhar: comprar uma biblioteca de 10.000 livros de receitas gastronómicas. Ter as receitas na prateleira não significa que a pessoa já saiba cozinhar.',
    icon: Database,
    circleBg: 'bg-[#3B82F6]',
    titleBg: 'bg-[#EFF6FF] text-[#1D4ED8]',
    color: 'blue',
  },
  {
    number: 2,
    title: '2. Aprendizagem de Padrões (Fase de Treino)',
    subtitle: 'Processo de aprendizagem e ajuste de probabilidades',
    description:
      'Processo de aprendizagem a partir dos dados. O modelo identifica regularidades, aprende como os elementos se organizam, estabelece associações e ajusta probabilidades internas.',
    analogousExample:
      'Exemplo analógico do PDF: Aprender a cozinhar (dados = receitas; aprendizagem = perceber que o açúcar adoça ou o sal realça sabores sem memorizar todas as receitas).',
    icon: Brain,
    circleBg: 'bg-[#10B981]',
    titleBg: 'bg-[#ECFDF5] text-[#047857]',
    color: 'emerald',
  },
  {
    number: 3,
    title: '3. Prompt do Utilizador (Ponto de Partida)',
    subtitle: 'Instrução que orienta o cálculo estatístico',
    description:
      'O utilizador escreve uma pergunta, instrução ou descrição (ex.: "Cria um texto explicativo", "Gera uma imagem sobre..."). O prompt orienta o cálculo estatístico, mas não garante a verdade.',
    analogousExample:
      'Fazer um pedido específico ao cozinheiro: "Prepara uma sobremesa fresca com frutas da época sem açúcar refinado". O pedido orienta os ingredientes a utilizar.',
    icon: MessageSquare,
    circleBg: 'bg-[#F59E0B]',
    titleBg: 'bg-[#FFFBEB] text-[#B45309]',
    color: 'amber',
  },
  {
    number: 4,
    title: '4. Processamento Interno',
    subtitle: 'Divisão em Tokens e Mecanismos de Atenção',
    description:
      'Divisão em tokens, cálculo da próxima palavra mais provável e uso de mecanismos de atenção ao contexto (Transformers) e modelos de difusão de imagem.',
    bullets: [
      {
        label: 'Texto',
        text: 'Divisão em tokens, cálculo da próxima palavra mais provável e uso de mecanismos de "atenção ao contexto".',
      },
      {
        label: 'Imagens',
        text: 'Interpretação da descrição textual, associação a padrões visuais aprendidos e construção progressiva da imagem (modelos de difusão).',
      },
    ],
    analogousExample:
      'O cérebro do cozinheiro a calcular em tempo real a sequência de passos, doses e tempo de cozedura.',
    icon: Cpu,
    circleBg: 'bg-[#8B5CF6]',
    titleBg: 'bg-[#F5F3FF] text-[#6D28D9]',
    color: 'purple',
  },
  {
    number: 5,
    title: '5. Produção da Resposta (Saída / Output)',
    subtitle: 'Linguagem Natural e Plausibilidade Visual',
    description:
      'Resposta coerente em linguagem natural (texto) ou composição gráfica gerada (imagem).',
    bullets: [
      {
        label: 'Texto',
        text: 'Resposta coerente em linguagem natural (pode conter erros factuais).',
      },
      {
        label: 'Imagem',
        text: 'Visual coerente com o pedido (não representa a "realidade", mas sim a plausibilidade).',
      },
    ],
    analogousExample:
      'O prato final servido à mesa: tem ótimo aspeto visual e apresentação cuidada, mas cabe ao cliente provar para verificar a sua qualidade real.',
    icon: FileOutput,
    circleBg: 'bg-[#EF4444]',
    titleBg: 'bg-[#FEF2F2] text-[#B91C1C]',
    color: 'rose',
  },
  {
    number: 6,
    title: '6. Limitação Fundamental',
    subtitle: 'MUITO IMPORTANTE',
    isVeryImportant: true,
    description:
      'Não compreende como um ser humano, não valida factos e não possui consciência.',
    keyTakeaway: '■■ Resposta convincente ≠ Resposta correcta.',
    analogousExample:
      'O modelo não sabe o que é a "dor", a "verdade" ou um "aluno". Gera sequências estatisticamente prováveis de carateres que soam convincentes ao leitor.',
    icon: AlertTriangle,
    circleBg: 'bg-[#DC2626]',
    titleBg: 'bg-[#FEFCE8] text-[#A16207]',
    color: 'red',
  },
];

export const ModelMechanicsSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [viewMode, setViewMode] = useState<'step' | 'overview'>('step');

  // Interactive Tokenizer state
  const [sampleSentence, setSampleSentence] = useState(
    'A fotossíntese é essencial para as plantas.'
  );
  const [selectedTokenIdx, setSelectedTokenIdx] = useState<number | null>(null);

  // Simple pedagogical tokenization splitting
  const tokens = React.useMemo(() => {
    const rawTokens: Array<{ text: string; id: number; attention: number[] }> = [];
    let idCounter = 1042;
    const words = sampleSentence.split(/(\s+|[,.?!;:])/).filter(Boolean);

    words.forEach((w) => {
      if (w.trim() === '') {
        rawTokens.push({ text: '␣', id: idCounter++, attention: [] });
      } else if (w.length > 7) {
        const mid = Math.ceil(w.length / 2);
        rawTokens.push({ text: w.slice(0, mid), id: idCounter++, attention: [] });
        rawTokens.push({ text: '##' + w.slice(mid), id: idCounter++, attention: [] });
      } else {
        rawTokens.push({ text: w, id: idCounter++, attention: [] });
      }
    });

    return rawTokens;
  }, [sampleSentence]);

  // Next token probability demo
  const nextTokenOptions = [
    { token: 'oxigénio', prob: 78, type: 'Cientificamente provável e correto' },
    { token: 'vida', prob: 14, type: 'Plausível em linguagem comum' },
    { token: 'chuva', prob: 5, type: 'Contexto distante' },
    { token: 'sintaxe', prob: 3, type: 'Pouco provável no domínio biológico' },
  ];

  // Plausibility vs Truth demonstration
  const [revealedFact, setRevealedFact] = useState<boolean>(false);

  const stage = STAGES[currentStep - 1];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden font-sans">
      {/* Header with Title and Mode Switcher */}
      <div className="px-6 py-5 border-b border-slate-100 bg-linear-to-r from-slate-50 via-blue-50/40 to-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1">
              <Brain className="w-4 h-4 text-blue-600" />
              <span>Ciclo de 6 Fases e Dinâmica Probabilística</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Funcionamento dos Modelos Generativos
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Explora as seis etapas do ciclo de funcionamento, a divisão de texto em tokens e a limitação fundamental.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('step')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'step'
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Passo a Passo
              </button>
              <button
                onClick={() => setViewMode('overview')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'overview'
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Visão de Conjunto (6 Fases)
              </button>
            </div>

            {viewMode === 'step' && (
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-slate-500 mr-1 hidden sm:inline">
                  Etapa {currentStep} de 6
                </span>
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                  disabled={currentStep === 1}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none text-slate-700 cursor-pointer"
                  title="Etapa anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentStep((prev) => Math.min(6, prev + 1))}
                  disabled={currentStep === 6}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none text-slate-700 cursor-pointer"
                  title="Etapa seguinte"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 6-step progress timeline buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-4 pt-3 border-t border-slate-200/70">
          {STAGES.map((s) => {
            const isActive = viewMode === 'step' && currentStep === s.number;
            const isCompleted = viewMode === 'step' && currentStep > s.number;
            return (
              <button
                key={s.number}
                onClick={() => {
                  setCurrentStep(s.number);
                  setViewMode('step');
                }}
                className={`text-left p-2.5 rounded-xl border transition-all text-xs flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'border-blue-600 bg-blue-50/80 shadow-2xs ring-1 ring-blue-500'
                    : isCompleted
                    ? 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    : 'border-slate-200/60 bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : isCompleted
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-slate-200/60 text-slate-500'
                    }`}
                  >
                    {s.number}
                  </span>
                  {s.isVeryImportant && (
                    <span className="w-2 h-2 rounded-full bg-red-500" title="Muito Importante"></span>
                  )}
                </div>
                <span className="font-semibold text-slate-900 line-clamp-1">
                  {s.title.replace(/^\d+\.\s*/, '')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'overview' ? (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Visão Global do Ciclo de Funcionamento (As Seis Fases)
              </h3>
              <p className="text-xs text-slate-500">
                Consulte as 6 etapas ou clique em qualquer fase para abrir a respetiva simulação interativa.
              </p>
            </div>
            <button
              onClick={() => setViewMode('step')}
              className="text-xs font-semibold text-[#1E70EB] hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200 cursor-pointer"
            >
              Modo Passo a Passo
            </button>
          </div>

          <div className="space-y-6 relative">
            <div className="absolute left-[18px] top-4 bottom-8 w-0.5 bg-slate-200 pointer-events-none"></div>

            {STAGES.map((s) => (
              <div
                key={s.number}
                className="relative flex flex-col md:flex-row md:items-start gap-4 z-10 bg-slate-50/60 hover:bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all group"
              >
                {/* Circle badge */}
                <div
                  className={`w-9 h-9 rounded-full ${s.circleBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs mt-1`}
                >
                  {s.number}
                </div>

                {/* Title badge */}
                <div className="md:w-72 shrink-0">
                  <div
                    className={`${s.titleBg} rounded-2xl px-4 py-3 font-bold text-xs sm:text-sm border border-black/5 flex items-center justify-between`}
                  >
                    <span>{s.title}</span>
                    {s.isVeryImportant && (
                      <span className="text-[10px] uppercase font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-full ml-2">
                        MUITO IMPORTANTE
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setCurrentStep(s.number);
                      setViewMode('step');
                    }}
                    className="mt-2 text-[11px] font-semibold text-blue-600 group-hover:text-blue-800 flex items-center gap-1 cursor-pointer pl-1"
                  >
                    <span>Explorar interativamente</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Description */}
                <div className="flex-1 text-xs sm:text-sm text-slate-700 leading-relaxed pl-2 md:pl-0 space-y-2">
                  <p>{s.description}</p>

                  {s.analogousExample && (
                    <div className="bg-[#ECFDF5] border border-emerald-200/80 rounded-xl p-3 text-xs text-emerald-950 font-medium">
                      {s.analogousExample}
                    </div>
                  )}

                  {s.bullets && (
                    <div className="space-y-1.5 pl-1">
                      {s.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></span>
                          <p>
                            <strong className="text-slate-900 font-bold">{b.label}:</strong>{' '}
                            {b.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.keyTakeaway && (
                    <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 text-xs sm:text-sm font-extrabold text-amber-950 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{s.keyTakeaway}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Step-by-Step Interactive View */
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Theory & Analogous explanation (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                  stage.number === 6
                    ? 'bg-red-600'
                    : stage.number === 2
                    ? 'bg-emerald-600'
                    : stage.number === 4
                    ? 'bg-purple-600'
                    : 'bg-blue-600'
                }`}
              >
                <stage.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Etapa {stage.number} do Ciclo
                </span>
                <h3 className="text-lg font-bold text-slate-900">{stage.title}</h3>
                <p className="text-xs text-slate-500">{stage.subtitle}</p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
              {stage.description}
            </div>

            {/* Analogous culinary example from PDF */}
            {stage.analogousExample && (
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Exemplo Analógico do Módulo: Culinária</span>
                </div>
                <p className="text-xs text-amber-950 leading-relaxed">
                  {stage.analogousExample}
                </p>
              </div>
            )}

            {/* Stage 6 special critical callout */}
            {stage.number === 6 && (
              <NoticeBanner
                type="critical"
                title="Mensagem Fundamental do Documento"
                message="Resposta Convincente ≠ Resposta Correcta"
                detail="O modelo gera textos gramaticalmente impecáveis e articulados com enorme persuasão superficial, mas sem consciência nem garantia de verdade factual. A validação crítica do professor é insubstituível."
              />
            )}
          </div>

          {/* Right Column: Interactive Sandbox corresponding to the stage (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Stage 4: Interactive Tokenizer & Attention Demo */}
            {stage.number === 4 ? (
              <div className="bg-purple-50/50 p-5 rounded-xl border border-purple-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-purple-700" />
                    <span>Visualizador de Tokens (Fatiamento Semântico)</span>
                  </h4>
                  <span className="text-[11px] text-purple-700 font-medium">
                    {tokens.length} tokens
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Experimente uma frase educativa:
                  </label>
                  <input
                    type="text"
                    value={sampleSentence}
                    onChange={(e) => setSampleSentence(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-purple-300 bg-white focus:outline-hidden focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                {/* Tokens display */}
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-slate-600">
                    Tokens gerados (clique num token para ver o ID):
                  </span>
                  <div className="flex flex-wrap gap-1.5 bg-white p-3 rounded-lg border border-purple-200 min-h-16">
                    {tokens.map((t, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTokenIdx(idx)}
                        className={`text-xs font-mono px-2 py-1 rounded-md border transition-all ${
                          selectedTokenIdx === idx
                            ? 'bg-purple-600 text-white border-purple-700 shadow-2xs ring-2 ring-purple-300'
                            : 'bg-purple-50 hover:bg-purple-100 text-purple-900 border-purple-200'
                        }`}
                      >
                        {t.text}
                      </button>
                    ))}
                  </div>

                  {selectedTokenIdx !== null && tokens[selectedTokenIdx] && (
                    <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                      <span>
                        Token selecionado: <strong className="font-mono text-purple-700">&ldquo;{tokens[selectedTokenIdx].text}&rdquo;</strong>
                      </span>
                      <span className="font-mono text-slate-500">
                        ID Vetorial: #{tokens[selectedTokenIdx].id}
                      </span>
                    </div>
                  )}
                </div>

                {/* Next Token Probability Bar Chart */}
                <div className="pt-2 border-t border-purple-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-purple-950">
                      Predição do Próximo Token:
                    </span>
                    <span className="text-[10px] text-slate-500 italic">
                      Exemplo conceptual didático simplificado
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {nextTokenOptions.map((opt, i) => (
                      <div key={i} className="space-y-0.5">
                        <div className="flex justify-between text-[11px]">
                          <span className="font-mono font-medium text-slate-800">
                            &ldquo;{opt.token}&rdquo; <span className="text-slate-400">({opt.type})</span>
                          </span>
                          <span className="font-mono font-bold text-purple-900">{opt.prob}%</span>
                        </div>
                        <div className="w-full bg-purple-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${opt.prob}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : stage.number === 6 ? (
              /* Stage 6: Fact vs Hallucination comparison */
              <div className="bg-red-50/50 p-5 rounded-xl border border-red-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Demonstração de Alucinação Plausível</span>
                  </h4>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-red-200 text-xs text-slate-800 space-y-2">
                  <div className="font-semibold text-slate-900 flex items-center justify-between">
                    <span>Prompt do Aluno:</span>
                    <span className="text-[10px] text-slate-400">Exemplo Escolar</span>
                  </div>
                  <div className="font-mono text-slate-600 bg-slate-50 p-2 rounded-md">
                    &ldquo;Diz-me em que ano o navegador Vasco da Gama chegou ao Brasil e qual o nome da sua nau.&rdquo;
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
                      <span>Resposta Produzida pela IA (Convincente):</span>
                      <span className="text-rose-600 text-[10px]">Fluente na linguagem</span>
                    </div>
                    <p className="italic text-slate-700 bg-amber-50/50 p-2.5 rounded-md border border-amber-200/50">
                      &ldquo;Vasco da Gama chegou ao Brasil a 22 de abril de 1500, comandando a célebre armada que aportou em Porto Seguro a bordo da nau São Gabriel, inaugurando os laços comerciais entre os dois continentes...&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setRevealedFact(!revealedFact)}
                    className="text-xs font-semibold text-red-700 hover:text-red-900 underline"
                  >
                    {revealedFact ? 'Ocultar Análise do Erro' : 'Analisar Erros da Resposta com a Turma'}
                  </button>
                </div>

                {revealedFact && (
                  <div className="bg-white p-3.5 rounded-lg border border-red-300 text-xs space-y-2 animate-in fade-in">
                    <div className="font-bold text-red-900 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Erros Históricos Graves Mascam-se pela Fluência:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                      <li>
                        <strong>Erro factual 1:</strong> Quem chegou ao Brasil em 1500 foi <strong>Pedro Álvares Cabral</strong>, e não Vasco da Gama (que descobriu o caminho marítimo para a Índia em 1498).
                      </li>
                      <li>
                        <strong>A ilusão de plausibilidade:</strong> A IA associou palavras comuns de navegação portuguesa (Gama, 1500, nau, armada) com extrema elegância vocabular, enganando facilmente um leitor desatento.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* Generic didactic card for stages 1, 2, 3, 5 */
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Pontos-Chave para a Docência
                </h4>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      {stage.number === 1 && 'Os dados de treino vêm da internet aberta e livros digitalizados; refletem tanto o conhecimento acumulado como os preconceitos e imprecisões culturais existentes.'}
                      {stage.number === 2 && 'Durante o treino, o modelo ajusta milhares de milhões de pesos estatísticos nas redes neuronais para reconhecer associações frequentes.'}
                      {stage.number === 3 && 'O prompt atua como o vetor inicial que condiciona todo o cálculo de probabilidades da rede neuronal para as palavras seguintes.'}
                      {stage.number === 5 && 'O output é uma amostra probabilística; o mesmo prompt pode produzir respostas ligeiramente diferentes em cada execução (temperatura do modelo).'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      {stage.number === 1 && 'A IA não tem acesso místico ao mundo físico: só conhece os dados que lhe foram apresentados durante o treino.'}
                      {stage.number === 2 && 'Compreender este princípio desmistifica o conceito de "inteligência": a máquina faz cálculo matricial avançado, não reflexão consciente.'}
                      {stage.number === 3 && 'Se o professor formular um prompt vago, a probabilidade estatística expande-se para respostas genéricas e pouco úteis.'}
                      {stage.number === 5 && 'Nas imagens, o modelo de difusão não tira uma fotografia: calcula uma composição visual plausível de acordo com a descrição textual.'}
                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
                  <span>Próximo passo:</span>
                  <button
                    onClick={() => setCurrentStep((p) => Math.min(6, p + 1))}
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    Avançar para Etapa {Math.min(6, currentStep + 1)} &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);
};
