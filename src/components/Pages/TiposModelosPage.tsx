import React, { useState } from 'react';
import {
  FileText,
  Image as ImageIcon,
  Mic,
  Video,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { PageId } from '../../types';

interface TiposModelosPageProps {
  onNavigate?: (pageId: PageId) => void;
}

export const TiposModelosPage: React.FC<TiposModelosPageProps> = ({ onNavigate }) => {
  const [selectedType, setSelectedType] = useState<number>(0);

  const modelTypes = [
    {
      id: 'llm',
      name: 'Modelos de Linguagem (LLMs)',
      fullTitle: 'Modelos de Linguagem (LLMs – Large Language Models)',
      icon: FileText,
      color: 'blue',
      whatTheyDo:
        'Processam e geram texto em linguagem natural (resumos, código, poesia, planos de aula).',
      howTheyWork: [
        'Tokens: O texto é fatiado em tokens (unidades semânticas).',
        'Arquitetura Transformer: Utilizam o mecanismo de "Atenção" para perceber a relação entre palavras distantes numa frase.',
        'Predição: Calcula qual é o próximo token mais provável numa sequência, dado o contexto anterior.',
      ],
      educationalApps: [
        'Apoio ao planeamento de aulas;',
        'Criação de exercícios diferenciados;',
        'Adaptação de textos a diferentes níveis de leitura;',
        'Apoio à escrita e revisão de textos.',
      ],
      classroomExample:
        '“Age como professor de Português do 9.º ano. Explica o que é um texto argumentativo para alunos do 9.º ano. Organiza a explicação em tópicos curtos, utilizando linguagem clara e acessível...”',
    },
    {
      id: 'imagem',
      name: 'Modelos Generativos de Imagem',
      fullTitle: 'Modelos Generativos de Imagem',
      icon: ImageIcon,
      color: 'emerald',
      whatTheyDo: 'Criam imagens a partir de descrições textuais.',
      howTheyWork: [
        'Muitos destes modelos utilizam modelos de difusão, que começam com ruído aleatório, refinam progressivamente a imagem e produzem uma imagem coerente com a descrição fornecida.',
      ],
      educationalApps: [
        'Criação de imagens para apresentações;',
        'Ilustração de conceitos abstratos;',
        'Apoio à explicação visual de conteúdos.',
      ],
      classroomExample:
        '“Age como ilustrador educativo. Descreve uma imagem que represente o ciclo da água, destinada a alunos do 5.º ano. Indica os elementos visuais principais, as cores sugeridas e os rótulos a incluir...”',
    },
    {
      id: 'audio',
      name: 'Modelos de Áudio e Voz',
      fullTitle: 'Modelos Generativos de Áudio e Voz',
      icon: Mic,
      color: 'amber',
      whatTheyDo: 'Geram voz sintética, música e narração automática.',
      howTheyWork: [
        'Aprendem padrões presentes em gravações de voz ou música e conseguem gerar novos sons ou converter texto em fala.',
      ],
      educationalApps: [
        'Leitura em voz alta de textos (promovendo a inclusão);',
        'Produção de materiais acessíveis;',
        'Apoio a atividades de expressão oral.',
      ],
      classroomExample:
        'Criação de podcasts educativos para apoio a alunos com necessidades de acessibilidade na leitura e treino de pronúncia.',
    },
    {
      id: 'video',
      name: 'Modelos Generativos de Vídeo',
      fullTitle: 'Modelos Generativos de Vídeo',
      icon: Video,
      color: 'purple',
      whatTheyDo: 'Criam pequenos vídeos a partir de texto ou imagens.',
      howTheyWork: [
        'Utilizam modelos capazes de gerar sequências de imagens ao longo do tempo, mantendo a coerência visual e narrativa.',
      ],
      educationalApps: [
        'Criação de vídeos explicativos;',
        'Storytelling digital;',
        'Projetos multimédia com alunos.',
      ],
      classroomExample:
        '“Age como professor de TIC. Cria um diálogo curto entre dois avatares sobre o uso responsável das redes sociais, destinado a alunos do 7.º ano...”',
    },
    {
      id: 'multimodal',
      name: 'Modelos Generativos Multimodais',
      fullTitle: 'Modelos Generativos Multimodais',
      icon: Layers,
      color: 'rose',
      whatTheyDo:
        'Processam e relacionam vários tipos de dados em simultâneo (texto, imagem, áudio).',
      howTheyWork: [
        'Por exemplo, podem analisar uma imagem complexa ou gráfico e descrevê-la detalhadamente em linguagem natural.',
      ],
      educationalApps: [
        'Análise de imagens, gráficos ou esquemas;',
        'Apoio à compreensão visual;',
        'Ensino mais inclusivo e diversificado;',
        'Desenvolvimento de atividades mais interativas.',
      ],
      classroomExample:
        'Submeter a fotografia de um esquema do ciclo da água e pedir à IA para formular questões formativas e detetar potenciais conceções erradas dos alunos.',
    },
  ];

  const current = modelTypes[selectedType];

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            3. Tipos de Modelos (Áudio, Vídeo, Multimodal) e Aplicações Educativas
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Texto (LLMs), Imagem, Áudio/Voz, Vídeo e Modelos Multimodais (Páginas 2 e 3)
          </p>
        </div>
      </div>

      {/* Type Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80">
        {modelTypes.map((t, idx) => {
          const Icon = t.icon;
          const isSelected = selectedType === idx;
          return (
            <button
              key={t.id}
              onClick={() => setSelectedType(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white text-[#1D4ED8] shadow-xs ring-1 ring-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{t.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Model Detail Card */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden">
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1E70EB] flex items-center justify-center shrink-0">
              <current.icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#1E70EB] uppercase tracking-wider block">
                Categoria do Módulo 2
              </span>
              <h2 className="text-xl font-extrabold text-[#0C1E38]">{current.fullTitle}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* What they do & How they work (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  O Que Fazem:
                </span>
                <p className="text-sm text-slate-800 leading-relaxed font-normal">
                  {current.whatTheyDo}
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Como Funcionam:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {current.howTheyWork.map((hw, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-2 shrink-0"></span>
                      <span>{hw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EFF6FF] p-4 sm:p-5 rounded-2xl border border-blue-100 text-xs space-y-1.5">
                <span className="font-bold text-[#1D4ED8] block">
                  Exemplo de Aplicação Prática:
                </span>
                <p className="text-blue-950 font-mono text-xs leading-relaxed bg-white/90 p-3 rounded-xl border border-blue-200/50">
                  {current.classroomExample}
                </p>
              </div>
            </div>

            {/* Educational Applications (5 cols) */}
            <div className="lg:col-span-5 bg-linear-to-br from-[#F8FAFC] to-blue-50/40 p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#1E70EB]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Aplicações Educativas
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  {current.educationalApps.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>5 Categorias de Modelos</span>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('exemplos-disciplina')}
                    className="font-bold text-[#1E70EB] hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ver Prompts Reais</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
