import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PromptCardProps {
  title: string;
  discipline?: string;
  grade?: string;
  prompt: string;
  category?: string;
  keyAspects?: string[];
}

export const PromptCard: React.FC<PromptCardProps> = ({
  title,
  discipline,
  grade,
  prompt,
  keyAspects,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.replace(/^“|”$/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs hover:shadow-xs transition-all p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1E70EB]">
            {discipline && <span>{discipline}</span>}
            {grade && (
              <>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-semibold">{grade}</span>
              </>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1E70EB] transition-colors p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
            title="Copiar prompt"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-bold">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
          {title}
        </h3>

        <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-mono select-all mb-3.5">
          {prompt}
        </div>

        {keyAspects && keyAspects.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {keyAspects.map((aspect, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
              >
                {aspect}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
