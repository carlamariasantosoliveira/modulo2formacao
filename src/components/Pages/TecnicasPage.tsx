import React, { useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { PROMPT_TECHNIQUES } from '../../data/courseData';
import { PageId } from '../../types';

interface TecnicasPageProps {
  onNavigate?: (pageId: PageId) => void;
}

export const TecnicasPage: React.FC<TecnicasPageProps> = ({ onNavigate }) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            5. Técnicas de Formulação de Prompts
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            As Oito Estratégias Pedagógicas e Comparação Integral Vago vs. Otimizado (Páginas 4 e 5)
          </p>
        </div>
      </div>

      {/* Intro card */}
      <div className="bg-[#EFF6FF] rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-2xs space-y-2">
        <h2 className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
          Princípio Fundamental de Otimização Pedagógica
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          Quanto mais precisa, contextualizada e rica em critérios for a instrução fornecida à IA, menor é a probabilidade de alucinação e maior é a qualidade e aplicabilidade do recurso obtido para a sala de aula.
        </p>
      </div>

      {/* 8 Techniques Cards */}
      <div className="space-y-6">
        {PROMPT_TECHNIQUES.map((tech) => (
          <div
            key={tech.id}
            className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden"
          >
            {/* Header of technique */}
            <div className="p-5 sm:p-6 bg-[#F8FAFC] border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold text-[#1E70EB] uppercase tracking-wider block mb-0.5">
                  Estratégia {tech.id} de 8
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {tech.name}
                </h3>
              </div>
              <button
                onClick={() => handleCopy(tech.id, tech.optimizedPrompt)}
                className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-2xs transition-colors cursor-pointer"
              >
                {copiedId === tech.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Otimizado</span>
                  </>
                )}
              </button>
            </div>

            {/* Content body */}
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {tech.description}
              </p>

              {/* Side-by-side comparison matching the PDF table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Vague */}
                <div className="bg-[#FEF2F2] rounded-2xl p-4 sm:p-5 border border-rose-100 space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#DC2626]">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Prompt Vago / Inadequado:</span>
                    </div>
                    <div className="bg-white/90 p-3.5 rounded-xl border border-rose-200/60 font-mono text-xs text-rose-950 leading-relaxed">
                      {tech.vaguePrompt}
                    </div>
                  </div>
                  {tech.vagueContext && (
                    <p className="text-[11px] text-rose-900/80 leading-relaxed italic pt-1">
                      {tech.vagueContext}
                    </p>
                  )}
                </div>

                {/* Optimized */}
                <div className="bg-[#ECFDF5] rounded-2xl p-4 sm:p-5 border border-emerald-100 space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#059669]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Prompt Otimizado / Eficaz:</span>
                    </div>
                    <div className="bg-white/90 p-3.5 rounded-xl border border-emerald-200/60 font-mono text-xs text-emerald-950 leading-relaxed whitespace-pre-wrap">
                      {tech.optimizedPrompt}
                    </div>
                  </div>
                  {tech.optimizedNotes && (
                    <p className="text-[11px] text-emerald-900/90 leading-relaxed pt-1">
                      <strong>Por que é eficaz:</strong> {tech.optimizedNotes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
