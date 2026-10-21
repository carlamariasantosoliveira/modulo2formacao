import React from 'react';
import { AlertTriangle, Info, CheckCircle2, ShieldAlert } from 'lucide-react';

interface NoticeBannerProps {
  type: 'critical' | 'info' | 'caution' | 'success';
  title?: string;
  message: string;
  detail?: string;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({
  type,
  title,
  message,
  detail,
}) => {
  if (type === 'critical') {
    return (
      <div className="bg-amber-50/90 border border-amber-300/80 rounded-xl p-4 text-amber-950">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
              {title || 'Limitação Fundamental — Muito Importante'}
            </div>
            <p className="text-sm font-semibold text-amber-950">{message}</p>
            {detail && <p className="text-xs text-amber-800/90 leading-relaxed">{detail}</p>}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'caution') {
    return (
      <div className="bg-orange-50/80 border border-orange-200 rounded-xl p-4 text-orange-950">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            {title && (
              <div className="text-xs font-bold uppercase tracking-wider text-orange-800">
                {title}
              </div>
            )}
            <p className="text-sm font-medium text-orange-950">{message}</p>
            {detail && <p className="text-xs text-orange-800 leading-relaxed">{detail}</p>}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'success') {
    return (
      <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 text-emerald-950">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            {title && (
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                {title}
              </div>
            )}
            <p className="text-sm font-medium text-emerald-950">{message}</p>
            {detail && <p className="text-xs text-emerald-800 leading-relaxed">{detail}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 text-blue-950">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          {title && (
            <div className="text-xs font-bold uppercase tracking-wider text-blue-800">
              {title}
            </div>
          )}
          <p className="text-sm font-medium text-blue-950">{message}</p>
          {detail && <p className="text-xs text-blue-800/90 leading-relaxed">{detail}</p>}
        </div>
      </div>
    </div>
  );
};
