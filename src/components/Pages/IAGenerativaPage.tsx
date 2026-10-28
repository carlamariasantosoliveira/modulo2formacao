import React from 'react';
import robotLightbulbImg from '../../assets/images/ai_robot_lightbulb_1792545516837.jpg';
import { BookMarked } from 'lucide-react';

const GLOSSARY_TERMS = [
  {
    term: 'IA generativa',
    def: 'Sistema capaz de gerar novos conteúdos (texto, imagem, áudio, código) com base em padrões aprendidos a partir de dados de treino e em instruções fornecidas pelo utilizador.',
  },
  {
    term: 'Modelo',
    def: 'Representação matemática treinada para reconhecer padrões e realizar tarefas específicas, como classificar, prever ou gerar informação.',
  },
  {
    term: 'LLM (Large Language Model)',
    def: 'Modelo de linguagem de grande escala treinado com vastos volumes de texto para processar e gerar linguagem natural.',
  },
  {
    term: 'Prompt',
    def: 'Instrução, pergunta ou conjunto de dados fornecido a um modelo para orientar a resposta pretendida.',
  },
  {
    term: 'Token',
    def: 'Unidade básica de processamento de texto pelos modelos de linguagem, que pode corresponder a uma palavra, a uma fração de palavra ou a um caráter de pontuação.',
  },
  {
    term: 'Inferência',
    def: 'Processo de aplicação do modelo já treinado a novos dados de entrada para calcular probabilidades e gerar uma resposta.',
  },
  {
    term: 'Contexto',
    def: 'Informação fornecida ao modelo no prompt ou no histórico da sessão que delimita e orienta a resposta a produzir.',
  },
  {
    term: 'Alucinação',
    def: 'Geração de afirmações plausíveis e coerentes, mas factualmente incorretas, inventadas ou sem suporte nos dados reais.',
  },
  {
    term: 'Recuperação documental (RAG)',
    def: 'Técnica que combina a consulta a fontes externas de informação com a capacidade de geração do modelo, reduzindo erros factuais.',
  },
  {
    term: 'Multimodalidade',
    def: 'Capacidade de um modelo para processar e gerar informação combinando diferentes modalidades sensoriais (texto, imagem, áudio, vídeo).',
  },
];

export const IAGenerativaPage: React.FC = () => {
  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical accent line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
          1. Objetivos e Conceito de IA Generativa
        </h1>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-2xs space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E70EB]">
              Conceito de IA Generativa
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              A inteligência artificial generativa abrange sistemas capazes de produzir conteúdos, como texto, imagens, áudio e vídeo, com base em padrões aprendidos durante o treino e nas instruções ou dados fornecidos.
            </p>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Estes sistemas não possuem consciência humana. Os resultados podem apresentar erros, omissões, imprecisões e enviesamentos decorrentes dos dados com que foram treinados.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0"></span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Tecnologia:</strong> Utiliza redes neuronais profundas (<em>Deep Learning</em>) otimizadas matematicamente para ajustar parâmetros e pesos estatísticos internos.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0"></span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Lógica de Funcionamento:</strong> Com base em dados de treino e na entrada do utilizador, o modelo calcula probabilidades para gerar a resposta mais plausível. A coerência do texto não assegura a veracidade nem a adequação pedagógica dos conteúdos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Robot visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-50 relative group">
              <img
                src={robotLightbulbImg}
                alt="Robot educativo de IA com lâmpada e livros"
                className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Glossário de Conceitos Essenciais */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E70EB] flex items-center justify-center">
            <BookMarked className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0C1E38]">
              Glossário de Conceitos Fundamentais
            </h3>
            <p className="text-xs text-slate-500">
              Termos essenciais para a compreensão rigorosa dos sistemas de inteligência artificial generativa
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GLOSSARY_TERMS.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-1.5"
            >
              <h4 className="text-xs font-bold text-[#1E70EB] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB]"></span>
                {item.term}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
