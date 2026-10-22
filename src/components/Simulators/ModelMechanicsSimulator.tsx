import React, { useState, useRef } from 'react';
import {
  Database,
  Brain,
  MessageSquare,
  Cpu,
  FileOutput,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { NoticeBanner } from '../Common/NoticeBanner';

interface StageData {
  number: number;
  title: string;
  subtitle?: string;
  badge: string;
  badgeColor: string;
  description: string;
  analogousExample?: string;
  bullets?: Array<{ label: string; text: string }>;
  keyTakeaway?: string;
  isVeryImportant?: boolean;
  icon: React.ElementType;
  circleBg: string;
  accentBorder: string;
}

const STAGES: StageData[] = [
  {
    number: 1,
    title: 'Dados de Treino',
    subtitle: 'Fase de Recolha e Digestão Massiva de Informação',
    badge: 'Fase 1: Entrada de Dados',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description:
      'A IA é previamente alimentada e treinada com bibliotecas gigantescas de textos e imagens (livros, artigos científicos, páginas web selecionadas, conteúdos educativos e enciclopédias). Nesta fase inicial, o modelo apenas "vê" e compila as regularidades dos dados brutos sem ainda produzir conteúdos.',
    analogousExample:
      'Adquirir uma biblioteca com 10.000 livros de receitas gastronómicas. Ter as receitas na prateleira ainda não significa que se saiba cozinhar.',
    icon: Database,
    circleBg: 'bg-[#3B82F6]',
    accentBorder: 'border-blue-200 hover:border-blue-300',
  },
  {
    number: 2,
    title: 'Aprendizagem de Padrões (Fase de Treino)',
    subtitle: 'Processo de Aprendizagem, Redes Neuronais e Pesos Estatísticos',
    badge: 'Fase 2: Redes Neuronais',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description:
      'Processo intensivo de aprendizagem através de redes neuronais profundas. O modelo não memoriza frases isoladas; identifica regularidades linguísticas, aprende como as palavras e conceitos se relacionam, estabelece associações semânticas e calibra biliões de parâmetros e pesos estatísticos internos.',
    analogousExample:
      'Aprender a cozinhar: perceber empiricamente como o sal, o açúcar e os tempos de cozedura influenciam o sabor sem precisar de memorizar cegamente cada linha de um livro.',
    icon: Brain,
    circleBg: 'bg-[#10B981]',
    accentBorder: 'border-emerald-200 hover:border-emerald-300',
  },
  {
    number: 3,
    title: 'Prompt do Utilizador',
    subtitle: 'Instrução, Pergunta e Contexto Pedagógico Fornecido',
    badge: 'Fase 3: Ponto de Partida',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description:
      'O professor ou formando escreve uma pergunta, instrução orientadora ou enquadramento (ex.: "Cria uma ficha formativa diferenciada para alunos do 7.º ano", "Gera uma imagem explicativa sobre o ciclo da água"). O prompt é o gatilho que orienta a trajetória do cálculo estatístico.',
    analogousExample:
      'Fazer a encomenda específica ao cozinheiro: "Prepara um almoço vegetariano com legumes da época para 4 pessoas". A precisão do pedido define o rumo exato da preparação.',
    icon: MessageSquare,
    circleBg: 'bg-[#F59E0B]',
    accentBorder: 'border-amber-200 hover:border-amber-300',
  },
  {
    number: 4,
    title: 'Processamento Interno',
    subtitle: 'Divisão em Tokens, Vetores e Mecanismos de Atenção (Transformer)',
    badge: 'Fase 4: Cálculo Matemático',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description:
      'A arquitetura Transformer decompõe o texto em unidades elementares (tokens), ativa vetores de contexto (embeddings) e calcula matematicamente as probabilidades para cada próxima palavra com recurso a mecanismos avançados de autoatenção.',
    bullets: [
      {
        label: 'Em Modelos de Linguagem (LLMs)',
        text: 'Divisão em tokens, cálculo da próxima palavra estatisticamente mais provável e ponderação contínua do contexto global da conversa.',
      },
      {
        label: 'Em Modelos de Imagem (Difusão)',
        text: 'Interpretação da descrição textual, ativação de padrões visuais aprendidos e síntese progressiva por difusão a partir de ruído estruturado.',
      },
    ],
    analogousExample:
      'O cérebro do cozinheiro a calcular em tempo real a sequência de ações, a combinação de ingredientes e a intensidade do lume.',
    icon: Cpu,
    circleBg: 'bg-[#8B5CF6]',
    accentBorder: 'border-purple-200 hover:border-purple-300',
  },
  {
    number: 5,
    title: 'Produção da Resposta (Saída / Output)',
    subtitle: 'Geração de Linguagem Natural e Plausibilidade Visual',
    badge: 'Fase 5: Entrega do Resultado',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description:
      'O modelo apresenta a resposta final sob a forma de texto coerente em linguagem natural ou composição gráfica gerada.',
    bullets: [
      {
        label: 'Texto Gerado',
        text: 'Resposta articulada, fluente e com sintaxe natural (que pode, contudo, conter imprecisões conceptuais ou erros factuais subtis).',
      },
      {
        label: 'Imagem Gerada',
        text: 'Representação visual plausível com elevado detalhe (não retrata a realidade empírica, mas sim a verosimilhança estatística).',
      },
    ],
    analogousExample:
      'O prato empratado e servido à mesa. Tem aspeto profissional e aroma apetitoso, mas o provador tem de verificar o tempero antes de aprovar.',
    icon: FileOutput,
    circleBg: 'bg-[#6366F1]',
    accentBorder: 'border-indigo-200 hover:border-indigo-300',
  },
  {
    number: 6,
    title: 'Limitação Fundamental',
    subtitle: 'MUITO IMPORTANTE — Ausência de Consciência e Risco de Alucinação',
    badge: 'Fase 6: Alerta Crítico',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    isVeryImportant: true,
    description:
      'A IA generativa não compreende o significado dos conceitos como um ser humano: não possui consciência, intencionalidade, discernimento ético nem capacidade autónoma de validar a verdade factual.',
    keyTakeaway: '■■ Resposta convincente ≠ Resposta correcta.',
    bullets: [
      {
        label: 'Natureza Estritamente Probabilística',
        text: 'Gera o que é estatisticamente verosímil com base nos dados de treino, e não o que é cientificamente comprovado.',
      },
      {
        label: 'O Papel Insubstituível do Professor',
        text: 'A curadoria docente, a validação científica e o discernimento pedagógico são absolutamente indispensáveis antes de qualquer aplicação em sala de aula.',
      },
    ],
    analogousExample:
      'O modelo não sabe o que é a dor, a ética ou o sucesso de um estudante. Produz apenas previsões probabilísticas convincentes.',
    icon: AlertTriangle,
    circleBg: 'bg-[#DC2626]',
    accentBorder: 'border-red-300 hover:border-red-400',
  },
];

export const ModelMechanicsSimulator: React.FC = () => {
  // Tokenizer interactive state
  const [sampleSentence, setSampleSentence] = useState(
    'A fotossíntese é essencial para as plantas.'
  );
  const [selectedTokenIdx, setSelectedTokenIdx] = useState<number | null>(null);

  // Plausibility demonstration state
  const [revealedFact, setRevealedFact] = useState<boolean>(false);

  // Active highlighted stage state
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);

  const stageRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const scrollToStage = (stageNum: number) => {
    setActiveStageNumber(stageNum);
    const element = stageRefs.current[stageNum];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Pedagogical tokenizer logic
  const tokens = React.useMemo(() => {
    const rawTokens: Array<{ text: string; id: number; bytes: number }> = [];
    let idCounter = 1042;
    const words = sampleSentence.split(/(\s+|[,.?!;:])/).filter(Boolean);

    words.forEach((w) => {
      if (w.trim() === '') {
        rawTokens.push({ text: '␣', id: idCounter++, bytes: 1 });
      } else if (w.length > 7) {
        const mid = Math.ceil(w.length / 2);
        rawTokens.push({ text: w.slice(0, mid), id: idCounter++, bytes: mid });
        rawTokens.push({ text: '##' + w.slice(mid), id: idCounter++, bytes: w.length - mid });
      } else {
        rawTokens.push({ text: w, id: idCounter++, bytes: w.length });
      }
    });

    return rawTokens;
  }, [sampleSentence]);

  const nextTokenOptions = [
    { token: 'oxigénio', prob: 78, type: 'Cientificamente provável e exato' },
    { token: 'vida', prob: 14, type: 'Plausível no contexto amplo' },
    { token: 'chuva', prob: 5, type: 'Pouco provável no domínio biológico' },
    { token: 'sintaxe', prob: 3, type: 'Incompatível com o tema' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden font-sans">
      {/* HEADER UNIFICADO: Visão Global do Ciclo com Passo a Passo das 6 Fases */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-50/90 via-white to-white border-b border-slate-200/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Ciclo Contínuo & Ferramentas Integradas
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0C1E38] tracking-tight">
              Visão Global do Ciclo de Funcionamento dos Modelos
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-3xl">
              Visão Global do Ciclo de Funcionamento com Passo a Passo das 6 Fases (Com Ferramentas de Exploração Integradas)
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-2xs self-start md:self-auto shrink-0">
            <Layers className="w-4 h-4 text-[#1E70EB]" />
            <span>6 Fases Encadeadas</span>
          </div>
        </div>

        {/* Linha de Progresso Visual Integrada (Pipeline Global) */}
        <div className="bg-slate-50/90 p-3 sm:p-4 rounded-2xl border border-slate-200/80">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5 px-1">
            <span>Sequência Global do Processamento (Clique para ir para a fase)</span>
            <span className="text-blue-600 lowercase font-medium">1 a 6 em fluxo contínuo</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {STAGES.map((st) => {
              const Icon = st.icon;
              const isAlert = st.isVeryImportant;
              const isActive = activeStageNumber === st.number;

              return (
                <button
                  key={st.number}
                  onClick={() => scrollToStage(st.number)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-700 shadow-xs'
                      : isAlert
                      ? 'bg-red-50/70 border-red-200 text-red-950 hover:bg-red-100/60'
                      : 'bg-white border-slate-200/80 text-slate-800 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : st.circleBg + ' text-white'
                    }`}
                  >
                    {st.number}
                  </div>
                  <div className="truncate min-w-0">
                    <span
                      className={`text-xs font-bold block truncate ${
                        isActive ? 'text-white' : 'text-slate-800'
                      }`}
                    >
                      {st.title.replace(/^\d+\.\s*/, '')}
                    </span>
                    <span
                      className={`text-[10px] block truncate ${
                        isActive ? 'text-blue-100' : 'text-slate-500'
                      }`}
                    >
                      Fase {st.number}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CORPO UNIFICADO: As 6 Fases com Ferramentas Integradas */}
      <div className="p-6 sm:p-8 space-y-8">
        {STAGES.map((st, index) => {
          const isAlert = st.isVeryImportant;
          const Icon = st.icon;
          const isLast = index === STAGES.length - 1;

          return (
            <div
              key={st.number}
              ref={(el) => {
                stageRefs.current[st.number] = el;
              }}
              onMouseEnter={() => setActiveStageNumber(st.number)}
              className={`rounded-2xl border transition-all p-6 sm:p-8 space-y-6 scroll-mt-24 ${
                isAlert
                  ? 'bg-amber-50/30 border-red-200 shadow-2xs ring-1 ring-red-200/60'
                  : 'bg-white border-slate-200/90 shadow-2xs'
              }`}
            >
              {/* Cabeçalho da Fase */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-2xl ${st.circleBg} text-white flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Fase {st.number} de 6
                      </span>
                      {st.isVeryImportant && (
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border border-red-200">
                          Muito Importante
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-extrabold ${
                        isAlert ? 'text-red-950' : 'text-[#0C1E38]'
                      }`}
                    >
                      {st.number}. {st.title}
                    </h3>
                    {st.subtitle && (
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {st.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl border self-start sm:self-auto ${st.badgeColor}`}
                >
                  {st.badge}
                </span>
              </div>

              {/* Descrição Didática Principal */}
              <p
                className={`text-xs sm:text-sm leading-relaxed font-normal ${
                  isAlert ? 'text-slate-800' : 'text-slate-700'
                }`}
              >
                {st.description}
              </p>

              {/* Sub-tópicos comparativos se existirem */}
              {st.bullets && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {st.bullets.map((b, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1 ${
                        isAlert
                          ? 'bg-white/90 border-amber-200 text-amber-950'
                          : 'bg-slate-50 border-slate-200/80 text-slate-800'
                      }`}
                    >
                      <strong
                        className={`block font-bold ${
                          isAlert ? 'text-red-700' : 'text-[#1D4ED8]'
                        }`}
                      >
                        {b.label}
                      </strong>
                      <p>{b.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Analogia Culinária do Guião Oficial */}
              {st.analogousExample && (
                <div className="bg-amber-50/70 border border-amber-200/80 p-4 sm:p-5 rounded-2xl space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Analogia Culinária do Guião Oficial</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed italic">
                    &ldquo;{st.analogousExample}&rdquo;
                  </p>
                </div>
              )}

              {/* FERRAMENTA DE EXPLORAÇÃO INTEGRADA NA FASE 4 (Tokens & Probabilidades) */}
              {st.number === 4 && (
                <div className="bg-[#FAF5FF] p-5 sm:p-6 rounded-2xl border border-purple-200 shadow-2xs space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100 pb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-800 uppercase tracking-wider">
                      <Cpu className="w-4 h-4 text-purple-600" />
                      <span>Ferramenta Integrada: Inspetor de Tokenização e Predição</span>
                    </div>
                    <span className="text-[11px] text-purple-700 font-medium">
                      Experimente alterar a frase abaixo
                    </span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Frase de exemplo pedagógico:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'A fotossíntese é essencial para as plantas.',
                        'A inteligência artificial apoia a diferenciação em aula.',
                        'Os modelos generativos prevêem tokens prováveis.',
                      ].map((example, i) => (
                        <button
                          key={i}
                          onClick={() => setSampleSentence(example)}
                          className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                            sampleSentence === example
                              ? 'bg-purple-200 text-purple-900 border-purple-400 font-bold'
                              : 'bg-white text-slate-600 hover:bg-purple-50 border-purple-200'
                          }`}
                        >
                          Exemplo {i + 1}
                        </button>
                      ))}
                    </div>

                    <input
                      type="text"
                      value={sampleSentence}
                      onChange={(e) => setSampleSentence(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-purple-200 bg-white focus:ring-2 focus:ring-purple-400 focus:outline-hidden"
                      placeholder="Escreva qualquer frase para analisar os tokens..."
                    />
                  </div>

                  {/* Token breakdown */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>
                        Tokens Decompostos (Total:{' '}
                        <strong className="text-purple-700 font-bold">{tokens.length}</strong> tokens)
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Clique num token para inspecionar
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 p-3.5 bg-white rounded-xl border border-purple-200 min-h-[50px] items-center">
                      {tokens.map((t, idx) => {
                        const isSelected = selectedTokenIdx === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedTokenIdx(isSelected ? null : idx)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-purple-600 text-white border-purple-700 shadow-xs scale-105 font-bold'
                                : 'bg-purple-50 text-purple-900 hover:bg-purple-100 border-purple-200 shadow-2xs'
                            }`}
                          >
                            <span>{t.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    {selectedTokenIdx !== null && tokens[selectedTokenIdx] && (
                      <div className="p-3 bg-white rounded-xl border border-purple-300 text-xs text-purple-900 flex items-center justify-between animate-in fade-in">
                        <div>
                          <strong>Token selecionado:</strong>{' '}
                          <code className="bg-purple-50 px-2 py-0.5 rounded font-mono border border-purple-200 text-purple-800 font-bold">
                            &quot;{tokens[selectedTokenIdx].text}&quot;
                          </code>
                          <span className="ml-3 text-slate-600">
                            ID Numérico Estimado no Vocabulário:{' '}
                            <span className="font-mono font-bold text-purple-700">
                              #{tokens[selectedTokenIdx].id}
                            </span>
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedTokenIdx(null)}
                          className="text-purple-600 hover:text-purple-900 font-bold text-xs cursor-pointer"
                        >
                          Fechar
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Next token probability distribution */}
                  <div className="pt-3 border-t border-purple-200/80 space-y-2">
                    <span className="text-xs font-bold text-purple-950 block">
                      Como a IA calcula a próxima palavra (Exemplo: &ldquo;A fotossíntese produz...&rdquo;)
                    </span>
                    <div className="space-y-1.5">
                      {nextTokenOptions.map((opt, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-xs bg-white p-2 rounded-xl border border-purple-100"
                        >
                          <span className="w-20 font-mono font-bold text-purple-900 truncate">
                            &quot;{opt.token}&quot;
                          </span>
                          <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-purple-600 h-full rounded-full"
                              style={{ width: `${opt.prob}%` }}
                            />
                          </div>
                          <span className="w-12 text-right font-bold text-purple-700 font-mono">
                            {opt.prob}%
                          </span>
                          <span className="hidden md:inline text-[11px] text-slate-500">
                            {opt.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* FERRAMENTA DE EXPLORAÇÃO INTEGRADA NA FASE 6 (Limitação Fundamental & Alucinação) */}
              {st.number === 6 && (
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-red-200 shadow-2xs space-y-4">
                  <NoticeBanner
                    type="critical"
                    title="Princípio Didático Inegociável"
                    message="Resposta convincente ≠ Resposta correcta."
                    detail="Os modelos de linguagem produzem textos de sintaxe impecável e tom persuasivo. No entanto, não possuem noção intrínseca de verdade factual. A validação científica do professor é insubstituível."
                  />

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">
                        Caso Prático de Aula: Deteção de Alucinação Histórica
                      </span>
                      <button
                        onClick={() => setRevealedFact(!revealedFact)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer underline"
                      >
                        {revealedFact ? 'Ocultar Análise Crítica' : 'Revelar Análise Pedagógica'}
                      </button>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed">
                      &ldquo;De acordo com o Tratado de Zamora de 1245, o Rei D. Afonso Henriques
                      assinou uma adenda concedendo autonomia aduaneira a Lisboa...&rdquo;
                    </div>

                    {revealedFact && (
                      <div className="p-3.5 bg-red-50 rounded-lg border border-red-200 text-xs text-red-900 space-y-1.5 animate-in fade-in">
                        <div className="flex items-center gap-2 font-bold text-red-700">
                          <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                          <span>Incorreção Histórica Grave Detetada!</span>
                        </div>
                        <p className="leading-relaxed">
                          O Tratado de Zamora é de <strong>1143</strong> (e não 1245) e D. Afonso Henriques faleceu em <strong>1185</strong>. A formulação parece erudita e perfeitamente fundamentada, mas é historicamente falsa.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Conector visual entre fases dentro do mesmo quadro */}
              {!isLast && (
                <div className="flex items-center justify-center pt-2">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[11px] font-semibold border border-slate-200/60">
                    <span>Passagem para a Fase seguinte</span>
                    <ChevronDown className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CONCLUSÃO DO QUADRO ÚNICO */}
      <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E70EB] flex items-center justify-center font-bold shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#0C1E38]">
              Síntese Didática do Ciclo Completo
            </h4>
            <p className="text-xs text-slate-600">
              A IA não pensa nem sabe: calcula probabilidades estatísticas com base nos dados que assimilou. A validação do professor é soberana.
            </p>
          </div>
        </div>

        <button
          onClick={() => scrollToStage(1)}
          className="text-xs font-bold text-[#1D4ED8] hover:text-blue-800 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs cursor-pointer shrink-0"
        >
          Voltar ao Início do Ciclo ↑
        </button>
      </div>
    </div>
  );
};
