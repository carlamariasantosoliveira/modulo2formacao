import React from 'react';
import { ModelMechanicsSimulator } from '../Simulators/ModelMechanicsSimulator';
import { Info } from 'lucide-react';

export const ComoFuncionamPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
          2. Como funcionam
        </h1>
      </div>

      {/* Nota Prévia ao Simulador */}
      <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-blue-950">
        <Info className="w-5 h-5 text-[#1E70EB] shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
          O simulador representa, de forma simplificada, algumas etapas do funcionamento de sistemas generativos. A arquitetura e o processo de geração variam consoante o tipo de modelo e a tarefa. A representação não reproduz integralmente o funcionamento de um sistema real.
        </p>
      </div>

      {/* Unified Master Component */}
      <ModelMechanicsSimulator />
    </div>
  );
};
