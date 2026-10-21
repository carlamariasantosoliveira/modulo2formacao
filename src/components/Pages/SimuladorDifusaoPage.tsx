import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Layers,
  Sparkles,
  Info,
  Sliders,
} from 'lucide-react';
import { PageId } from '../../types';
import { ImageDiffusionSimulator } from '../Simulators/ImageDiffusionSimulator';

interface SimuladorDifusaoPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const SimuladorDifusaoPage: React.FC<SimuladorDifusaoPageProps> = ({
  onNavigate,
}) => {
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
          onClick={() => onNavigate('tipos-modelos')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-500" />
          <span>Ir para o Tema 3 (Tipos de Modelos)</span>
        </button>
      </div>

      {/* Header and Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200/60">
                Simulação Didática com Fins Pedagógicos
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight mt-1">
              Simulador de Difusão e Geração de Imagens
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 pl-4.5 max-w-3xl">
          Visualização em tempo real do processo de denoising (remoção progressiva de ruído) que transforma uma matriz aleatória numa imagem didática nítida.
        </p>
      </div>

      {/* Pedagogical Guidance Banner */}
      <div className="bg-[#FAF5FF] rounded-3xl p-6 border border-purple-100 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-purple-800 uppercase tracking-wider">
          <Info className="w-4 h-4 text-purple-600" />
          <span>Objetivo Pedagógico e Guia de Utilização</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-purple-100/60">
            <strong className="text-slate-900 block font-semibold">Fundamento Científico:</strong>
            Os modelos generativos de imagem (como Midjourney ou DALL-E) não recortam fotos existentes; iniciam com um campo de ruído gaussiano (píxeis aleatórios) e removem o ruído passo a passo, condicionados pelas palavras do prompt.
          </div>
          <div className="space-y-1 bg-white/80 p-3.5 rounded-xl border border-purple-100/60">
            <strong className="text-slate-900 block font-semibold">Como Utilizar Esta Ferramenta:</strong>
            Selecione um tema educativo curricular (Ciclo da Água, Célula Vegetal ou Navegador Português), use o botão de reprodução automática ou arraste o cursor manual para inspecionar cada etapa da transição.
          </div>
        </div>
      </div>

      {/* Embedded Simulator Engine */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs">
        <ImageDiffusionSimulator />
      </div>
    </div>
  );
};
