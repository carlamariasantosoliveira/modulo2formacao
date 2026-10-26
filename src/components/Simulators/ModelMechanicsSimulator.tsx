import React, { useState } from 'react';
import {
  Database,
  Brain,
  MessageSquare,
  Cpu,
  FileOutput,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Layers,
} from 'lucide-react';
import { NoticeBanner } from '../Common/NoticeBanner';

interface StageData {
  number: number;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  originalCourseText: string;
  pedagogicalDeepDive: string;
  analogousExample: string;
  keyTakeaway?: string;
  bullets?: Array<{ label: string; text: string }>;
  isAttentionCall?: boolean;
  icon: React.ElementType;
  circleBg: string;
  activeBorder: string;
  accentBg: string;
}

const STAGES: StageData[] = [
  {
    number: 1,
    title: 'Dados de Treino',
    subtitle: 'Fase de Recolha e Digestão Massiva de Informação',
    badge: 'Etapa 1 do Ciclo de Processamento',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    originalCourseText:
      'A IA é treinada com grandes volumes de textos e imagens (livros, artigos, páginas web, conteúdos educativos). Nesta fase inicial, o modelo apenas "vê" os dados sem ainda aprender.',
    pedagogicalDeepDive:
      'Nesta etapa fundacional, reúnem-se bibliotecas digitais gigantescas contendo biliões de palavras e imagens selecionadas (enciclopédias, artigos científicos, manuais e literatura diversa). O modelo efetua uma recolha maciça e estruturação dos dados brutos. É a matéria-prima sobre a qual o futuro modelo irá operar, sem ainda gerar qualquer conteúdo autónomo.',
    analogousExample:
      'Adquirir uma biblioteca com 10.000 livros de receitas gastronómicas. Ter as receitas na prateleira ainda não significa que se saiba cozinhar.',
    keyTakeaway:
      'Os dados de treino delimitam o universo conhecido pelo modelo. Se um dado ou fonte não integrou este conjunto, o modelo não tem conhecimento direto dele.',
    icon: Database,
    circleBg: 'bg-[#3B82F6]',
    activeBorder: 'border-blue-600 ring-2 ring-blue-500/20',
    accentBg: 'bg-blue-50/50',
  },
  {
    number: 2,
    title: 'Aprendizagem de Padrões (Fase de Treino)',
    subtitle: 'Processo de Aprendizagem, Redes Neuronais e Pesos Estatísticos',
    badge: 'Etapa 2 do Ciclo de Processamento',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    originalCourseText:
      'Processo de aprendizagem a partir dos dados. O modelo identifica regularidades, aprende como os elementos se organizam, estabelece associações e ajusta probabilidades internas.',
    pedagogicalDeepDive:
      'Processo computacional intensivo através de redes neuronais profundas (Deep Learning). O modelo não memoriza frases isoladas nem cópias mecânicas de páginas web: identifica regularidades linguísticas, aprende como as palavras e conceitos se relacionam, estabelece associações semânticas e calibra centenas de biliões de parâmetros e pesos estatísticos internos.',
    analogousExample:
      'Aprender a cozinhar: perceber empiricamente como o sal, o açúcar e os tempos de cozedura influenciam o sabor sem precisar de memorizar cegamente cada linha de um livro.',
    keyTakeaway:
      'O modelo adquire uma "intuição estatística" sobre a estrutura da linguagem e do mundo, e não uma compreensão consciente.',
    icon: Brain,
    circleBg: 'bg-[#10B981]',
    activeBorder: 'border-emerald-600 ring-2 ring-emerald-500/20',
    accentBg: 'bg-emerald-50/50',
  },
  {
    number: 3,
    title: 'Prompt do Utilizador (Ponto de Partida)',
    subtitle: 'Instrução, Pergunta e Contexto Pedagógico Fornecido',
    badge: 'Etapa 3 do Ciclo de Processamento',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    originalCourseText:
      'O utilizador escreve uma pergunta, instrução ou descrição. O prompt orienta o cálculo estatístico, mas não garante a verdade.',
    pedagogicalDeepDive:
      'O professor ou formando formula a sua instrução, definindo o contexto, a tarefa, as restrições e o formato desejado (ex.: "Cria uma ficha formativa diferenciada para alunos do 7.º ano"). O prompt atua como o gatilho inicial que orienta a trajetória do cálculo probabilístico da rede, delimitando o campo temático da resposta.',
    analogousExample:
      'Fazer a encomenda específica ao cozinheiro: "Prepara um almoço vegetariano com legumes da época para 4 pessoas". A precisão e o detalhe do pedido definem o rumo exato da preparação.',
    keyTakeaway:
      'Quanto mais claro, rico e estruturado for o prompt, menor é o espaço para divagações genéricas ou respostas desajustadas.',
    icon: MessageSquare,
    circleBg: 'bg-[#F59E0B]',
    activeBorder: 'border-amber-600 ring-2 ring-amber-500/20',
    accentBg: 'bg-amber-50/50',
  },
  {
    number: 4,
    title: 'Processamento Interno',
    subtitle: 'Divisão em Tokens, Vetores e Mecanismos de Atenção (Transformer)',
    badge: 'Etapa 4 do Ciclo de Processamento',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    originalCourseText:
      'Divisão em tokens, cálculo da próxima palavra mais provável e uso de mecanismos de atenção ao contexto.',
    pedagogicalDeepDive:
      'A arquitetura Transformer decompõe a instrução em pedaços elementares (tokens) e converte-os em vetores numéricos num espaço semântico multidimensional. Através de sucessivas camadas de atenção (Self-Attention), o modelo analisa a relação entre cada palavra da frase e todas as outras, calculando em frações de segundo qual é o próximo token matematicamente mais provável.',
    bullets: [
      {
        label: 'Em Modelos de Linguagem (LLMs)',
        text: 'Divisão em tokens, cálculo sequencial da próxima palavra mais provável e ponderação contínua de todo o contexto anterior da conversa.',
      },
      {
        label: 'Em Modelos de Imagem (Difusão)',
        text: 'Interpretação da descrição textual em vetores latentes visuais e síntese progressiva de píxeis através da remoção orientada de ruído.',
      },
    ],
    analogousExample:
      'O cérebro do cozinheiro a calcular em tempo real a sequência de ações, a combinação de ingredientes e a intensidade do lume.',
    keyTakeaway:
      'Não há reflexão semântica consciente: o processamento interno é uma sucessão ultra-rápida de multiplicações matriciais e probabilidades.',
    icon: Cpu,
    circleBg: 'bg-[#8B5CF6]',
    activeBorder: 'border-purple-600 ring-2 ring-purple-500/20',
    accentBg: 'bg-purple-50/50',
  },
  {
    number: 5,
    title: 'Produção da Resposta (Saída / Output)',
    subtitle: 'Geração de Linguagem Natural e Plausibilidade Visual',
    badge: 'Etapa 5 do Ciclo de Processamento: Saída / Output',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    originalCourseText:
      'Resposta coerente em linguagem natural (pode conter erros factuais).',
    pedagogicalDeepDive:
      'O modelo reconverte os vetores de tokens calculados em texto legível e fluente, ou gera o ficheiro de imagem final sintetizado. A resposta tem aparência altamente profissional, sintaxe esmerada e organização convincente, parecendo ter sido escrita por um especialista humano.',
    bullets: [
      {
        label: 'Texto Gerado (Linguagem Natural)',
        text: 'Texto articulado com gramática e coerência estilística apurada, que pode, no entanto, veicular imprecisões ou erros factuais graves.',
      },
      {
        label: 'Imagem Gerada (Composição Visual)',
        text: 'Composição visual de elevado detalhe e plausibilidade estatística, sem qualquer compromisso de retratar uma verdade empírica pré-existente.',
      },
    ],
    analogousExample:
      'O prato empratado e servido à mesa. Tem aspeto profissional e aroma apetitoso, mas o provador tem de verificar o tempero antes de aprovar.',
    keyTakeaway:
      'A fluência da resposta é uma propriedade estatística da linguagem, não uma garantia de verdade factual ou rigor pedagógico.',
    icon: FileOutput,
    circleBg: 'bg-[#6366F1]',
    activeBorder: 'border-indigo-600 ring-2 ring-indigo-500/20',
    accentBg: 'bg-indigo-50/50',
  },
  {
    number: 6,
    title: 'Limitação Fundamental',
    subtitle: 'Ausência de Consciência e Risco de Alucinação',
    badge: 'Chamada de Atenção Pedagógica',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    isAttentionCall: true,
    originalCourseText:
      'Não compreende como um ser humano, não valida factos e não possui consciência. Resposta convincente ≠ Resposta correcta.',
    pedagogicalDeepDive:
      'A IA generativa não compreende o significado dos conceitos como um ser humano: não possui consciência, intencionalidade, discernimento ético nem capacidade autónoma de validar a verdade factual. O modelo gera apenas o que é estatisticamente plausível a partir dos dados assimilados.',
    keyTakeaway: '■■ Resposta convincente ≠ Resposta correcta.',
    bullets: [
      {
        label: 'Natureza Estritamente Probabilística',
        text: 'Gera o que é estatisticamente verosímil com base nos dados de treino, e não o que é cientificamente verificado. Quando não encontra correspondência exata, pode inventar factos convincentes (alucinação).',
      },
      {
        label: 'O Papel Insubstituível do Professor',
        text: 'A curadoria docente, a validação científica das respostas e o discernimento pedagógico são absolutamente indispensáveis antes de qualquer aplicação com alunos.',
      },
    ],
    analogousExample:
      'O modelo não sabe o que é a dor, a ética ou o sucesso de um estudante. Produz apenas previsões probabilísticas convincentes.',
    icon: AlertTriangle,
    circleBg: 'bg-[#DC2626]',
    activeBorder: 'border-red-600 ring-2 ring-red-500/20',
    accentBg: 'bg-red-50/50',
  },
];

export const ModelMechanicsSimulator: React.FC = () => {
  // Current active phase selected by the trainee (1 to 5 = Ciclo de processamento; 6 = Chamada de Atenção)
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);

  // Plausibility demonstration state (Chamada de Atenção)
  const [revealedFact, setRevealedFact] = useState<boolean>(false);

  // Active stage object
  const currentStage = STAGES.find((s) => s.number === activeStageNumber) || STAGES[0];
  const CurrentIcon = currentStage.icon;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden font-sans">
      {/* CABEÇALHO DO QUADRO UNIFICADO */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-black text-[#0C1E38] tracking-tight">
              Visão Global do Ciclo de Funcionamento dos Modelos
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-3xl">
              Ciclo de Processamento em 5 Etapas e Chamada de Atenção para a Limitação Fundamental
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3.5 py-2 rounded-2xl border border-slate-200 shadow-2xs self-start md:self-auto shrink-0">
            <Layers className="w-4 h-4 text-[#1E70EB]" />
            <span>Selecione uma etapa abaixo</span>
          </div>
        </div>

        {/* NAVEGADOR DE ABAS: 5 ETAPAS DO CICLO + CHAMADA DE ATENÇÃO */}
        <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider px-1">
            <span>Ciclo de Processamento (5 Etapas) + Chamada de Atenção — Selecione uma aba:</span>
            <span className={activeStageNumber === 6 ? 'text-red-600 font-black' : 'text-blue-600 font-bold'}>
              {activeStageNumber <= 5 ? `Etapa ${activeStageNumber} de 5 do Ciclo` : 'Chamada de Atenção Pedagógica'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {STAGES.map((st) => {
              const isSelected = activeStageNumber === st.number;
              const isAttention = st.isAttentionCall;

              return (
                <button
                  key={st.number}
                  onClick={() => setActiveStageNumber(st.number)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 relative ${
                    isSelected
                      ? isAttention
                        ? 'bg-red-600 text-white border-red-700 shadow-md ring-2 ring-red-500/30'
                        : 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-500/30'
                      : isAttention
                      ? 'bg-red-50/80 border-red-200 text-red-950 hover:bg-red-100 hover:border-red-300'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    {isAttention ? (
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                          isSelected ? 'bg-white text-red-600' : 'bg-red-600 text-white shadow-2xs'
                        }`}
                      >
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                          isSelected ? 'bg-white text-blue-700' : st.circleBg + ' text-white'
                        }`}
                      >
                        {st.number}
                      </span>
                    )}

                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? isAttention
                            ? 'bg-red-700 text-red-100'
                            : 'bg-blue-700 text-blue-100'
                          : isAttention
                          ? 'bg-red-200 text-red-900 font-extrabold'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isAttention ? 'Atenção' : `Etapa ${st.number}`}
                    </span>
                  </div>

                  <div className="truncate w-full">
                    <span
                      className={`text-xs font-bold block truncate ${
                        isSelected ? 'text-white' : isAttention ? 'text-red-950' : 'text-slate-900'
                      }`}
                    >
                      {st.title.replace(/^\d+\.\s*/, '')}
                    </span>
                    <span
                      className={`text-[10px] block truncate ${
                        isSelected
                          ? isAttention
                            ? 'text-red-100'
                            : 'text-blue-100'
                          : isAttention
                          ? 'text-red-700 font-medium'
                          : 'text-slate-500'
                      }`}
                    >
                      {isAttention ? '(Não é uma fase)' : st.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ÁREA DE VISUALIZAÇÃO EXCLUSIVA DO ITEM SELECIONADO */}
      <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-200">
        <div className="space-y-6">
          {/* CABEÇALHO DO ITEM SELECIONADO */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 ${currentStage.circleBg}`}
              >
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {currentStage.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                  {currentStage.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* SÍNTESE DIRETA DO CONTEÚDO (Sem etiqueta redundante) */}
          <div
            className={`border rounded-2xl p-4 sm:p-5 ${
              currentStage.isAttentionCall
                ? 'bg-red-50/60 border-red-200'
                : 'bg-blue-50/50 border-blue-200/70'
            }`}
          >
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
              &ldquo;{currentStage.originalCourseText}&rdquo;
            </p>
          </div>

          {/* APROFUNDAMENTO PEDAGÓGICO */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Aprofundamento Didático & Funcionamento Detalhado:
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-normal">
              {currentStage.pedagogicalDeepDive}
            </p>
          </div>

          {/* Sub-tópicos comparativos se existirem nesta fase */}
          {currentStage.bullets && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {currentStage.bullets.map((b, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1.5 ${
                    currentStage.isAttentionCall
                      ? 'bg-white border-amber-200 text-amber-950 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <strong className="block text-slate-900 font-bold">{b.label}</strong>
                  <p className="text-slate-700">{b.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* ANALOGIA CULINÁRIA DIDÁTICA DO GUIÃO */}
          <div className="bg-[#FFFBEB] p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-2xs space-y-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 block">
              Analogia Culinária Didática (A Cozinha da IA):
            </span>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed italic font-medium">
              &ldquo;{currentStage.analogousExample}&rdquo;
            </p>
          </div>

          {/* PRINCÍPIO-CHAVE DA ETAPA / CHAMADA */}
          {currentStage.keyTakeaway && (
            <div
              className={`p-4 rounded-2xl border flex items-start gap-3 ${
                currentStage.isAttentionCall
                  ? 'bg-red-50 border-red-200 text-red-950'
                  : 'bg-blue-50/60 border-blue-200 text-blue-950'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  currentStage.isAttentionCall
                    ? 'bg-red-600 text-white'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {currentStage.isAttentionCall ? (
                  <AlertTriangle className="w-3.5 h-3.5" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                )}
              </div>
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-extrabold uppercase text-[10px] tracking-wider block opacity-75 mb-0.5">
                  {currentStage.isAttentionCall ? 'Princípio Fundamental' : 'Conclusão Pedagógica'}
                </span>
                <span className="font-bold">{currentStage.keyTakeaway}</span>
              </div>
            </div>
          )}

          {/* DETALHE DIDÁTICO NA CHAMADA DE ATENÇÃO (Limitação Fundamental & Alucinação) */}
          {currentStage.number === 6 && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-red-200 shadow-2xs space-y-4 mt-4">
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

        </div>
      </div>

      {/* SÍNTESE DIDÁTICA DO CICLO COMPLETO NO RODAPÉ DO QUADRO */}
      <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E70EB] flex items-center justify-center font-bold shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#0C1E38]">
              Síntese Didática do Ciclo de Funcionamento
            </h4>
            <p className="text-xs text-slate-600">
              A IA não pensa nem sabe: calcula probabilidades estatísticas em 5 etapas a partir dos dados assimilados. A validação do professor é soberana.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-semibold text-slate-500">
            {activeStageNumber <= 5
              ? `Etapa ${activeStageNumber} de 5 do Ciclo`
              : 'Chamada de Atenção Pedagógica'}
          </span>
        </div>
      </div>
    </div>
  );
};
