import React, { useState } from 'react';
import {
  Target,
  ArrowRight,
  Sparkles,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { PageId } from '../../types';
import { COURSE_INFO } from '../../data/courseData';
import heroEducatorImg from '../../assets/images/hero_educator_ai_1792545498139.jpg';

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [isObjectivesOpen, setIsObjectivesOpen] = useState(true);

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* 1. Hero Banner matching exact visual style in Curso_de_IA_na_Educa__o__1__f7e93860.png */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg bg-linear-to-r from-[#07172C] via-[#0A1E38] to-[#122E58] text-white p-6 sm:p-8 md:p-10 min-h-[300px] flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/10">
        {/* Left Side: Typography & Call To Action */}
        <div className="space-y-4 max-w-xl z-10">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-wider text-blue-300 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>OFICINA DE FORMAÇÃO: INTELIGÊNCIA ARTIFICIAL NA EDUCAÇÃO: ESTRATÉGIAS, FERRAMENTAS E PRÁTICAS PEDAGÓGICAS</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Módulo 2
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              IA Generativa e Prompts
            </div>
          </div>

          <p className="text-xs sm:text-sm text-blue-200 font-medium tracking-wide">
            Explorar &bull; Experimentar &bull; Aplicar na Educação
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('ia-generativa')}
              className="inline-flex items-center gap-2.5 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <span>Começar a explorar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side: High-fidelity Educator with AI Holograms visual matching reference */}
        <div className="relative z-10 w-full md:w-96 h-60 sm:h-64 flex items-center justify-center shrink-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
            <img
              src={heroEducatorImg}
              alt="Professora a explorar Inteligência Artificial na Educação"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            {/* Soft gradient vignette to merge seamlessly with navy banner */}
            <div className="absolute inset-0 bg-linear-to-t from-[#07172C]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 2. Objetivos do Módulo 2 matching image_8962f579.png */}
      <div className="bg-[#EFF6FF] rounded-3xl p-6 sm:p-7 border border-[#DBEAFE] shadow-2xs transition-all">
        <button
          onClick={() => setIsObjectivesOpen(!isObjectivesOpen)}
          className="w-full flex items-center justify-between text-left cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#1E70EB] shrink-0">
              <Target className="w-5 h-5 text-[#1E70EB]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1E70EB]">
              Objetivos do Módulo 2
            </h2>
          </div>
          {isObjectivesOpen ? (
            <ChevronUp className="w-5 h-5 text-[#1E70EB]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#1E70EB]" />
          )}
        </button>

        {isObjectivesOpen && (
          <div className="pt-4 sm:pt-5 pl-13 sm:pl-14 space-y-3 text-sm sm:text-base text-slate-800 animate-in fade-in">
            {COURSE_INFO.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 shrink-0"></span>
                <span className="leading-relaxed font-normal">{obj}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

