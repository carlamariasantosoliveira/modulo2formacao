import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageId } from '../../types';

interface BottomNavProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
}

// Complete official sequence
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
  'simuladores-quizzes',
];

const SIMULATOR_ORDER: PageId[] = [
  'simuladores-quizzes',
  'simulador-modelos',
  'simulador-difusao',
  'laboratorio-prompts',
  'quiz-interativo',
  'criador-recursos',
];

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPage,
  onSelectPage,
}) => {
  if (currentPage === 'home') {
    return null;
  }

  const isSimulator = SIMULATOR_ORDER.includes(currentPage);

  let prevPage: PageId | null = null;
  let nextPage: PageId | null = null;
  let prevLabel = 'Anterior';
  let nextLabel = 'Seguinte';

  if (isSimulator && currentPage !== 'simuladores-quizzes') {
    const simIdx = SIMULATOR_ORDER.indexOf(currentPage);
    prevPage = simIdx > 1 ? SIMULATOR_ORDER[simIdx - 1] : 'simuladores-quizzes';
    nextPage = simIdx < SIMULATOR_ORDER.length - 1 ? SIMULATOR_ORDER[simIdx + 1] : 'desafio-final';
    prevLabel = simIdx === 1 ? '← Índice de Simuladores' : 'Simulador Anterior';
    nextLabel = simIdx === SIMULATOR_ORDER.length - 1 ? 'Ir para o Desafio Final →' : 'Próximo Simulador →';
  } else {
    const currentIdx = ORDERED_PAGES.indexOf(currentPage);
    if (currentIdx !== -1) {
      prevPage = currentIdx > 0 ? ORDERED_PAGES[currentIdx - 1] : null;
      nextPage = currentIdx < ORDERED_PAGES.length - 1 ? ORDERED_PAGES[currentIdx + 1] : null;
    }
  }

  return (
    <nav aria-label="Navegação entre páginas" className="pt-10 pb-4 flex items-center justify-between gap-4 font-sans border-t border-slate-200/60 mt-10">
      {prevPage ? (
        <button
          onClick={() => onSelectPage(prevPage!)}
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-slate-600" />
          <span>{prevLabel}</span>
        </button>
      ) : (
        <div />
      )}

      {nextPage ? (
        <button
          onClick={() => onSelectPage(nextPage!)}
          className="inline-flex items-center gap-2 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer ml-auto"
        >
          <span>{nextLabel}</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      ) : (
        <div />
      )}
    </nav>
  );
};
