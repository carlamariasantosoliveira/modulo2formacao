import React from 'react';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Brain,
  Search,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../../types';

interface HeaderProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

const PAGE_STEPS: Record<PageId, { num: number; title: string; category?: string }> = {
  home: { num: 0, title: 'Página Inicial' },
  'ia-generativa': { num: 1, title: '1. Conceito de IA Generativa' },
  'como-funcionam': { num: 2, title: '2. Funcionamento dos Modelos Generativos' },
  'tipos-modelos': { num: 3, title: '3. Tipos de Modelos e Ferramentas' },
  prompts: { num: 4, title: '4. Prompts' },
  tecnicas: { num: 5, title: '5. Formulação de Prompts' },
  'exemplos-disciplina': { num: 6, title: '6. Exemplo de Prompts' },
  'boas-praticas': { num: 7, title: '7. Boas Práticas' },
  'atividades-sala': { num: 8, title: '8. Ideias de Atividade a dinamizar com os alunos em contexto de sala de aula' },
  magicschool: { num: 9, title: '9. MagicSchool.ai' },
  'atividade-sessao': { num: 10, title: '10. Atividade Prática', category: 'Atividade' },
  'ferramentas-referencias': { num: 11, title: 'Referências Bibliográficas e Ferramentas Usadas', category: 'Referências' },
};

// Main linear sequence for browsing
const ORDERED_STEPS: PageId[] = [
  'home',
  'ia-generativa',
  'como-funcionam',
  'tipos-modelos',
  'prompts',
  'tecnicas',
  'exemplos-disciplina',
  'boas-praticas',
  'atividades-sala',
  'magicschool',
  'atividade-sessao',
  'ferramentas-referencias',
];

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onSelectPage,
  onOpenMobileMenu,
  onOpenSearch,
}) => {
  const currentIdx = ORDERED_STEPS.indexOf(currentPage);
  const info = PAGE_STEPS[currentPage] || { num: 1, title: 'Módulo 2' };
  const isHome = currentPage === 'home';

  const handlePrev = () => {
    if (currentIdx > 1) {
      onSelectPage(ORDERED_STEPS[currentIdx - 1]);
    } else if (currentIdx === 1) {
      onSelectPage('home');
    }
  };

  const handleNext = () => {
    if (currentIdx >= 0 && currentIdx < ORDERED_STEPS.length - 1) {
      onSelectPage(ORDERED_STEPS[currentIdx + 1]);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#0A1E38]/95 backdrop-blur-md text-white border-b border-white/10 shadow-xs">
      <div className="px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left side: Hamburger button + Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onOpenMobileMenu}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 lg:hidden cursor-pointer transition-colors"
            title="Abrir menu de navegação"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 text-xs sm:text-sm truncate">
            <button
              onClick={() => onSelectPage('home')}
              className="w-7 h-7 rounded-full border border-blue-400/30 flex items-center justify-center text-white shrink-0 bg-blue-500/10 hover:bg-blue-500/20 transition-all cursor-pointer"
              title="Ir para a Página Inicial"
            >
              <Brain className="w-4 h-4 text-blue-300" />
            </button>

            <span className="text-slate-100 font-bold truncate">
              {isHome ? 'Página Inicial' : info.title}
            </span>
          </div>
        </div>

        {/* Right side: Search & Step Navigation */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg border border-white/10 transition-all cursor-pointer text-xs"
            title="Pesquisar conteúdos (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-slate-300">Pesquisar</span>
            <kbd className="hidden sm:inline-block text-[10px] bg-white/10 text-slate-300 px-1.5 py-0.2 rounded font-mono">
              ⌘K
            </kbd>
          </button>

          {isHome ? (
            <button
              onClick={() => onSelectPage('ia-generativa')}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-xs hover:shadow-blue-500/30 transition-all cursor-pointer"
            >
              <span>Iniciar Módulo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-slate-200">
              <button
                onClick={handlePrev}
                disabled={currentIdx <= 1}
                className="p-1 text-slate-300 hover:text-white disabled:opacity-20 transition-colors cursor-pointer rounded-full hover:bg-white/10"
                title="Anterior"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <span className="font-mono text-xs font-semibold text-white px-1.5">
                {info.num > 0 ? `${info.num} / 8` : 'Anexo'}
              </span>

              <button
                onClick={handleNext}
                disabled={currentIdx >= ORDERED_STEPS.length - 1}
                className="p-1 text-slate-300 hover:text-white disabled:opacity-20 transition-colors cursor-pointer rounded-full hover:bg-white/10"
                title="Seguinte"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Subtle completion progress bar across top */}
      <div className="w-full h-[2px] bg-white/5">
        <div
          className="h-full bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-300"
          style={{
            width: `${Math.min(100, Math.max(0, (currentIdx / (ORDERED_STEPS.length - 1)) * 100))}%`,
          }}
        />
      </div>
    </header>
  );
};
