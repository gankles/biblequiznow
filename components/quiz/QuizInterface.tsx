'use client';

import { useState } from 'react';
import { Quiz } from '@/lib/bible-data';
import { QuizIntro } from './QuizIntro';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { RelatedQuizzes } from './RelatedQuizzes';

interface QuizInterfaceProps {
  quiz: Quiz;
  relatedQuizzes: Quiz[];
}

type QuizState = 'intro' | 'taking' | 'results';

export function QuizInterface({ quiz, relatedQuizzes }: QuizInterfaceProps) {
  const [state, setState] = useState<QuizState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const handleStartQuiz = () => {
    setState('taking');
    setStartTime(new Date());
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswerQuestion = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      setEndTime(new Date());
      setState('results');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestartQuiz = () => {
    setState('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setStartTime(null);
    setEndTime(null);
  };

  const calculateTimeTaken = (): number => {
    if (!startTime || !endTime) return 0;
    return Math.round((endTime.getTime() - startTime.getTime()) / 1000);
  };

  if (state === 'intro') {
    return (
      <div className="space-y-8">
        <QuizIntro quiz={quiz} onStartQuiz={handleStartQuiz} />
        <RelatedQuizzes quizzes={relatedQuizzes} />
      </div>
    );
  }

  if (state === 'taking') {
    return (
      <QuizQuestion
        quiz={quiz}
        currentQuestionIndex={currentQuestionIndex}
        selectedAnswer={answers[currentQuestionIndex]}
        onAnswerSelect={handleAnswerQuestion}
        onPrevious={handlePreviousQuestion}
        canGoPrevious={currentQuestionIndex > 0}
      />
    );
  }

  if (state === 'results') {
    return (
      <div className="space-y-8">
        <QuizResults
          quiz={quiz}
          answers={answers}
          timeTaken={calculateTimeTaken()}
          onRestartQuiz={handleRestartQuiz}
        />
        <RelatedQuizzes quizzes={relatedQuizzes} />
      </div>
    );
  }

  return null;
}
