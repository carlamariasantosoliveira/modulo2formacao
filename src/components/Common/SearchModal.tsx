import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, Sparkles, Terminal, FileText, ArrowRight } from 'lucide-react';
import { PageId } from '../../types';
import {
  PAGES_NAV,
  PROMPT_TECHNIQUES,
  DISCIPLINE_PROMPTS,
  MAGICSCHOOL_DATA,
} from '../../data/courseData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (pageId: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle if already handled outside
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const items: Array<{
      type: 'page' | 'tecnica' | 'disciplina' | 'magicschool';
      title: string;
      snippet: string;
      pageId: PageId;
    }> = [];

    // Search Pages
    PAGES_NAV.forEach((page) => {
      if (page.title.toLowerCase().includes(q) || page.description.toLowerCase().includes(q)) {
        items.push({
          type: 'page',
          title: page.title,
          snippet: page.description,
          pageId: page.id,
        });
      }
    });

    // Search Techniques
    PROMPT_TECHNIQUES.forEach((tech) => {
      if (
        tech.name.toLowerCase().includes(q) ||
        tech.description.toLowerCase().includes(q) ||
        tech.optimizedPrompt.toLowerCase().includes(q)
      ) {
        items.push({
          type: 'tecnica',
          title: tech.name,
          snippet: tech.description.slice(0, 100) + '...',
          pageId: 'tecnicas',
        });
      }
    });

    // Search Discipline Prompts
    DISCIPLINE_PROMPTS.forEach((p) => {
      if (
        p.discipline.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.prompt.toLowerCase().includes(q)
      ) {
        items.push({
          type: 'disciplina',
          title: `${p.discipline} (${p.grade}): ${p.title}`,
          snippet: p.prompt.slice(0, 100) + '...',
          pageId: 'exemplos-disciplina',
        });
      }
    });

    // Search MagicSchool
    MAGICSCHOOL_DATA.specificGenerators.forEach((gen) => {
      if (gen.name.toLowerCase().includes(q) || gen.description.toLowerCase().includes(q) || gen.example.toLowerCase().includes(q)) {
        items.push({
          type: 'magicschool',
          title: `MagicSchool: ${gen.name}`,
          snippet: gen.example,
          pageId: 'magicschool',
        });
      }
    });

    return items.slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Pesquisar conceitos, prompts, técnicas, disciplinas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden bg-transparent"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-xs text-slate-500">
              Escreva para pesquisar nos conteúdos do Módulo 2 (ex: <span className="text-blue-600 font-medium">fotossíntese</span>, <span className="text-blue-600 font-medium">few-shot</span>, <span className="text-blue-600 font-medium">tokens</span>, <span className="text-blue-600 font-medium">Raina</span>)
            </div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              Nenhum resultado encontrado para &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onNavigate(item.pageId);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-blue-50/70 transition-colors flex items-center justify-between group"
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-blue-700">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {item.snippet}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>Pressione ESC para fechar</span>
          <span>12 Temas Curriculares</span>
        </div>
      </div>
    </div>
  );
};
