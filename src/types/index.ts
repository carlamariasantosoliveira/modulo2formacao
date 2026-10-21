export type PageId =
  | 'home'
  | 'ia-generativa'
  | 'como-funcionam'
  | 'tipos-modelos'
  | 'prompts'
  | 'tecnicas'
  | 'exemplos-disciplina'
  | 'atividades-sala'
  | 'magicschool'
  | 'simuladores-quizzes'
  | 'simulador-modelos'
  | 'simulador-difusao'
  | 'laboratorio-prompts'
  | 'quiz-interativo'
  | 'criador-recursos'
  | 'desafio-final'
  | 'ferramentas-referencias';

export interface PageMeta {
  id: PageId;
  number: number;
  title: string;
  shortTitle: string;
  iconName: string;
  description: string;
  category: 'intro' | 'conceitos' | 'prompts' | 'pratica' | 'recursos';
}

export interface PromptElement {
  label: string;
  description: string;
  example: string;
  color: string;
}

export interface PromptTechnique {
  id: number;
  name: string;
  description: string;
  vaguePrompt: string;
  vagueContext?: string;
  optimizedPrompt: string;
  optimizedNotes?: string;
}

export interface DisciplinePrompt {
  id: string;
  discipline: string;
  grade: string;
  title: string;
  prompt: string;
  category: 'curriculo' | 'multimedia' | 'comunicacao';
  keyAspects: string[];
}

export interface ClassroomActivity {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  implementation: {
    step: string;
    description: string;
  }[];
  objectivesAndEvaluation: {
    objectives: string;
    evaluation: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  conceptCovered: string;
}

export interface BibliographicReference {
  id: string;
  authors: string;
  year: string;
  title: string;
  publication: string;
  category: 'etica' | 'prompts' | 'relatorios' | 'ia-geral';
  url?: string;
}

export interface MagicSchoolTool {
  id: string;
  name: string;
  role: 'professor' | 'aluno' | 'gerador';
  description: string;
  example: string;
  suggestedPrompt: string;
}
