import React from 'react';
import {
  Calendar,
  User,
  GraduationCap,
} from 'lucide-react';
import { COURSE_INFO } from '../../data/courseData';
import robotLightbulbImg from '../../assets/images/ai_robot_lightbulb_1792545516837.jpg';

export const IAGenerativaPage: React.FC = () => {
  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical accent line matching reference screenshots (imagem_49d88603.png) */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
          1. Objetivos e Conceito de IA Generativa
        </h1>
      </div>

      {/* Official Module Meta Card from Page 1 */}
      <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#1E70EB]" />
          <span><strong>Curso:</strong> {COURSE_INFO.courseTitle}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-slate-500" />
          <span><strong>Autora:</strong> {COURSE_INFO.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-500" />
          <span><strong>Data de Criação:</strong> {COURSE_INFO.date}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] bg-blue-50 text-[#1D4ED8] px-2.5 py-1 rounded-md font-semibold border border-blue-200/60">
          <span>{COURSE_INFO.scope}</span>
        </div>
      </div>

      {/* Main Content Card matching imagem_49d88603.png and Curso_de_IA_na_Educa__o__1__f7e93860.png */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-2xs space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E70EB]">
              Conceito de IA Generativa
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              A IA Generativa refere-se a sistemas de Inteligência Artificial capazes de produzir novos conteúdos (texto, imagens, áudio ou vídeo) com base em padrões aprendidos durante o treino com vastos conjuntos de dados (Big Data).
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0"></span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Tecnologia:</strong> Utiliza redes neuronais profundas (<em>Deep Learning</em>).
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0"></span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Lógica:</strong> Identifica padrões estatísticos para gerar respostas que pareçam humanas e coerentes, embora resultem de cálculos de probabilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-fidelity Educational Robot visual matching Curso_de_IA_na_Educa__o__1__f7e93860.png */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-50 relative group">
              <img
                src={robotLightbulbImg}
                alt="Robot educativo de IA com lâmpada e livros"
                className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="p-3 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent absolute bottom-0 inset-x-0 text-white">
                <span className="text-[11px] font-semibold text-blue-200 block">
                  Inteligência Artificial na Prática Docente
                </span>
                <span className="text-[10px] text-slate-200 block">
                  Potenciar a diferenciação e personalização da aprendizagem
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

