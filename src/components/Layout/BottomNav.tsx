import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageId } from '../../types';

interface BottomNavProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
}

// Complete official sequence of the course
const ORDERED_PAGES: PageId[] = [
  'home',
  'ia-generativa',
  'como-funcionam',
  'tipos-modelos',
  'prompts',
  'tecnicas',
  'exemplos-disciplina',
  'atividades-sala',
  'magicschool',
  'desafio-final',
  'ferramentas-referencias',
];

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPage,
  onSelectPage,
}) => {
  if (currentPage === 'home') {
    return null;
  }

  let prevPage: PageId | null = null;
  let nextPage: PageId | null = null;

  const currentIdx = ORDERED_PAGES.indexOf(currentPage);
  if (currentIdx !== -1) {
    prevPage = currentIdx > 0 ? ORDERED_PAGES[currentIdx - 1] : null;
    nextPage = currentIdx < ORDERED_PAGES.length - 1 ? ORDERED_PAGES[currentIdx + 1] : null;
  }

  return (
    <nav aria-label="Navegação entre páginas" className="pt-10 pb-4 flex items-center justify-between gap-4 font-sans border-t border-slate-200/60 mt-10">
      {prevPage ? (
        <button
          onClick={() => onSelectPage(prevPage!)}
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-slate-600" />
          <span>Anterior</span>
        </button>
      ) : (
        <div />
      )}

      {nextPage ? (
        <button
          onClick={() => onSelectPage(nextPage!)}
          className="inline-flex items-center gap-2 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer ml-auto"
        >
          <span>Seguinte</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      ) : (
        <div />
      )}
    </nav>
  );
};
