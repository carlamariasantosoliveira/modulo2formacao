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
} from 'lucide-react';
import { NoticeBanner } from '../Common/NoticeBanner';

interface StageData {
  number: number;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  originalCourseText: string;
  deepDiveTitle?: string;
  pedagogicalDeepDive?: string;
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
    subtitle: 'Recolha, Seleção e Preparação da Informação',
    badge: 'Etapa 1 do Ciclo de Processamento',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    originalCourseText:
      'Os modelos de IA são treinados com grandes conjuntos de dados, que podem incluir textos, imagens e outros conteúdos provenientes de diversas fontes, como livros, artigos, páginas web e materiais educativos.',
    pedagogicalDeepDive:
      'Antes do treino, os dados são recolhidos, selecionados, filtrados e preparados. É durante o treino que o modelo aprende padrões através do ajustamento dos seus parâmetros.',
    analogousExample:
      'Reunir uma biblioteca de livros de receitas é obter os ingredientes para a aprendizagem. Ter as receitas disponíveis não significa, por si só, saber cozinhar.',
    keyTakeaway:
      'Os dados de treino influenciam os padrões que o modelo aprende, as suas capacidades e as suas limitações. Não determinam, de forma absoluta, tudo aquilo que poderá responder ou produzir.',
    icon: Database,
    circleBg: 'bg-[#3B82F6]',
    activeBorder: 'border-blue-600 ring-2 ring-blue-500/20',
    accentBg: 'bg-blue-50/50',
  },
  {
    number: 2,
    title: 'Aprendizagem de Padrões (Fase de Treino)',
    subtitle: 'Redes Neuronais e Ajustamento de Parâmetros',
    badge: 'Etapa 2 do Ciclo de Processamento',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    originalCourseText:
      'Durante o treino, o modelo processa exemplos dos dados e ajusta os parâmetros da sua rede neuronal, procurando reduzir o erro segundo um objetivo de aprendizagem definido.',
    pedagogicalDeepDive:
      'Através deste processo, aprende regularidades, relações e associações estatísticas entre elementos da informação, desenvolvendo representações que contribuem para as suas capacidades de previsão e geração de conteúdos.\n\nO modelo pode generalizar padrões para situações novas, mas também pode memorizar informação presente nos dados de treino. A aprendizagem não garante, por si só, compreensão factual ou respostas corretas.',
    analogousExample:
      'Aprender a cozinhar é descobrir, através da prática, como os ingredientes, as quantidades e os tempos de cozedura influenciam o resultado, em vez de apenas reproduzir receitas de memória.',
    keyTakeaway:
      'O modelo aprende padrões a partir dos dados, mas aprender regularidades não significa adquirir conhecimento infalível. Os resultados devem ser avaliados criticamente quanto à sua exatidão e adequação ao contexto educativo.',
    icon: Brain,
    circleBg: 'bg-[#10B981]',
    activeBorder: 'border-emerald-600 ring-2 ring-emerald-500/20',
    accentBg: 'bg-emerald-50/50',
  },
  {
    number: 3,
    title: 'Prompt do Utilizador',
    subtitle: 'Instrução, Pergunta e Contexto Pedagógico',
    badge: 'Etapa 3 do Ciclo de Processamento',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    originalCourseText:
      'O utilizador formula uma pergunta, instrução ou descrição, podendo incluir objetivos, contexto, restrições e formato pretendido.',
    pedagogicalDeepDive:
      'Por exemplo: «Cria uma ficha formativa diferenciada para alunos do 7.º ano, com três níveis de dificuldade e respetivos critérios de correção.»\n\nO prompt fornece as indicações que orientam a resposta do modelo, influenciando o conteúdo, o nível de detalhe e a forma de apresentação. A qualidade das instruções pode contribuir para resultados mais relevantes e adequados, mas não garante, por si só, a sua correção ou fiabilidade.',
    analogousExample:
      'Fazer uma encomenda específica ao cozinheiro: preparar um almoço vegetariano, com legumes da época, para quatro pessoas. Quanto mais claras forem as indicações, melhor poderá corresponder o resultado ao pedido.',
    keyTakeaway:
      'Um prompt claro, contextualizado e bem estruturado ajuda a orientar a resposta da IA. A sua eficácia depende também das capacidades e limitações do modelo, da informação disponível e da natureza da tarefa.',
    icon: MessageSquare,
    circleBg: 'bg-[#F59E0B]',
    activeBorder: 'border-amber-600 ring-2 ring-amber-500/20',
    accentBg: 'bg-amber-50/50',
  },
  {
    number: 4,
    title: 'Processamento Interno',
    subtitle: 'Tokenização, Representações Vetoriais e Mecanismos de Atenção',
    badge: 'Etapa 4 do Ciclo de Processamento',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    originalCourseText:
      'Após receber a instrução, o modelo de linguagem divide o texto em unidades denominadas tokens, que são convertidas em representações numéricas (vetores). Através das camadas da rede neuronal, incluindo mecanismos de Self-Attention nos modelos Transformer, a informação contextual é processada e relacionada.',
    bullets: [
      {
        label: 'Nos modelos de linguagem autoregressivos (LLMs)',
        text: 'O modelo calcula uma distribuição de probabilidades sobre os possíveis tokens seguintes. A seleção de um token depende da estratégia de geração utilizada, e o processo repete-se sequencialmente até à construção da resposta.',
      },
      {
        label: 'Nos modelos de imagem baseados em difusão',
        text: 'A geração segue um processo diferente: a partir de uma representação condicionada, frequentemente pela descrição textual, o modelo realiza etapas sucessivas de remoção de ruído, produzindo uma imagem, muitas vezes através de representações em espaço latente.',
      },
    ],
    analogousExample:
      'Perante uma encomenda, um sistema de apoio à cozinha analisa as indicações disponíveis e calcula uma sequência de operações para preparar o resultado pretendido. Cada decisão influencia as etapas seguintes.',
    keyTakeaway:
      'O modelo não compreende o significado dos conceitos nem "pensa": calcula probabilidades sequenciais e relações estatísticas a partir da instrução recebida para construir o processamento.',
    icon: Cpu,
    circleBg: 'bg-[#8B5CF6]',
    activeBorder: 'border-purple-600 ring-2 ring-purple-500/20',
    accentBg: 'bg-purple-50/50',
  },
  {
    number: 5,
    title: 'Produção da Resposta (Saída / Output)',
    subtitle: 'Geração de Texto e Imagens — Qualidade, Plausibilidade e Fiabilidade',
    badge: 'Etapa 5 do Ciclo de Processamento: Saída / Output',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    originalCourseText:
      'O modelo produz uma resposta com base no processamento realizado, gerando texto, imagens ou outros conteúdos, consoante as suas capacidades e arquitetura.',
    bullets: [
      {
        label: 'Texto Gerado (Linguagem Natural)',
        text: 'O texto pode apresentar fluência, correção gramatical, coerência e organização, transmitindo uma aparência de autoridade e competência. Contudo, estas características não garantem a exatidão factual, a qualidade das fontes ou o rigor pedagógico.',
      },
      {
        label: 'Imagem Gerada (Composição Visual)',
        text: 'As imagens podem apresentar elevado detalhe e plausibilidade visual, sem que isso garanta a correspondência com a realidade, a fidelidade documental ou a veracidade da representação.',
      },
    ],
    analogousExample:
      'O prato é empratado e servido à mesa. Pode ter uma apresentação profissional e apelativa, mas é necessário verificar os ingredientes, a preparação e a qualidade antes de o aprovar.',
    keyTakeaway:
      'A fluência do texto e a plausibilidade visual são características da resposta gerada, não garantias de verdade factual, fiabilidade ou rigor pedagógico. A avaliação crítica e a validação do resultado são indispensáveis antes da sua utilização educativa.',
    icon: FileOutput,
    circleBg: 'bg-[#6366F1]',
    activeBorder: 'border-indigo-600 ring-2 ring-indigo-500/20',
    accentBg: 'bg-indigo-50/50',
  },
  {
    number: 6,
    title: 'Limitação Fundamental',
    subtitle: 'Ausência de Consciência e Padrões Estatísticos',
    badge: 'Chamada de Atenção Pedagógica',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    isAttentionCall: true,
    originalCourseText:
      'Os modelos de linguagem identificam e reproduzem padrões estatísticos. A geração de uma resposta gramaticalmente correta e fluente não garante que a informação seja verdadeira, atualizada ou adequada a um objetivo educativo.',
    pedagogicalDeepDive:
      'Os modelos de linguagem identificam e reproduzem padrões estatísticos. A geração de uma resposta gramaticalmente correta e fluente não garante que a informação seja verdadeira, atualizada ou adequada a um objetivo educativo.',
    keyTakeaway: '■■ Resposta convincente ≠ Resposta verdadeira ou pedagogicamente adequada.',
    bullets: [
      {
        label: 'Padrões Estatísticos vs. Validação Factual',
        text: 'O modelo gera respostas calculando probabilidades com base nos dados de treino. A fluência sintática e o vocabulário persuasivo não garantem rigor científico nem adequação curricular.',
      },
      {
        label: 'O Papel Insubstituível do Professor',
        text: 'A curadoria docente, a validação científica das respostas e o discernimento pedagógico são absolutamente indispensáveis antes de qualquer aplicação com alunos.',
      },
    ],
    analogousExample:
      'Uma resposta bem redigida e estruturada pode conter imprecisões e erros subtis; a validação humana é indispensável.',
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
      {/* NAVEGADOR DE ABAS: 5 ETAPAS DO CICLO + CHAMADA DE ATENÇÃO */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 space-y-2.5">
          <div className="flex items-center justify-end text-[11px] font-bold uppercase tracking-wider px-1">
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

          {/* SÍNTESE DIRETA DO CONTEÚDO */}
          <div
            className={`border rounded-2xl p-4 sm:p-5 ${
              currentStage.isAttentionCall
                ? 'bg-red-50/60 border-red-200'
                : 'bg-blue-50/50 border-blue-200/70'
            }`}
          >
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {currentStage.originalCourseText}
            </p>
          </div>

          {/* DETALHE / APROFUNDAMENTO PEDAGÓGICO */}
          {currentStage.pedagogicalDeepDive && (
            <div className="space-y-2">
              {currentStage.deepDiveTitle && (
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  {currentStage.deepDiveTitle}
                </h4>
              )}
              <div className="text-xs sm:text-sm leading-relaxed text-slate-700 font-normal whitespace-pre-line">
                {currentStage.pedagogicalDeepDive}
              </div>
            </div>
          )}

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
              Analogia Culinária Didática — A Cozinha da IA
            </span>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed italic font-medium">
              «{currentStage.analogousExample}»
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
                  Conclusão
                </span>
                <span className="font-medium text-slate-900">{currentStage.keyTakeaway}</span>
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
    </div>
  );
};
