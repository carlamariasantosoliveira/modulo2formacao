import React, { useState } from 'react';
import {
  Wand2,
  Bot,
  UserCheck,
  Sparkles,
  Copy,
  Check,
  BookOpen,
  HelpCircle,
  FileText,
  CheckSquare,
  FileEdit,
  MessageSquare,
  Layout,
  Video,
  ExternalLink,
  Sliders,
  GraduationCap,
  ChevronRight,
  Info,
} from 'lucide-react';
import { MAGICSCHOOL_DATA } from '../../data/courseData';

type SectionTab = 'geradores' | 'raina';

export const MagicSchoolPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SectionTab>('geradores');
  const [selectedGeneratorIdx, setSelectedGeneratorIdx] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text.replace(/^“|”$/g, ''));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentGen = MAGICSCHOOL_DATA.generators[selectedGeneratorIdx];

  const getPossibilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5" />;
      case 'FileEdit':
        return <FileEdit className="w-5 h-5" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 pb-16 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-10 bg-[#1E70EB] rounded-full inline-block"></span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
              9. Exploração da Ferramenta MagicSchool.ai
            </h1>
          </div>
        </div>

        <a
          href={MAGICSCHOOL_DATA.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E70EB] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm hover:shadow self-start md:self-auto cursor-pointer"
        >
          <Wand2 className="w-4 h-4" />
          <span>Aceder ao MagicSchool.ai</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>

      {/* Intro Platform Summary Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1E70EB] uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>Visão Global da Plataforma Educativa</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {MAGICSCHOOL_DATA.description}
        </p>
      </div>

      {/* Possibilidades de Interação (Exibido diretamente após Visão Global) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#1E70EB] flex items-center justify-center">
            <Layout className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#1E70EB] uppercase tracking-wider block">
              Catálogo Geral de Recursos
            </span>
            <h2 className="text-xl font-extrabold text-slate-900">
              MagicSchool - Possibilidades de Interação
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          O ecossistema MagicSchool disponibiliza um leque de geradores especializados para apoio à atividade docente (consultado em outubro de 2026; funcionalidades e termos comerciais sujeitos a alterações pelo fornecedor). Todas as propostas de planos de aula, itens de questionários e rubricas carecem de validação e conferência curricular pelo professor:
        </p>

        <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200 text-[11px] text-blue-950 leading-relaxed">
          <strong>Salvaguarda Didática:</strong> O alinhamento com as Aprendizagens Essenciais e a classificação por níveis cognitivos da Taxonomia de Bloom representam propostas automatizadas preliminares, não constituindo garantia de rigor factual ou adequação pedagógica sem revisão humana.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          {MAGICSCHOOL_DATA.possibilidades.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80 space-y-2.5 flex flex-col justify-between hover:border-blue-300 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-[#1E70EB] flex items-center justify-center shadow-2xs group-hover:bg-[#1E70EB] group-hover:text-white transition-all">
                    {getPossibilityIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-slate-900 pt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-end">
                <button
                  onClick={() => {
                    setActiveTab('geradores');
                    const el = document.getElementById('magicschool-tabs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[11px] font-semibold text-[#1E70EB] hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver geradores</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Título da Secção de Ferramentas */}
      <div className="pt-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#1E70EB] flex items-center justify-center shadow-2xs">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#1E70EB] uppercase tracking-wider block">
              Exemplo de Ferramentas
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Ferramentas
            </h2>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Tabs (Apenas Ferramentas e Assistente Raina) */}
      <div id="magicschool-tabs" className="flex flex-wrap gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80">
        <button
          onClick={() => setActiveTab('geradores')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'geradores'
              ? 'bg-white text-[#1E70EB] shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Ferramentas</span>
          <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-blue-100 text-[#1E70EB]">
            8
          </span>
        </button>

        <button
          onClick={() => setActiveTab('raina')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'raina'
              ? 'bg-white text-[#1E70EB] shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <Bot className="w-4 h-4" />
          <span>Assistente Raina</span>
        </button>
      </div>

      {/* TAB 1: 8 GERADORES / FERRAMENTAS */}
      {activeTab === 'geradores' && (
        <div className="space-y-6">
          {/* Sub-tabs selector for the 8 generators */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-3 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3 py-2 flex items-center justify-between">
              <span>Selecione a Ferramenta:</span>
              <span className="text-[11px] text-blue-600 font-semibold">
                {selectedGeneratorIdx + 1} de {MAGICSCHOOL_DATA.generators.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-1">
              {MAGICSCHOOL_DATA.generators.map((gen, idx) => {
                const isSelected = selectedGeneratorIdx === idx;
                return (
                  <button
                    key={gen.id}
                    onClick={() => setSelectedGeneratorIdx(idx)}
                    className={`flex flex-col items-center justify-center text-center p-3 rounded-2xl border transition-all cursor-pointer min-h-[82px] ${
                      isSelected
                        ? 'bg-blue-50/90 border-[#1E70EB] text-[#1D4ED8] font-bold shadow-2xs ring-2 ring-blue-100'
                        : 'bg-[#F8FAFC] border-slate-200 text-slate-700 hover:bg-slate-100/70 hover:border-slate-300'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold mb-1.5 ${
                        isSelected
                          ? 'bg-[#1E70EB] text-white'
                          : 'bg-slate-200/80 text-slate-600'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-[11px] leading-tight line-clamp-2">
                      {gen.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Generator Detail Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
            <div className="p-6 sm:p-8 space-y-6">
              {/* Highlight Box with Tool Title & Number */}
              <div className="bg-amber-50/90 border-2 border-amber-300/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-sm shadow-xs shrink-0">
                    {currentGen.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-amber-950 tracking-tight">
                    {currentGen.number}. {currentGen.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-amber-950 leading-relaxed pl-3 border-l-2 border-amber-400">
                  {currentGen.pedagogicalDefinition}
                </p>
              </div>

              {/* Grid: Parameters & Prompt Example */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Parameters & Inputs (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[#1E70EB] rounded-full"></span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Parâmetros da Ferramenta
                    </h3>
                  </div>

                  <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3">
                    {currentGen.parameters.map((param, pIdx) => (
                      <div key={pIdx} className="space-y-1 text-xs">
                        <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider text-[#1E70EB]">
                          • {param.label}:
                        </span>
                        <div className="text-slate-800 font-medium pl-3 bg-white p-2.5 rounded-xl border border-slate-200/60 leading-relaxed">
                          {param.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 space-y-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Vantagens Didáticas:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {currentGen.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Prompt Example & Output (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#059669] rounded-full"></span>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Exemplo Transcrito do Guião de Formação
                      </h3>
                    </div>
                  </div>

                  {/* Single example prompt */}
                  {currentGen.examplePrompt && (
                    <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 space-y-3 shadow-sm border border-slate-800 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                            Prompt / Pedido à Ferramenta
                          </span>
                          <button
                            onClick={() =>
                              handleCopy(
                                `gen-${currentGen.id}`,
                                currentGen.examplePrompt || ''
                              )
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-xl transition-all cursor-pointer"
                          >
                            {copiedId === `gen-${currentGen.id}` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-300">Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copiar Prompt</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 pt-1">
                          {currentGen.examplePrompt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Pode copiar e colar diretamente no MagicSchool.ai</span>
                        <span className="text-slate-500 font-mono">
                          ID: {currentGen.id}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Multiple prompts list if available (e.g. Fichas de Trabalho) */}
                  {currentGen.promptsList && (
                    <div className="space-y-3">
                      {currentGen.promptsList.map((item, pIdx) => (
                        <div
                          key={pIdx}
                          className="bg-slate-900 text-slate-100 rounded-2xl p-5 space-y-2.5 border border-slate-800"
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                            <span className="text-[11px] font-bold text-emerald-400">
                              {item.subject}
                            </span>
                            <button
                              onClick={() =>
                                handleCopy(
                                  `gen-list-${currentGen.id}-${pIdx}`,
                                  item.prompt
                                )
                              }
                              className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded-xl transition-all cursor-pointer"
                            >
                              {copiedId === `gen-list-${currentGen.id}-${pIdx}` ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-300">Copiado!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Copiar</span>
                                </>
                              )}
                            </button>
                          </div>
                          <p className="font-mono text-xs text-slate-200 leading-relaxed">
                            {item.prompt}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Educational tip */}
                  <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 text-xs text-blue-900 flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#1E70EB] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Dica pedagógica:</strong> Ao formular o pedido no MagicSchool, inclua sempre os critérios específicos de avaliação e o ano de escolaridade para garantir que o vocabulário e a progressão dos exercícios correspondem rigorosamente ao currículo nacional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Demonstration if resumidor-youtube */}
              {currentGen.id === 'resumidor-youtube' && (
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-4 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          Vídeo Demonstrativo da Ferramenta: resumidorYoutube
                        </h4>
                        <span className="text-[11px] text-slate-500">
                          Apresentação prática da formadora Carla Oliveira
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://www.canva.com/design/DAHYipR89_4/J_9PUE6VbitWXWEs6rL5cA/watch?utm_content=DAHYipR89_4&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs cursor-pointer self-start sm:self-auto"
                    >
                      <span>Abrir no Canva</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Video Player Embed */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: 0,
                      paddingTop: '56.25%',
                      paddingBottom: 0,
                      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      willChange: 'transform',
                    }}
                  >
                    <iframe
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0,
                      }}
                      src="https://www.canva.com/design/DAHYipR89_4/J_9PUE6VbitWXWEs6rL5cA/watch?embed"
                      allowFullScreen
                      allow="fullscreen"
                      title="resumidorYoutube de Carla Oliveira"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                    <a
                      href="https://www.canva.com/design/DAHYipR89_4/J_9PUE6VbitWXWEs6rL5cA/watch?utm_content=DAHYipR89_4&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E70EB] hover:underline font-medium"
                    >
                      resumidorYoutube
                    </a>
                    <span className="text-slate-500 font-medium">de Carla Oliveira</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RAINA (ASSISTENTE DO PROFESSOR) */}
      {activeTab === 'raina' && (
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="p-6 bg-linear-to-r from-blue-50/80 via-indigo-50/30 to-white border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#1E70EB] text-white flex items-center justify-center shadow-xs">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#1E70EB] uppercase tracking-wider block">
                  {MAGICSCHOOL_DATA.raina.badge}
                </span>
                <h2 className="text-xl font-extrabold text-slate-900">
                  {MAGICSCHOOL_DATA.raina.title}
                </h2>
              </div>
            </div>

            <div className="text-xs text-slate-600 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 font-medium shadow-2xs">
              {MAGICSCHOOL_DATA.raina.subtitle}
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Pedagogical Definition Banner */}
            <div className="bg-amber-50/90 border-2 border-amber-300/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                  Definição Pedagógica (Guião da Formadora):
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-amber-950 leading-relaxed pl-4 border-l-2 border-amber-300">
                {MAGICSCHOOL_DATA.raina.pedagogicalDefinition}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {MAGICSCHOOL_DATA.raina.description}
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1E70EB]" />
                <span>Exemplos de Prompts no Módulo de Formação:</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {MAGICSCHOOL_DATA.raina.examples.map((ex) => (
                  <div
                    key={ex.id}
                    className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/90 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                        <span className="text-xs font-bold text-[#1E70EB]">{ex.name}</span>
                        <button
                          onClick={() => handleCopy(ex.id, ex.prompt)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#1E70EB] bg-white border border-slate-200 px-2.5 py-1 rounded-lg cursor-pointer transition-all shadow-2xs"
                        >
                          {copiedId === ex.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 text-[10px] text-slate-600 font-semibold">
                        <span className="bg-slate-200/70 px-2 py-0.5 rounded-md">
                          Ano: {ex.grade}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
                          Área: {ex.subject}
                        </span>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed shadow-2xs">
                        &ldquo;{ex.prompt}&rdquo;
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 italic pt-2 border-t border-slate-200/70">
                      <strong>Enquadramento:</strong> {ex.pedagogicalGoal}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MagicStudent — Ambiente para Alunos */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-base font-bold text-[#0C1E38] flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-[#1E70EB]" />
          <span>MagicStudent — Ambiente para Alunos</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          Permite aos professores criar salas virtuais e disponibilizar atividades mediadas por IA com supervisão pedagógica.
        </p>
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-2">
          <strong className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
            Requisitos para utilização em contexto escolar:
          </strong>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Enquadramento nas políticas de proteção de dados (RGPD) e no regulamento interno da escola.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Verificação das idades mínimas e dos termos de serviço da plataforma.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Consentimento informado dos encarregados de educação, quando aplicável.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Mediação direta e acompanhamento contínuo por parte do professor.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Questões éticas e pedagógicas */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-base font-bold text-[#0C1E38] flex items-center gap-2">
          <Bot className="w-5 h-5 text-[#1E70EB]" />
          <span>Questões éticas e pedagógicas</span>
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-2 shrink-0"></span>
            <span><strong>Transparência:</strong> os alunos devem ter consciência de que interagem com um sistema automatizado e não com um interlocutor humano.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-2 shrink-0"></span>
            <span><strong>Pensamento crítico:</strong> incentivar os alunos a questionar as respostas e a confrontá-las com fontes complementares.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-2 shrink-0"></span>
            <span><strong>Privacidade:</strong> não introduzir informação pessoal nem sensível nas conversações.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-2 shrink-0"></span>
            <span><strong>Mediação:</strong> a ferramenta é um recurso de apoio pedagógico, não um substituto do professor nem dos colegas.</span>
          </li>
        </ul>
      </div>

      {/* Aviso Final */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-6 space-y-2 text-amber-950">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900">
          Aviso
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-amber-950 font-normal">
          A MagicSchool.ai é uma ferramenta proprietária que recolhe dados dos utilizadores e cujas funcionalidades e condições de acesso podem ser alteradas sem aviso prévio. Antes de adotar a ferramenta com turmas, a escola e o professor devem assegurar o cumprimento integral do RGPD, a existência dos consentimentos necessários e a salvaguarda da privacidade dos alunos.
        </p>
      </div>
    </div>
  );
};


