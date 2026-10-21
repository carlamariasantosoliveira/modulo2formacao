import React, { useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Sliders,
  Send,
  Loader2,
  FileCheck,
  ArrowRightLeft,
  Info,
} from 'lucide-react';
import { NoticeBanner } from '../Common/NoticeBanner';

interface PromptPreset {
  name: string;
  context: string;
  task: string;
  targetAudience: string;
  restrictions: string;
  format: string;
  examplesRef?: string;
  vagueComparison: string;
  vagueOutputDemonstration: string;
  optimizedOutputDemonstration: string;
}

const PRESETS: PromptPreset[] = [
  {
    name: 'Português (9.º Ano - Texto Argumentativo)',
    context: 'Age como professor de Português do 9.º ano.',
    task: 'Explica o que é um texto argumentativo para alunos do 9.º ano.',
    targetAudience: 'Alunos do 9.º ano (cerca de 13–14 anos).',
    restrictions: 'Usa linguagem clara e acessível, evitando jargão linguístico impenetrável. No final, revê o texto para verificar a adequação ao nível de ensino.',
    format: 'Organiza a explicação em tópicos curtos e inclui um exemplo simples de texto argumentativo quotidiano.',
    examplesRef: '',
    vagueComparison: 'Explica o que é um texto argumentativo.',
    vagueOutputDemonstration:
      'Um texto argumentativo é uma tipologia textual cujo escopo primordial reside na defesa de uma tese dialética através de premissas epistémicas e inferências lógicas, visando a adesão do auditório...',
    optimizedOutputDemonstration:
      'Olá a todos! Como vosso professor de Português, vou explicar o que é um Texto Argumentativo de forma direta:\n\n• O que é: É um texto onde defendes a tua opinião sobre um tema, usando argumentos (razões) e provas para convencer quem está a ler.\n• Estrutura:\n  1. Tese: A tua posição inicial (ex: "Os telemóveis devem ser permitidos no recreio").\n  2. Argumentos: As razões que provam a tua ideia (ex: "Permite contactar a família em emergências" e "Ajuda a organizar trabalhos de grupo").\n  3. Conclusão: O fecho que reforça a tua ideia principal.\n\n• Exemplo simples:\n"Penso que a reciclagem na nossa escola é urgente (Tese). Todos os dias deitamos fora centenas de garrafas plásticas no lixo comum, poluindo o ambiente (Argumento 1). Se colocarmos ecopontos em cada sala, podemos reciclar mais de 80% desse desperdício (Argumento 2). Por isso, cada turma deve ter ecopontos dedicados (Conclusão)."\n\n[Auto-revisão]: Texto revisto. Linguagem direta e acessível ao 9.º ano, com exemplo escolar.',
  },
  {
    name: 'Matemática (7.º Ano - Equações do 1.º Grau)',
    context: 'Age como professor de Matemática do 7.º ano.',
    task: 'Explica como resolver equações do 1.º grau.',
    targetAudience: 'Alunos do 7.º ano a iniciar a álgebra.',
    restrictions: 'Linguagem simples, evitando termos puramente formais sem suporte intuitivo. Apresenta passos lógicos claros.',
    format: 'Apresenta a explicação passo a passo e inclui dois exemplos resolvidos com todas as passagens explicadas.',
    examplesRef: '',
    vagueComparison: 'Explica equações do 1.º grau.',
    vagueOutputDemonstration:
      'Equações do primeiro grau são igualdades da forma ax + b = c, onde a, b, c pertencem a R com a diferente de 0. O método de resolução envolve o isolamento da incógnita pelo inverso aditivo e multiplicativo.',
    optimizedOutputDemonstration:
      'Vamos aprender a resolver equações do 1.º grau com a regra da balança!\n\n• Ideia Principal: Uma equação é como uma balança de dois pratos em equilíbrio. O objetivo é deixar a letra "x" sozinha num dos lados.\n\n• Os 3 Passos Essenciais:\n  1. Tudo o que tem "x" fica no 1.º membro (à esquerda); o que são números puros vai para o 2.º membro (à direita).\n  2. Quando um termo muda de lado, muda de sinal (+ passa a -, e - passa a +).\n  3. No fim, divide-se o número à direita pelo valor que está a multiplicar o x.\n\n• Exemplo 1: 2x + 4 = 10\n  - Passo 1: Passar o +4 para o outro lado -> 2x = 10 - 4\n  - Passo 2: Calcular -> 2x = 6\n  - Passo 3: Dividir por 2 -> x = 6 / 2 -> x = 3\n  - Solução: S = {3}\n\n• Exemplo 2: 3x - 5 = x + 7\n  - Passo 1: Agrupar os termos com x -> 3x - x = 7 + 5\n  - Passo 2: Reduzir -> 2x = 12\n  - Passo 3: Dividir -> x = 12 / 2 -> x = 6\n  - Solução: S = {6}',
  },
  {
    name: 'História (9.º Ano - Revolução Francesa)',
    context: 'Age como professor de História do 9.º ano.',
    task: 'Explica as principais causas da Revolução Francesa para apoiar o estudo para uma avaliação sumativa.',
    targetAudience: 'Alunos do 9.º ano em fase de preparação para teste.',
    restrictions: 'Usa frases curtas. Sempre que possível, justifica cada causa. Revê o texto para garantir rigor histórico e clareza conceptual.',
    format: 'Organiza a resposta exatamente em 5 pontos numerados.',
    examplesRef: '',
    vagueComparison: 'Explica as causas da revolução francesa.',
    vagueOutputDemonstration:
      'A Revolução Francesa foi um evento de grande dimensão que ocorreu em 1789, motivado pela crise económica que assolava a França, pelos pensamentos dos filósofos que escreviam na época e pelo descontentamento das pessoas com a monarquia absolutista de Luís XVI...',
    optimizedOutputDemonstration:
      'Guia de Estudo: 5 Causas da Revolução Francesa (1789)\n\n1. Desigualdade Social do Antigo Regime:\nA sociedade estava dividida em três estados. O Clero e a Nobreza (2% da população) não pagavam impostos e tinham todos os privilégios, enquanto o Terceiro Estado (povo e burguesia, 98%) sustentava o reino sozinho.\n\n2. Crise Financeira e Endividamento da Coroa:\nOs gastos excessivos da corte de Versalhes e os custos militares (como o apoio à Guerra da Independência Americana) levaram a França à bancarrota.\n\n3. Crise Agrícola e Fome Generalizada:\nMaus anos agrícolas na década de 1780 provocaram quebras nas colheitas, fazendo disparar o preço do pão e gerando revoltas populares.\n\n4. Difusão dos Ideais Iluministas:\nFilósofos como Montesquieu, Voltaire e Rousseau defenderam a igualdade perante a lei, a separação de poderes e a soberania popular, inspirando a burguesia a exigir reformas.\n\n5. Crise Política e Paralisia Monárquica:\nO rei Luís XVI tentou impor novos impostos sem ceder poder, o que culminou na convocação dos Estados Gerais e na consequente Tomada da Bastilha.\n\n[Revisão de Rigor]: Factos históricos conferidos. 5 pontos estruturados com justificações e terminologia do programa.',
  },
  {
    name: 'Ciências Naturais (8.º Ano - Fotossíntese)',
    context: 'Age como professor de Ciências Naturais do 8.º ano.',
    task: 'Explica o processo da fotossíntese como material didático.',
    targetAudience: 'Alunos do 8.º ano.',
    restrictions: 'Usa linguagem simples e exemplos do dia a dia. No final, verifica se a explicação está cientificamente correta e melhora a clareza.',
    format: 'Apresenta a resposta em tópicos.',
    examplesRef: '',
    vagueComparison: 'Explica a fotossíntese.',
    vagueOutputDemonstration:
      'A fotossíntese é o processo bioquímico efetuado por organismos fotoautotróficos através do qual a radiação luminosa é capturada por pigmentos antena nos tilacoides...',
    optimizedOutputDemonstration:
      'Fotossíntese: A "Cozinha Solar" das Plantas (Material Didático - 8.º Ano)\n\n• O que é:\nÉ o processo através do qual as plantas verdes e as algas produzem o seu próprio alimento (glicose) utilizando energia luminosa do Sol.\n\n• Onde acontece:\nNas folhas, dentro de pequenas estruturas celulares chamadas cloroplastos, que contêm o pigmento verde chamado clorofila.\n\n• Os 3 Ingredientes de Entrada (Reagentes):\n  1. Água e sais minerais: Absorvidos do solo pelas raízes e transportados até às folhas (seiva bruta).\n  2. Dióxido de carbono (CO2): Captado do ar através dos estomas das folhas.\n  3. Luz solar: A fonte de energia que ativa a reação.\n\n• Os 2 Produtos de Saída (Resultados):\n  1. Glicose (Açúcar): O alimento da planta que lhe permite crescer e viver.\n  2. Oxigénio (O2): Libertado para a atmosfera, essencial para a respiração de animais e humanos.\n\n• Fórmula Simplificada do Quotidiano:\nÁgua + Dióxido de Carbono + Luz Solar ➡ Glicose + Oxigénio\n\n[Verificação Científica]: Equação biológica correta; terminologia precisa adaptada à faixa etária.',
  },
];

export const PromptLabSimulator: React.FC = () => {
  const [context, setContext] = useState(PRESETS[0].context);
  const [task, setTask] = useState(PRESETS[0].task);
  const [targetAudience, setTargetAudience] = useState(PRESETS[0].targetAudience);
  const [restrictions, setRestrictions] = useState(PRESETS[0].restrictions);
  const [format, setFormat] = useState(PRESETS[0].format);
  const [examplesRef, setExamplesRef] = useState(PRESETS[0].examplesRef || '');

  const [activeTab, setActiveTab] = useState<'assembled' | 'comparison' | 'execution'>('assembled');
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [executionResult, setExecutionResult] = useState<string | null>(null);
  const [executionSource, setExecutionSource] = useState<'api' | 'demo'>('demo');
  const [copied, setCopied] = useState(false);

  const assembledPrompt = `“${context} ${task} ${
    targetAudience ? `Público-alvo: ${targetAudience}. ` : ''
  }${restrictions ? `${restrictions} ` : ''}${format ? `${format} ` : ''}${
    examplesRef ? `\n\nExemplos de referência:\n${examplesRef}` : ''
  }”`.trim();

  const handleApplyPreset = (index: number) => {
    const p = PRESETS[index];
    setSelectedPresetIndex(index);
    setContext(p.context);
    setTask(p.task);
    setTargetAudience(p.targetAudience);
    setRestrictions(p.restrictions);
    setFormat(p.format);
    setExamplesRef(p.examplesRef || '');
    setExecutionResult(null);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(assembledPrompt.replace(/^“|”$/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecutePrompt = async () => {
    setIsLoading(true);
    setActiveTab('execution');

    try {
      const response = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: assembledPrompt,
          systemInstruction: 'És um assistente pedagógico para professores portugueses. Mantém linguagem rigorosa em português de Portugal.',
        }),
      });

      const data = await response.json();

      if (response.ok && data.text) {
        setExecutionResult(data.text);
        setExecutionSource('api');
      } else {
        // Fallback transparent demonstration
        setExecutionResult(PRESETS[selectedPresetIndex].optimizedOutputDemonstration);
        setExecutionSource('demo');
      }
    } catch {
      setExecutionResult(PRESETS[selectedPresetIndex].optimizedOutputDemonstration);
      setExecutionSource('demo');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="px-6 py-5 border-b border-slate-100 bg-linear-to-r from-blue-50/70 via-indigo-50/30 to-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1">
              <Sliders className="w-4 h-4 text-blue-600" />
              <span>Simulador Pedagógico Funcional</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Laboratório de Engenharia de Prompts
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Constrói, calibra e testa prompts com os 4 elementos estruturais: Contexto, Tarefa, Restrições e Formato.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleApplyPreset(0)}
              className="text-xs font-medium text-slate-600 hover:text-blue-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs hover:bg-slate-50 transition-colors"
            >
              Reiniciar Padrão
            </button>
          </div>
        </div>

        {/* Preset Selector Chips */}
        <div className="mt-4 pt-3 border-t border-slate-200/60">
          <span className="text-xs font-semibold text-slate-700 block mb-2">
            Carregar predefinição do PDF:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleApplyPreset(idx)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedPresetIndex === idx
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Form Builder (7 cols) */}
        <div className="lg:col-span-7 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span>Parâmetros Estruturais do Prompt</span>
            </h3>
            <span className="text-xs text-slate-500">Edite qualquer campo</span>
          </div>

          {/* Context Field */}
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-blue-900 mb-1.5">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
                1. Contexto (Quem é a IA? / Papel)
              </span>
              <span className="text-[11px] text-slate-600 font-normal">Ex: Age como professor de...</span>
            </label>
            <input
              type="text"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Ex: Age como professor de Português do 9.º ano."
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* Task Field */}
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-emerald-900 mb-1.5">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                2. Tarefa Principal (O que deve fazer?)
              </span>
              <span className="text-[11px] text-slate-600 font-normal">Ação direta e conteúdo</span>
            </label>
            <textarea
              rows={2}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Ex: Explica o que é um texto argumentativo para alunos do 9.º ano."
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Target Audience */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Público-Alvo e Nível
              </label>
              <input
                type="text"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="Ex: Alunos do 9.º ano (13 anos)"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-500 bg-white"
              />
            </div>

            {/* Response Format */}
            <div>
              <label className="flex items-center justify-between text-xs font-semibold text-rose-900 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-600 inline-block"></span>
                  4. Formato da Resposta
                </span>
              </label>
              <input
                type="text"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                placeholder="Ex: Organiza em tópicos curtos e inclui um exemplo simples."
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-rose-500 bg-white"
              />
            </div>
          </div>

          {/* Restrictions Field */}
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-amber-900 mb-1.5">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-600 inline-block"></span>
                3. Restrições e Critérios de Qualidade (O que evitar / Verificação)
              </span>
            </label>
            <textarea
              rows={2}
              value={restrictions}
              onChange={(e) => setRestrictions(e.target.value)}
              placeholder="Ex: Usa linguagem simples. No final, revê o texto verificando se a explicação é adequada."
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 bg-white"
            />
          </div>

          {/* Few-Shot Examples (Optional) */}
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-purple-900 mb-1.5">
              <span>Exemplos de Referência (Few-Shot Prompting — Opcional)</span>
            </label>
            <input
              type="text"
              value={examplesRef}
              onChange={(e) => setExamplesRef(e.target.value)}
              placeholder="Ex: Exemplo 1: Frase: ... Classificação: Verdadeira"
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-purple-500 bg-white"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Prompt Copiado!' : 'Copiar Prompt'}</span>
            </button>

            <button
              onClick={handleExecutePrompt}
              disabled={isLoading}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg shadow-sm transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>A processar com IA...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Testar Prompt e Ver Resposta</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Output & Comparison Tabs (5 cols) */}
        <div className="lg:col-span-5 p-6 bg-slate-50/70 flex flex-col justify-between">
          <div>
            {/* View switcher tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl mb-4">
              <button
                onClick={() => setActiveTab('assembled')}
                className={`flex-1 text-xs py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'assembled'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Prompt Montado
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`flex-1 text-xs py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'comparison'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Vago vs Otimizado
              </button>
              <button
                onClick={() => setActiveTab('execution')}
                className={`flex-1 text-xs py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'execution'
                    ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Resultado da IA
              </button>
            </div>

            {/* TAB 1: Assembled Prompt */}
            {activeTab === 'assembled' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Texto Final do Prompt:</span>
                  <span className="font-mono text-[11px]">{assembledPrompt.length} caracteres</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 leading-relaxed shadow-2xs select-all whitespace-pre-wrap">
                  {assembledPrompt}
                </div>

                <div className="bg-blue-50/70 p-3 rounded-lg border border-blue-200/70 text-xs text-blue-900 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-blue-600" />
                    <span>Dica Pedagógica do Módulo:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-blue-800">
                    A inclusão de uma persona docente específica e o pedido explícito de revisão final (&ldquo;no final, revê o texto verificando se a explicação é adequada&rdquo;) reduzem drasticamente as alucinações factuais.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: Vague vs Optimized Comparison */}
            {activeTab === 'comparison' && (
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-rose-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                      Prompt Vago (Inadequado):
                    </span>
                  </div>
                  <div className="bg-rose-50/70 p-2.5 rounded-lg border border-rose-200 text-xs font-mono text-rose-950 mb-2">
                    &ldquo;{PRESETS[selectedPresetIndex].vagueComparison}&rdquo;
                  </div>
                  <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80 leading-relaxed">
                    <strong className="text-slate-800">Resposta Típica da IA:</strong> {PRESETS[selectedPresetIndex].vagueOutputDemonstration}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      Prompt Otimizado (Eficaz):
                    </span>
                  </div>
                  <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200 text-xs font-mono text-emerald-950 mb-2">
                    {assembledPrompt}
                  </div>
                  <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80 leading-relaxed max-h-40 overflow-y-auto">
                    <strong className="text-slate-800">Resposta Estruturada:</strong>
                    <div className="whitespace-pre-wrap font-sans text-slate-700 mt-1">
                      {PRESETS[selectedPresetIndex].optimizedOutputDemonstration.slice(0, 300)}...
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Execution Result */}
            {activeTab === 'execution' && (
              <div className="space-y-3">
                {isLoading ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                    <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                    <p className="text-xs font-medium text-slate-700">
                      A enviar o prompt e a recolher a resposta do modelo...
                    </p>
                    <span className="text-[11px] text-slate-400">
                      O modelo processa o contexto pedagógico e as restrições
                    </span>
                  </div>
                ) : executionResult ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">
                        Resposta Gerada:
                      </span>
                      {executionSource === 'api' ? (
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                          Modelo Gemini (API Ativa)
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-md">
                          Demonstração Pedagógica Predefinida
                        </span>
                      )}
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed max-h-72 overflow-y-auto whitespace-pre-wrap font-sans shadow-2xs">
                      {executionResult}
                    </div>

                    <div className="text-[11px] text-slate-500 pt-1">
                      Nota: O professor deve sempre rever criticamente o vocabulário e a correção científica do resultado.
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-xs text-slate-500 space-y-2">
                    <p>Clique em &ldquo;Testar Prompt e Ver Resposta&rdquo; para ver a IA em ação.</p>
                    <p className="text-[11px] text-slate-400">
                      Se não tiver chave de API ligada, o simulador apresenta a resposta pedagógica exemplar correspondente aos parâmetros.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200/80 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Módulo 2: Engenharia de Prompts</span>
            <span className="font-mono">8 Técnicas Oficiais</span>
          </div>
        </div>
      </div>
    </div>
  );
};
