import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Eye,
  Info,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { NoticeBanner } from '../Common/NoticeBanner';

interface DiffusionTheme {
  id: string;
  title: string;
  prompt: string;
  grade: string;
  keyFeatures: string[];
  stageDescriptions: string[];
}

const THEMES: DiffusionTheme[] = [
  {
    id: 'ciclo-agua',
    title: 'Ciclo da Água (5.º Ano)',
    prompt:
      '“Age como ilustrador educativo. Descreve uma imagem que represente o ciclo da água, destinada a alunos do 5.º ano. Indica os elementos visuais principais, as cores sugeridas e os rótulos a incluir.”',
    grade: '5.º Ano',
    keyFeatures: ['Evaporação', 'Condensação', 'Precipitação', 'Infiltração', 'Setas azuis'],
    stageDescriptions: [
      'Etapa 0: Campo de ruído gaussiano puro (píxeis aleatórios sem significado semântico).',
      'Etapa 1: Agrupamento inicial de densidades luminosas: surge a linha horizontal do horizonte e manchas de céu e mar.',
      'Etapa 2: Definição dos contornos fundamentais da montanha, oceano e nuvens volumétricas no topo.',
      'Etapa 3: Introdução de gradientes de cor: azuis celestes, verdes na encosta e iluminação solar superior.',
      'Etapa 4: Síntese de detalhes e setas direcionais translúcidas indicando a circulação do vapor e da chuva.',
      'Etapa 5: Imagem pedagógica final nítida, com rótulos legíveis e rigor científico alinhado com o 5.º ano.',
    ],
  },
  {
    id: 'fotossintese',
    title: 'Célula Vegetal e Cloroplastos (8.º Ano)',
    prompt:
      '“Ilustração educativa de uma célula vegetal em corte transversal, evidenciando parede celular, vacúolo central e cloroplastos com tilacoides, para o 8.º ano.”',
    grade: '8.º Ano',
    keyFeatures: ['Parede Celular', 'Cloroplastos', 'Vacúolo Central', 'Luz Solar'],
    stageDescriptions: [
      'Etapa 0: Matriz de ruído latente sem qualquer estrutura celular visível.',
      'Etapa 1: Delimitação de grandes formas ovais e blocos de cor verde e turquesa.',
      'Etapa 2: Esboço da parede celular rígida exterior e localização espacial das organelas.',
      'Etapa 3: Diferenciação de tons: verde clorofila no estroma dos cloroplastos e azul translúcido no vacúolo.',
      'Etapa 4: Delineação precisa das membranas duplas e discos tilacoides.',
      'Etapa 5: Ilustração celular didática de alta fidelidade para projeção em sala de aula.',
    ],
  },
  {
    id: 'navegador',
    title: 'Navegador Português do Séc. XVI (História 9.º Ano)',
    prompt:
      '“Retrato de um navegador português do século XVI sobre o tombadilho de uma caravela, segurando um astrolábio náutico ao pôr do sol, rigor histórico para o 9.º ano.”',
    grade: '9.º Ano',
    keyFeatures: ['Caravela com Cruz de Cristo', 'Astrolábio Náutico', 'Pôr do Sol no Atlântico'],
    stageDescriptions: [
      'Etapa 0: Ruído tridimensional latente não estruturado.',
      'Etapa 1: Silhueta humana contraposta à linha do horizonte do mar.',
      'Etapa 2: Definição do velame da caravela e postura das mãos a segurar o instrumento de navegação.',
      'Etapa 3: Cores quentes de crepúsculo atlântico e texturas de madeira e tecidos renascentistas.',
      'Etapa 4: Pormenores no mostrador de bronze do astrolábio e costuras do gibão.',
      'Etapa 5: Retrato histórico realista com coerência cenográfica e iluminação dramática.',
    ],
  },
];

export const ImageDiffusionSimulator: React.FC = () => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const [step, setStep] = useState(0); // 0 to 5
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const theme = THEMES[selectedThemeIndex];

  // Auto-play steps
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStep((prev) => {
          if (prev >= 5) {
            setIsPlaying(false);
            return 5;
          }
          return prev + 1;
        });
      }, 1400);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setStep(0);
  };

  const handlePlayToggle = () => {
    if (step >= 5) {
      setStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Percentage of noise
  const noisePercent = [100, 80, 60, 40, 20, 0][step];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="px-6 py-5 border-b border-slate-100 bg-linear-to-r from-blue-50/70 via-indigo-50/20 to-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Simulador Didático de Modelos de Difusão</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Da Matriz de Ruído à Imagem Pedagógica
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Visualiza como os modelos de difusão latente removem ruído progressivamente guiados pela descrição do prompt.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayToggle}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                isPlaying
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pausar Animação' : step === 5 ? 'Repetir Ciclo' : 'Reproduzir Etapas'}</span>
            </button>
            <button
              onClick={handleReset}
              className="p-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50"
              title="Reiniciar para Ruído Puro"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Theme tabs */}
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-200/60">
          <span className="text-xs font-semibold text-slate-700 flex items-center gap-1 mr-2">
            Escolher Tema Pedagógico:
          </span>
          {THEMES.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedThemeIndex(idx);
                setStep(0);
                setIsPlaying(false);
              }}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedThemeIndex === idx
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main interactive stage */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Visual stage (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 aspect-16/10 flex items-center justify-center shadow-inner">
              {/* SVG Procedural Multi-Stage Canvas */}
              <div className="w-full h-full relative select-none">
                {/* 1. Underlying Base Artwork (reveals as step increases) */}
                <div
                  className="absolute inset-0 transition-opacity duration-700 flex items-center justify-center p-6 text-white"
                  style={{
                    opacity: step / 5,
                    filter: `blur(${Math.max(0, (5 - step) * 2.5)}px) contrast(${1 + step * 0.1})`,
                    background:
                      selectedThemeIndex === 0
                        ? 'linear-gradient(180deg, #38bdf8 0%, #0284c7 45%, #059669 55%, #0284c7 75%, #075985 100%)'
                        : selectedThemeIndex === 1
                        ? 'linear-gradient(135deg, #14532d 0%, #16a34a 40%, #065f46 70%, #0284c7 100%)'
                        : 'linear-gradient(180deg, #fdba74 0%, #fb923c 25%, #c2410c 45%, #1e3a8a 55%, #0f172a 100%)',
                  }}
                >
                  {/* Schematic SVG Vector Elements for the theme */}
                  {selectedThemeIndex === 0 && (
                    <div className="w-full h-full relative flex flex-col justify-between">
                      {/* Sun & clouds */}
                      <div className="flex justify-between items-start">
                        <div className="w-14 h-14 rounded-full bg-amber-300 shadow-lg shadow-amber-300/50 flex items-center justify-center text-[10px] font-bold text-amber-900">
                          Sol
                        </div>
                        <div className="space-y-1 text-right">
                          <div className="bg-white/80 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                            Condensação (Nuvens)
                          </div>
                          <div className="text-[10px] text-blue-100 flex justify-end gap-1">
                            <span>☁️</span>
                            <span>☁️</span>
                          </div>
                        </div>
                      </div>

                      {/* Middle arrows */}
                      <div className="grid grid-cols-3 text-center my-auto">
                        <div className="text-amber-200 text-xs font-semibold">
                          ↑ Evaporação
                        </div>
                        <div className="text-blue-100 text-xs font-semibold">
                          ↓ Precipitação (Chuva)
                        </div>
                        <div className="text-emerald-200 text-xs font-semibold">
                          ↙ Infiltração
                        </div>
                      </div>

                      {/* Bottom ocean & mountains */}
                      <div className="bg-blue-900/40 p-2 rounded-lg backdrop-blur-2xs flex justify-between items-end text-[11px] font-medium">
                        <span>Oceano / Rios</span>
                        <span>Lençol Freático</span>
                      </div>
                    </div>
                  )}

                  {selectedThemeIndex === 1 && (
                    <div className="w-full h-full relative border-4 border-emerald-400/80 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex justify-between text-xs font-bold text-emerald-200">
                        <span>Parede Celular</span>
                        <span>Membrana Plasmática</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 my-auto">
                        <div className="bg-blue-500/30 border border-blue-400 p-2.5 rounded-xl text-center">
                          <span className="text-[11px] font-bold block text-blue-200">Vacúolo Central</span>
                          <span className="text-[9px] text-blue-100">Armazenamento de água e solutos</span>
                        </div>
                        <div className="bg-emerald-600/50 border border-emerald-400 p-2.5 rounded-xl text-center">
                          <span className="text-[11px] font-bold block text-emerald-100">Cloroplastos (Tilacoides)</span>
                          <span className="text-[9px] text-emerald-200">Sítio da Fotossíntese</span>
                        </div>
                      </div>
                      <div className="text-center text-[10px] text-emerald-300">
                        Estrutura celular microscópica — Ampliação 1000x
                      </div>
                    </div>
                  )}

                  {selectedThemeIndex === 2 && (
                    <div className="w-full h-full relative flex flex-col justify-between p-2">
                      <div className="flex justify-between items-center text-xs font-bold text-amber-100">
                        <span>Cruz de Cristo nas Velas</span>
                        <span>Navegação Astronómica</span>
                      </div>
                      <div className="text-center space-y-1 my-auto">
                        <div className="text-xl font-bold tracking-wider text-amber-200">
                          ⛵ Caravela Quinhentista
                        </div>
                        <p className="text-xs text-amber-100/90 font-mono">
                          Astrolábio Náutico · Rumo às Índias · 1498
                        </p>
                      </div>
                      <div className="bg-slate-900/60 p-2 rounded-lg text-[10px] text-slate-300 flex justify-between">
                        <span>Pôr do sol no Atlântico Sul</span>
                        <span>Século das Descobertas</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Procedural Gaussian Noise Overlay (decreases as step increases) */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: noisePercent / 100,
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%), repeating-radial-gradient(circle at 20% 30%, #fff, #000 2px, #fff 4px, #000 6px, #fff 8px)`,
                    backgroundSize: '12px 12px',
                    filter: `contrast(${150 + (5 - step) * 20}%)`,
                  }}
                ></div>

                {/* Overlay badge with current stage metadata */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-xs font-semibold">
                    Etapa {step} de 5
                  </span>
                  <span className="text-[11px] text-slate-300 font-mono">
                    ({noisePercent}% Ruído)
                  </span>
                </div>
              </div>
            </div>

            {/* Step Control Slider */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  Deslizador de Desruidificação (Reverse Diffusion):
                </span>
                <span className="font-mono font-bold text-blue-700">
                  Passo {step} / 5
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={step}
                onChange={(e) => {
                  setIsPlaying(false);
                  setStep(parseInt(e.target.value, 10));
                }}
                className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />

              <div className="flex justify-between text-[11px] text-slate-600 font-mono pt-1">
                <span>0: Ruído Puro</span>
                <span>1: Volumes</span>
                <span>2: Contornos</span>
                <span>3: Cores</span>
                <span>4: Texturas</span>
                <span>5: Nítido</span>
              </div>
            </div>
          </div>

          {/* Explanation & Conceptual Guide (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Etapa Atual ({step}/5)
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  {theme.stageDescriptions[step]}
                </h3>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-800 block">
                  Prompt Fornecido ao Modelo:
                </span>
                <p className="text-xs font-mono text-slate-700 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-200">
                  {theme.prompt}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {theme.keyFeatures.map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200/50"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Didactic explanation of Forward vs Reverse diffusion */}
              <div className="bg-indigo-50/60 p-3.5 rounded-xl border border-indigo-200 space-y-1.5 text-xs text-indigo-950">
                <div className="font-bold flex items-center gap-1.5 text-indigo-900">
                  <Info className="w-4 h-4 text-indigo-600" />
                  <span>Como Aprendem os Modelos de Difusão:</span>
                </div>
                <p className="leading-relaxed text-[11px] text-indigo-900">
                  <strong>1. Processo Direto (No Treino):</strong> Adiciona-se ruído a milhões de ilustrações educativas até ficarem completamente irreconhecíveis.
                </p>
                <p className="leading-relaxed text-[11px] text-indigo-900">
                  <strong>2. Processo Reverso (Na Geração):</strong> A rede neuronal aprende a prever e retirar o ruído passo a passo, orientada pelos termos do prompt fornecido pelo professor.
                </p>
              </div>
            </div>

            <NoticeBanner
              type="info"
              title="Transparência Científica"
              message="Simulação Conceptual Didática"
              detail="Esta interface ilustra o princípio da redução sequencial de ruído (reverse diffusion). Em modelos reais como o Imagen ou Stable Diffusion, o cálculo é efetuado num espaço latente matemático de alta dimensão."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
