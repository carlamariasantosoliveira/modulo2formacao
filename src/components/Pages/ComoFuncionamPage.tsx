import React from 'react';
import { ModelMechanicsSimulator } from '../Simulators/ModelMechanicsSimulator';

export const ComoFuncionamPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            2. Funcionamento dos Modelos Generativos
          </h1>
        </div>
        <p className="text-sm font-bold text-slate-800 pl-4.5">
          Ciclo de Funcionamento (As Seis Fases do Modelo)
        </p>
      </div>

      {/* Integrated Educational Component without Duplication */}
      <ModelMechanicsSimulator />
    </div>
  );
};
