import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../../data/courseData';

export const QuizInteractive: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const total = 5; // Exactly 5 questions shown as in reference "Pergunta 2 de 5"

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    // Instant submission feedback as in reference image!
    const isCorrect = idx === currentQ.correctAnswer;
    if (isCorrect && !isAnswerSubmitted) {
      setScore((prev) => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < total - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  const progressPercent = Math.round(((currentQuestionIndex + 1) / total) * 100);

  if (showResults) {
    const percentage = Math.round((score / total) * 100);
    return (
      <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-2xs text-center max-w-xl mx-auto space-y-5">
        <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
          <Award className="w-7 h-7" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Quiz Concluído
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            Pontuação: {score} de {total} ({percentage}%)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
            {percentage >= 80
              ? 'Excelente compreensão dos conceitos de IA generativa e engenharia de prompts!'
              : 'Bom esforço! Reveja as técnicas e os elementos estruturais de um prompt para consolidar o conhecimento.'}
          </p>
        </div>

        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <button
          onClick={handleRestartQuiz}
          className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Repetir Quiz</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-6 font-sans">
      {/* Title & Progress Header matching imagem_aa589f90.png */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#2563EB] rounded-full inline-block"></span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F274E] tracking-tight">
            Quiz: Teste os seus conhecimentos
          </h2>
        </div>

        <div className="flex items-center gap-4 pt-1">
          <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#10B981] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">
            Pergunta {currentQuestionIndex + 1} de {total}
          </span>
        </div>
      </div>

      {/* Question Text */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {currentQ.question}
        </h3>

        {/* Radio Choices */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                {/* Custom Radio Button */}
                <span
                  className={`w-5 h-5 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-[#2563EB]'
                      : 'border-slate-300 group-hover:border-slate-400'
                  }`}
                >
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
                  )}
                </span>

                <span
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isSelected ? 'font-semibold text-slate-900' : 'text-slate-700'
                  }`}
                >
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feedback box matching imagem_aa589f90.png */}
        {isAnswerSubmitted && (
          <div
            className={`p-4 rounded-2xl border animate-in fade-in space-y-1 ${
              selectedOption === currentQ.correctAnswer
                ? 'bg-[#ECFDF5] border-emerald-200 text-[#065F46]'
                : 'bg-[#FEF2F2] border-rose-200 text-[#991B1B]'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
              {selectedOption === currentQ.correctAnswer ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Correto!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Incorreto.</span>
                </>
              )}
            </div>
            <p className="text-xs leading-relaxed pl-6">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Next Question Button aligned right matching imagem_aa589f90.png */}
        {isAnswerSubmitted && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <span>
                {currentQuestionIndex < total - 1 ? 'Próxima pergunta' : 'Ver resultado'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
