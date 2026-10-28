import React, { useState } from 'react';
import {
  FileText,
  Image as ImageIcon,
  Mic,
  Video,
  Layers,
  CheckCircle2,
  BookOpen,
  ExternalLink,
  Wrench,
} from 'lucide-react';
import { PageId } from '../../types';

interface TiposModelosPageProps {
  onNavigate?: (pageId: PageId) => void;
}

interface ToolItem {
  name: string;
  url: string;
  badge: string;
  description: string;
}

interface ModelTypeData {
  id: string;
  name: string;
  fullTitle: string;
  icon: React.ElementType;
  color: string;
  whatTheyDo: string;
  howTheyWork: string[];
  educationalApps: string[];
  tools: ToolItem[];
}

export const TiposModelosPage: React.FC<TiposModelosPageProps> = ({ onNavigate }) => {
  const [selectedType, setSelectedType] = useState<number>(0);

  const modelTypes: ModelTypeData[] = [
    {
      id: 'llm',
      name: 'Modelos de Linguagem (LLMs)',
      fullTitle: 'Modelos de Linguagem (LLMs)',
      icon: FileText,
      color: 'blue',
      whatTheyDo:
        'Os modelos de linguagem processam texto em unidades denominadas tokens (palavras, partes de palavras ou pontuação). A cada novo token, o modelo calcula as probabilidades para selecionar o seguinte, tendo em conta o texto anterior e os parâmetros aprendidos.',
      howTheyWork: [
        'Tokens: O texto é processado em unidades denominadas tokens (palavras, partes de palavras ou pontuação).',
        'Mecanismo de Atenção: O mecanismo de atenção permite ao modelo identificar relações entre diferentes partes do texto de entrada, mesmo quando separadas por várias frases, garantindo maior coerência global na resposta gerada.',
        'Predição e Probabilidades: A cada novo token, o modelo calcula as probabilidades para selecionar o seguinte, tendo em conta o texto anterior e os parâmetros aprendidos nos dados de treino.',
      ],
      educationalApps: [
        'Apoio ao planeamento de sequências didáticas e rascunhos de aulas;',
        'Criação de propostas de exercícios e fichas diferenciadas;',
        'Adaptação de extensão e vocabulário textual para suporte à leitura;',
        'Apoio à ideação de temas de debate e reformulação de exemplos práticos.',
      ],
      tools: [
        {
          name: 'ChatGPT',
          url: 'https://chatgpt.com',
          badge: 'Freemium · OpenAI',
          description:
            'Interface conversacional para redação de rascunhos, ideação pedagógica, sugestões de exercícios e diálogos reflexivos.',
        },
        {
          name: 'Google Gemini',
          url: 'https://gemini.google.com',
          badge: 'Gratuito / Advanced · Google',
          description:
            'Acesso com conta Google, informação com pesquisa web e integração no ecossistema de produtividade educativa.',
        },
        {
          name: 'Anthropic Claude',
          url: 'https://claude.ai',
          badge: 'Freemium · Anthropic',
          description:
            'Concebido para processamento de contextos alargados, análise de textos e redação estruturada com vocabulário cuidado.',
        },
        {
          name: 'Microsoft Copilot',
          url: 'https://copilot.microsoft.com',
          badge: 'Gratuito / Pro · Microsoft',
          description:
            'Integrado no motor de busca com apresentação de hiperligações de páginas web para verificação independente.',
        },
        {
          name: 'Perplexity',
          url: 'https://www.perplexity.ai',
          badge: 'Freemium · Perplexity AI',
          description:
            'Motor de pesquisa conversacional que apresenta sugestões de referências e hiperligações para verificação externa independente.',
        },
        {
          name: 'Google AI Studio',
          url: 'https://aistudio.google.com',
          badge: 'Gratuito · Prototipagem',
          description:
            'Ambiente técnico para exploração direta de modelos Gemini, prototipagem de prompts de sistema e calibração de parâmetros.',
        },
      ],
    },
    {
      id: 'imagem',
      name: 'Modelos Generativos de Imagem',
      fullTitle: 'Modelos Generativos de Imagem (Difusão e Espaço Latente)',
      icon: ImageIcon,
      color: 'emerald',
      whatTheyDo: 'Produzem representações visuais bidimensionais a partir de descrições textuais (prompts).',
      howTheyWork: [
        'A maioria dos modelos contemporâneos utiliza processos de difusão: iniciam com um padrão de ruído aleatório no espaço latente e removem progressivamente o ruído condicionando a geração à representação vetorial do texto fornecido.',
        'Limitações gráficas: estes modelos frequentemente apresentam incoerências em representações anatómicas (mãos, dentes), detalhes em perspetiva e textos/rótulos ortográficos inseridos em esquemas didáticos.',
      ],
      educationalApps: [
        'Criação de imagens ilustrativas para apresentações escolares;',
        'Apoio à representação visual de conceitos abstratos;',
        'Estímulo à literacia visual e análise crítica de conteúdos sintéticos.',
      ],
      tools: [
        {
          name: 'Midjourney',
          url: 'https://www.midjourney.com',
          badge: 'Subscrição Comercial',
          description:
            'Geração de imagens com elevado detalhe visual e estilístico a partir de descrições textuais pormenorizadas.',
        },
        {
          name: 'DALL·E',
          url: 'https://chatgpt.com',
          badge: 'Integrado no ChatGPT · OpenAI',
          description:
            'Interpretação detalhada de instruções descritivas em linguagem natural para composição de imagens.',
        },
        {
          name: 'Adobe Firefly',
          url: 'https://firefly.adobe.com',
          badge: 'Freemium · Adobe',
          description:
            'Treinado em conjuntos documentados de imagens licenciadas (Adobe Stock) e obras em domínio público.',
        },
        {
          name: 'Stable Diffusion',
          url: 'https://stability.ai',
          badge: 'Open-Source / Comercial · Stability AI',
          description:
            'Modelo generativo de imagem de código aberto amplamente utilizado para criação e personalização visual.',
        },
      ],
    },
    {
      id: 'audio',
      name: 'Modelos de Áudio e Voz',
      fullTitle: 'Modelos Generativos de Áudio, Voz e Música',
      icon: Mic,
      color: 'amber',
      whatTheyDo: 'Geram voz sintética, transcrevem áudio fonético ou compõem sequências sonoras e musicais.',
      howTheyWork: [
        'Tarefas distintas: (1) Síntese de texto para fala (TTS), (2) Reconhecimento automático de fala (ASR / transcrição), (3) Clonagem de voz a partir de amostras de áudio, e (4) Geração musical a partir de especificações harmónicas e rítmicas.',
        'Interação por voz e privacidade: A utilização de funcionalidades de voz implica a captação e o processamento de áudio, frequentemente em servidores externos. No contexto escolar, o recurso a estas funcionalidades exige especial cuidado com a proteção de dados pessoais e a eventual identificação de alunos.',
      ],
      educationalApps: [
        'Leitura em voz alta de textos e fichas de apoio como estratégia de acessibilidade à leitura;',
        'Produção de podcasts e guiões sonoros para projetos temáticos escolares;',
        'Apoio à pronúncia em línguas estrangeiras através de modelos fonéticos.',
      ],
      tools: [
        {
          name: 'ElevenLabs',
          url: 'https://elevenlabs.io',
          badge: 'Freemium · Quota Mensal',
          description:
            'Síntese de voz com entoação e modulação acústica em língua portuguesa para narração de recursos educativos.',
        },
        {
          name: 'Speechify',
          url: 'https://speechify.com',
          badge: 'Freemium · Acessibilidade',
          description:
            'Leitor de texto em voz alta configurável (TTS), frequentemente utilizado como apoio de acessibilidade à leitura.',
        },
        {
          name: 'OpenAI Whisper',
          url: 'https://openai.com/research/whisper',
          badge: 'Open-Weight · Transcrição',
          description:
            'Modelo open-weight de reconhecimento automático de fala (ASR) para transcrição de áudio em texto legível.',
        },
        {
          name: 'Suno AI',
          url: 'https://suno.com',
          badge: 'Freemium · Créditos Diários',
          description:
            'Composição musical generativa (melodia e instrumentação) a partir de letras ou temas em verso.',
        },
        {
          name: 'Udio',
          url: 'https://www.udio.com',
          badge: 'Freemium · Produção Musical',
          description:
            'Ferramenta de experimentação e produção musical sintética em diversos géneros sonoros.',
        },
      ],
    },
    {
      id: 'video',
      name: 'Modelos Generativos de Vídeo',
      fullTitle: 'Modelos Generativos de Vídeo e Animação Sintética',
      icon: Video,
      color: 'purple',
      whatTheyDo: 'Produzem pequenos clips animados e apresentadores virtuais a partir de texto ou imagens de referência.',
      howTheyWork: [
        'Modelam a continuidade espacial e temporal entre fotogramas consecutivos. Limitações atuais: quebras de coerência temporal, distorções em membros e mãos, deformação de objetos em movimento e texto ilegível.',
        'Riscos éticos: exigem especial reflexão crítica relativamente a representações estereotipadas e à proliferação de vídeos manipulados (deepfakes).',
      ],
      educationalApps: [
        'Criação de microvídeos explicativos para síntese de conteúdos letivos;',
        'Composição de narrativas audiovisuais e simulação em projetos interdisciplinares;',
        'Animação de gravuras e património histórico para enriquecimento didático.',
      ],
      tools: [
        {
          name: 'Runway',
          url: 'https://runwayml.com',
          badge: 'Freemium · Gen-2 / Gen-3',
          description:
            'Geração de sequências de vídeo a partir de descrições textuais ou imagens estáticas.',
        },
        {
          name: 'Pika',
          url: 'https://pika.art',
          badge: 'Freemium · Animação',
          description:
            'Animação de elementos específicos em imagens estáticas e pequenos efeitos de movimento.',
        },
        {
          name: 'Synthesia',
          url: 'https://www.synthesia.io',
          badge: 'Comercial · Avatares',
          description:
            'Produção de vídeos instrucionais com apresentadores digitais com base em texto previamente redigido.',
        },
        {
          name: 'Sora',
          url: 'https://sora.com',
          badge: 'OpenAI · Vídeo de Alta Definição',
          description:
            'Modelo generativo de vídeo de última geração desenvolvido pela OpenAI capaz de criar cenas complexas e realistas.',
        },
      ],
    },
    {
      id: 'multimodal',
      name: 'Modelos Generativos Multimodais',
      fullTitle: 'Modelos Generativos Multimodais (Visão, Texto, Áudio e Documentos)',
      icon: Layers,
      color: 'rose',
      whatTheyDo:
        'Sistemas com capacidade multimodal processam e geram informação combinando diferentes formatos (texto, imagem, áudio, código).',
      howTheyWork: [
        'Projetam dados de diferentes modalidades num espaço de representação partilhado, permitindo analisar um gráfico e explicá-lo em texto, transcrever um áudio ou extrair dados de uma tabela manuscrita.',
        'Grounding e Limites: O suporte a documentos longos e a técnicas de recuperação (RAG) reduzem o risco de alucinação, mas não o eliminam. Podem ocorrer omissões, interpretações parciais de tabelas complexas ou extrapolações sem suporte documental direto.',
      ],
      educationalApps: [
        'Análise pedagógica de diagramas, gráficos ou fotografias de experiências laboratoriais;',
        'Apoio à resolução comentada de exercícios passo a passo com suporte visual;',
        'Adaptação multimodal de conteúdos para reforço da acessibilidade (DUA);',
        'Pesquisa e síntese preliminar de fontes em projetos de investigação escolar.',
      ],
      tools: [
        {
          name: 'Google Gemini',
          url: 'https://gemini.google.com',
          badge: 'Gratuito / Advanced · Google',
          description:
            'Processamento de janelas de contexto alargadas para análise de documentos longos, dados em tabela e ficheiros multimédia.',
        },
        {
          name: 'ChatGPT',
          url: 'https://chatgpt.com',
          badge: 'Freemium · GPT-4o · OpenAI',
          description:
            'Capacidade multimodal com análise de imagens submetidas, ficheiros e diálogo por voz em tempo real.',
        },
        {
          name: 'Anthropic Claude',
          url: 'https://claude.ai',
          badge: 'Freemium · Claude 3.5 Sonnet',
          description:
            'Análise de diagramas, fluxogramas, documentos técnicos e dados estruturados com foco em precisão descritiva.',
        },
        {
          name: 'Google NotebookLM',
          url: 'https://notebooklm.google.com',
          badge: 'Gratuito · Grounding',
          description:
            'Ambiente centrado nas fontes documentais fornecidas pelo utilizador (PDFs, notas), gerando sínteses e resumos grounded.',
        },
      ],
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
            3. Tipos de Modelos e Ferramentas
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Texto (LLMs), imagem, áudio/voz, vídeo, modalidades combinadas e ferramentas recomendadas
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
                  ? 'bg-white text-[#1D4ED8] shadow-xs ring-1 ring-slate-200 font-bold'
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
            {/* Left Column: What they do, How they work, and Educational Apps (7 cols) */}
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

              {/* Aplicações Educativas */}
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#1E70EB]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Aplicações Educativas Principais
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {current.educationalApps.map((app, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Ferramentas em função do Modelo com respetivo link de acesso (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#F8FAFC] to-blue-50/50 p-5 sm:p-6 rounded-3xl border border-blue-200/60 space-y-4 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1E70EB] flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Ferramentas Recomendadas
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        Acesso direto aos modelos
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    {current.tools.length} ferramentas
                  </span>
                </div>

                <div className="space-y-2.5">
                  {current.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900">{tool.name}</span>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                          {tool.badge}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                        {tool.description}
                      </p>

                      <div className="pt-1 flex justify-end">
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1E70EB] hover:text-blue-800 hover:underline cursor-pointer group"
                        >
                          <span>Aceder à ferramenta</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>Clique nas ligações para abrir</span>
                <span className="font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                  Oficina de Formação
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aviso: Acesso e funcionalidades */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-700 space-y-1">
        <h4 className="text-xs font-bold text-[#0C1E38] uppercase tracking-wider">
          Acesso e funcionalidades
        </h4>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
          A oferta de modelos e ferramentas evolui com rapidez. As versões gratuitas e pagas diferem frequentemente em limites de utilização, velocidade de resposta e acesso a funcionalidades avançadas. É recomendável verificar as condições vigentes em cada plataforma antes da sua adoção.
        </p>
      </div>
    </div>
  );
};
