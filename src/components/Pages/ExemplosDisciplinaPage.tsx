import React, { useState } from 'react';
import {
  BookOpen,
  Filter,
  Sparkles,
} from 'lucide-react';
import { DISCIPLINE_PROMPTS } from '../../data/courseData';
import { PromptCard } from '../Common/PromptCard';
import { PageId } from '../../types';

interface ExemplosDisciplinaPageProps {
  onNavigate?: (pageId: PageId) => void;
}

export const ExemplosDisciplinaPage: React.FC<ExemplosDisciplinaPageProps> = ({
  onNavigate,
}) => {
  const [filter, setFilter] = useState<'all' | 'curriculo' | 'multimedia' | 'comunicacao'>('all');

  const filteredPrompts = DISCIPLINE_PROMPTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            6. Exemplos Práticos de Bons Prompts por Disciplina e Área
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Modelos de Formulação Rigorosa Transcritos na Íntegra do Módulo Oficial (Páginas 5 e 6)
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-3xl border border-slate-100 shadow-2xs">
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilter('all')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#1E70EB] text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Todos ({DISCIPLINE_PROMPTS.length})
          </button>
          <button
            onClick={() => setFilter('curriculo')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              filter === 'curriculo'
                ? 'bg-[#1E70EB] text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Disciplinas Curriculares (4)
          </button>
          <button
            onClick={() => setFilter('multimedia')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              filter === 'multimedia'
                ? 'bg-[#1E70EB] text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Multimédia &amp; Imagem (3)
          </button>
          <button
            onClick={() => setFilter('comunicacao')}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              filter === 'comunicacao'
                ? 'bg-[#1E70EB] text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Comunicação Escolar (1)
          </button>
        </div>

        <span className="text-xs text-slate-500 font-mono hidden sm:inline">
          {filteredPrompts.length} prompts disponíveis
        </span>
      </div>

      {/* Prompts Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredPrompts.map((item) => (
          <PromptCard
            key={item.id}
            title={item.title}
            discipline={item.discipline}
            grade={item.grade}
            prompt={item.prompt}
            keyAspects={item.keyAspects}
            onUseInSimulator={() => {
              if (onNavigate) {
                onNavigate('prompts');
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
