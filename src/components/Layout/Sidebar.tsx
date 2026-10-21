import React, { useState } from 'react';
import {
  Home,
  Cpu,
  GitBranch,
  Layers,
  Terminal,
  PenTool,
  BookOpen,
  FileCheck,
  Settings,
  Gamepad2,
  Award,
  FileText,
  Brain,
  X,
  ChevronDown,
  ChevronRight,
  Sliders,
  HelpCircle,
} from 'lucide-react';
import { PageId } from '../../types';

interface SidebarProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

// 8 Official sections directly from the PDF
const OFFICIAL_SECTIONS: Array<{
  id: PageId;
  label: string;
  icon: React.ElementType;
}> = [
  { id: 'ia-generativa', label: '1. IA Generativa', icon: Cpu },
  { id: 'como-funcionam', label: '2. Como funcionam', icon: GitBranch },
  { id: 'tipos-modelos', label: '3. Tipos de modelos', icon: Layers },
  { id: 'prompts', label: '4. Prompts', icon: Terminal },
  { id: 'tecnicas', label: '5. Técnicas de prompts', icon: PenTool },
  { id: 'exemplos-disciplina', label: '6. Exemplos disciplinares', icon: BookOpen },
  { id: 'atividades-sala', label: '7. Atividades em aula', icon: FileCheck },
  { id: 'magicschool', label: '8. MagicSchool.ai', icon: Settings },
];

const SYNTHESIS_SECTIONS: Array<{
  id: PageId;
  label: string;
  icon: React.ElementType;
}> = [
  { id: 'desafio-final', label: 'Desafio Final & Portfólio', icon: Award },
  { id: 'ferramentas-referencias', label: 'Referências & Créditos', icon: FileText },
];

const SIMULATOR_SECTIONS: Array<{
  id: PageId;
  label: string;
  icon: React.ElementType;
}> = [
  { id: 'simuladores-quizzes', label: 'Índice de Simuladores', icon: Sliders },
  { id: 'simulador-modelos', label: '1. Simulador de Modelos', icon: Cpu },
  { id: 'simulador-difusao', label: '2. Difusão de Imagem', icon: Layers },
  { id: 'laboratorio-prompts', label: '3. Laboratório de Prompts', icon: Terminal },
  { id: 'quiz-interativo', label: '4. Questionário Formativo', icon: HelpCircle },
  { id: 'criador-recursos', label: '5. Criador de Recursos', icon: FileCheck },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onSelectPage,
  isMobileOpen,
  onCloseMobile,
}) => {
  const isHome = currentPage === 'home';
  const isSimulatorActive = [
    'simuladores-quizzes',
    'simulador-modelos',
    'simulador-difusao',
    'laboratorio-prompts',
    'quiz-interativo',
    'criador-recursos',
  ].includes(currentPage);

  const [simulatorsExpanded, setSimulatorsExpanded] = useState(true);

  const renderNavButton = (
    id: PageId,
    label: string,
    Icon: React.ElementType,
    isSubItem = false
  ) => {
    const isActive = currentPage === id;
    let buttonClass = '';
    let iconClass = '';

    if (isHome) {
      if (isActive) {
        buttonClass = 'bg-[#1E70EB] text-white font-semibold shadow-md';
        iconClass = 'text-white';
      } else {
        buttonClass = 'text-slate-300 hover:text-white hover:bg-white/10';
        iconClass = 'text-slate-400 group-hover:text-white';
      }
    } else {
      if (isActive) {
        buttonClass = 'bg-[#DCEBFE] text-[#1D4ED8] font-bold border border-blue-200/70 shadow-2xs';
        iconClass = 'text-[#1D4ED8]';
      } else {
        buttonClass = 'text-slate-600 hover:text-[#0C1E38] hover:bg-slate-50 font-medium';
        iconClass = 'text-slate-500 group-hover:text-[#0C1E38]';
      }
    }

    return (
      <button
        key={id}
        onClick={() => {
          onSelectPage(id);
          onCloseMobile();
        }}
        className={`w-full text-left flex items-center gap-2.5 rounded-xl transition-all cursor-pointer ${
          isSubItem ? 'pl-7 py-2 text-[11px]' : 'px-3 py-2 text-xs'
        } ${buttonClass}`}
      >
        <Icon className={`shrink-0 ${isSubItem ? 'w-3.5 h-3.5' : 'w-4 h-4'} ${iconClass}`} />
        <span className="truncate">{label}</span>
      </button>
    );
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        } ${
          isHome
            ? 'bg-[#0A1E38] text-white border-r border-[#162D4E]'
            : 'bg-white text-slate-700 border-r border-slate-200/80 shadow-xs'
        }`}
      >
        {/* Brand Header */}
        <div
          className={`p-5 pb-4 flex items-center justify-between border-b ${
            isHome ? 'border-white/10' : 'border-slate-100'
          }`}
        >
          <div
            onClick={() => {
              onSelectPage('home');
              onCloseMobile();
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                isHome
                  ? 'border-white/20 bg-white/5 text-white'
                  : 'border-blue-200 bg-blue-50 text-[#1E70EB]'
              }`}
            >
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span
                className={`text-[11px] font-extrabold tracking-wider uppercase block leading-tight ${
                  isHome ? 'text-white' : 'text-[#0C1E38]'
                }`}
              >
                INTELIGÊNCIA ARTIFICIAL
              </span>
              <span
                className={`text-[11px] font-extrabold tracking-wider uppercase block leading-tight ${
                  isHome ? 'text-white' : 'text-[#0C1E38]'
                }`}
              >
                NA EDUCAÇÃO
              </span>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className={`p-1 lg:hidden rounded-lg cursor-pointer ${
              isHome
                ? 'text-slate-400 hover:text-white hover:bg-white/10'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
          {/* Home Link */}
          <div>
            {renderNavButton('home', 'Página Inicial', Home)}
          </div>

          {/* Group 1: Conteúdo Oficial do Módulo 2 (Secções 1 a 8) */}
          <div className="space-y-1">
            <div className="px-3 py-1 flex items-center justify-between">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                isHome ? 'text-blue-300' : 'text-slate-400'
              }`}>
                Conteúdo Oficial (Secções 1 a 8)
              </span>
            </div>
            {OFFICIAL_SECTIONS.map((sec) => renderNavButton(sec.id, sec.label, sec.icon))}
          </div>

          {/* Group 2: Desafio e Referências do PDF */}
          <div className="space-y-1 pt-1 border-t border-slate-200/50">
            <div className="px-3 py-1">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                isHome ? 'text-blue-300' : 'text-slate-400'
              }`}>
                Avaliação & Consulta (PDF)
              </span>
            </div>
            {SYNTHESIS_SECTIONS.map((sec) => renderNavButton(sec.id, sec.label, sec.icon))}
          </div>

          {/* Group 3: Laboratório de Simuladores (Áreas Complementares) */}
          <div className="space-y-1 pt-1 border-t border-slate-200/50">
            <div className="px-3 py-1 flex items-center justify-between">
              <button
                onClick={() => setSimulatorsExpanded(!simulatorsExpanded)}
                className={`flex items-center justify-between w-full text-left text-[10px] font-bold uppercase tracking-wider cursor-pointer ${
                  isSimulatorActive ? 'text-[#1E70EB]' : isHome ? 'text-blue-300' : 'text-slate-400'
                }`}
              >
                <span>Simuladores (Prática)</span>
                {simulatorsExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {simulatorsExpanded && (
              <div className="space-y-0.5">
                {SIMULATOR_SECTIONS.map((sim, idx) =>
                  renderNavButton(sim.id, sim.label, sim.icon, idx > 0)
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Quote Box */}
        <div
          className={`p-4 border-t ${
            isHome
              ? 'border-white/10 bg-black/20 text-blue-100/90'
              : 'border-slate-100 bg-slate-50 text-slate-600'
          }`}
        >
          <div className="text-[11px] leading-relaxed italic space-y-1">
            <span
              className={`text-xl font-serif leading-none block ${
                isHome ? 'text-blue-300' : 'text-[#1E70EB]'
              }`}
            >
              “
            </span>
            <p>
              A IA generativa é uma aliada poderosa para potenciar a criatividade, a inclusão e a qualidade da aprendizagem.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
