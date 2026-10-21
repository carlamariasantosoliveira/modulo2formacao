import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  FileCheck,
  FileText,
  Sparkles,
  Info,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../../types';
import { PedagogicalResourceCreator } from '../Simulators/PedagogicalResourceCreator';

interface CriadorRecursosPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const CriadorRecursosPage: React.FC<CriadorRecursosPageProps> = ({
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
          onClick={() => onNavigate('desafio-final')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-500" />
          <span>Ir para o Desafio Prático Final</span>
        </button>
      </div>

      {/* Header and Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200/60">
                Ferramenta de Criação Pedagógica
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight mt-1">
              Criador de Recursos Pedagógicos com IA
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 pl-4.5 max-w-3xl">
          Assistente para estruturar planos de aula detalhados, questionários com distratores justificados, fichas com 3 níveis de diferenciação e matrizes de rubricas alinhadas com as Aprendizagens Essenciais.
        </p>
      </div>

      {/* Pedagogical Guidance Banner */}
      <div className="bg-[#EEF2FF] rounded-3xl p-6 border border-indigo-100 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-800 uppercase tracking-wider">
          <Info className="w-4 h-4 text-indigo-600" />
          <span>Objetivo Pedagógico e Instruções de Uso</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-indigo-100/60">
            <strong className="text-slate-900 block font-semibold">Papel Docente no Centro do Processo:</strong>
            A ferramenta acelera a redação e estruturação de materiais, mas cabe ao professor analisar a adequação ao grupo-turma, validar o rigor conceptual e garantir a conformidade curricular.
          </div>
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-indigo-100/60">
            <strong className="text-slate-900 block font-semibold">Como Utilizar:</strong>
            Selecione o tipo de documento pretendido, ajuste a disciplina, ano e tema curricular. Ative a geração por IA se configurada ou utilize os modelos estruturados de alta fidelidade integrados na plataforma.
          </div>
        </div>
      </div>

      {/* Embedded Pedagogical Resource Engine */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs">
        <PedagogicalResourceCreator />
      </div>
    </div>
  );
};
