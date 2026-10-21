import React, { useState } from 'react';
import {
  FileText,
  Search,
  Copy,
  Check,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react';
import {
  BIBLIOGRAPHIC_REFERENCES,
  LLM_TOOLS_LIST,
  COURSE_INFO,
} from '../../data/courseData';

export const ReferenciasPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'etica' | 'prompts' | 'relatorios' | 'ia-geral'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredRefs = BIBLIOGRAPHIC_REFERENCES.filter((ref) => {
    const matchesSearch =
      ref.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.year.includes(searchQuery);

    const matchesCategory =
      categoryFilter === 'all' || ref.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const handleCopyCitation = (id: string, text: string) => {
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
            Ferramentas Citadas e Referências Bibliográficas
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Corpus Científico Integral (19 Referências do PDF), Ferramentas e Ficha Técnica (Páginas 8 e 9)
          </p>
        </div>
      </div>

      {/* Course Integration Banner (No PDF download/viewer to keep study 100% on-platform) */}
      <div className="bg-linear-to-r from-[#0C1E3C] via-[#0E2448] to-[#12315C] text-white rounded-3xl p-6 sm:p-7 shadow-xs border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
              Plataforma Oficial de Estudo do Módulo 2
            </span>
          </div>
          <h2 className="text-lg font-bold text-white">
            Conteúdo Pedagógico Integralmente Integrado
          </h2>
          <p className="text-xs text-blue-100/90 leading-relaxed max-w-2xl">
            Toda a matéria necessária para o seu estudo — definições, ciclo de funcionamento, 8 técnicas de prompts, exemplos por disciplina, 4 atividades práticas e geradores MagicSchool — está disponível diretamente nas páginas interativas deste curso, dispensando ficheiros externos.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 shrink-0 text-xs font-semibold text-blue-100">
          <GraduationCap className="w-5 h-5 text-blue-300" />
          <span>Formação a Distância</span>
        </div>
      </div>

      {/* Section 1: Ferramentas Citadas */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-semibold text-[#1E70EB] uppercase tracking-wider block mb-0.5">
            Módulo 2 (Página 8)
          </span>
          <h2 className="text-lg font-bold text-slate-900">
            Ferramentas de IA Generativa Referenciadas
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Modelos de linguagem, chatbots e plataformas educativas analisadas ao longo do curso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LLM_TOOLS_LIST.map((tool, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/80 hover:border-blue-300 bg-[#F8FAFC] hover:bg-white transition-all shadow-2xs space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-bold text-slate-900">{tool.name}</h3>
                  <span className="text-[10px] font-semibold text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded-md">
                    {tool.badge}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#1E70EB] block mb-1">
                  {tool.role}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: All 19 Bibliographic References */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-semibold text-[#1E70EB] uppercase tracking-wider block mb-0.5">
              Literatura Científica (Página 9)
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Referências Bibliográficas do Módulo 2
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Todas as 19 obras citadas no documento original de formação, com formatação bibliográfica rigorosa.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Filtrar por autor, ano, título..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-blue-500"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              categoryFilter === 'all'
                ? 'bg-[#1E70EB] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todas as Referências ({BIBLIOGRAPHIC_REFERENCES.length})
          </button>
          <button
            onClick={() => setCategoryFilter('prompts')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              categoryFilter === 'prompts'
                ? 'bg-[#1E70EB] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Engenharia de Prompts
          </button>
          <button
            onClick={() => setCategoryFilter('etica')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              categoryFilter === 'etica'
                ? 'bg-[#1E70EB] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Ética e Diretrizes (CE)
          </button>
          <button
            onClick={() => setCategoryFilter('relatorios')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              categoryFilter === 'relatorios'
                ? 'bg-[#1E70EB] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            UNESCO &amp; OCDE
          </button>
          <button
            onClick={() => setCategoryFilter('ia-geral')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              categoryFilter === 'ia-geral'
                ? 'bg-[#1E70EB] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Modelos e Aprendizagem
          </button>
        </div>

        {/* List of citations */}
        <div className="space-y-3">
          {filteredRefs.map((ref) => {
            const formattedAPA = `${ref.authors} (${ref.year}). ${ref.title}. ${ref.publication}`;
            return (
              <div
                key={ref.id}
                className="p-4 rounded-2xl border border-slate-200/80 bg-white hover:bg-slate-50/70 transition-all shadow-2xs flex flex-col sm:flex-row sm:items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      {ref.authors} ({ref.year})
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
                      {ref.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-800 italic leading-relaxed">
                    {ref.title}
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium">
                    {ref.publication}
                  </p>
                </div>

                <button
                  onClick={() => handleCopyCitation(ref.id, formattedAPA)}
                  className="self-start inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 hover:text-[#1E70EB] bg-slate-50 hover:bg-blue-50 border border-slate-200 px-2.5 py-1 rounded-lg shrink-0 transition-colors cursor-pointer"
                  title="Copiar citação em estilo APA"
                >
                  {copiedId === ref.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar APA</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Ficha Técnica e Créditos Oficiais verbatim from page 9 */}
      <div className="bg-[#EFF6FF] rounded-3xl p-6 sm:p-7 border border-blue-100 text-xs text-slate-700 space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
          Ficha Técnica e Créditos:
        </h3>
        <p className="leading-relaxed">
          <strong>Conteúdo original:</strong> Carla Oliveira (criado em 26 de janeiro de 2026).
        </p>
        <p className="leading-relaxed">
          <strong>Âmbito e Enquadramento:</strong> Documento estruturado para o <em>Curso de Inteligência Artificial na Educação</em>. Formato digital autónomo concebido para a formação contínua de professores a distância.
        </p>
      </div>
    </div>
  );
};
