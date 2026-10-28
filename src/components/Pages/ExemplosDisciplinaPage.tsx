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
            6. Exemplo de Prompts
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Exemplos práticos de formulação pedagógica para diferentes áreas curriculares
          </p>
        </div>
      </div>

      {/* Aviso Metodológico de Validação */}
      <div className="bg-[#EFF6FF] rounded-3xl p-5 sm:p-6 border border-blue-100 shadow-2xs space-y-2">
        <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">
          Orientação para Utilização em Contexto Escolar
        </span>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          Os exemplos apresentados incluem salvaguardas explícitas de estrutura, restrições e verificação. Qualquer texto, cálculo, diagrama ou comunicação gerada por IA deve ser sempre confrontado com as Aprendizagens Essenciais, com o manual escolar adotado e com regulamentos institucionais aprovados antes da sua disponibilização aos alunos ou famílias.
        </p>
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
          />
        ))}
      </div>

      {/* Validação dos exemplos */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-2">
        <h3 className="text-sm font-bold text-[#0C1E38] uppercase tracking-wider">
          Validação dos exemplos
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          Os exemplos de prompts apresentados destinam-se a demonstrar a estrutura de uma instrução eficaz. Em contexto real de preparação letiva, é indispensável rever criticamente a resposta da ferramenta, confrontar os conteúdos com os documentos curriculares em vigor e ajustar as propostas às características da turma.
        </p>
      </div>
    </div>
  );
};
