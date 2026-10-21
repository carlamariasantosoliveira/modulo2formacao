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
  'ia-generativa': { num: 1, title: '1. Objetivos e Conceito de IA Generativa' },
  'como-funcionam': { num: 2, title: '2. Funcionamento dos Modelos Generativos' },
  'tipos-modelos': { num: 3, title: '3. Tipos de Modelos (Áudio, Vídeo, Multimodal)' },
  prompts: { num: 4, title: '4. Prompts e Engenharia de Prompts' },
  tecnicas: { num: 5, title: '5. Técnicas de Formulação de Prompts' },
  'exemplos-disciplina': { num: 6, title: '6. Exemplos Práticos por Disciplina' },
  'atividades-sala': { num: 7, title: '7. Atividades Práticas em Sala de Aula' },
  magicschool: { num: 8, title: '8. Exploração da Ferramenta MagicSchool.ai' },
  'desafio-final': { num: 8, title: 'Desafio Prático Final do Módulo 2', category: 'Desafio' },
  'ferramentas-referencias': { num: 9, title: 'Referências Bibliográficas e Créditos', category: 'Referências' },
  'simuladores-quizzes': { num: 0, title: 'Laboratório de Simuladores (Índice)', category: 'Simulador' },
  'simulador-modelos': { num: 0, title: 'Simulador do Funcionamento dos Modelos', category: 'Simulador' },
  'simulador-difusao': { num: 0, title: 'Simulador de Difusão e Imagem', category: 'Simulador' },
  'laboratorio-prompts': { num: 0, title: 'Laboratório de Engenharia de Prompts', category: 'Simulador' },
  'quiz-interativo': { num: 0, title: 'Questionário Interativo Formativo', category: 'Simulador' },
  'criador-recursos': { num: 0, title: 'Criador de Recursos Pedagógicos', category: 'Simulador' },
};

// Main linear sequence for course browsing
const ORDERED_STEPS: PageId[] = [
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

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onSelectPage,
  onOpenMobileMenu,
  onOpenSearch,
}) => {
  const currentIdx = ORDERED_STEPS.indexOf(currentPage);
  const info = PAGE_STEPS[currentPage] || { num: 1, title: 'Módulo 2' };
  const isHome = currentPage === 'home';
  const isSimulatorSubpage = [
    'simuladores-quizzes',
    'simulador-modelos',
    'simulador-difusao',
    'laboratorio-prompts',
    'quiz-interativo',
    'criador-recursos',
  ].includes(currentPage);

  const handlePrev = () => {
    if (isSimulatorSubpage) {
      onSelectPage('simuladores-quizzes');
      return;
    }
    if (currentIdx > 1) {
      onSelectPage(ORDERED_STEPS[currentIdx - 1]);
    } else if (currentIdx === 1) {
      onSelectPage('home');
    }
  };

  const handleNext = () => {
    if (isSimulatorSubpage) {
      onSelectPage('desafio-final');
      return;
    }
    if (currentIdx >= 0 && currentIdx < ORDERED_STEPS.length - 1) {
      onSelectPage(ORDERED_STEPS[currentIdx + 1]);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#0C1E38] text-white px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 border-b border-white/10 shadow-xs">
      {/* Left side: Hamburger button + Breadcrumb */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onOpenMobileMenu}
          className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 lg:hidden cursor-pointer"
          title="Abrir menu de navegação"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs sm:text-sm truncate">
          <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 bg-white/5">
            <Brain className="w-4 h-4 text-white" />
          </div>

          <button
            onClick={() => onSelectPage('home')}
            className="font-bold text-white hover:text-blue-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            Módulo 2
          </button>

          {!isHome && (
            <>
              <span className="text-slate-400 font-bold">&gt;</span>
              <span className="text-slate-100 font-bold truncate">
                {info.title}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Right side: Step Counter & Arrow Navigation */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenSearch}
          className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          title="Pesquisar conteúdos (Ctrl+K)"
        >
          <Search className="w-4 h-4" />
        </button>

        {isHome ? (
          <button
            onClick={() => onSelectPage('ia-generativa')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-xs transition-colors cursor-pointer"
          >
            <span>Iniciar Módulo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : isSimulatorSubpage ? (
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-200">
            <button
              onClick={() => onSelectPage('simuladores-quizzes')}
              className="text-xs font-semibold text-blue-300 hover:text-white transition-colors cursor-pointer"
            >
              Laboratório
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-200">
            <button
              onClick={handlePrev}
              disabled={currentIdx <= 1}
              className="p-0.5 text-slate-300 hover:text-white disabled:opacity-20 transition-colors cursor-pointer"
              title="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-xs sm:text-sm font-bold text-white px-1">
              {info.num > 0 ? `${info.num} / 8` : 'Anexo'}
            </span>

            <button
              onClick={handleNext}
              disabled={currentIdx >= ORDERED_STEPS.length - 1}
              className="p-0.5 text-slate-300 hover:text-white disabled:opacity-20 transition-colors cursor-pointer"
              title="Seguinte"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
