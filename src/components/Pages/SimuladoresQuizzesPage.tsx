import React from 'react';
import {
  Sliders,
  Cpu,
  Layers,
  Terminal,
  HelpCircle,
  FileCheck,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PageId } from '../../types';

interface SimuladoresQuizzesPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const SimuladoresQuizzesPage: React.FC<SimuladoresQuizzesPageProps> = ({
  onNavigate,
}) => {
  const simulatorCards = [
    {
      id: 'simulador-modelos' as PageId,
      number: 1,
      title: 'Simulador do Funcionamento dos Modelos Generativos',
      badge: 'Simulação Didática',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
      description:
        'Exploração visual das 6 etapas do ciclo de funcionamento dos modelos generativos, cálculo probabilístico e fatiador interativo de tokens.',
      highlights: [
        'Ciclo completo de 6 fases com analogia pedagógica de culinária',
        'Fatiamento interativo de texto em unidades semânticas (tokens)',
        'Mecanismo de Atenção dos Transformers e advertência de limitação factual',
      ],
      icon: Cpu,
      themeColor: '#1E70EB',
      buttonText: 'Abrir Simulador de Modelos',
    },
    {
      id: 'simulador-difusao' as PageId,
      number: 2,
      title: 'Simulador de Difusão e Geração de Imagens',
      badge: 'Simulação Visual',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/60',
      description:
        'Compreensão do processo de denoising progressivo (redução de ruído gaussiano guiada por texto) que constrói ilustrações educativas.',
      highlights: [
        'Animação de difusão de 0 a 5 etapas em tela gráfica interativa',
        '3 temas curriculares prontos (Ciclo da Água, Célula Vegetal e Navegador)',
        'Demonstração de que a IA não faz recortes, mas calcula probabilidades visuais',
      ],
      icon: Layers,
      themeColor: '#7C3AED',
      buttonText: 'Abrir Simulador de Difusão',
    },
    {
      id: 'laboratorio-prompts' as PageId,
      number: 3,
      title: 'Laboratório de Engenharia e Comparação de Prompts',
      badge: 'Bancada Interativa',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/60',
      description:
        'Comparação direta entre formulações vagas e prompts refinados, e bancada para estruturar Contexto, Tarefa, Restrições e Formato.',
      highlights: [
        'Comparação lado a lado (Prompt Vago vs. Prompt Estruturado em Tabela)',
        'Presets curriculares de Português, Matemática, História e Ciências',
        'Testes com respostas simuladas ou ligação à API Gemini',
      ],
      icon: Terminal,
      themeColor: '#D97706',
      buttonText: 'Abrir Laboratório de Prompts',
    },
    {
      id: 'quiz-interativo' as PageId,
      number: 4,
      title: 'Questionário Interativo de Avaliação Formativa',
      badge: 'Avaliação com Feedback Imediato',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
      description:
        '5 questões formativas selecionadas do programa oficial para autoavaliação com validação instantânea e fundamentação pedagógica.',
      highlights: [
        'Feedback formativo imediato sem penalização classificativa',
        'Justificações didáticas aprofundadas para cada opção de resposta',
        'Resumo de desempenho com cálculo de percentagem e reforço conceptual',
      ],
      icon: HelpCircle,
      themeColor: '#059669',
      buttonText: 'Abrir Questionário Formativo',
    },
    {
      id: 'criador-recursos' as PageId,
      number: 5,
      title: 'Criador de Recursos Pedagógicos com IA',
      badge: 'Ferramenta de Criação',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      description:
        'Assistente para estruturar planos de aula, quizzes curriculares com distratores justificados, fichas de 3 níveis e rubricas avaliativas.',
      highlights: [
        '4 geradores curriculares alinhados com Aprendizagens Essenciais',
        'Personalização por ano de escolaridade e medidas de diferenciação',
        'Exportação imediata do documento em formato Markdown estruturado',
      ],
      icon: FileCheck,
      themeColor: '#4F46E5',
      buttonText: 'Abrir Criador de Recursos',
    },
  ];

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            Laboratório de Simuladores e Questionários
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Área Complementar Prática: 5 Ferramentas Independentes com Rotas Dedicadas
          </p>
        </div>
      </div>

      {/* Overview Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1E70EB] uppercase tracking-wider">
          <Sliders className="w-4 h-4" />
          <span>Organização Arquitetural das Ferramentas Interativas</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          Cada simulador possui agora a sua própria página e rota independente, permitindo experimentação focada, navegação direta por URL e utilização fluida em computadores, tablets ou telemóveis.
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[11px] text-slate-500">Selecione uma ferramenta abaixo para aceder à respetiva página individual:</span>
        </div>
      </div>

      {/* Simulator Hub Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {simulatorCards.map((sim) => {
          const Icon = sim.icon;
          return (
            <div
              key={sim.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: sim.themeColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Ferramenta {sim.number}
                      </span>
                      <h2 className="text-base font-bold text-slate-900 group-hover:text-[#1E70EB] transition-colors leading-snug">
                        {sim.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="pt-1">
                  <span
                    className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${sim.badgeColor}`}
                  >
                    {sim.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sim.description}
                </p>

                {/* Key Features Bullets */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-700 block">
                    Aspetos Explorados:
                  </span>
                  {sim.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="p-4 sm:p-6 pt-0 bg-slate-50/50 border-t border-slate-100/70">
                <button
                  onClick={() => onNavigate(sim.id)}
                  className="w-full flex items-center justify-center gap-2 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs py-3 px-4 rounded-xl shadow-2xs transition-all transform hover:scale-[1.01] cursor-pointer"
                >
                  <span>{sim.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
