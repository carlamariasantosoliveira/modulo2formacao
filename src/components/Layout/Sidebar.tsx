import React from 'react';
import {
  Home,
  Cpu,
  GitBranch,
  Layers,
  MessageSquare,
  PenTool,
  BookOpen,
  FileCheck,
  Settings,
  Users,
  Award,
  FileText,
  Brain,
  X,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../../types';

interface SidebarProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

// Official sections directly from the syllabus
const OFFICIAL_SECTIONS: Array<{
  id: PageId;
  label: string;
  icon: React.ElementType;
}> = [
  { id: 'ia-generativa', label: '1. IA Generativa', icon: Cpu },
  { id: 'como-funcionam', label: '2. Como funcionam', icon: GitBranch },
  { id: 'tipos-modelos', label: '3. Tipos de Modelos e Ferramentas', icon: Layers },
  { id: 'prompts', label: '4. Prompts', icon: MessageSquare },
  { id: 'tecnicas', label: '5. Formulação de Prompts', icon: PenTool },
  { id: 'exemplos-disciplina', label: '6. Exemplo de Prompts', icon: BookOpen },
  { id: 'boas-praticas', label: '7. Boas Práticas', icon: ShieldCheck },
  { id: 'atividades-sala', label: '8. Ideias de Atividades', icon: FileCheck },
  { id: 'magicschool', label: '9. MagicSchool.ai', icon: Settings },
];

const SYNTHESIS_SECTIONS: Array<{
  id: PageId;
  label: string;
  icon: React.ElementType;
}> = [
  { id: 'atividade-sessao', label: '10. Atividade de Grupo', icon: Users },
  { id: 'ferramentas-referencias', label: 'Referências e Ferramentas', icon: FileText },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onSelectPage,
  isMobileOpen,
  onCloseMobile,
}) => {
  const isHome = currentPage === 'home';

  const renderNavButton = (
    id: PageId,
    label: string,
    Icon: React.ElementType
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
        className={`w-full text-left flex items-center gap-2.5 rounded-xl transition-all cursor-pointer px-3 py-2 text-xs ${buttonClass}`}
      >
        <Icon className={`shrink-0 w-4 h-4 ${iconClass}`} />
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

          {/* Group 1: Módulos do Curso (Secções 1 a 8) */}
          <div className="space-y-1">
            <div className="px-3 py-1 flex items-center justify-between">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                isHome ? 'text-blue-300' : 'text-slate-400'
              }`}>
                Módulos da Oficina
              </span>
            </div>
            {OFFICIAL_SECTIONS.map((sec) => renderNavButton(sec.id, sec.label, sec.icon))}
          </div>

          {/* Group 2 */}
          <div className="space-y-1 pt-2 border-t border-slate-200/50">
            {SYNTHESIS_SECTIONS.map((sec) => renderNavButton(sec.id, sec.label, sec.icon))}
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
