import { Quiz } from '@/lib/bible-data';
import { calculateScore, formatTime, cn } from '@/lib/utils';
import Link from 'next/link';

interface QuizResultsProps {
  quiz: Quiz;
  answers: number[];
  timeTaken: number;
  onRestartQuiz: () => void;
}

export function QuizResults({ quiz, answers, timeTaken, onRestartQuiz }: QuizResultsProps) {
  const correctAnswers = answers.filter((answer, index) => 
    answer === quiz.questions[index].correctAnswer
  ).length;
  
  const { percentage, grade, message } = calculateScore(correctAnswers, quiz.questions.length);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-50 border-green-200';
    if (percentage >= 80) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (percentage >= 60) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const shareText = `I just scored ${percentage}% on the "${quiz.title}" quiz at BibleQuizNow! Test your biblical knowledge too:`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Quiz Complete!
          </h1>
          <p className="text-xl text-primary-100">
            Here's how you did on "{quiz.title}"
          </p>
        </div>

        <div className="p-8">
          {/* Score Summary */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-4 ${getScoreColor(percentage)} mb-6`}>
              <div className="text-center">
                <div className="text-3xl font-bold">{percentage}%</div>
                <div className="text-sm font-medium">{grade}</div>
              </div>
            </div>
            
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-2">
              {message}
            </h2>
            
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{correctAnswers}</div>
                <div className="text-sm">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{quiz.questions.length - correctAnswers}</div>
                <div className="text-sm">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{formatTime(Math.round(timeTaken / 60))}</div>
                <div className="text-sm">Time Taken</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={onRestartQuiz}
              className="btn-primary"
            >
              Retake Quiz
            </button>
            <Link href="/quizzes" className="btn-secondary text-center">
              Browse More Quizzes
            </Link>
          </div>

          {/* Share Results */}
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h3 className="font-semibold text-gray-900 mb-4">Share Your Results</h3>
            <div className="flex justify-center space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Share on Twitter
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: quiz.title,
                      text: shareText,
                      url: shareUrl,
                    });
                  } else {
                    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
                    alert('Results copied to clipboard!');
                  }
                }}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share Results
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100">
          <h3 className="text-xl font-display font-semibold text-gray-900">
            Review Your Answers
          </h3>
          <p className="text-gray-600 mt-1">
            See the correct answers and explanations for each question
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {quiz.questions.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={question.id} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0',
                    isCorrect 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  )}>
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">
                      {question.question}
                    </h4>
                    
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={cn(
                            'p-3 rounded-lg border',
                            optionIndex === question.correctAnswer
                              ? 'bg-green-50 border-green-200 text-green-800'
                              : optionIndex === userAnswer && !isCorrect
                              ? 'bg-red-50 border-red-200 text-red-800'
                              : 'bg-gray-50 border-gray-200 text-gray-700'
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">
                              {String.fromCharCode(65 + optionIndex)}.
                            </span>
                            <span>{option}</span>
                            {optionIndex === question.correctAnswer && (
                              <span className="text-green-600">✓</span>
                            )}
                            {optionIndex === userAnswer && !isCorrect && (
                              <span className="text-red-600">✗</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-blue-800 font-medium mb-1">Explanation</p>
                          <p className="text-blue-700 text-sm leading-relaxed">
                            {question.explanation}
                          </p>
                          <p className="text-blue-600 text-xs mt-2 font-medium">
                            Reference: {question.verseReference}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
