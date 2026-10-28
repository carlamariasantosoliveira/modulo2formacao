import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  FileSearch,
  BookCheck,
  Sliders,
  HeartHandshake,
  Lock,
  AlertTriangle,
  Compass,
  Sparkles,
  Target,
  ExternalLink,
  Info,
} from 'lucide-react';
import { PageId } from '../../types';

interface BoasPraticasPageProps {
  onNavigate?: (pageId: PageId) => void;
}

interface PillarData {
  number: number;
  title: string;
  summary: string;
  pedagogicalDetail: string;
  teacherAction: string;
  icon: React.ElementType;
  badgeColor: string;
  borderColor: string;
  bgLight: string;
  iconColor: string;
}

const BOAS_PRATICAS_PILLARS: PillarData[] = [
  {
    number: 1,
    title: 'Análise Crítica das Respostas',
    summary:
      'Avalie sempre a correção, relevância e coerência da informação gerada pela ferramenta de IA.',
    pedagogicalDetail:
      'Nunca adote o texto gerado pela IA sem uma leitura atenta. Avalie se o conteúdo responde com rigor aos objetivos de aprendizagem, se o vocabulário é adequado à maturidade dos alunos e se a argumentação é logicamente sólida.',
    teacherAction:
      'Ação do Professor: Ler criticamente antes de imprimir ou projetar, assinalando afirmações vagas ou imprecisas.',
    icon: FileSearch,
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    borderColor: 'border-blue-200',
    bgLight: 'bg-blue-50/40',
    iconColor: 'text-blue-600',
  },
  {
    number: 2,
    title: 'Iteração e Diálogo Pedagógico',
    summary:
      'A obtenção de um resultado adequado decorre frequentemente de um processo de diálogo com a ferramenta.',
    pedagogicalDetail:
      'Iteração e diálogo pedagógico: A obtenção de um resultado adequado decorre frequentemente de um processo de diálogo com a ferramenta. Ajuste as instruções, adicione restrições ou forneça exemplos adicionais para refinar a resposta.',
    teacherAction:
      'Ação do Professor: Dialogar iterativamente com o modelo, especificando correções, novos exemplos e restrições graduais.',
    icon: BookCheck,
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    borderColor: 'border-emerald-200',
    bgLight: 'bg-emerald-50/40',
    iconColor: 'text-emerald-600',
  },
  {
    number: 3,
    title: 'Adaptação ao Contexto Real e Curricular',
    summary:
      'Ajuste a linguagem, os exemplos e o nível de profundidade do conteúdo para se adequar ao seu público-alvo específico.',
    pedagogicalDetail:
      'Cada turma tem ritmos e percursos de aprendizagem singulares. O material gerado pela IA deve ser calibrado para o ano de escolaridade, perfil dos alunos, eventuais medidas de diferenciação pedagógica (DUA) e realidade da escola.',
    teacherAction:
      'Ação do Professor: Substituir exemplos genéricos por referências culturais, locais e curriculares portuguesas.',
    icon: Sliders,
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    borderColor: 'border-amber-200',
    bgLight: 'bg-amber-50/40',
    iconColor: 'text-amber-600',
  },
  {
    number: 4,
    title: 'Integração como Apoio Humano',
    summary:
      'Use a IA como uma ferramenta de suporte para auxiliar o seu trabalho, não para substituir o seu pensamento próprio e original.',
    pedagogicalDetail:
      'O professor é o decisor pedagógico e o arquiteto da experiência de aprendizagem. A IA funciona como instrumento de apoio para acelerar rascunhos, gerar alternativas e apoiar tarefas rotineiras, libertando tempo para a mediação pedagógica.',
    teacherAction:
      'Ação do Professor: Manter a autoria, a intencionalidade didática e o julgamento profissional no centro do processo.',
    icon: HeartHandshake,
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    borderColor: 'border-purple-200',
    bgLight: 'bg-purple-50/40',
    iconColor: 'text-purple-600',
  },
  {
    number: 5,
    title: 'Proteção de Dados e Privacidade (RGPD)',
    summary:
      'Não introduzir dados pessoais de alunos em ferramentas de IA. Utilizar exclusivamente dados anonimizados.',
    pedagogicalDetail:
      'Proteção de dados e privacidade: Não introduzir dados pessoais de alunos (nomes, fotografias, avaliações individuais, relatórios ou informações confidenciais) em ferramentas de IA. Utilizar exclusivamente dados anonimizados e assegurar a conformidade com o RGPD e as orientações da escola.',
    teacherAction:
      'Ação do Professor: Aplicar anonimização estrita e assegurar conformidade com o RGPD e orientações da escola.',
    icon: Lock,
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    borderColor: 'border-indigo-200',
    bgLight: 'bg-indigo-50/40',
    iconColor: 'text-indigo-600',
  },
  {
    number: 6,
    title: 'Consciência das Limitações dos Modelos',
    summary:
      'Reconheça que a IA pode errar, omitir informação ou gerar respostas que parecem plausíveis mas estão incorretas.',
    pedagogicalDetail:
      'Relembre sempre o princípio fundamental: «Resposta convincente ≠ Resposta correcta». A fluência verbal de um modelo não reflete raciocínio consciente nem discernimento ético. Embora a metáfora de "calculador de probabilidades" seja uma analogia didática simplificada, os sistemas generativos operam sem intencionalidade nem compreensão humana, gerando alucinações que requerem auditoria externa.',
    teacherAction:
      'Ação do Professor: Ensinar os alunos a desconfiar da verosimilhança superficial e a exercitar o pensamento crítico.',
    icon: AlertTriangle,
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    borderColor: 'border-red-200',
    bgLight: 'bg-red-50/40',
    iconColor: 'text-red-600',
  },
];

export const BoasPraticasPage: React.FC<BoasPraticasPageProps> = ({ onNavigate }) => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            7. Boas Práticas no Uso da IA na Educação
          </h1>
        </div>
      </div>

      {/* Hero Principle Banner: Uso Pedagógico Orientado */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0C1E38] via-[#0F2B52] to-[#1E4D8C] text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-white/10">
        <div className="max-w-3xl space-y-3 z-10 relative">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Uso Pedagógico Orientado
          </h2>

          <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
            «Utilize a IA com uma <strong>intencionalidade educativa clara</strong> e{' '}
            <strong>objetivos de aprendizagem bem definidos</strong>.»
          </p>

          <p className="text-xs text-blue-200/80 leading-relaxed pt-1">
            A tecnologia não define o rumo pedagógico; é o professor que mobiliza a ferramenta com
            critério, integrando-a nos momentos certos para potenciar a criatividade, a reflexão e a
            qualidade do trabalho educativo.
          </p>
        </div>
      </div>

      {/* Os 6 Pilares Estruturantes em Cartões Didáticos */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Os 6 Pilares de Boas Práticas para o Docente
            </h3>
            <p className="text-xs text-slate-500">
              Clique em qualquer pilar para aprofundar as orientações de aplicação em aula
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BOAS_PRATICAS_PILLARS.map((p) => {
            const Icon = p.icon;
            const isExpanded = selectedPillar === p.number;

            return (
              <div
                key={p.number}
                onClick={() => setSelectedPillar(isExpanded ? null : p.number)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 bg-white ${
                  isExpanded
                    ? 'ring-2 ring-blue-500/20 border-blue-500 shadow-md scale-[1.01]'
                    : `${p.borderColor} hover:shadow-xs hover:border-slate-300`
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${p.bgLight} ${p.iconColor}`}
                    >
                      #{p.number}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${p.badgeColor}`}
                    >
                      Pilar {p.number}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${p.iconColor} shrink-0`} />
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">{p.title}</h4>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium pt-1">
                      {p.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    {p.pedagogicalDetail}
                  </p>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px] text-slate-800 font-semibold leading-relaxed">
                    {p.teacherAction}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Checklist: Antes de utilizar um resultado gerado por IA */}
      <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#1E70EB] flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Antes de utilizar um resultado gerado por IA:
            </h3>
            <span className="text-xs text-slate-500">
              Critérios indispensáveis de verificação pedagógica e ética
            </span>
          </div>
        </div>

        <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-1">
          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Os factos e conceitos estão corretos e atualizados?</span>
          </div>
          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>A linguagem e a complexidade são adequadas aos alunos?</span>
          </div>
          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>A proposta cumpre as Aprendizagens Essenciais aplicáveis?</span>
          </div>
          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>O conteúdo respeita a diversidade e evita estereótipos?</span>
          </div>
          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Foram removidas referências ou elementos inadequados ao contexto escolar?</span>
          </div>
        </div>
      </div>

      {/* Protocolo Operacional de Privacidade e RGPD na Escola (Recomendação Crítica P0 da Auditoria) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-indigo-200/80 shadow-2xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Protocolo Operacional de Privacidade e RGPD na Escola
            </h3>
            <p className="text-xs text-slate-500">
              Orientações obrigatórias para utilização ética e legal de ferramentas de IA
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-1.5">
            <strong className="text-indigo-900 font-bold block uppercase tracking-wider text-[11px]">
              1. Minimização &amp; Anonimização
            </strong>
            <p className="text-slate-700 leading-relaxed">
              Nunca introduzir nomes, números de processo, fotografias, vozes ou detalhes de contexto que permitam identificar alunos direta ou indiretamente. A pseudonimização não garante anonimato se o contexto for único.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-1.5">
            <strong className="text-indigo-900 font-bold block uppercase tracking-wider text-[11px]">
              2. Definições de Conta &amp; Treino
            </strong>
            <p className="text-slate-700 leading-relaxed">
              Em plataformas comerciais públicas (ChatGPT, Gemini, Claude), verificar e desativar expressamente nas definições de privacidade a partilha de dados/conversas para treino de futuros modelos de IA.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-1.5">
            <strong className="text-indigo-900 font-bold block uppercase tracking-wider text-[11px]">
              3. Autorização &amp; Dados Biométricos
            </strong>
            <p className="text-slate-700 leading-relaxed">
              O recurso a ferramentas de síntese ou clonagem vocal e geração de imagem de alunos exige autorização formal prévia e informada dos encarregados de educação e homologação da Direção do Agrupamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
