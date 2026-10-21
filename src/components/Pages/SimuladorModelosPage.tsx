import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Cpu,
  Brain,
  Info,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../../types';
import { ModelMechanicsSimulator } from '../Simulators/ModelMechanicsSimulator';

interface SimuladorModelosPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const SimuladorModelosPage: React.FC<SimuladorModelosPageProps> = ({
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
          onClick={() => onNavigate('como-funcionam')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-500" />
          <span>Ir para o Tema 2 (Como Funcionam os Modelos)</span>
        </button>
      </div>

      {/* Header and Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/60">
                Simulação Didática Pedagógica
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight mt-1">
              Simulador do Funcionamento dos Modelos Generativos
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 pl-4.5 max-w-3xl">
          Exploração visual e interativa das 6 etapas do ciclo de funcionamento, divisão de texto em tokens e cálculo probabilístico da próxima palavra.
        </p>
      </div>

      {/* Pedagogical Guidance Banner */}
      <div className="bg-[#EFF6FF] rounded-3xl p-6 border border-blue-100 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
          <Info className="w-4 h-4 text-[#1E70EB]" />
          <span>Objetivo Pedagógico e Guia de Utilização</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-blue-100/60">
            <strong className="text-slate-900 block font-semibold">Objetivo da Aprendizagem:</strong>
            Compreender que os modelos generativos não memorizam respostas nem copiam textos; processam dados através de redes neuronais profundas (Deep Learning) e calculam probabilidades matemáticas da palavra seguinte com base no contexto.
          </div>
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-blue-100/60">
            <strong className="text-slate-900 block font-semibold">Como Utilizar Esta Ferramenta:</strong>
            Utilize os botões de avanço e recuo para percorrer as 6 fases do ciclo, analise o exemplo analógico de culinária e experimente o fatiador de tokens com frases do seu contexto letivo.
          </div>
        </div>
      </div>

      {/* Embedded Simulator Engine */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs">
        <ModelMechanicsSimulator />
      </div>
    </div>
  );
};
