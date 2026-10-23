import React, { useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Layers,
} from 'lucide-react';
import { PROMPT_TECHNIQUES } from '../../data/courseData';
import { PageId } from '../../types';

interface TecnicasPageProps {
  onNavigate?: (pageId: PageId) => void;
}

export const TecnicasPage: React.FC<TecnicasPageProps> = ({ onNavigate }) => {
  const [activeStrategyId, setActiveStrategyId] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const currentTech =
    PROMPT_TECHNIQUES.find((t) => t.id === activeStrategyId) || PROMPT_TECHNIQUES[0];

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNext = () => {
    if (activeStrategyId < PROMPT_TECHNIQUES.length) {
      setActiveStrategyId(activeStrategyId + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeStrategyId > 1) {
      setActiveStrategyId(activeStrategyId - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
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
            Estratégias pedagógicas e comparação entre formulações vagas e otimizadas
          </p>
        </div>
      </div>

      {/* Intro principle banner */}
      <div className="bg-[#EFF6FF] rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-2xs space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
            Princípio Fundamental de Otimização Pedagógica
          </h2>
          <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Estratégia {currentTech.id} de 8 Ativa
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          Quanto mais precisa, contextualizada e rica em critérios for a instrução fornecida à IA,
          menor é a probabilidade de alucinação e maior é a qualidade e aplicabilidade do recurso
          obtido para a sala de aula.
        </p>
      </div>

      {/* ABAS / SEPARADORES POR CADA ESTRATÉGIA */}
      <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200 shadow-sm space-y-2.5">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wider px-1">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#1E70EB]" />
            <span>Selecione uma Estratégia (Abas / Separadores):</span>
          </div>
          <span className="text-blue-600 font-bold">
            Estratégia {currentTech.id} de {PROMPT_TECHNIQUES.length}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {PROMPT_TECHNIQUES.map((tech) => {
            const isSelected = activeStrategyId === tech.id;
            return (
              <button
                key={tech.id}
                onClick={() => setActiveStrategyId(tech.id)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-700 shadow-sm ring-2 ring-blue-500/20'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50/60 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    #{tech.id}
                  </span>
                  {isSelected && <Sparkles className="w-3 h-3 text-blue-200" />}
                </div>

                <div className="truncate w-full">
                  <span
                    className={`text-xs font-bold block truncate ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {tech.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* DETALHE DA ESTRATÉGIA SELECIONADA */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden animate-in fade-in duration-200">
        {/* Header of technique */}
        <div className="p-6 sm:p-7 bg-[#F8FAFC] border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-[#1E70EB] uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
                Estratégia {currentTech.id} de 8
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Técnica de Otimização Pedagógica
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {currentTech.name}
            </h2>
          </div>

          <button
            onClick={() => handleCopy(currentTech.id, currentTech.optimizedPrompt)}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl shadow-2xs hover:border-blue-300 transition-all cursor-pointer"
          >
            {copiedId === currentTech.id ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Prompt Otimizado Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#1E70EB]" />
                <span>Copiar Prompt Otimizado</span>
              </>
            )}
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Objetivo & Fundamentação Didática:
            </h3>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
              {currentTech.description}
            </p>
          </div>

          {/* Side-by-side comparison matching the syllabus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Vague */}
            <div className="bg-[#FEF2F2] rounded-2xl p-5 border border-rose-200/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Prompt Vago / Inadequado:</span>
                </div>
                <div className="bg-white/95 p-4 rounded-xl border border-rose-200 font-mono text-xs text-rose-950 leading-relaxed">
                  &ldquo;{currentTech.vaguePrompt}&rdquo;
                </div>
              </div>
              {currentTech.vagueContext && (
                <div className="pt-2 border-t border-rose-200/60 text-xs text-rose-900/90 leading-relaxed">
                  <strong className="text-rose-950">Impacto negativo:</strong>{' '}
                  <span className="italic">{currentTech.vagueContext}</span>
                </div>
              )}
            </div>

            {/* Optimized */}
            <div className="bg-[#ECFDF5] rounded-2xl p-5 border border-emerald-200/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prompt Otimizado / Eficaz:</span>
                </div>
                <div className="bg-white/95 p-4 rounded-xl border border-emerald-200 font-mono text-xs text-emerald-950 leading-relaxed whitespace-pre-wrap">
                  {currentTech.optimizedPrompt}
                </div>
              </div>
              {currentTech.optimizedNotes && (
                <div className="pt-2 border-t border-emerald-200/60 text-xs text-emerald-900 leading-relaxed">
                  <strong className="text-emerald-950">Por que funciona:</strong>{' '}
                  <span>{currentTech.optimizedNotes}</span>
                </div>
              )}
            </div>
          </div>

          {/* SEQUENTIAL NAVIGATION BETWEEN STRATEGIES */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={activeStrategyId === 1}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                activeStrategyId === 1
                  ? 'opacity-40 bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs cursor-pointer'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                Estratégia Anterior {activeStrategyId > 1 && `(#${activeStrategyId - 1})`}
              </span>
            </button>

            {/* Central dots */}
            <div className="flex items-center gap-1.5 py-1">
              {PROMPT_TECHNIQUES.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveStrategyId(tech.id)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    tech.id === activeStrategyId
                      ? 'bg-blue-600 scale-125'
                      : tech.id < activeStrategyId
                      ? 'bg-blue-300'
                      : 'bg-slate-200'
                  }`}
                  title={`Ir para Estratégia #${tech.id}: ${tech.name}`}
                />
              ))}
            </div>

            {activeStrategyId < PROMPT_TECHNIQUES.length ? (
              <button
                onClick={handleNext}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Próxima Estratégia: #{activeStrategyId + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setActiveStrategyId(1)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Voltar à Estratégia 1</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
