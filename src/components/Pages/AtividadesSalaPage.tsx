import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Award,
  Layers,
  GraduationCap,
  ClipboardList,
  Image as ImageIcon,
} from 'lucide-react';
import { CLASSROOM_ACTIVITIES } from '../../data/courseData';
import { NoticeBanner } from '../Common/NoticeBanner';

// Generated activity images
import promptOuroImg from '../../assets/images/prompt_ouro_story_1793202272927.jpg';
import historiaInterativaImg from '../../assets/images/interactive_story_class_1793202290045.jpg';
import projetoCriativoImg from '../../assets/images/creative_science_project_1793202306250.jpg';
import problemasMatematicaImg from '../../assets/images/math_proportions_class_1793202321350.jpg';
import debateSalaImg from '../../assets/images/debate_sala_aula_1793369698449.jpg';

interface ActivityGuidance {
  pedagogicalFocus: string;
  teacherRole: string[];
  practicalTip: string;
  evaluationFocus: string;
}

const ACTIVITY_IMAGES: Record<string, { src: string; alt: string; tag: string }> = {
  'atividade-1': {
    src: promptOuroImg,
    alt: "Alunos a trabalhar na atividade 'O Prompt de Ouro', refinando textos iterativamente com IA",
    tag: 'Engenharia de Prompt Iterativa',
  },
  'atividade-2': {
    src: historiaInterativaImg,
    alt: "Alunas a colaborar na atividade 'Coautoria Controlada com IA', co-criando narrativas com IA",
    tag: 'Escrita Colaborativa e Criativa',
  },
  'atividade-3': {
    src: projetoCriativoImg,
    alt: "Alunos no laboratório a confrontar hipóteses científicas e dados históricos com o manual escolar",
    tag: 'Confronto Curricular e Rigor Científico',
  },
  'atividade-4': {
    src: problemasMatematicaImg,
    alt: "Estudantes em aula de matemática a verificar problemas de proporções e a auditar cálculos da IA",
    tag: 'Raciocínio Matemático e Auditoria Crítica',
  },
  'atividade-5': {
    src: debateSalaImg,
    alt: "Estudantes em sala de aula a participar num debate socrático e a testar argumentos com a IA",
    tag: 'Argumentação e Debate Socrático',
  },
};

const ACTIVITY_GUIDELINES: Record<string, ActivityGuidance> = {
  'atividade-1': {
    pedagogicalFocus:
      'Ensinar o aluno a ler criticamente um texto gerado pela IA, a dar instruções precisas para o melhorar e a assumir a revisão final pela própria mão.',
    teacherRole: [
      'Se os alunos não tiverem dispositivos ou idade para conta própria, projetar a IA no quadro e pedir aos pares que ditem os prompts da Etapa 2 para toda a turma ver a diferença.',
      'Circular pelas mesas na Etapa 2 e perguntar: "Em vez de pedirem à IA \'melhora o texto\', que palavra exata querem que ela mude ou acrescente?"',
      'Garantir que ninguém salta a Etapa 3: sublinhar que a IA é apenas o ponto de partida e que o texto só fica pronto depois da revisão humana.',
    ],
    practicalTip:
      'Não recolha capturas de ecrã nem links de contas pessoais. Recolha apenas a folha de papel da Etapa 4 com a tabela de 3 colunas e o texto revisto com as alterações dos alunos sublinhadas.',
    evaluationFocus:
      'Valorizar a capacidade de diagnosticar falhas no texto inicial, a precisão das instruções de refinamento e a qualidade da revisão manual final.',
  },
  'atividade-2': {
    pedagogicalFocus:
      'Garantir que a autoria e a redação pertencem aos alunos, ensinando-os a usar a IA apenas para gerar opções quando têm um bloqueio criativo.',
    teacherRole: [
      'Só autorizar o uso da IA na Etapa 3 depois de verificar que o grupo já tem o plano e o 1.º parágrafo escritos no papel.',
      'Verificar se os alunos incluíram no prompt a frase "NÃO continues a escrever a história", evitando que a IA faça o trabalho pelo grupo.',
      'Elogiar os grupos que decidem misturar duas ideias da IA ou até rejeitar as sugestões por terem encontrado uma ideia melhor entre colegas.',
    ],
    practicalTip:
      'Peça aos grupos para entregarem a folha manuscrita com as 3 partes visíveis: o Plano Inicial no topo, o Texto da História no meio e a caixa da Declaração de Uso de IA no fundo.',
    evaluationFocus:
      'Avaliar a coesão narrativa, a criatividade autoral dos alunos e a transparência na declaração de uso da ferramenta.',
  },
  'atividade-3': {
    pedagogicalFocus:
      'Colocar os alunos no papel de "avaliadores científicos/históricos" da IA, obrigando-os a estudar ativamente pelo manual para encontrar imprecisões.',
    teacherRole: [
      'Ler rapidamente o texto gerado pela IA na Etapa 1 para confirmar que os 3 erros estão mesmo ligados à matéria que os alunos deram na aula.',
      'Dar pistas aos grupos que estejam bloqueados na Etapa 2: "Confirmem no manual se esse instrumento já tinha sido inventado nesse século" ou "Verifiquem na página X onde ocorre essa reação".',
      'Se a IA tiver cometido um 4.º erro sem querer (alucinação), aproveitar o momento para mostrar à turma que a IA nunca substitui o manual.',
    ],
    practicalTip:
      'Esta atividade funciona perfeitamente sem computadores para os alunos: basta o professor gerar e imprimir o texto antes da aula e recolher no fim a folha com os 3 erros sublinhados e corrigidos.',
    evaluationFocus:
      'Avaliar o rigor conceptual na deteção das falhas e a fundamentação das correções com base no manual escolar.',
  },
  'atividade-4': {
    pedagogicalFocus:
      'Impedir a cópia passiva de contas: o aluno calcula primeiro no papel e usa o seu conhecimento matemático para avaliar se a máquina acertou ou falhou.',
    teacherRole: [
      'Garantir que no prompt da Etapa 1 consta "NÃO mostres a resolução", para que os alunos pensem autonomamente durante a Etapa 2.',
      'Propor pelo menos um problema de proporcionalidade inversa (ex.: "3 torneiras enchem um tanque em 6 horas; quanto demoram 6 torneiras?"), onde os modelos de IA cometem frequentemente erros de lógica.',
      'Mostrar aos alunos que, mesmo quando o resultado final da IA está certo, a resolução dos alunos no caderno pode ser mais clara ou direta.',
    ],
    practicalTip:
      'Recolha a folha do caderno dividida ao meio: do lado esquerdo a resolução manual feita pelos alunos na Etapa 2; do lado direito o "Selo de Auditoria" com a análise à resposta da IA.',
    evaluationFocus:
      'Avaliar a exatidão do cálculo manual independente, a justificação da proporcionalidade e a deteção crítica de erros da IA.',
  },
  'atividade-5': {
    pedagogicalFocus:
      'Inverter o papel habitual da IA: em vez de os alunos fazerem perguntas para copiar respostas, é a IA que faz perguntas desafiadoras para obrigar os alunos a pensar e argumentar melhor.',
    teacherRole: [
      'Escolher uma pergunta inicial ligada ao currículo onde existam bons argumentos dos dois lados (aplicável a Português, História, Cidadania, Geografia, Filosofia ou Ciências).',
      'Garantir que os grupos escrevem primeiro os seus 3 argumentos no papel antes de recorrerem à IA na Etapa 2.',
      'Durante a Etapa 3, incentivar os alunos a não responderem com simples opiniões ("nós achamos que..."), mas sim com dados concretos do manual escolar.',
    ],
    practicalTip:
      'Entregue a cada grupo uma folha A4 dividida em 3 caixas ("Mapa de Debate"): Caixa 1 (Os nossos 3 argumentos iniciais) -> Caixa 2 (As 2 perguntas difíceis que a IA nos fez) -> Caixa 3 (As nossas respostas finais fundamentadas).',
    evaluationFocus:
      'Avaliar a solidez dos argumentos iniciais, o uso de evidências curriculares na contra-argumentação e a capacidade de síntese oral.',
  },
};

export const AtividadesSalaPage: React.FC = () => {
  const [activeActivityIdx, setActiveActivityIdx] = useState(0);

  const activity = CLASSROOM_ACTIVITIES[activeActivityIdx];
  const guidelines =
    ACTIVITY_GUIDELINES[activity.id] || ACTIVITY_GUIDELINES['atividade-1'];
  const currentImage = ACTIVITY_IMAGES[activity.id];

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            8. Ideias de Atividade a dinamizar com os alunos em contexto de sala de aula
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Guiões didáticos estruturados, objetivos pedagógicos, critérios de avaliação e orientações docentes
          </p>
        </div>
      </div>

      {/* 5 Activities Selector Cards with Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {CLASSROOM_ACTIVITIES.map((act, idx) => {
          const isSelected = activeActivityIdx === idx;
          const imgData = ACTIVITY_IMAGES[act.id];

          return (
            <button
              key={act.id}
              onClick={() => setActiveActivityIdx(idx)}
              className={`group rounded-2xl border text-left transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-500/30'
                  : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:shadow-xs'
              }`}
            >
              {/* Card Image Thumbnail */}
              <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                <img
                  src={imgData?.src}
                  alt={imgData?.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 transition-opacity ${
                    isSelected ? 'bg-blue-900/30' : 'bg-black/10 group-hover:bg-black/5'
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-2.5 font-mono text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs ${
                    isSelected
                      ? 'bg-white text-blue-700'
                      : 'bg-[#0A1E38]/90 text-white backdrop-blur-xs'
                  }`}
                >
                  Ideia {act.number}
                </span>
              </div>

              {/* Card Info */}
              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-xs sm:text-sm font-bold block leading-snug line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-slate-900 group-hover:text-blue-600'
                    }`}
                  >
                    {act.title}
                  </h3>
                  <p
                    className={`text-[11px] leading-relaxed mt-1 line-clamp-2 ${
                      isSelected ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {act.subtitle}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-semibold">
                  <span
                    className={
                      isSelected ? 'text-blue-100' : 'text-blue-600'
                    }
                  >
                    Ver guião completo
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      isSelected
                        ? 'text-white'
                        : 'text-blue-600 group-hover:translate-x-0.5 transition-transform'
                    }`}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Activity Details */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden">
        {/* Featured Activity Banner Image */}
        {currentImage && (
          <div className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden bg-slate-900">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E38] via-[#0A1E38]/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 right-4 sm:right-8 text-white z-10 flex flex-wrap items-end justify-between gap-3">
              <div className="space-y-1 max-w-2xl">
                <span className="inline-block text-[11px] uppercase tracking-wider font-bold bg-blue-500/80 px-2.5 py-0.5 rounded-full text-white backdrop-blur-xs">
                  {currentImage.tag}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {activity.title}
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 font-medium">
                  {activity.subtitle}
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white">
                <Users className="w-3.5 h-3.5 text-blue-300" />
                <span>Atividade {activity.number} de {CLASSROOM_ACTIVITIES.length}</span>
              </div>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Official steps from Syllabus (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1E70EB]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Etapas de Implementação em Aula:
                  </h3>
                </div>

                <div className="space-y-3">
                  {activity.implementation.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1E70EB] font-bold text-[11px] flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">
                          {step.step}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed pl-7 font-normal">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objectives and Evaluation Box */}
              <div className="bg-[#EFF6FF] p-5 rounded-2xl border border-blue-100 space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1E70EB]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Objetivos Pedagógicos & Critérios de Avaliação
                  </h3>
                </div>
                <div className="text-xs text-slate-800 space-y-2 leading-relaxed">
                  <p>
                    <strong>Objetivos:</strong> {activity.objectivesAndEvaluation.objectives}
                  </p>
                  <p>
                    <strong>Critérios de Avaliação:</strong> {activity.objectivesAndEvaluation.evaluation}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Practical Classroom Pedagogical Guidance (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#F8FAFC] to-blue-50/50 p-5 sm:p-6 rounded-3xl border border-blue-200/60 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1E70EB] flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Orientações para o Professor
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        Mediação didática em contexto escolar
                      </span>
                    </div>
                  </div>
                </div>

                {/* Foco Pedagógico */}
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Foco Didático Central:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {guidelines.pedagogicalFocus}
                  </p>
                </div>

                {/* Papel do Professor na Sala */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Papel do Professor na Dinâmica de Aula:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {guidelines.teacherRole.map((role, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dica Prática de Gestão */}
                <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <ClipboardList className="w-3.5 h-3.5 text-amber-700" />
                    <span>Dica Prática de Recolha de Evidências:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-amber-900 font-normal">
                    {guidelines.practicalTip}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>Atividade de Sala de Aula</span>
                <span className="font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                  Módulo 2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orientações para implementação & Utilização por alunos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-2.5">
          <h3 className="text-sm font-bold text-[#0C1E38] uppercase tracking-wider">
            Orientações para implementação
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            A integração de ferramentas de IA em contexto educativo deve responder a finalidades pedagógicas claras. As propostas apresentadas constituem exemplos de exploração que exigem sempre a mediação crítica do docente e a adaptação ao nível de ensino e aos recursos disponíveis na escola.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-2.5">
          <h3 className="text-sm font-bold text-[#0C1E38] uppercase tracking-wider">
            Utilização por alunos
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            A utilização direta de ferramentas de IA generativa por alunos requer:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Verificação prévia da idade mínima exigida pelos termos de utilização de cada ferramenta.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Autorização dos encarregados de educação, quando aplicável.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Mediação e supervisão pedagógica contínua.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E70EB] mt-1.5 shrink-0"></span>
              <span>Sensibilização para a literacia digital, o pensamento crítico e a integridade académica.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
