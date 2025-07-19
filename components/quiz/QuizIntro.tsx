import { Quiz } from '@/lib/bible-data';
import { getDifficultyColor, getDifficultyIcon, formatTime } from '@/lib/utils';

interface QuizIntroProps {
  quiz: Quiz;
  onStartQuiz: () => void;
}

export function QuizIntro({ quiz, onStartQuiz }: QuizIntroProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className={`difficulty-badge bg-white/20 border-white/30 text-white`}>
              <span className="mr-1">{getDifficultyIcon(quiz.difficulty)}</span>
              {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)} Level
            </span>
            <span className="text-primary-100">•</span>
            <span className="text-primary-100">{formatTime(quiz.estimatedTime)}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {quiz.title}
          </h1>
          
          <p className="text-xl text-primary-100 leading-relaxed">
            {quiz.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Quiz Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quiz Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Questions</span>
                  <span className="font-medium text-gray-900">{quiz.questions.length}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Estimated Time</span>
                  <span className="font-medium text-gray-900">{formatTime(quiz.estimatedTime)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Difficulty</span>
                  <span className={`difficulty-badge ${getDifficultyColor(quiz.difficulty)}`}>
                    <span className="mr-1">{getDifficultyIcon(quiz.difficulty)}</span>
                    {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Format</span>
                  <span className="font-medium text-gray-900">Multiple Choice</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Topics Covered</h4>
              <div className="flex flex-wrap gap-2">
                {quiz.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructions</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">1</span>
                  </div>
                  <p>Read each question carefully and select the best answer from the options provided.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">2</span>
                  </div>
                  <p>You can go back to previous questions to change your answers.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">3</span>
                  </div>
                  <p>After completing all questions, you'll see your score and detailed explanations.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">4</span>
                  </div>
                  <p>No login required - your progress is saved locally during the quiz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Did You Know */}
        <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-secondary-700 text-lg">💡</span>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Did You Know?</h4>
              <p className="text-secondary-800">{quiz.didYouKnow}</p>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={onStartQuiz}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Quiz Now
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Ready to test your biblical knowledge? Click above to begin!
          </p>
        </div>
      </div>
    </div>
  );
}
