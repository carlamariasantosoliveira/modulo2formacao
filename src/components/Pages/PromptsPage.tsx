import React from 'react';
import {
  UserCheck,
  CheckCircle,
  AlertCircle,
  Layout,
  Info,
  BookOpen,
} from 'lucide-react';
import { PageId } from '../../types';
import promptsPedagogyImg from '../../assets/images/prompts_pedagogy_1792545537603.jpg';

interface PromptsPageProps {
  onNavigate?: (pageId: PageId) => void;
}

export const PromptsPage: React.FC<PromptsPageProps> = () => {
  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* 1. Header with signature blue bar */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            4. Prompts
          </h1>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pl-4.5">
          Um prompt é uma instrução fornecida a um sistema de IA generativa para orientar a produção de uma resposta.
        </p>
      </div>

      {/* 2. Elementos Principais de um Prompt with Pedagogical Visual */}
      <div className="bg-[#EFF6FF] rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-2xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: 4 Core Elements */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-[11px] font-bold text-[#1E70EB] uppercase tracking-wider block mb-1">
                Estrutura de Base
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#1D4ED8]">
                Elementos Principais de um Prompt
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {/* Contexto / Papel Solicitado */}
              <div className="flex items-start gap-3 bg-white/70 p-3 rounded-2xl border border-blue-100/60">
                <div className="w-7 h-7 rounded-lg bg-[#2563EB] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs mt-0.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wide text-blue-700">
                    Papel ou perspetiva solicitada (opcional) &amp; Contexto
                  </strong>
                  <p className="text-slate-800">
                    Pode indicar a perspetiva ou o registo pretendido (ex.: &ldquo;explicação didática para o 9.º ano&rdquo;). <span className="text-slate-600">Isso orienta o estilo, o tom e o vocabulário, mas não confere qualificações pedagógicas ao sistema nem assegura por si só adequação curricular sem validação docente.</span>
                  </p>
                </div>
              </div>

              {/* Tarefa */}
              <div className="flex items-start gap-3 bg-white/70 p-3 rounded-2xl border border-blue-100/60">
                <div className="w-7 h-7 rounded-lg bg-[#10B981] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wide text-emerald-700">Tarefa</strong>
                  <p className="text-slate-800">
                    O que deve fazer? <span className="text-slate-600">(ex.: &ldquo;Resume este texto&rdquo; ou &ldquo;Cria um guião de debate para 45 minutos&rdquo;)</span>.
                  </p>
                </div>
              </div>

              {/* Critérios e Restrições */}
              <div className="flex items-start gap-3 bg-white/70 p-3 rounded-2xl border border-blue-100/60">
                <div className="w-7 h-7 rounded-lg bg-[#F59E0B] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs mt-0.5">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wide text-amber-700">Critérios e Restrições</strong>
                  <p className="text-slate-800">
                    Regras e limites: <span className="text-slate-600">(ex.: &ldquo;Não inventes regras; baseia-te apenas no regulamento anexo; assinala lacunas com [CONFIRMAR]&rdquo;)</span>.
                  </p>
                </div>
              </div>

              {/* Formato */}
              <div className="flex items-start gap-3 bg-white/70 p-3 rounded-2xl border border-blue-100/60">
                <div className="w-7 h-7 rounded-lg bg-[#EF4444] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs mt-0.5">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wide text-rose-700">Formato</strong>
                  <p className="text-slate-800">
                    Como apresentar a resposta? <span className="text-slate-600">(ex.: &ldquo;Em tabela de 3 colunas&rdquo;, &ldquo;Em tópicos com numeração&rdquo;)</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Verbatim Note */}
            <div className="pt-3 border-t border-blue-200/60 flex items-start sm:items-center gap-2.5 text-xs text-[#1D4ED8] font-semibold bg-blue-50/70 p-3 rounded-xl">
              <Info className="w-4 h-4 shrink-0 text-[#1E70EB] mt-0.5 sm:mt-0" />
              <span>Princípio pedagógico: Instruções claras, contexto relevante e critérios explícitos podem aumentar a adequação da resposta à tarefa, mas não garantem exatidão factual nem eliminam alucinações. A validação docente é indispensável.</span>
            </div>
          </div>

          {/* Right: Interactive Pedagogical Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-blue-200/80 shadow-md bg-white">
              <img
                src={promptsPedagogyImg}
                alt="Professora a construir planos de aula e prompts com apoio de IA"
                className="w-full h-52 sm:h-60 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Exemplo de prompt para preparação de aula */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-4">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <BookOpen className="w-5 h-5 text-[#1E70EB]" />
          <h2 className="text-base sm:text-lg font-bold text-[#0C1E38]">
            Exemplo de prompt para preparação de aula
          </h2>
        </div>

        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
{`Atua como professor de História do 7.º ano. Elabora um plano para uma aula de 50 minutos sobre o tema «A Expansão Marítima Portuguesa no século XV», articulado com as Aprendizagens Essenciais.

Inclui:
1. Dois objetivos de aprendizagem mensuráveis.
2. Uma atividade inicial de ativação de conhecimentos prévios (10 minutos).
3. Uma atividade central baseada em fontes históricas com trabalho em pares (25 minutos).
4. Uma proposta de avaliação formativa para o final da aula (15 minutos).
5. Adaptações para alunos com diferentes ritmos de aprendizagem.

Apresenta o plano numa tabela organizada por tempo, etapa, papel do professor e papel dos alunos.`}
        </div>
      </div>
    </div>
  );
};
