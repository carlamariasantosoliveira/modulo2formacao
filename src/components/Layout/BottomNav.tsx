import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageId } from '../../types';

interface BottomNavProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
}

const PAGE_LABELS: Record<PageId, string> = {
  home: 'Página Inicial',
  'ia-generativa': '1. Conceito de IA Generativa',
  'como-funcionam': '2. Funcionamento dos Modelos Generativos',
  'tipos-modelos': '3. Tipos de Modelos e Ferramentas',
  prompts: '4. Prompts',
  tecnicas: '5. Formulação de Prompts',
  'exemplos-disciplina': '6. Exemplo de Prompts',
  'boas-praticas': '7. Boas Práticas',
  'atividades-sala': '8. Ideias de Atividades',
  magicschool: '9. MagicSchool.ai',
  'atividade-sessao': '10. Atividade Prática',
  'ferramentas-referencias': 'Referências e Ferramentas',
};

const ORDERED_PAGES: PageId[] = [
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
    <nav
      aria-label="Navegação entre páginas"
      className="pt-10 pb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-sans border-t border-slate-200/80 mt-12"
    >
      {prevPage ? (
        <button
          onClick={() => onSelectPage(prevPage!)}
          className="group flex items-center gap-3 bg-white hover:bg-slate-50 border border-slate-200/90 text-left p-3 sm:px-5 sm:py-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs hover:border-slate-300 cursor-pointer max-w-sm"
        >
          <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center text-slate-600 shrink-0 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
              Anterior
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">
              {PAGE_LABELS[prevPage]}
            </span>
          </div>
        </button>
      ) : (
        <div />
      )}

      {nextPage ? (
        <button
          onClick={() => onSelectPage(nextPage!)}
          className="group flex items-center justify-between sm:justify-end gap-3 bg-[#1E70EB] hover:bg-blue-600 text-white text-right p-3 sm:px-5 sm:py-3 rounded-2xl shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer max-w-sm ml-auto"
        >
          <div className="min-w-0 text-left sm:text-right order-2 sm:order-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200 block">
              Seguinte
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white truncate block">
              {PAGE_LABELS[nextPage]}
            </span>
          </div>
          <div className="w-8 h-8 rounded-xl bg-white/20 group-hover:bg-white/30 flex items-center justify-center text-white shrink-0 transition-colors order-1 sm:order-2">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>
      ) : (
        <div />
      )}
    </nav>
  );
};
