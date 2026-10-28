import React from 'react';

interface ToolLogoProps {
  name: string;
  className?: string;
}

export const ToolLogo: React.FC<ToolLogoProps> = ({ name, className = 'w-6 h-6' }) => {
  const normalized = name.toLowerCase().trim();

  // 1. ChatGPT / OpenAI / DALL·E
  if (normalized.includes('chatgpt') || normalized.includes('dall') || normalized.includes('openai')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#10A37F" />
        <path
          d="M19.1 10.4c-.2-.9-.7-1.7-1.4-2.2-.4-.3-.8-.5-1.3-.6-.3-.7-.8-1.3-1.4-1.7-.9-.6-2-.8-3-.5-.4-.4-.9-.7-1.5-.9-1.1-.3-2.3-.1-3.2.6-.7.5-1.2 1.2-1.4 2-.5.2-.9.5-1.3.8-.7.8-1 1.9-.9 3 0 .4.2.9.4 1.3-.2.9-.1 1.8.3 2.6.5.9 1.4 1.5 2.4 1.7.3.7.8 1.3 1.4 1.7.9.6 2 .8 3 .5.4.4.9.7 1.5.9 1.1.3 2.3.1 3.2-.6.7-.5 1.2-1.2 1.4-2 .5-.2.9-.5 1.3-.8.7-.8 1-1.9.9-3 0-.4-.2-.9-.4-1.3.3-.8.3-1.8 0-2.6zm-7.1 9.4c-.6 0-1.2-.2-1.7-.5l2.4-1.4c.2-.1.3-.3.3-.5v-3.4l1 .6c.1.1.3.2.3.4v2.8c0 1.1-.9 2-2.3 2zm-5.7-3.3c-.3-.5-.5-1.1-.5-1.7 0-.5.1-1 .4-1.4l2.4 1.4c.2.1.4.1.6 0l2.9-1.7v1.2c0 .2.1.3.2.4l-2.4 1.4c-1.1.6-2.5.4-3.6-.6zm-1-6.7c.3-.5.7-1 1.2-1.2l-.1 2.8c0 .2.1.4.3.5l2.9 1.7-1 .6c-.1.1-.2.3-.2.5l-2.4-1.4c-1.1-.6-1.5-2-.7-3.5zm9.5-1.7l-2.4 1.4c-.2.1-.3.3-.3.5v3.4l-1-.6c-.1-.1-.3-.2-.3-.4v-2.8c0-1.1.9-2 2.3-2 .6 0 1.2.2 1.7.5zm4.8 5c0 .5-.1 1-.4 1.4l-2.4-1.4c-.2-.1-.4-.1-.6 0l-2.9 1.7v-1.2c0-.2-.1-.3-.2-.4l2.4-1.4c1.1-.6 2.5-.4 3.6.6.3.5.5 1.1.5 1.7zm.9-2.3c-.3.5-.7 1-1.2 1.2l.1-2.8c0-.2-.1-.4-.3-.5l-2.9-1.7 1-.6c.1-.1.2-.3.2-.5l2.4 1.4c1.1.6 1.5 2 .7 3.5z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 2. Google Gemini / Google AI / Veo / NotebookLM
  if (normalized.includes('gemini') || normalized.includes('google ai') || normalized.includes('veo') || normalized.includes('notebooklm')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0F172A" />
        <defs>
          <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E70EB" />
            <stop offset="50%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
        </defs>
        <path
          d="M12 3C12 7.97 7.97 12 3 12C7.97 12 12 16.03 12 21C12 16.03 16.03 12 21 12C16.03 12 12 7.97 12 3Z"
          fill="url(#geminiGrad)"
        />
      </svg>
    );
  }

  // 3. Claude / Anthropic
  if (normalized.includes('claude') || normalized.includes('anthropic')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#D97757" />
        <path
          d="M13.8 6.5h-3.6L6 17.5h3.4l.8-2.2h3.6l.8 2.2H18L13.8 6.5zm-2.8 6.4l1-3 1 3h-2z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 4. Microsoft Copilot
  if (normalized.includes('copilot') || normalized.includes('microsoft')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#F1F5F9" />
        <defs>
          <linearGradient id="copilotG1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0078D4" />
            <stop offset="100%" stopColor="#00BCF2" />
          </linearGradient>
          <linearGradient id="copilotG2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8764B8" />
            <stop offset="100%" stopColor="#E3008C" />
          </linearGradient>
        </defs>
        <path
          d="M6 14.5C6 11.46 8.46 9 11.5 9h2c1.93 0 3.5-1.57 3.5-3.5S15.43 2 13.5 2H11C6.03 2 2 6.03 2 11c0 2.28.85 4.36 2.26 5.95l1.74-2.45z"
          fill="url(#copilotG1)"
        />
        <path
          d="M18 9.5C18 12.54 15.54 15 12.5 15h-2c-1.93 0-3.5 1.57-3.5 3.5S8.57 22 10.5 22H13c4.97 0 9-4.03 9-9 0-2.28-.85-4.36-2.26-5.95l-1.74 2.45z"
          fill="url(#copilotG2)"
        />
      </svg>
    );
  }

  // 5. Mistral / Le Chat
  if (normalized.includes('mistral') || normalized.includes('le chat')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FF7000" />
        <rect x="5" y="7" width="3" height="10" rx="1.5" fill="#FFFFFF" />
        <rect x="16" y="7" width="3" height="10" rx="1.5" fill="#FFFFFF" />
        <path d="M7 8.5l5 4.5 5-4.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 6. DeepSeek
  if (normalized.includes('deepseek')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1D4ED8" />
        {/* DeepSeek Whale Fin Icon */}
        <path
          d="M7 16c2-4 5-6 9-6-1 2-1 4-3 5 3-.5 5-2 6-4-1 6-6 8-12 5z"
          fill="#FFFFFF"
        />
        <circle cx="10" cy="11" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // 7. Perplexity
  if (normalized.includes('perplexity')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0D1117" />
        <path
          d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7"
          stroke="#20B2AA"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2.5" fill="#20B2AA" />
      </svg>
    );
  }

  // 8. Adobe Firefly
  if (normalized.includes('firefly') || normalized.includes('adobe')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#ED2224" />
        <path
          d="M8.5 6h7c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5H11v2h4c.8 0 1.5.7 1.5 1.5v1.5c0 .8-.7 1.5-1.5 1.5H8.5c-.8 0-1.5-.7-1.5-1.5V7.5c0-.8.7-1.5 1.5-1.5z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 9. Midjourney
  if (normalized.includes('midjourney')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        {/* Midjourney Sailboat */}
        <path
          d="M7 16.5l5-10.5 5 10.5-5-2-5 2zM12 6v8.5"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 10. Ideogram
  if (normalized.includes('ideogram')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#EC4899" />
        <circle cx="12" cy="12" r="5" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
      </svg>
    );
  }

  // 11. FLUX / Black Forest Labs
  if (normalized.includes('flux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#09090B" />
        <path
          d="M6 8h12M6 12h8M6 16h5"
          stroke="#38BDF8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 12. Leonardo AI
  if (normalized.includes('leonardo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#7C3AED" />
        <path
          d="M12 5l6 3.5v7L12 19l-6-3.5v-7L12 5z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" fill="#FBBF24" />
      </svg>
    );
  }

  // 13. Canva
  if (normalized.includes('canva')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#00C4CC" />
        <path
          d="M14.5 9c-1-1-2.5-1.5-4-1.5-3.3 0-6 2.7-6 6s2.7 6 6 6c2 0 3.7-1 4.7-2.5l-1.8-1.2C12.7 16.7 11.6 17.2 10.5 17.2c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c1 0 1.8.4 2.4.9l1.6-1.5z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 14. Whisper / ASR
  if (normalized.includes('whisper')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#059669" />
        <path
          d="M5 12h2M9 8v8M12 5v14M15 8v8M19 12h-2"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 15. ElevenLabs
  if (normalized.includes('elevenlabs')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#18181B" />
        <rect x="8" y="6" width="3" height="12" rx="1.5" fill="#FFFFFF" />
        <rect x="13" y="6" width="3" height="12" rx="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // 16. Suno
  if (normalized.includes('suno')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#EA580C" />
        <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // 17. Udio
  if (normalized.includes('udio')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#9333EA" />
        <path
          d="M8 8v5a4 4 0 008 0V8"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 18. Descript
  if (normalized.includes('descript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#2563EB" />
        <path
          d="M8 7h4a5 5 0 010 10H8V7z"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 19. Runway
  if (normalized.includes('runway')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#10B981" />
        <path
          d="M8 6h4.5a3.5 3.5 0 010 7H8V6zm4.5 7L16 18H12l-3.5-5"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 20. Pika
  if (normalized.includes('pika')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#F97316" />
        <path
          d="M9 7l7 5-7 5V7z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 21. Synthesia
  if (normalized.includes('synthesia')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0284C7" />
        <circle cx="12" cy="9" r="3" fill="#FFFFFF" />
        <path d="M7 18a5 5 0 0110 0H7z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 22. Kling AI
  if (normalized.includes('kling')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#D97706" />
        <path
          d="M8 6v12M16 6L9 12l7 6"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 23. Luma Dream Machine
  if (normalized.includes('luma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#4F46E5" />
        <path
          d="M12 6l5 10H7l5-10z"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 24. Vidnoz AI
  if (normalized.includes('vidnoz')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#8B5CF6" />
        <path
          d="M7 7l5 10 5-10"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 25. HeyGen
  if (normalized.includes('heygen')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#E11D48" />
        <path
          d="M7 7h3v10H7V7zm7 0h3v10h-3V7zM10 12h4"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 26. D-ID
  if (normalized.includes('d-id')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0D9488" />
        <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M12 8v8M8 12h8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 27. Qwen (Alibaba)
  if (normalized.includes('qwen')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#6366F1" />
        <path
          d="M12 6l5 3.5v5L12 18l-5-3.5v-5L12 6z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 28. Sora
  if (normalized.includes('sora')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#000000" />
        <circle cx="12" cy="12" r="5" stroke="#38BDF8" strokeWidth="2" />
        <path d="M12 7v5l3 2" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Default Fallback
  const firstLetter = name.trim().charAt(0).toUpperCase();
  return (
    <div className={`rounded-xl bg-[#1E70EB] flex items-center justify-center text-white font-bold text-xs shadow-xs ${className}`}>
      {firstLetter}
    </div>
  );
};
