import React, { useState } from 'react';
import {
  Wand2,
  Bot,
  UserCheck,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
  BookOpen,
  Send,
  MessageSquare,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { MAGICSCHOOL_DATA } from '../../data/courseData';
import { NoticeBanner } from '../Common/NoticeBanner';

export const MagicSchoolPage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedGenerator, setSelectedGenerator] = useState<number>(0);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text.replace(/^“|”$/g, ''));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const gen = MAGICSCHOOL_DATA.specificGenerators[selectedGenerator];

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            8. Exploração da Ferramenta MagicSchool.ai
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Raina (Assistente do Professor), Student Chatbots e os 8 Geradores Especializados (Páginas 7 e 8)
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-3">
        <h2 className="text-xs font-bold text-[#1E70EB] uppercase tracking-wider">
          Enquadramento da Plataforma
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {MAGICSCHOOL_DATA.description}
        </p>
      </div>

      {/* Section 1: MagicSchool - Raina (Assistente do Professor) */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden">
        <div className="p-6 bg-linear-to-r from-blue-50/70 via-indigo-50/20 to-white border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#1E70EB] text-white flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#1E70EB] uppercase tracking-wider block">
                Para o Professor
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {MAGICSCHOOL_DATA.raina.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {MAGICSCHOOL_DATA.raina.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {MAGICSCHOOL_DATA.raina.examples.map((ex, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#1E70EB]">{ex.name}</span>
                    <button
                      onClick={() => handleCopy(`raina-${i}`, ex.prompt)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-[#1E70EB] bg-white border border-slate-200 px-2.5 py-1 rounded-lg cursor-pointer"
                    >
                      {copiedId === `raina-${i}` ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 font-mono text-xs text-slate-800 leading-relaxed">
                    {ex.prompt}
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 pt-1 italic">{ex.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Student Chatbots (Alunos) */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden">
        <div className="p-6 bg-linear-to-r from-emerald-50/70 to-white border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#059669] text-white flex items-center justify-center">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#059669] uppercase tracking-wider block">
              Para o Trabalho Autónomo dos Alunos
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {MAGICSCHOOL_DATA.studentChatbots.title}
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MAGICSCHOOL_DATA.studentChatbots.chatbots.map((bot, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                  <h4 className="text-xs font-bold text-slate-900">{bot.name}</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{bot.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#EFF6FF] border border-blue-100 rounded-2xl p-4 sm:p-5 space-y-1.5 text-xs text-[#1D4ED8]">
            <strong className="font-bold flex items-center gap-2 text-sm text-[#1E70EB]">
              <ShieldCheck className="w-4 h-4" />
              <span>Destaque Ético para a Educação:</span>
            </strong>
            <p className="leading-relaxed text-slate-700 pt-1">
              O chatbot &ldquo;IA - Questões Éticas&rdquo; foi programado exclusivamente com base no documento <em>&ldquo;Orientações Éticas para Educadores&rdquo;</em> (Comissão Europeia, 2022), abordando a ação humana, transparência, equidade e bem-estar, sem adicionar fontes externas.
            </p>
            <p className="text-[11px] text-slate-500 italic pt-1 border-t border-blue-200/50">
              Nota didática: Esta restrição documental representa a especificação pedagógica do chatbot no guião do curso. No presente ambiente, serve como modelo de referência para configuração de assistentes fechados e seguros na escola.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: The 8 Specific Content Generators verbatim from page 8 */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-[#F8FAFC] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#1E70EB] uppercase tracking-wider block">
              Ferramentas Especializadas
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Geradores de Conteúdo Específicos do MagicSchool (Todos os 8 do Documento)
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 font-semibold">8 Geradores</span>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left list (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              {MAGICSCHOOL_DATA.specificGenerators.map((generator, idx) => (
                <button
                  key={generator.id}
                  onClick={() => setSelectedGenerator(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs flex items-center justify-between cursor-pointer ${
                    selectedGenerator === idx
                      ? 'bg-blue-50 border-[#1E70EB] text-[#1D4ED8] font-bold shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span>{generator.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {generator.description.slice(0, 16)}...
                  </span>
                </button>
              ))}
            </div>

            {/* Right generator detail preview (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    {selectedGenerator + 1}. {gen.name}
                  </h4>
                  <span className="text-xs text-[#1E70EB] font-semibold">
                    {gen.description}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/90 space-y-1.5">
                  <span className="text-xs font-bold text-slate-800 block">
                    Exemplo Curricular Transcrito no Módulo:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-mono bg-[#F8FAFC] p-3 rounded-xl border border-slate-200/60">
                    {gen.example}
                  </p>
                </div>

                <div className="bg-[#EFF6FF] p-4 rounded-2xl border border-blue-100 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1D4ED8]">
                      Padrão de Prompt Recomendado:
                    </span>
                    <button
                      onClick={() => handleCopy(gen.id, gen.promptPattern)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1E70EB] hover:text-blue-900 cursor-pointer"
                    >
                      {copiedId === gen.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar Modelo</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs font-mono text-blue-950 bg-white/90 p-3 rounded-xl border border-blue-200/50">
                    {gen.promptPattern}
                  </p>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                Pode utilizar estes padrões diretamente nos modelos de linguagem para preparar os seus recursos pedagógicos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
