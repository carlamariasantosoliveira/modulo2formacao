import React, { useState, useEffect } from 'react';
import {
  Users,
  Clock,
  Wrench,
  MessageSquare,
  Copy,
  Check,
  Play,
  Pause,
  RotateCcw,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ChevronRight,
  Compass,
  FileEdit,
  Search,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface SugestaoPrompt {
  id: string;
  categoria: string;
  exemplo: string;
  descricao: string;
}

const SUGESTOES_PROMPTS: SugestaoPrompt[] = [
  {
    id: 'contexto',
    categoria: 'Contextualizar',
    descricao: 'Define o papel do docente, o público-alvo e o tema curricular.',
    exemplo:
      '«Sou docente de [disciplina/área] e estou a planificar uma atividade para alunos do [ano de escolaridade], sobre [conteúdo].»'
  },
  {
    id: 'tarefa',
    categoria: 'Definir a tarefa',
    descricao: 'Especifica claramente o tipo de material a produzir e a finalidade.',
    exemplo: '«Cria [tipo de recurso] para trabalhar [objetivo de aprendizagem/conteúdo].»'
  },
  {
    id: 'destinatarios',
    categoria: 'Identificar os destinatários',
    descricao: 'Caracteriza o perfil dos alunos e eventuais necessidades específicas.',
    exemplo:
      '«O recurso destina-se a alunos com [características, conhecimentos prévios ou necessidades relevantes].»'
  },
  {
    id: 'condicoes',
    categoria: 'Especificar condições',
    descricao: 'Estabelece limites operacionais, temporais e de materiais.',
    exemplo:
      '«Tem [extensão/duração], utiliza [materiais/recursos] e contempla [diferenciação ou apoios necessários].»'
  },
  {
    id: 'formato',
    categoria: 'Indicar o formato',
    descricao: 'Estrutura a apresentação e organização visual da resposta.',
    exemplo:
      '«Organiza a resposta em [passos, tabela, secções, perguntas, instruções para alunos, soluções para docente…].»'
  },
  {
    id: 'qualidade',
    categoria: 'Definir critérios de qualidade',
    descricao: 'Impõe padrões pedagógicos, rigor e adequação etária.',
    exemplo:
      '«Garante o alinhamento com o objetivo, rigor científico, linguagem adequada à idade e instruções claras. Inclui [critérios específicos].»'
  },
  {
    id: 'revisao',
    categoria: 'Orientar a revisão',
    descricao: 'Pede ao modelo para autoavaliar a resposta antes de a concluir.',
    exemplo:
      '«Antes de finalizar, verifica se o recurso cumpre os critérios indicados e assinala aspetos que exijam validação docente.»'
  }
];

export const AtividadeSessaoPage: React.FC = () => {
  // Step 0: Visão Geral e Missão (45 min)
  // Step 1: Etapa 1 - Definir o desafio (5 min)
  // Step 2: Etapa 2 - Escrever o prompt inicial (15 min)
  // Step 3: Etapa 3 - Testar e analisar (7 min)
  // Step 4: Etapa 4 - Melhorar o prompt e voltar a testar (13 min)
  // Step 5: Partilhar o trabalho - Fórum Moodle (5 min)
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedSugestoes, setSelectedSugestoes] = useState<string[]>([
    'contexto',
    'tarefa',
    'destinatarios',
    'formato',
    'qualidade'
  ]);

  // Timer per active stage (Total: 45 min)
  const stageTimes: { [key: number]: number } = {
    0: 45 * 60,
    1: 5 * 60,
    2: 15 * 60,
    3: 7 * 60,
    4: 13 * 60,
    5: 5 * 60
  };

  const [timerSeconds, setTimerSeconds] = useState<number>(stageTimes[0]);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // When step changes, update timer duration and pause
  const handleStepChange = (newStep: number) => {
    setCurrentStep(newStep);
    setIsTimerRunning(false);
    setTimerSeconds(stageTimes[newStep] || 45 * 60);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(stageTimes[currentStep] || 45 * 60);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleSelectSugestao = (id: string) => {
    setSelectedSugestoes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const assembledPrompt = SUGESTOES_PROMPTS.filter((s) => selectedSugestoes.includes(s.id))
    .map((s) => s.exemplo)
    .join('\n\n');

  const moodleTemplate = `Publicação no Fórum da Sessão 2 (Moodle) - Atividade de Grupo

1. Desafio Pedagógico e Objetivo de Aprendizagem:
- Disciplina/Área: [indicar]
- Ano de Escolaridade: [indicar]
- Conteúdo: [indicar]
- Objetivo de Aprendizagem: [indicar]
- Recurso Pedagógico Pretendido: [ficha, atividade, guião, rubrica ou conjunto de questões]

2. Prompt Inicial:
[Registar exatamente o prompt inicial utilizado, sem o aperfeiçoar retroativamente]

3. Prompt Melhorado:
[Registar a versão reformulada do prompt após a análise dos resultados]

4. Recurso Pedagógico Final:
[Inserir ou anexar o recurso final selecionado e ajustado pelo grupo]`;

  const stepsList = [
    { id: 0, label: 'Enquadramento & Missão', tempo: '45 min', icon: Compass },
    { id: 1, label: '1. Definir o desafio', tempo: '5 min', icon: Users },
    { id: 2, label: '2. Escrever prompt inicial', tempo: '15 min', icon: FileEdit },
    { id: 3, label: '3. Testar e analisar', tempo: '7 min', icon: Search },
    { id: 4, label: '4. Melhorar e retestar', tempo: '13 min', icon: Sparkles },
    { id: 5, label: '5. Partilhar no Moodle', tempo: '5 min', icon: Share2 }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-blue-500/20">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-blue-300" />
            Atividade de Grupo
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Do prompt ao recurso pedagógico
          </h1>
          <p className="text-blue-200 text-sm font-medium">
            Laboratório de escrita, teste e melhoria de prompts
          </p>
        </div>

        {/* Technical specs summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 pt-5 border-t border-white/10 text-xs">
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
            <span className="text-blue-300 block font-semibold mb-0.5">Duração</span>
            <span className="text-white font-bold">45 minutos</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
            <span className="text-indigo-300 block font-semibold mb-0.5">Organização</span>
            <span className="text-white font-bold">Grupos de 3–4 docentes</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
            <span className="text-sky-300 block font-semibold mb-0.5">Ferramentas</span>
            <span className="text-white font-medium">ChatGPT, Claude, Gemini...</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
            <span className="text-emerald-300 block font-semibold mb-0.5">Partilha</span>
            <span className="text-white font-bold">Fórum Sessão 2 (Moodle)</span>
          </div>
        </div>
      </div>

      {/* Step Navigation Bar */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-thin">
          {stepsList.map((st) => {
            const isActive = currentStep === st.id;
            const isCompleted = currentStep > st.id;
            const Icon = st.icon;

            return (
              <button
                key={st.id}
                onClick={() => handleStepChange(st.id)}
                className={`flex-1 min-w-[125px] sm:min-w-0 text-left px-3 py-2.5 rounded-xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm ring-2 ring-blue-600/20'
                    : isCompleted
                    ? 'bg-blue-50/60 text-blue-900 border-blue-200 hover:bg-blue-100/60'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : isCompleted
                        ? 'bg-blue-200/80 text-blue-800'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {st.tempo}
                  </span>
                  {isCompleted && !isActive ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  ) : (
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-100' : 'text-slate-400'}`} />
                  )}
                </div>
                <div className="text-xs font-bold truncate">{st.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Step Content Area */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 min-h-[420px] flex flex-col justify-between space-y-6">
        {/* Step 0: Enquadramento & Missão */}
        {currentStep === 0 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Enquadramento da Atividade
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Missão do Trabalho de Grupo</h2>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-base leading-relaxed">
              Em grupo, concebam e testem um prompt para criar um recurso pedagógico com apoio de uma
              ferramenta de IA. O foco da atividade é a escrita do prompt: perceber como as
              instruções influenciam a resposta e experimentar formas de as tornar mais claras e
              adequadas.
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                No final, o grupo deverá ter obrigatoriamente:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mb-2">
                    1
                  </div>
                  <div className="text-xs text-slate-500">Versão inicial</div>
                  <div className="text-sm font-bold text-slate-900">Um prompt inicial</div>
                </div>

                <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold mb-2">
                    2
                  </div>
                  <div className="text-xs text-slate-500">Versão reformulada</div>
                  <div className="text-sm font-bold text-slate-900">Um prompt melhorado</div>
                </div>

                <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mb-2">
                    3
                  </div>
                  <div className="text-xs text-slate-500">Resultado validado</div>
                  <div className="text-sm font-bold text-slate-900">Um recurso pedagógico final</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Resumo do Percurso (45 minutos)
              </div>
              <ul className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                <li className="py-2 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">1. Definir o desafio</span>
                  <span className="font-bold text-blue-700">5 minutos</span>
                </li>
                <li className="py-2 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">2. Escrever o prompt inicial</span>
                  <span className="font-bold text-blue-700">15 minutos</span>
                </li>
                <li className="py-2 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">3. Testar e analisar</span>
                  <span className="font-bold text-blue-700">7 minutos</span>
                </li>
                <li className="py-2 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">4. Melhorar o prompt e voltar a testar</span>
                  <span className="font-bold text-blue-700">13 minutos</span>
                </li>
                <li className="py-2 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">5. Partilhar o trabalho (Fórum Moodle)</span>
                  <span className="font-bold text-emerald-700">5 minutos</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Step 1: Etapa 1 - Definir o desafio (5 min) */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Etapa 1 · Duração: 5 minutos
                </span>
                <h2 className="text-2xl font-bold text-slate-900">1. Definir o desafio</h2>
              </div>
              {/* Stage timer */}
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-slate-600" />
                <span className="font-mono text-sm font-bold text-slate-800">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-1 text-slate-500 hover:text-slate-800"
                  title="Reiniciar tempo da etapa"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-200">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                O que fazer nesta etapa:
              </div>
              <p className="text-slate-800 text-base leading-relaxed">
                Escolham uma disciplina/área, ano de escolaridade, conteúdo e objetivo de
                aprendizagem. Identifiquem o recurso pedagógico que pretendem criar (por exemplo:
                ficha, atividade, guião, rubrica ou conjunto de questões).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block">Elemento a acordar no grupo:</span>
                <ul className="space-y-1 text-slate-600 list-disc list-inside">
                  <li>Disciplina / Área Curricular</li>
                  <li>Ano de Escolaridade</li>
                  <li>Conteúdo Específico</li>
                  <li>Objetivo de Aprendizagem</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block">Exemplos de recursos a criar:</span>
                <ul className="space-y-1 text-slate-600 list-disc list-inside">
                  <li>Ficha de trabalho</li>
                  <li>Atividade pedagógica</li>
                  <li>Guião de exploração</li>
                  <li>Rubrica de avaliação</li>
                  <li>Conjunto de questões reflexivas</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Etapa 2 - Escrever o prompt inicial (15 min) */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Etapa 2 · Duração: 15 minutos
                </span>
                <h2 className="text-2xl font-bold text-slate-900">2. Escrever o prompt inicial</h2>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-slate-600" />
                <span className="font-mono text-sm font-bold text-slate-800">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-1 text-slate-500 hover:text-slate-800"
                  title="Reiniciar tempo da etapa"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-200">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                O que fazer nesta etapa:
              </div>
              <p className="text-slate-800 text-base leading-relaxed">
                Redijam um primeiro prompt. Registem-no exatamente como foi utilizado, sem o
                aperfeiçoar retroativamente.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Regra fundamental:</strong> Preservem a primeira
                versão do prompt tal e qual como foi enviada à ferramenta de IA, para ser possível
                comparar os resultados com a versão melhorada.
              </div>
            </div>

            {/* Formula Suggestions applicable to write the prompt */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Sugestões de formulação (opcional para apoiar a escrita):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SUGESTOES_PROMPTS.slice(0, 4).map((sug) => (
                  <div key={sug.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 uppercase">{sug.categoria}</span>
                      <button
                        onClick={() => handleCopyText(sug.exemplo, sug.id)}
                        className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
                      >
                        {copiedId === sug.id ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedId === sug.id ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <div className="font-mono text-slate-700 bg-white p-2 rounded border border-slate-200 select-all">
                      {sug.exemplo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Etapa 3 - Testar e analisar (7 min) */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Etapa 3 · Duração: 7 minutos
                </span>
                <h2 className="text-2xl font-bold text-slate-900">3. Testar e analisar</h2>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-slate-600" />
                <span className="font-mono text-sm font-bold text-slate-800">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-1 text-slate-500 hover:text-slate-800"
                  title="Reiniciar tempo da etapa"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-200">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                O que fazer nesta etapa:
              </div>
              <p className="text-slate-800 text-base leading-relaxed">
                Introduzam o prompt na ferramenta de IA e analisem o resultado.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Questões orientadoras para a análise do grupo:
              </div>
              <div className="space-y-2.5">
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">O que responde ao objetivo?</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Identifiquem as partes da resposta que satisfazem com rigor o desafio curricular pretendido.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      O que está vago, incompleto, desajustado ou pouco útil?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Sublinhem fragilidades, falta de contextualização para a idade dos alunos ou ausência de elementos pedidos.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Que instruções poderão acrescentar ou clarificar?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Definam que parâmetros concretos devem ser especificados para guiar a IA na direção certa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Etapa 4 - Melhorar o prompt e voltar a testar (13 min) */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Etapa 4 · Duração: 13 minutos
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. Melhorar o prompt e voltar a testar
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-slate-600" />
                <span className="font-mono text-sm font-bold text-slate-800">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-1 text-slate-500 hover:text-slate-800"
                  title="Reiniciar tempo da etapa"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-200">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                O que fazer nesta etapa:
              </div>
              <p className="text-slate-800 text-base leading-relaxed">
                Reformulem o prompt com base na análise. Testem a nova versão e comparem os
                resultados. Selecionem ou ajustem o recurso final.
              </p>
            </div>

            {/* Sugestões de formulação completas */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  Sugestões de formulação dos prompts
                </h3>
                <p className="text-xs text-slate-500">
                  Usem estas sugestões para tornar as instruções mais explícitas. Selecionem as que
                  fizerem sentido para o vosso desafio.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SUGESTOES_PROMPTS.map((sug) => {
                  const isSelected = selectedSugestoes.includes(sug.id);
                  const isCopied = copiedId === sug.id;
                  return (
                    <div
                      key={sug.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => toggleSelectSugestao(sug.id)}
                            className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                              isSelected
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                            title="Incluir no combinador rápido"
                          >
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </button>
                          <span className="font-bold text-slate-900 uppercase">
                            {sug.categoria}
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopyText(sug.exemplo, sug.id)}
                          className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
                        >
                          {isCopied ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                          <span>{isCopied ? 'Copiado' : 'Copiar'}</span>
                        </button>
                      </div>
                      <p className="text-slate-500 text-[11px]">{sug.descricao}</p>
                      <div className="p-2.5 bg-white rounded border border-slate-200 font-mono text-slate-800 select-all">
                        {sug.exemplo}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Prompt Assembler */}
              <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                    Combinador das Fórmulas Selecionadas
                  </span>
                  <button
                    onClick={() => handleCopyText(assembledPrompt, 'comb-4')}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold"
                  >
                    {copiedId === 'comb-4' ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar Seleção Combinada</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 bg-slate-950 rounded font-mono text-xs text-slate-200 whitespace-pre-line max-h-40 overflow-y-auto border border-white/10 select-all">
                  {assembledPrompt}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Partilhar o trabalho | Fórum da Sessão 2 (Moodle) (5 min) */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Etapa 5 · Duração: 5 minutos
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Partilhar o trabalho | Fórum da Sessão 2 (Moodle)
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span className="font-mono text-sm font-bold text-emerald-900">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  title={isTimerRunning ? 'Pausar cronómetro' : 'Iniciar cronómetro'}
                >
                  {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-1 hover:bg-emerald-100 rounded text-emerald-800 transition-colors"
                  title="Reiniciar tempo"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-slate-700 text-base leading-relaxed">
              No final da atividade, cada grupo deverá publicar o trabalho no fórum da Sessão 2, na
              plataforma Moodle. A partilha é escrita; não haverá apresentação oral.
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  A publicação deverá incluir obrigatoriamente:
                </h3>
                <button
                  onClick={() => handleCopyText(moodleTemplate, 'moodle-pub')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors self-start sm:self-auto"
                >
                  {copiedId === 'moodle-pub' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Estrutura Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Estrutura para Publicar no Moodle</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div className="text-xs sm:text-sm text-slate-800 font-medium">
                    O desafio pedagógico e o objetivo de aprendizagem.
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div className="text-xs sm:text-sm text-slate-800 font-medium">
                    O prompt inicial.
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div className="text-xs sm:text-sm text-slate-800 font-medium">
                    O prompt melhorado.
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    4
                  </span>
                  <div className="text-xs sm:text-sm text-slate-800 font-medium">
                    O recurso pedagógico final.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Importante:</strong> preservem as versões dos
                  prompts tal como foram efetivamente utilizadas, para permitir a comparação entre
                  os resultados.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step-by-step footer navigation */}
        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => handleStepChange(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              currentStep === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
                : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Etapa anterior
          </button>

          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Etapa {currentStep + 1} de {stepsList.length}
          </span>

          {currentStep < stepsList.length - 1 ? (
            <button
              onClick={() => handleStepChange(currentStep + 1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
            >
              Próxima etapa
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => handleStepChange(0)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Voltar ao Início
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AtividadeSessaoPage;
