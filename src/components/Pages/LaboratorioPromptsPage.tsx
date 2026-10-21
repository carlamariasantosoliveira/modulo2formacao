import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Terminal,
  Sparkles,
  Info,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Send,
  Loader2,
} from 'lucide-react';
import { PageId } from '../../types';
import { PromptLabSimulator } from '../Simulators/PromptLabSimulator';

interface LaboratorioPromptsPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const LaboratorioPromptsPage: React.FC<LaboratorioPromptsPageProps> = ({
  onNavigate,
}) => {
  const [vagueAnswer, setVagueAnswer] = useState<string | null>(null);
  const [vagueLoading, setVagueLoading] = useState(false);

  const [detailedAnswer, setDetailedAnswer] = useState<string | null>(null);
  const [detailedLoading, setDetailedLoading] = useState(false);

  const handleGenerateVague = () => {
    setVagueLoading(true);
    setTimeout(() => {
      setVagueAnswer(
        'A água é um recurso natural indispensável à vida. Uma aula sobre a água pode abordar as suas propriedades físicas, os três estados (líquido, sólido e gasoso), a importância para a hidratação dos seres vivos e a necessidade de poupança no dia a dia...'
      );
      setVagueLoading(false);
    }, 400);
  };

  const handleGenerateDetailed = () => {
    setDetailedLoading(true);
    setTimeout(() => {
      setDetailedAnswer(
        '| Fase da Aula (50 min) | Objetivos Específicos | Atividades Pedagógicas | Avaliação Formativa |\n|---|---|---|---|\n| 1. Introdução (10 min) | Ativar conhecimentos prévios | Apresentação de vídeo curto sobre a chuva e debate | Questões orais diagnósticas |\n| 2. Exploração (25 min) | Identificar as 4 fases do ciclo | Construção de esquema gráfico em grupo com setas | Observação direta e apoio |\n| 3. Síntese (15 min) | Consolidar terminologia | Preenchimento de tabela e ficha com legenda do ciclo | Bilhete de saída (Exit Ticket) |'
      );
      setDetailedLoading(false);
    }, 400);
  };

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Top Navigation Bar with Back Links */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
        <button
          onClick={() => onNavigate('simuladores-quizzes')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E70EB] hover:text-blue-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Índice de Simuladores</span>
        </button>

        <button
          onClick={() => onNavigate('tecnicas')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-500" />
          <span>Ir para o Tema 5 (Técnicas de Formulação)</span>
        </button>
      </div>

      {/* Header and Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/60">
                Bancada Interativa de Experimentação
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight mt-1">
              Laboratório de Engenharia e Comparação de Prompts
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 pl-4.5 max-w-3xl">
          Bancada para experimentar os 4 elementos estruturais de um prompt (Contexto, Tarefa, Restrições, Formato) e observar o contraste direto entre formulações vagas e instruções pedagógicas precisas.
        </p>
      </div>

      {/* Pedagogical Guidance Banner */}
      <div className="bg-[#EFF6FF] rounded-3xl p-6 border border-blue-100 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
          <Info className="w-4 h-4 text-[#1E70EB]" />
          <span>Objetivo Pedagógico e Guia de Utilização</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-blue-100/60">
            <strong className="text-slate-900 block font-semibold">Princípio Didático Central:</strong>
            Prompts vagos resultam em respostas previsíveis, prolixas e genéricas. A inclusão intencional de Contexto, Restrições e Formato permite obter materiais diretamente alinhados com o nível etário dos alunos.
          </div>
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-blue-100/60">
            <strong className="text-slate-900 block font-semibold">Como Utilizar:</strong>
            1) Comece pela comparação rápida abaixo; 2) Na bancada inferior, carregue os modelos disciplinares prontos ou crie a sua própria instrução personalizada; 3) Teste a geração simulada ou conecte a API Gemini se configurada.
          </div>
        </div>
      </div>

      {/* 1. Side-by-Side Prompt Comparison: Vago vs Detalhado */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Comparação Direta: Prompt Vago vs. Prompt Detalhado
          </h2>
          <p className="text-xs text-slate-500">
            Clique em cada botão para gerar e comparar o formato e a profundidade pedagógica das respostas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left: Prompt Vago */}
          <div className="bg-[#FEF2F2] border border-rose-100 rounded-3xl p-6 flex flex-col justify-between space-y-4 shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#DC2626] uppercase tracking-wider">
                  Prompt Vago
                </h3>
                <span className="text-[11px] font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                  Sem Contexto / Sem Formato
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-800 italic font-medium leading-relaxed bg-white/80 p-3.5 rounded-2xl border border-rose-200/60">
                &ldquo;Cria um plano de aula sobre a água.&rdquo;
              </p>

              {vagueAnswer && (
                <div className="mt-2 bg-white p-4 rounded-2xl border border-rose-200/70 text-xs text-slate-700 leading-relaxed animate-in fade-in">
                  <span className="font-bold text-rose-800 block mb-1">
                    Resposta da IA (Genérica e Prolixa):
                  </span>
                  {vagueAnswer}
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleGenerateVague}
                disabled={vagueLoading}
                className="bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors shadow-2xs cursor-pointer"
              >
                {vagueLoading ? 'A processar...' : 'Gerar Resposta Vaga'}
              </button>
            </div>
          </div>

          {/* Right: Prompt Detalhado */}
          <div className="bg-[#ECFDF5] border border-emerald-100 rounded-3xl p-6 flex flex-col justify-between space-y-4 shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#059669] uppercase tracking-wider">
                  Prompt Detalhado e Estruturado
                </h3>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  4 Elementos Integrados
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-800 italic font-medium leading-relaxed bg-white/80 p-3.5 rounded-2xl border border-emerald-200/60">
                &ldquo;Cria um plano de aula sobre o ciclo da água para alunos do 5.º ano, com objetivos, atividades e a avaliação, em formato de tabela.&rdquo;
              </p>

              {detailedAnswer && (
                <div className="mt-2 bg-white p-4 rounded-2xl border border-emerald-200/70 text-xs text-slate-800 leading-relaxed font-mono whitespace-pre-wrap animate-in fade-in overflow-x-auto">
                  <span className="font-bold text-emerald-800 font-sans block mb-1">
                    Resposta da IA (Estruturada e Curricular):
                  </span>
                  {detailedAnswer}
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleGenerateDetailed}
                disabled={detailedLoading}
                className="bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors shadow-2xs cursor-pointer"
              >
                {detailedLoading ? 'A processar...' : 'Gerar Resposta Estruturada'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Full Interactive Prompt Lab Simulator Engine */}
      <div className="pt-6 border-t border-slate-200 space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Bancada Completa de Engenharia de Prompts
          </h2>
          <p className="text-xs text-slate-500">
            Componha os 4 campos essenciais e teste com modelos disciplinares pré-configurados:
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs">
          <PromptLabSimulator />
        </div>
      </div>
    </div>
  );
};
