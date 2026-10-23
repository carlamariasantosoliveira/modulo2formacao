import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { BottomNav } from './components/Layout/BottomNav';
import { SearchModal } from './components/Common/SearchModal';

// Pages
import { HomePage } from './components/Pages/HomePage';
import { IAGenerativaPage } from './components/Pages/IAGenerativaPage';
import { ComoFuncionamPage } from './components/Pages/ComoFuncionamPage';
import { TiposModelosPage } from './components/Pages/TiposModelosPage';
import { PromptsPage } from './components/Pages/PromptsPage';
import { TecnicasPage } from './components/Pages/TecnicasPage';
import { ExemplosDisciplinaPage } from './components/Pages/ExemplosDisciplinaPage';
import { AtividadesSalaPage } from './components/Pages/AtividadesSalaPage';
import { MagicSchoolPage } from './components/Pages/MagicSchoolPage';
import { AtividadeSessaoPage } from './components/Pages/AtividadeSessaoPage';
import { ReferenciasPage } from './components/Pages/ReferenciasPage';

const VALID_PAGES: PageId[] = [
  'home',
  'ia-generativa',
  'como-funcionam',
  'tipos-modelos',
  'prompts',
  'tecnicas',
  'exemplos-disciplina',
  'atividades-sala',
  'magicschool',
  'atividade-sessao',
  'ferramentas-referencias',
];

const getPageFromHash = (): PageId => {
  if (typeof window === 'undefined') return 'home';
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
  return (VALID_PAGES.includes(rawHash as PageId) ? rawHash : 'home') as PageId;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync hash changes (browser back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectPage = (pageId: PageId) => {
    setCurrentPage(pageId);
    if (pageId === 'home') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      window.location.hash = pageId;
    }
    setIsMobileMenuOpen(false);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleSelectPage} />;
      case 'ia-generativa':
        return <IAGenerativaPage />;
      case 'como-funcionam':
        return <ComoFuncionamPage />;
      case 'tipos-modelos':
        return <TiposModelosPage onNavigate={handleSelectPage} />;
      case 'prompts':
        return <PromptsPage onNavigate={handleSelectPage} />;
      case 'tecnicas':
        return <TecnicasPage onNavigate={handleSelectPage} />;
      case 'exemplos-disciplina':
        return <ExemplosDisciplinaPage onNavigate={handleSelectPage} />;
      case 'atividades-sala':
        return <AtividadesSalaPage />;
      case 'magicschool':
        return <MagicSchoolPage />;
      case 'atividade-sessao':
        return <AtividadeSessaoPage />;
      case 'ferramentas-referencias':
        return <ReferenciasPage />;
      default:
        return <HomePage onNavigate={handleSelectPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <Sidebar
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area (Offset by sidebar width on desktop) */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0 min-h-screen">
        {/* Top Header */}
        <Header
          currentPage={currentPage}
          onSelectPage={handleSelectPage}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Dynamic Page View Body */}
        <main className="flex-1 px-4 sm:px-8 md:px-10 py-6 sm:py-8 max-w-6xl w-full mx-auto">
          {renderCurrentPage()}

          {/* Bottom Navigation between pages */}
          <BottomNav
            currentPage={currentPage}
            onSelectPage={handleSelectPage}
          />
        </main>
      </div>

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSelectPage}
      />
    </div>
  );
}
