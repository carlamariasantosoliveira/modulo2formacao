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
  GraduationCap,
  ClipboardList,
} from 'lucide-react';
import { CLASSROOM_ACTIVITIES } from '../../data/courseData';
import { NoticeBanner } from '../Common/NoticeBanner';

interface ActivityGuidance {
  pedagogicalFocus: string;
  teacherRole: string[];
  practicalTip: string;
  evaluationFocus: string;
}

const ACTIVITY_GUIDELINES: Record<string, ActivityGuidance> = {
  'atividade-1': {
    pedagogicalFocus:
      'Engenharia de prompt iterativa, metacognição e evolução orientada da expressão escrita com critério explícito.',
    teacherRole: [
      'Circular pelas mesas e questionar o raciocínio: "Que critério concreto motivou a alteração desta frase?"',
      'Desafiar os alunos a explorar variações intencionais de Tom (ajuste ao público), Estilo (clareza e vocabulário) e Estrutura (coesão e diálogos).',
      'Alertar que mais voltas de prompt podem apenas tornar o texto convincente sem o tornar verdadeiro; exigir confronto com fontes.',
    ],
    practicalTip:
      'Recolher excertos redigidos ou tabelas comparativas de versões sem dados pessoais, em vez do histórico bruto de conversa. Prever alternativa em suporte papel.',
    evaluationFocus:
      'Valorizar a profundidade da reflexão crítica e a justificação pedagógica das alterações realizadas (e não a quantidade de prompts emitidos).',
  },
  'atividade-2': {
    pedagogicalFocus:
      'Escrita colaborativa entre pares, uso da IA como ferramenta de apoio à escrita e preservação da intencionalidade autoral.',
    teacherRole: [
      'Orientar as equipas a planear a estrutura do enredo antes de recorrer à ferramenta tecnológica.',
      'Incentivar a negociação crítica entre pares: os alunos decidem quais as sugestões da IA que aceitam, reescrevem ou rejeitam.',
      'Garantir que a voz criativa e o discernimento dos alunos permanecem no centro do processo autoral.',
    ],
    practicalTip:
      'Exigir a anexação de uma Declaração de Uso de IA explicitando: que ferramenta foi usada, para que finalidade e que decisões autorais pertenceram aos alunos.',
    evaluationFocus:
      'Avaliar a harmonia narrativa, o discernimento na edição das sugestões geradas e a transparência demonstrada na declaração de autoria.',
  },
  'atividade-3': {
    pedagogicalFocus:
      'Mobilização de conceitos curriculares das Aprendizagens Essenciais e distinção entre ficção, plausibilidade científica e rigor histórico.',
    teacherRole: [
      'Exigir fundamentação curricular rigorosa: o elemento inventado deve ser justificado com base nos conceitos aprendidos nas aulas.',
      'Questionar ativamente: "Esta adaptação biológica é plausível face aos princípios fisiológicos?" ou "Este acontecimento respeita a cronologia real?"',
      'Exigir a identificação expressa de anacronismos ou liberdades narrativas ficcionais geradas pela IA.',
    ],
    practicalTip:
      'Promover breves defesas orais onde cada equipa confronta as características geradas com o manual escolar adotado.',
    evaluationFocus:
      'Avaliar a consistência narrativa interna, a plausibilidade científica segundo o currículo e a capacidade de detetar e corrigir incongruências da IA.',
  },
  'atividade-4': {
    pedagogicalFocus:
      'Raciocínio proporcional, explicitação de relações entre grandezas e auditoria independente de resoluções matemáticas.',
    teacherRole: [
      'Alertar os estudantes para a propensão dos modelos de linguagem para cometer erros de cálculo aritmético e transformações algébricas inválidas.',
      'Exigir a declaração obrigatória das grandezas, das respetivas unidades e se a proporcionalidade é direta ou inversa.',
      'Estimular a verificação manual independente de todas as resoluções e gabaritos propostos pela ferramenta.',
    ],
    practicalTip:
      'Realizar resolução cruzada: cada grupo gera e valida um problema com a IA e entrega-o a outro grupo para resolução e auditoria.',
    evaluationFocus:
      'Avaliar a correção matemática da resolução validada por cálculo independente, a justificação do modelo relacional e a identificação de falhas da IA.',
  },
};

export const AtividadesSalaPage: React.FC = () => {
  const [activeActivityIdx, setActiveActivityIdx] = useState(0);

  const activity = CLASSROOM_ACTIVITIES[activeActivityIdx];
  const guidelines =
    ACTIVITY_GUIDELINES[activity.id] || ACTIVITY_GUIDELINES['atividade-1'];

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            8. Ideias de Atividade a dinamizar com os alunos em contexto de sala de aula
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Guiões didáticos estruturados, objetivos pedagógicos, critérios de avaliação e orientações docentes
          </p>
        </div>
      </div>

      {/* 4 Activities Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {CLASSROOM_ACTIVITIES.map((act, idx) => {
          const isSelected = activeActivityIdx === idx;
          return (
            <button
              key={act.id}
              onClick={() => setActiveActivityIdx(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-500/20'
                  : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50/40'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isSelected ? 'bg-white text-blue-700' : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}
                >
                  {act.number}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Atividade {act.number}
                </span>
              </div>
              <div>
                <h3
                  className={`text-sm font-bold block ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {act.title}
                </h3>
                <p
                  className={`text-[11px] leading-relaxed mt-1 ${
                    isSelected ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {act.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Activity Details */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden">
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1E70EB] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#1E70EB] uppercase tracking-wider block">
                Atividade {activity.number} de {CLASSROOM_ACTIVITIES.length}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E38]">
                {activity.title}
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {activity.subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Official steps from Syllabus (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1E70EB]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Etapas de Implementação em Aula:
                  </h3>
                </div>

                <div className="space-y-3">
                  {activity.implementation.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1E70EB] font-bold text-[11px] flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">
                          {step.step}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed pl-7 font-normal">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objectives and Evaluation Box */}
              <div className="bg-[#EFF6FF] p-5 rounded-2xl border border-blue-100 space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1E70EB]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Objetivos Pedagógicos & Critérios de Avaliação
                  </h3>
                </div>
                <div className="text-xs text-slate-800 space-y-2 leading-relaxed">
                  <p>
                    <strong>Objetivos:</strong> {activity.objectivesAndEvaluation.objectives}
                  </p>
                  <p>
                    <strong>Critérios de Avaliação:</strong> {activity.objectivesAndEvaluation.evaluation}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Practical Classroom Pedagogical Guidance (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#F8FAFC] to-blue-50/50 p-5 sm:p-6 rounded-3xl border border-blue-200/60 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1E70EB] flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Orientações para o Professor
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        Mediação didática em contexto escolar
                      </span>
                    </div>
                  </div>
                </div>

                {/* Foco Pedagógico */}
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Foco Didático Central:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {guidelines.pedagogicalFocus}
                  </p>
                </div>

                {/* Papel do Professor na Sala */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Papel do Professor na Dinâmica de Aula:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {guidelines.teacherRole.map((role, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dica Prática de Gestão */}
                <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <ClipboardList className="w-3.5 h-3.5 text-amber-700" />
                    <span>Dica Prática de Recolha de Evidências:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-amber-900 font-normal">
                    {guidelines.practicalTip}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>Atividade de Sala de Aula</span>
                <span className="font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                  Módulo 2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orientações para implementação & Utilização por alunos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-2.5">
          <h3 className="text-sm font-bold text-[#0C1E38] uppercase tracking-wider">
            Orientações para implementação
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            A integração de ferramentas de IA em contexto educativo deve responder a finalidades pedagógicas claras. As propostas apresentadas constituem exemplos de exploração que exigem sempre a mediação crítica do docente e a adaptação ao nível de ensino e aos recursos disponíveis na escola.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-2.5">
          <h3 className="text-sm font-bold text-[#0C1E38] uppercase tracking-wider">
            Utilização por alunos
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            A utilização direta de ferramentas de IA generativa por alunos requer:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Verificação prévia da idade mínima exigida pelos termos de utilização de cada ferramenta.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Autorização dos encarregados de educação, quando aplicável.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Mediação e supervisão pedagógica contínua.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Sensibilização para a literacia digital, o pensamento crítico e a integridade académica.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
