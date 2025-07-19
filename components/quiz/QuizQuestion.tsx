import { Quiz } from '@/lib/bible-data';
import { cn } from '@/lib/utils';

interface QuizQuestionProps {
  quiz: Quiz;
  currentQuestionIndex: number;
  selectedAnswer?: number;
  onAnswerSelect: (answerIndex: number) => void;
  onPrevious: () => void;
  canGoPrevious: boolean;
}

export function QuizQuestion({
  quiz,
  currentQuestionIndex,
  selectedAnswer,
  onAnswerSelect,
  onPrevious,
  canGoPrevious,
}: QuizQuestionProps) {
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Progress Header */}
      <div className="bg-gray-50 px-8 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-900">{quiz.title}</h2>
            <span className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {Math.round(progress)}% Complete
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Content */}
      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4 leading-relaxed">
              {currentQuestion.question}
            </h3>
            
            {/* Question Meta */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Reference: {currentQuestion.verseReference}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="capitalize">{currentQuestion.difficulty}</span>
              </div>
            </div>
          </div>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={cn(
                  'w-full text-left p-6 rounded-lg border-2 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50',
                  selectedAnswer === index
                    ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                    : 'border-gray-200 bg-white'
                )}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm transition-colors duration-200',
                      selectedAnswer === index
                        ? 'border-primary-500 bg-primary-500 text-white'
                        : 'border-gray-300 text-gray-500'
                    )}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-gray-900 font-medium leading-relaxed">
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={onPrevious}
              disabled={!canGoPrevious}
              className={cn(
                'flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200',
                canGoPrevious
                  ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-gray-400 cursor-not-allowed'
              )}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous</span>
            </button>

            <div className="text-center">
              {selectedAnswer !== undefined ? (
                <div className="text-sm text-green-600 font-medium">
                  ✓ Answer selected
                </div>
              ) : (
                <div className="text-sm text-gray-500">
                  Select an answer to continue
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                {currentQuestionIndex === quiz.questions.length - 1 
                  ? 'Complete Quiz' 
                  : 'Next Question'
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Question Counter */}
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
        <div className="flex items-center justify-center space-x-2">
          {quiz.questions.map((_, index) => (
            <div
              key={index}
              className={cn(
                'w-3 h-3 rounded-full transition-colors duration-200',
                index < currentQuestionIndex
                  ? 'bg-green-500'
                  : index === currentQuestionIndex
                  ? 'bg-primary-500'
                  : 'bg-gray-300'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
