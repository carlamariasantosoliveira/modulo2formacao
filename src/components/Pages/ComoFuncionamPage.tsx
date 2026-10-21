import React from 'react';
import { ModelMechanicsSimulator } from '../Simulators/ModelMechanicsSimulator';
import { AlertTriangle } from 'lucide-react';

export const ComoFuncionamPage: React.FC = () => {
  const steps = [
    {
      num: 1,
      circleBg: 'bg-[#3B82F6]',
      titleBg: 'bg-[#EFF6FF] text-[#1D4ED8]',
      title: '1. Dados de Treino',
      mainDesc:
        "A IA é treinada com grandes volumes de textos e imagens (livros, artigos, páginas web, conteúdos educativos). Nesta fase inicial, o modelo apenas 'vê' os dados sem ainda aprender.",
    },
    {
      num: 2,
      circleBg: 'bg-[#10B981]',
      titleBg: 'bg-[#ECFDF5] text-[#047857]',
      title: '2. Aprendizagem de Padrões (Fase de Treino)',
      mainDesc:
        'Processo de aprendizagem a partir dos dados. O modelo identifica regularidades, aprende como os elementos se organizam, estabelece associações e ajusta probabilidades internas.',
      analogy:
        'Exemplo analógico: Aprender a cozinhar (dados = receitas; aprendizagem = perceber que o açúcar adoça ou o sal realça sabores sem memorizar todas as receitas).',
    },
    {
      num: 3,
      circleBg: 'bg-[#F59E0B]',
      titleBg: 'bg-[#FFFBEB] text-[#B45309]',
      title: '3. Prompt do Utilizador (Ponto de Partida)',
      mainDesc:
        "O utilizador escreve uma pergunta, instrução ou descrição (ex.: 'Cria um texto explicativo', 'Gera uma imagem sobre...'). O prompt orienta o cálculo estatístico, mas não garante a verdade.",
    },
    {
      num: 4,
      circleBg: 'bg-[#8B5CF6]',
      titleBg: 'bg-[#F5F3FF] text-[#6D28D9]',
      title: '4. Processamento Interno',
      bullets: [
        {
          label: 'Texto',
          text: "Divisão em tokens, cálculo da próxima palavra mais provável e uso de mecanismos de 'atenção ao contexto'.",
        },
        {
          label: 'Imagens',
          text: 'Interpretação da descrição textual, associação a padrões visuais aprendidos e construção progressiva da imagem (modelos de difusão).',
        },
      ],
    },
    {
      num: 5,
      circleBg: 'bg-[#EF4444]',
      titleBg: 'bg-[#FEF2F2] text-[#B91C1C]',
      title: '5. Produção da Resposta (Saída / Output)',
      bullets: [
        {
          label: 'Texto',
          text: 'Resposta coerente em linguagem natural (pode conter erros factuais).',
        },
        {
          label: 'Imagem',
          text: "Visual coerente com o pedido (não representa a 'realidade', mas sim a plausibilidade).",
        },
      ],
    },
    {
      num: 6,
      circleBg: 'bg-[#F59E0B]',
      titleBg: 'bg-[#FEFCE8] text-[#A16207]',
      title: '6. Limitação Fundamental',
      isVeryImportant: true,
      mainDesc:
        'Não compreende como um ser humano, não valida factos e não possui consciência.',
      keyTakeaway: '■■ Resposta convincente ≠ Resposta correcta.',
    },
  ];

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line matching imagem_6bc26744.png */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            2. Funcionamento dos Modelos Generativos
          </h1>
        </div>
        <p className="text-sm font-bold text-slate-800 pl-4.5">
          Ciclo de Funcionamento (As Seis Fases do Modelo)
        </p>
      </div>

      {/* Vertical Timeline matching imagem_6bc26744.png with complete verbatim transcription */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-2xs">
        <div className="space-y-7 relative">
          {/* Vertical connector line */}
          <div className="absolute left-[18px] top-4 bottom-8 w-0.5 bg-slate-200 pointer-events-none"></div>

          {steps.map((s) => (
            <div
              key={s.num}
              className="relative flex flex-col md:flex-row md:items-start gap-4 z-10"
            >
              {/* Number Circle Badge */}
              <div
                className={`w-9 h-9 rounded-full ${s.circleBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs mt-1`}
              >
                {s.num}
              </div>

              {/* Title Pill Badge */}
              <div className="md:w-72 shrink-0">
                <div
                  className={`${s.titleBg} rounded-2xl px-5 py-3 font-bold text-xs sm:text-sm border border-black/5 flex items-center justify-between`}
                >
                  <span>{s.title}</span>
                  {s.isVeryImportant && (
                    <span className="text-[10px] uppercase font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-full ml-2">
                      MUITO IMPORTANTE
                    </span>
                  )}
                </div>
              </div>

              {/* Description text on right */}
              <div className="flex-1 text-xs sm:text-sm text-slate-700 leading-relaxed pl-2 md:pl-0 space-y-2">
                {s.mainDesc && <p>{s.mainDesc}</p>}

                {/* Analogical Example for Step 2 */}
                {s.analogy && (
                  <div className="bg-[#ECFDF5] border border-emerald-200/80 rounded-xl p-3 text-xs text-emerald-950 font-medium">
                    {s.analogy}
                  </div>
                )}

                {/* Detailed Bullets for Step 4 & 5 (Texto vs Imagens) */}
                {s.bullets && (
                  <div className="space-y-1.5 pl-1">
                    {s.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></span>
                        <p>
                          <strong className="text-slate-900 font-bold">{b.label}:</strong>{' '}
                          {b.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Core Warning for Step 6 */}
                {s.keyTakeaway && (
                  <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 text-xs sm:text-sm font-extrabold text-amber-950 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{s.keyTakeaway}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Simulator Section */}
      <div className="pt-2">
        <ModelMechanicsSimulator />
      </div>
    </div>
  );
};
