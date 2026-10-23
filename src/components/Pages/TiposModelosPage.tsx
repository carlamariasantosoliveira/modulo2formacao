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
        'Apoio ao planeamento de aulas e sequências didáticas;',
        'Criação de exercícios e fichas diferenciadas por nível;',
        'Adaptação de textos a diferentes níveis de leitura e inclusão;',
        'Apoio à escrita criativa, estruturação argumentativa e revisão textual.',
      ],
      tools: [
        {
          name: 'ChatGPT (OpenAI)',
          url: 'https://chatgpt.com',
          badge: 'Freemium · Gratuito / Plus',
          description:
            'Assistente versátil para criação de textos, planeamento de aulas, questionários e rubricas de avaliação.',
        },
        {
          name: 'Claude (Anthropic)',
          url: 'https://claude.ai',
          badge: 'Freemium · Gratuito / Pro',
          description:
            'Excelente na leitura e análise de documentos longos, com estilo de escrita natural e grande nuance pedagógica.',
        },
        {
          name: 'Google Gemini',
          url: 'https://gemini.google.com',
          badge: 'Gratuito / Advanced',
          description:
            'Acesso direto com conta Google, informação em tempo real e integração direta com o Google Workspace.',
        },
        {
          name: 'Microsoft Copilot',
          url: 'https://copilot.microsoft.com',
          badge: 'Gratuito / Pro',
          description:
            'Integrado no motor de busca Bing e ecossistema Microsoft 365, com referências e fontes web em tempo real.',
        },
        {
          name: 'Perplexity AI',
          url: 'https://www.perplexity.ai',
          badge: 'Freemium · Gratuito / Pro',
          description:
            'Motor de pesquisa conversacional com citação rigorosa de fontes académicas e hiperligações para verificação.',
        },
      ],
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
        'Criação de imagens personalizadas para apresentações escolares;',
        'Ilustração visual de conceitos abstratos em Ciências, História ou Línguas;',
        'Apoio à explicação visual e acessibilidade cognitiva de conteúdos.',
      ],
      tools: [
        {
          name: 'Adobe Firefly',
          url: 'https://firefly.adobe.com',
          badge: 'Freemium · Seguro Ético',
          description:
            'Treinado em bancos de imagens licenciados (Adobe Stock), ideal para ambiente escolar por respeitar direitos de autor.',
        },
        {
          name: 'Canva Magic Media',
          url: 'https://www.canva.com',
          badge: 'Gratuito p/ Professores',
          description:
            'Geração rápida de imagens e ilustrações integrada diretamente no editor gráfico do Canva para apresentações e fichas.',
        },
        {
          name: 'Midjourney',
          url: 'https://www.midjourney.com',
          badge: 'Pago / Subscrição',
          description:
            'Referência mundial em qualidade estética, composição artística detalhada e fotorrealismo impressionante.',
        },
        {
          name: 'DALL·E 3 (OpenAI)',
          url: 'https://chatgpt.com',
          badge: 'Integrado no ChatGPT',
          description:
            'Compreensão refinada de instruções em linguagem natural para ilustrar diagramas e cenários educativos.',
        },
        {
          name: 'Craiyon',
          url: 'https://www.craiyon.com',
          badge: 'Gratuito com Anúncios',
          description:
            'Gerador direto no navegador sem necessidade de conta ou instalação, útil para experiências rápidas com turmas.',
        },
      ],
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
        'Leitura em voz alta de textos e fichas de trabalho (promovendo a inclusão e o DUA);',
        'Produção de podcasts e audioguias temáticos para a comunidade escolar;',
        'Apoio a atividades de expressão oral e aprendizagem de línguas estrangeiras.',
      ],
      tools: [
        {
          name: 'ElevenLabs',
          url: 'https://elevenlabs.io',
          badge: 'Freemium · 10k carateres/mês',
          description:
            'Síntese de voz com entoação e expressividade ultrarrealista em língua portuguesa para narração de recursos.',
        },
        {
          name: 'Suno AI',
          url: 'https://suno.com',
          badge: 'Freemium · 50 créditos/dia',
          description:
            'Cria canções pedagógicas completas (melodia, harmonia e voz) a partir de letras ou matérias para memorização.',
        },
        {
          name: 'Udio',
          url: 'https://www.udio.com',
          badge: 'Freemium',
          description:
            'Plataforma de composição musical generativa em diversos estilos para criação de bandas sonoras de peças ou vídeos.',
        },
        {
          name: 'Speechify',
          url: 'https://speechify.com',
          badge: 'Freemium',
          description:
            'Leitor de texto com vozes humanas desenhado especificamente para apoiar alunos com dislexia e TDAH.',
        },
        {
          name: 'OpenAI Whisper',
          url: 'https://openai.com/research/whisper',
          badge: 'Open-Source / Ferramentas',
          description:
            'Modelo líder de reconhecimento de fala que transcreve gravações de aulas e palestras em texto legível.',
        },
      ],
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
        'Criação de microvídeos explicativos para aulas invertidas (flipped classroom);',
        'Storytelling digital em projetos multidisciplinares;',
        'Simulação e animação de episódios históricos ou fenómenos naturais.',
      ],
      tools: [
        {
          name: 'Runway (Gen-2 / Gen-3)',
          url: 'https://runwayml.com',
          badge: 'Freemium · Créditos Iniciais',
          description:
            'Plataforma de vanguarda para geração de pequenos clips de vídeo cinematográfico a partir de texto ou imagem.',
        },
        {
          name: 'HeyGen',
          url: 'https://www.heygen.com',
          badge: 'Freemium · 1 crédito grátis',
          description:
            'Gera apresentadores virtuais/avatares a falar com sincronização labial perfeita em mais de 40 línguas.',
        },
        {
          name: 'Synthesia',
          url: 'https://www.synthesia.io',
          badge: 'Demonstração / Pago',
          description:
            'Criação profissional de videoaulas formativas com avatares de IA a partir de um simples guião de texto.',
        },
        {
          name: 'Pika Labs',
          url: 'https://pika.art',
          badge: 'Freemium',
          description:
            'Permite animar imagens estáticas de manuais escolares e dar movimento a gravuras ou mapas históricos.',
        },
        {
          name: 'Luma Dream Machine',
          url: 'https://lumalabs.ai/dream-machine',
          badge: 'Freemium',
          description:
            'Modelo de vídeo de alta fidelidade com física realista e movimento de câmara fluído.',
        },
      ],
    },
    {
      id: 'multimodal',
      name: 'Modelos Generativos Multimodais',
      fullTitle: 'Modelos Generativos Multimodais',
      icon: Layers,
      color: 'rose',
      whatTheyDo:
        'Processam e relacionam vários tipos de dados em simultâneo (texto, imagem, áudio e vídeo).',
      howTheyWork: [
        'Por exemplo, podem analisar uma imagem complexa ou gráfico e descrevê-la detalhadamente em linguagem natural, interpretar um esquema manuscrito ou responder a perguntas sobre um excerto de vídeo.',
      ],
      educationalApps: [
        'Análise de imagens, gráficos ou esquemas submetidos por fotografia;',
        'Apoio à compreensão visual e resolução guiada de problemas passo a passo;',
        'Ensino mais inclusivo, adaptável e diversificado;',
        'Desenvolvimento de atividades interativas com múltiplos formatos de suporte.',
      ],
      tools: [
        {
          name: 'Google Gemini (1.5 / 2.0 Flash e Pro)',
          url: 'https://gemini.google.com',
          badge: 'Gratuito / Advanced',
          description:
            'Janela de contexto gigante capaz de analisar livros inteiros, PDFs de centenas de páginas, gravações áudio e vídeos.',
        },
        {
          name: 'GPT-4o (OpenAI)',
          url: 'https://chatgpt.com',
          badge: 'Freemium · Gratuito / Plus',
          description:
            'Interação multimodal em tempo real com visão computacional para explicar exercícios fotografados e diálogo por voz.',
        },
        {
          name: 'Claude 3.5 Sonnet (Anthropic)',
          url: 'https://claude.ai',
          badge: 'Freemium · Gratuito / Pro',
          description:
            'Capacidade de topo na interpretação de infográficos complexos, diagramas científicos, tabelas e fluxogramas.',
        },
        {
          name: 'Google NotebookLM',
          url: 'https://notebooklm.google.com',
          badge: 'Gratuito',
          description:
            'Ambiente multimodal centrado nas fontes do professor: carrega PDFs, diapositivos ou links e gera resumos áudio estilo podcast.',
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
            3. Tipos de Modelos e Ferramentas Práticas
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
    </div>
  );
};
