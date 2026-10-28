import React, { useState } from 'react';
import {
  Target,
  ArrowRight,
  Sparkles,
  ChevronUp,
  ChevronDown,
  GraduationCap,
  User,
  Calendar,
  CheckCircle2,
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
      {/* Informações da Oficina de Formação */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-700">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E70EB] shrink-0">
            <GraduationCap className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">Oficina de Formação</span>
            <span className="text-slate-900 font-semibold">{COURSE_INFO.courseTitle}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              <strong className="text-slate-900 font-semibold">Autora:</strong> {COURSE_INFO.author}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              <strong className="text-slate-900 font-semibold">Data de Criação:</strong> {COURSE_INFO.date}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Banner with Modern Designer Treatment */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-linear-to-br from-[#07162C] via-[#0A1E38] to-[#122E58] text-white p-6 sm:p-8 md:p-10 min-h-[320px] flex flex-col md:flex-row md:items-center justify-between gap-8 border border-white/10">
        {/* Subtle decorative glow circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Side: Typography & Call To Action */}
        <div className="space-y-5 max-w-xl z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-[11px] font-bold tracking-wider text-blue-300 uppercase backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>OFICINA DE FORMAÇÃO: IA NA EDUCAÇÃO</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Módulo 2
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-blue-200 leading-tight">
              IA Generativa e Prompts
            </div>
          </div>

          <p className="text-xs sm:text-sm text-blue-200 font-medium tracking-wide flex items-center gap-2">
            <span>Explorar</span>
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <span>Experimentar</span>
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <span>Aplicar na Educação</span>
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('ia-generativa')}
              className="inline-flex items-center gap-2.5 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Começar a explorar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side: Educator with AI Holograms visual */}
        <div className="relative z-10 w-full md:w-96 h-60 sm:h-72 flex items-center justify-center shrink-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
            <img
              src={heroEducatorImg}
              alt="Professora a explorar Inteligência Artificial na Educação"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#07172C]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Objetivos do Módulo 2 with Refined Treatment */}
      <div className="bg-linear-to-br from-blue-50/70 via-white to-indigo-50/40 rounded-3xl p-6 sm:p-8 border border-blue-100/90 shadow-2xs transition-all space-y-4">
        <button
          onClick={() => setIsObjectivesOpen(!isObjectivesOpen)}
          className="w-full flex items-center justify-between text-left cursor-pointer group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] group-hover:bg-blue-200/80 flex items-center justify-center text-[#1E70EB] shrink-0 transition-colors">
              <Target className="w-5 h-5 text-[#1E70EB]" />
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-blue-600 block">Enquadramento Pedagógico</span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Objetivos do Módulo 2
              </h2>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white border border-blue-200 flex items-center justify-center text-[#1E70EB] shadow-2xs">
            {isObjectivesOpen ? (
              <ChevronUp className="w-4 h-4 text-[#1E70EB]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#1E70EB]" />
            )}
          </div>
        </button>

        {isObjectivesOpen && (
          <div className="pt-2 pl-2 sm:pl-14">
            <ul className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              {COURSE_INFO.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
