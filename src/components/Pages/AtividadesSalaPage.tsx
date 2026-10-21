import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Award,
  Layers,
  Send,
  Loader2,
  AlertTriangle,
} from 'lucide-react';
import { CLASSROOM_ACTIVITIES } from '../../data/courseData';
import { NoticeBanner } from '../Common/NoticeBanner';

export const AtividadesSalaPage: React.FC = () => {
  const [activeActivityIdx, setActiveActivityIdx] = useState(0);

  // Activity 1: 'O Prompt de Ouro' Interactive Iteration Simulator
  const [currentRound, setCurrentRound] = useState(1);
  const [draftText, setDraftText] = useState(
    'O capitão Rui flutuava na escuridão do módulo de comando da estação orbital Mirador. O silêncio era absoluto, quebrado apenas pelo eco do seu próprio batimento cardíaco. Os sistemas principais estavam desligados há anos...'
  );
  const [studentReflection, setStudentReflection] = useState(
    'Aprendi que no primeiro pedido a IA gerou um texto muito previsível. Só quando instruí a mudança de tom para mistério e pedi a simplificação do vocabulário é que o conto ficou verdadeiramente cativante e adequado aos meus colegas.'
  );

  const handleSimulateRefinement = (round: number) => {
    setCurrentRound(round);
    if (round === 1) {
      setDraftText(
        'O capitão Rui flutuava na escuridão do módulo de comando da estação orbital Mirador. O silêncio era absoluto, quebrado apenas pelo eco do seu próprio batimento cardíaco. Os sistemas principais estavam desligados há anos...'
      );
    } else if (round === 2) {
      setDraftText(
        'A escuridão na estação Mirador era quase sólida. Rui sentiu um arrepio gélido na nuca: uma luz vermelha piscava ritmicamente no fundo do corredor escuro. Não devia haver energia ali. Quem — ou o quê — tinha ligado aquele terminal?'
      );
    } else if (round === 3) {
      setDraftText(
        'Rui aproximou-se devagar da luz vermelha. O ecrã antigo acendeu-se de repente. "Ainda estás aí, Rui?", perguntou uma voz metálica pelo altifalante do fato. "Quem fala?", sussurrou ele com o coração aos saltos. A resposta fez-lhe gelar o sangue: "Sou eu, Rui. O teu fato inteligente. E acabei de trancar as saídas por segurança."'
      );
    }
  };

  const activity = CLASSROOM_ACTIVITIES[activeActivityIdx];

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            7. Atividades Práticas em Sala de Aula com Ferramentas LLM
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Guiões Didáticos, Objetivos Pedagógicos e Critérios de Avaliação (Páginas 6 e 7)
          </p>
        </div>
      </div>

      {/* Overview & Caution Banner from PDF */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-5">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Tarefas Educativas Apoiadas por LLMs:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-700">
          <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-200/70 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#1E70EB] shrink-0 mt-0.5" />
            <span>Planeamento de aulas e sequências didáticas;</span>
          </div>
          <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-200/70 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#1E70EB] shrink-0 mt-0.5" />
            <span>Criação de fichas de trabalho, testes e quizzes;</span>
          </div>
          <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-200/70 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#1E70EB] shrink-0 mt-0.5" />
            <span>Adaptação de conteúdos a diferentes níveis;</span>
          </div>
          <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-200/70 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#1E70EB] shrink-0 mt-0.5" />
            <span>Esclarecimento de dúvidas e explicação de conceitos;</span>
          </div>
          <div className="p-3.5 bg-[#F8FAFC] rounded-2xl border border-slate-200/70 flex items-start gap-2.5 sm:col-span-2">
            <CheckCircle2 className="w-4 h-4 text-[#1E70EB] shrink-0 mt-0.5" />
            <span>Reformulação e melhoria de textos, e apoio à correção formativa.</span>
          </div>
        </div>

        {/* Mandatory Caution Note verbatim from PDF */}
        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950 font-medium">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5">■■ Nota de Cautela:</strong>
            Os resultados gerados devem ser sempre analisados criticamente pelo professor, uma vez que os modelos podem produzir respostas incorretas ou imprecisas.
          </div>
        </div>
      </div>

      {/* Activity Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80">
        {CLASSROOM_ACTIVITIES.map((act, idx) => (
          <button
            key={act.id}
            onClick={() => setActiveActivityIdx(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeActivityIdx === idx
                ? 'bg-white text-[#1D4ED8] shadow-xs ring-1 ring-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1D4ED8] flex items-center justify-center font-bold text-[10px]">
              {act.number}
            </span>
            <span>{act.title}</span>
          </button>
        ))}
      </div>

      {/* Active Activity Detailed Card */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden">
        <div className="p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-[#1E70EB] uppercase tracking-wider block mb-1">
              Atividade Pedagógica {activity.number} de 4
            </span>
            <h2 className="text-2xl font-extrabold text-[#0C1E38]">
              ATIVIDADE {activity.number}: {activity.title}
            </h2>
            {activity.subtitle && (
              <p className="text-xs text-slate-500 font-medium mt-1">
                {activity.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Steps (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#1E70EB]" />
                <span>Implementação pelo Professor:</span>
              </h3>

              <div className="space-y-3">
                {activity.implementation.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] space-y-1"
                  >
                    <span className="text-xs font-bold text-[#1E70EB] block">
                      {step.step}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Objectives and Evaluation */}
              <div className="bg-[#EFF6FF] p-4 sm:p-5 rounded-2xl border border-blue-100 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1D4ED8]">
                  <Award className="w-4 h-4 text-[#1E70EB]" />
                  <span>Objetivos &amp; Avaliação Formativa:</span>
                </div>
                <div className="text-xs text-blue-950 space-y-2">
                  <p>
                    <strong>Objetivos:</strong> {activity.objectivesAndEvaluation.objectives}
                  </p>
                  <p>
                    <strong>Critérios de Avaliação:</strong> {activity.objectivesAndEvaluation.evaluation}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Sandbox for this specific activity (5 cols) */}
            <div className="lg:col-span-5 bg-[#F8FAFC] p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4">
              {activity.id === 'atividade-1' ? (
                /* Interactive 3-step prompt refinement simulator */
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#1E70EB]" />
                      <span>Simulador das 3 Etapas de Refinação</span>
                    </h4>
                    <span className="text-[10px] font-mono text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md font-semibold">
                      Etapa {currentRound}/3
                    </span>
                  </div>

                  <div className="flex gap-1.5 p-1 bg-white rounded-xl border border-slate-200">
                    <button
                      onClick={() => handleSimulateRefinement(1)}
                      className={`flex-1 text-[11px] py-1.5 rounded-lg font-medium cursor-pointer ${
                        currentRound === 1 ? 'bg-[#1E70EB] text-white font-semibold shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      1. Rascunho
                    </button>
                    <button
                      onClick={() => handleSimulateRefinement(2)}
                      className={`flex-1 text-[11px] py-1.5 rounded-lg font-medium cursor-pointer ${
                        currentRound === 2 ? 'bg-[#1E70EB] text-white font-semibold shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      2. Tom &amp; Estilo
                    </button>
                    <button
                      onClick={() => handleSimulateRefinement(3)}
                      className={`flex-1 text-[11px] py-1.5 rounded-lg font-medium cursor-pointer ${
                        currentRound === 3 ? 'bg-[#1E70EB] text-white font-semibold shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      3. Estrutura
                    </button>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-400">
                      Texto Gerado pela IA (Versão {currentRound}):
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed italic font-serif">
                      &ldquo;{draftText}&rdquo;
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Reflexão Crítica a Entregar pelo Aluno (Etapa 3):
                    </label>
                    <textarea
                      rows={4}
                      value={studentReflection}
                      onChange={(e) => setStudentReflection(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white leading-relaxed"
                    />
                  </div>
                </div>
              ) : activity.id === 'atividade-3' ? (
                /* Project Creative simulator */
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Simulador: Criar e Justificar
                  </h4>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs space-y-3">
                    <span className="font-bold text-[#1E70EB] block">
                      Elemento Gerado pela IA (Ex: Ciências):
                    </span>
                    <p className="italic text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/60 font-serif leading-relaxed">
                      &ldquo;O Lagarto-Vapor tem escamas translúcidas que condensam a humidade matinal do nevoeiro e uma cauda espessa que armazena água sob a forma de lípidos...&rdquo;
                    </p>
                    <div className="pt-2 border-t border-slate-100">
                      <span className="font-bold text-[#059669] block mb-1">
                        Justificação Científica do Aluno (Etapa 2):
                      </span>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        A adaptação das escamas mimetiza o mecanismo real dos escaravelhos do deserto da Namíbia (<em>Stenocara gracilipes</em>), e o armazenamento lipídico assemelha-se à bossa dos dromedários.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Collaborative / Math guide */
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Foco na Interação em Grupo
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Esta atividade foi concebida para promover o diálogo colaborativo e a negociação de significados entre pares.
                  </p>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2">
                    <div className="font-bold text-slate-900">
                      Papel do Professor na Sala:
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 text-[11px] text-slate-600">
                      <li>Circular pelos grupos questionando o raciocínio.</li>
                      <li>Desafiar os alunos a encontrar incongruências geradas pela IA.</li>
                      <li>Incentivar a reformulação de pedidos até obter precisão.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
