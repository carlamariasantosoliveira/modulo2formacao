import React, { useState, useEffect } from 'react';
import {
  Award,
  FileCheck,
  Download,
  Copy,
  Check,
  Sparkles,
  History,
  RotateCcw,
  Save,
  CheckCircle2,
  FileText,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';

const STORAGE_KEY = 'ia_edu_modulo2_desafio_portfolio';

const INITIAL_PORTFOLIO = {
  resourceType: 'Cenário de Aprendizagem Interativo',
  discipline: 'Português / Cidadania',
  grade: '8.º Ano',
  topic: 'Literacia Mediática e Combate à Desinformação Digital',
  promptV1: 'Cria uma atividade sobre fake news para alunos do 8.º ano.',
  critiqueV1:
    'O primeiro resultado foi muito genérico: a IA sugeriu apenas uma conversa aberta sem guião, sem fontes contrastantes nem critérios objetivos de verificação para os alunos.',
  promptV2:
    'Age como professor de TIC e Cidadania do 8.º ano. Cria um cenário de roleplay pedagógico de 50 minutos onde os alunos atuam como "detetives da verdade", analisando 3 notícias fictícias sobre tecnologia. Inclui uma checklist de verificação de fontes (autor, data, evidência) e uma grelha de avaliação com 3 níveis.',
  critiqueV2:
    'A adição de uma persona docente (Role Prompting), o enquadramento de roleplay e o pedido explícito de checklist e rubrica elevaram imediatamente o rigor didático e o alinhamento com as Aprendizagens Essenciais.',
  pedagogicalReflection:
    'A utilização da IA generativa permitiu poupar tempo na redação de casos fictícios com linguagem verosímil, mas exigiu validação humana atenta para garantir que os distratores não veiculavam desinformação real prejudicial. O segredo residiu na iteração: o prompt inicial genérico produziu um resultado superficial; a inclusão de restrições e formato em tabela transformou o guião num recurso diretamente aplicável em sala de aula.',
  finalProduct: `# PRODUTO FINAL: CENÁRIO DE APRENDIZAGEM - DETETIVES DA VERDADE
**Disciplina:** Português / Cidadania | **Nível:** 8.º Ano (13-14 anos)
**Tempo:** 50 minutos | **Alinhamento:** Estratégia Nacional de Educação para a Cidadania

---

### DESAFIO DA MISSÃO
"Uma agência de notícias fictícia divulgou três comunicados sensacionalistas sobre a proibição de inteligência artificial em todas as escolas. O vosso grupo de detetives tem 30 minutos para cruzar factos, analisar as fontes e elaborar um despacho com o veredicto de veracidade."

---

### DOCUMENTOS DE TRABALHO
• Caso A: Notícia anónima sem data em rede social.
• Caso B: Artigo científico com referência a estudo universitário.
• Caso C: Comunicado institucional com declarações descontextualizadas.

---

### CHECKLIST DO DETETIVE (4 CRITÉRIOS DE VERIFICAÇÃO)
1. Quem é o autor e qual a sua autoridade no assunto?
2. Em que data foi publicado e os factos mantêm-se atuais?
3. São apresentadas provas independentes ou apenas opiniões emotivas?
4. Outros órgãos de comunicação social credíveis confirmam a notícia?

---

### GRELHA DE AVALIAÇÃO FORMATIVA
• Nível Avançado (3 pts): Identifica todas as falhas lógicas e justifica com recurso integral à checklist.
• Nível Médio (2 pts): Deteta o rumor mas apresenta justificações parciais ou pouco fundamentadas.
• Nível Inicial (1 pt): Aceita a notícia acriticamente sem aplicação sistemática da checklist.`,
};

export const DesafioFinalPage: React.FC = () => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...INITIAL_PORTFOLIO, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Erro ao carregar dados do portfólio do localStorage:', e);
    }
    return INITIAL_PORTFOLIO;
  });

  const [copied, setCopied] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [saveStatusMessage, setSaveStatusMessage] = useState<string>('Guardado automaticamente');

  // Auto-save to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      setLastSaved(timeStr);
      setSaveStatusMessage(`Guardado automaticamente às ${timeStr}`);
    } catch (e) {
      console.error('Falha ao gravar no localStorage:', e);
      setSaveStatusMessage('Aviso: Armazenamento local indisponível no navegador.');
    }
  }, [data]);

  const updateField = (field: keyof typeof INITIAL_PORTFOLIO, value: string) => {
    setData((prev: typeof INITIAL_PORTFOLIO) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    if (window.confirm('Tem a certeza que deseja repor o portfólio de exemplo inicial? As alterações efetuadas serão substituídas.')) {
      setData(INITIAL_PORTFOLIO);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const generatePortfolioText = (format: 'markdown' | 'text') => {
    const divider = format === 'markdown' ? '---' : '============================================================';
    return `# PORTFÓLIO DE ENTREGA — DESAFIO PRÁTICO DO MÓDULO 2
Curso: Inteligência Artificial na Educação
Módulo 2: IA Generativa e Prompts
Formador: Carla Oliveira | Data de Conclusão: ${new Date().toLocaleDateString('pt-PT')}

${divider}
1. IDENTIFICAÇÃO DO RECURSO PEDAGÓGICO
${divider}
• Tipo de Recurso: ${data.resourceType}
• Disciplina / Área Curricular: ${data.discipline}
• Ano de Escolaridade: ${data.grade}
• Conteúdo Curricular / Tema: ${data.topic}

${divider}
2. HISTÓRICO DE PROMPTS E AJUSTES CRÍTICOS
${divider}
[Versão Inicial - Prompt 1 (Vago)]:
"${data.promptV1}"

[Reflexão Crítica sobre o Resultado Inicial]:
${data.critiqueV1}

------------------------------------------------------------
[Versão Otimizada - Prompt 2 (Refinado e Contextualizado)]:
"${data.promptV2}"

[Documentação das Alterações e Ganhos Pedagógicos]:
${data.critiqueV2}

${divider}
3. REFLEXÃO PEDAGÓGICA CRÍTICA SOBRE O PAPEL DO PROFESSOR
${divider}
${data.pedagogicalReflection}

${divider}
4. PRODUTO FINAL ACABADO
${divider}
${data.finalProduct}
`;
  };

  const handleExport = (format: 'md' | 'txt') => {
    const content = generatePortfolioText(format === 'md' ? 'markdown' : 'text');
    const mimeType = format === 'md' ? 'text/markdown;charset=utf-8' : 'text/plain;charset=utf-8';
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const sanitizedDiscipline = data.discipline.toLowerCase().replace(/[^a-z0-9]/g, '_');
    a.download = `DesafioFinal_Modulo2_${sanitizedDiscipline}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePortfolioText('markdown'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            Desafio Prático Final do Módulo 2
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Criação de Recurso Pedagógico Real, Apresentação do Produto Final e Histórico de Prompts (Página 8)
          </p>
        </div>
      </div>

      {/* Official Guidelines from PDF */}
      <div className="bg-[#FFFBEB] border border-amber-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-900">
            <Award className="w-5 h-5 text-amber-600" />
            <span>Enunciado Oficial do Desafio Prático</span>
          </div>
          <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200">
            Página 8 do PDF Oficial
          </span>
        </div>

        <div className="bg-white/95 p-5 rounded-2xl border border-amber-200/60 space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
          <p className="text-sm font-semibold text-slate-900 leading-snug">
            &ldquo;Apliquem os vossos conhecimentos sobre a construção de prompts para criar um recurso pedagógico relacionado com um conteúdo que irão lecionar nas próximas aulas. Podem escolher entre criar um cenário de aprendizagem, um quiz, uma apresentação, entre outros.&rdquo;
          </p>
          <div className="pt-2 border-t border-amber-100 text-amber-950 font-bold flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>Produtos Obrigatórios a Apresentar:</strong> O produto final obtido e o histórico integral dos prompts que utilizaram e ajustaram criticamente até chegar ao resultado pretendido.
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Portfolio Builder with Live Auto-Save */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-[#F8FAFC] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#1E70EB] uppercase tracking-wider">
                Caderno de Trabalho do Professor
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium border border-emerald-200/60">
                <Save className="w-3 h-3 text-emerald-600" />
                <span>{saveStatusMessage}</span>
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Registo do Portfólio Pedagógico
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-2 rounded-xl transition-colors cursor-pointer"
              title="Restaurar o modelo de exemplo original do curso"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Modelo</span>
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3.5 py-2 rounded-xl shadow-2xs transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado para a Área de Transferência!' : 'Copiar Tudo'}</span>
            </button>
            <div className="inline-flex rounded-xl shadow-xs overflow-hidden">
              <button
                onClick={() => handleExport('md')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1E70EB] hover:bg-blue-600 px-3.5 py-2 transition-colors cursor-pointer border-r border-blue-400/30"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Exportar .md</span>
              </button>
              <button
                onClick={() => handleExport('txt')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1E70EB] hover:bg-blue-600 px-3 py-2 transition-colors cursor-pointer"
              >
                <span>.txt</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-7">
          {/* Section 1: Identification */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] flex items-center justify-center text-xs font-bold">
                1
              </span>
              <span>Identificação do Recurso e Nível Escolar</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tipo de Recurso
                </label>
                <input
                  type="text"
                  value={data.resourceType}
                  onChange={(e) => updateField('resourceType', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-blue-500"
                  placeholder="Ex.: Cenário, Quiz, Plano de Aula"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Disciplina / Área
                </label>
                <input
                  type="text"
                  value={data.discipline}
                  onChange={(e) => updateField('discipline', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-blue-500"
                  placeholder="Ex.: Matemática, Português, História"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ano de Escolaridade
                </label>
                <input
                  type="text"
                  value={data.grade}
                  onChange={(e) => updateField('grade', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-blue-500"
                  placeholder="Ex.: 7.º Ano, 8.º Ano, 9.º Ano"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Conteúdo Curricular
                </label>
                <input
                  type="text"
                  value={data.topic}
                  onChange={(e) => updateField('topic', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-blue-500"
                  placeholder="Ex.: Ciclo da Água, Funções Afins"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Prompt History */}
          <div className="space-y-4 pt-5 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] flex items-center justify-center text-xs font-bold">
                2
              </span>
              <span>Histórico de Prompts e Ajustes Críticos (Exigência do Módulo)</span>
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Round 1 */}
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span>Prompt Inicial (Versão 1 - Vago):</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {data.promptV1.length} caracteres
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={data.promptV1}
                  onChange={(e) => updateField('promptV1', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white font-mono text-slate-800 focus:outline-hidden focus:border-blue-500"
                  placeholder="Escreva a sua primeira tentativa de prompt..."
                />
                <span className="text-xs font-bold text-slate-800 block pt-1">
                  Crítica Pedagógica / Por que precisou de refinamento?
                </span>
                <textarea
                  rows={3}
                  value={data.critiqueV1}
                  onChange={(e) => updateField('critiqueV1', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-hidden focus:border-blue-500"
                  placeholder="Identifique o que faltou (ex.: falta de contexto, objetivos vagos, ausência de grelha)..."
                />
              </div>

              {/* Round 2 */}
              <div className="bg-[#ECFDF5] p-5 rounded-2xl border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>Prompt Otimizado (Versão 2 - Iterado e Estruturado):</span>
                  </span>
                  <span className="text-[10px] text-emerald-700 font-mono">
                    {data.promptV2.length} caracteres
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={data.promptV2}
                  onChange={(e) => updateField('promptV2', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-emerald-200 bg-white font-mono text-slate-800 focus:outline-hidden focus:border-emerald-500"
                  placeholder="Escreva a versão refinada com os 4 elementos estruturais (Contexto, Tarefa, Restrições, Formato)..."
                />
                <span className="text-xs font-bold text-emerald-950 block pt-1">
                  Documentação das Alterações e Ganhos Obtidos:
                </span>
                <textarea
                  rows={3}
                  value={data.critiqueV2}
                  onChange={(e) => updateField('critiqueV2', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-emerald-200 bg-white text-slate-700 focus:outline-hidden focus:border-emerald-500"
                  placeholder="Descreva as técnicas aplicadas e como o resultado melhorou..."
                />
              </div>
            </div>
          </div>

          {/* Section 3: Critical Pedagogical Reflection */}
          <div className="space-y-3 pt-5 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] flex items-center justify-center text-xs font-bold">
                3
              </span>
              <span>Reflexão Pedagógica Crítica sobre a Interação com a IA</span>
            </span>
            <p className="text-xs text-slate-500">
              Reflexão sobre a verificação factual dos conteúdos gerados, adequação curricular e o papel ativo e crítico do professor.
            </p>
            <textarea
              rows={4}
              value={data.pedagogicalReflection}
              onChange={(e) => updateField('pedagogicalReflection', e.target.value)}
              className="w-full text-xs p-4 rounded-2xl border border-slate-200 bg-white text-slate-800 leading-relaxed focus:outline-hidden focus:border-blue-500"
              placeholder="Registe aqui a sua reflexão crítica sobre a experiência..."
            />
          </div>

          {/* Section 4: Final Deliverable Product */}
          <div className="space-y-3 pt-5 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span>Produto Final a Entregar / Apresentar</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {data.finalProduct.length} caracteres
              </span>
            </div>
            <textarea
              rows={14}
              value={data.finalProduct}
              onChange={(e) => updateField('finalProduct', e.target.value)}
              className="w-full text-xs font-mono p-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] leading-relaxed text-slate-800 focus:outline-hidden focus:border-blue-500"
              placeholder="Cole aqui o conteúdo final completo do recurso pedagógico gerado e revisto..."
            />
          </div>

          {/* Privacy & Ethical Guarantee Notice */}
          <div className="flex items-start gap-2.5 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-[11px] text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>Garantia Ética e de Privacidade:</strong> O portfólio fica guardado apenas localmente no seu navegador através de <code>localStorage</code>. Nenhum dado pessoal de alunos ou informação confidencial escolar é recolhido ou transmitido externamente.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
