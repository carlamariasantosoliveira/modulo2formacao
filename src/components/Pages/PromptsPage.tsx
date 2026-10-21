import React, { useState } from 'react';
import {
  UserCheck,
  CheckCircle,
  AlertCircle,
  Layout,
  Copy,
  Check,
  Sparkles,
  Info,
} from 'lucide-react';
import promptsPedagogyImg from '../../assets/images/prompts_pedagogy_1792545537603.jpg';

export const PromptsPage: React.FC = () => {
  const [context, setContext] = useState('');
  const [task, setTask] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [restrictions, setRestrictions] = useState('');
  const [format, setFormat] = useState('');

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    let p = '';
    if (context.trim()) p += `${context.trim()} `;
    if (task.trim()) p += `${task.trim()} `;
    if (targetAudience.trim()) p += `Público-alvo: ${targetAudience.trim()}. `;
    if (restrictions.trim()) p += `Restrições: ${restrictions.trim()}. `;
    if (format.trim()) p += `Formato de saída: ${format.trim()}.`;

    if (!p.trim()) {
      p = 'Age como professor do 9.º ano. Explica o que é um texto argumentativo para alunos de 13 anos em tópicos curtos. Não uses termos excessivamente técnicos. Apresenta o resultado com exemplos do quotidiano em tabela.';
    }
    setGeneratedPrompt(p.trim());
  };

  const handleCopy = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* 1. O que é um Prompt? matching imagem_ca72888b.png */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            4. Prompts e Engenharia de Prompts
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
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-[#1D4ED8]">
              Elementos Principais de um Prompt
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* Contexto */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#2563EB] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-800">
                  <strong className="text-slate-900 font-bold">Contexto:</strong> Quem é a IA? (ex.: &ldquo;Age como um historiador&rdquo;).
                </p>
              </div>

              {/* Tarefa */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#10B981] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-800">
                  <strong className="text-slate-900 font-bold">Tarefa:</strong> O que deve fazer? (ex.: &ldquo;Resume este texto&rdquo;).
                </p>
              </div>

              {/* Restrições */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#F59E0B] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                  <AlertCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-800">
                  <strong className="text-slate-900 font-bold">Restrições:</strong> O que evitar? (ex.: &ldquo;Não uses termos técnicos&rdquo;).
                </p>
              </div>

              {/* Formato */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#EF4444] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                  <Layout className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-800">
                  <strong className="text-slate-900 font-bold">Formato:</strong> Como apresentar a resposta? (ex.: &ldquo;Em tabela&rdquo;, &ldquo;Em tópicos&rdquo;).
                </p>
              </div>
            </div>

            {/* Verbatim Note from Page 3 */}
            <div className="pt-3 border-t border-blue-200/60 flex items-center gap-2 text-xs text-[#1D4ED8] font-semibold">
              <Info className="w-4 h-4 shrink-0 text-[#1E70EB]" />
              <span>Nota: A qualidade do prompt influencia significativamente a qualidade do resultado obtido.</span>
            </div>
          </div>

          {/* Right: Interactive Pedagogical Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-blue-200/80 shadow-md bg-white">
              <img
                src={promptsPedagogyImg}
                alt="Professora a construir planos de aula e prompts com apoio de IA"
                className="w-full h-48 sm:h-52 object-cover object-center"
              />
              <div className="p-3 bg-white text-[11px] text-slate-600 border-t border-slate-100 flex items-center justify-between">
                <span className="font-medium text-slate-800">Construção colaborativa de prompts pedagógicos</span>
                <span className="text-[#1E70EB] font-semibold">Módulo 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Construtor de Prompts (Simulador) matching imagem_ca72888b.png */}
      <div className="space-y-4 pt-2">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
              Construtor de Prompts (Simulador)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pl-4.5">
            Preencha os campos para criar um prompt eficaz.
          </p>
        </div>

        {/* Inputs Layout matching imagem_ca72888b.png */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Contexto (quem é a IA?)
                </label>
                <input
                  type="text"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Ex.: És um professor especialista em..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Tarefa (o que deve fazer?)
                </label>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Ex.: Cria um plano de aula sobre..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Público-alvo
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="Ex.: Alunos do 5º ano"
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Restrições (o que deve evitar?)
                  </label>
                  <input
                    type="text"
                    value={restrictions}
                    onChange={(e) => setRestrictions(e.target.value)}
                    placeholder="Ex.: Não uses termos muito técnicos..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Formato da resposta
                  </label>
                  <input
                    type="text"
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    placeholder="Ex.: Em tabela, com tópicos..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleGenerate}
                  className="w-full py-3 px-6 rounded-xl bg-[#1E70EB] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  Gerar Prompt
                </button>
              </div>
            </div>
          </div>

          {/* Output Card: O seu prompt matching imagem_ca72888b.png */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">
                O seu prompt:
              </h3>
              {generatedPrompt && (
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E70EB] hover:text-blue-800 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              )}
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-4 sm:p-5 min-h-[90px] flex items-center">
              {generatedPrompt ? (
                <p className="text-xs sm:text-sm font-mono text-slate-800 leading-relaxed select-all">
                  &ldquo;{generatedPrompt}&rdquo;
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-slate-400 italic">
                  O prompt será gerado aqui...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
