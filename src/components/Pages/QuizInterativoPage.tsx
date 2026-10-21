import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  HelpCircle,
  Award,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { PageId } from '../../types';
import { QuizInteractive } from '../Simulators/QuizInteractive';

interface QuizInterativoPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const QuizInterativoPage: React.FC<QuizInterativoPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Top Navigation Bar with Back Links */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
        <button
          onClick={() => onNavigate('simuladores-quizzes')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E70EB] hover:text-blue-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Índice de Simuladores</span>
        </button>

        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-500" />
          <span>Voltar à Página Inicial</span>
        </button>
      </div>

      {/* Header and Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                Avaliação Formativa com Feedback Imediato
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight mt-1">
              Questionário Interativo de Avaliação Formativa
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 pl-4.5 max-w-3xl">
          Teste os seus conhecimentos adquiridos no Módulo 2. O questionário fornece validação em tempo real e explicações pedagógicas para cada questão.
        </p>
      </div>

      {/* Pedagogical Guidance Banner */}
      <div className="bg-[#ECFDF5] rounded-3xl p-6 border border-emerald-100 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
          <Info className="w-4 h-4 text-emerald-600" />
          <span>Estrutura e Funcionamento do Questionário</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-emerald-100/60">
            <strong className="text-slate-900 block font-semibold">Avaliação Sem Caráter Classificativo:</strong>
            O objetivo é formativo: consolidar conceitos de Deep Learning, ciclo dos modelos, limitação fundamental («Resposta convincente ≠ Resposta correcta») e engenharia de prompts.
          </div>
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-emerald-100/60">
            <strong className="text-slate-900 block font-semibold">Como Responder:</strong>
            Clique numa opção para submeter imediatamente a sua resposta. Poderá ler a justificação científica e pedagógica antes de avançar para a pergunta seguinte.
          </div>
        </div>
      </div>

      {/* Embedded Quiz Engine */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs">
        <QuizInteractive />
      </div>
    </div>
  );
};
