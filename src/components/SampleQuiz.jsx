import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { sampleQuizQuestions } from '../data/sampleQuizData';
import { whatsappUrl } from '../constants/contact';

const TOTAL = sampleQuizQuestions.length;

// ─── Teaser Card ────────────────────────────────────────────────────
function QuizTeaser({ onStart }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-3xl mb-5 shadow-lg">
        📝
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
        Are You Ready for the RTO Test?
      </h3>
      <p className="text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
        Take a quick 5-question quiz to test your driving knowledge. See how
        prepared you are for the real RTO exam!
      </p>
      <button
        onClick={onStart}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      >
        Start Quick Quiz →
      </button>
      <p className="text-xs text-gray-400 mt-3">
        Free · 5 Questions · No sign-up needed
      </p>
    </div>
  );
}

// ─── Question Card ──────────────────────────────────────────────────
function QuestionCard({
  question,
  index,
  onAnswer,
  selectedAnswer,
  showFeedback,
}) {
  return (
    <div className="animate-scale-in">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-500">
          Question {index + 1} of {TOTAL}
        </span>
        <div className="flex gap-1.5">
          {sampleQuizQuestions.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i < index
                  ? 'bg-blue-500'
                  : i === index
                    ? 'bg-blue-600 ring-2 ring-blue-200'
                    : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1.5 rounded-full mb-6 overflow-hidden">
        <div
          className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${((index + 1) / TOTAL) * 100}%` }}
        />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-5 leading-snug">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((opt, i) => {
          const isSelected = selectedAnswer === i;
          const isCorrect = i === question.answer;
          const showCorrect = showFeedback && isCorrect;
          const showWrong = showFeedback && isSelected && !isCorrect;

          return (
            <button
              key={i}
              disabled={showFeedback}
              onClick={() => onAnswer(i)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200
                ${
                  showCorrect
                    ? 'bg-green-50 border-green-400 text-green-800'
                    : showWrong
                      ? 'bg-red-50 border-red-400 text-red-800'
                      : isSelected
                        ? 'bg-blue-50 border-blue-400'
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 cursor-pointer'
                }
                ${showFeedback ? '' : 'cursor-pointer'}`}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2
                    ${
                      showCorrect
                        ? 'bg-green-500 border-green-500 text-white'
                        : showWrong
                          ? 'bg-red-500 border-red-500 text-white'
                          : isSelected
                            ? 'bg-blue-500 border-blue-500 text-white'
                            : 'bg-white border-gray-300 text-gray-500'
                    }`}
                >
                  {showCorrect
                    ? '✓'
                    : showWrong
                      ? '✗'
                      : String.fromCharCode(65 + i)}
                </span>
                <span className="font-medium text-sm md:text-base">{opt}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div
          className={`mt-4 p-4 rounded-xl text-sm animate-fade-in ${
            selectedAnswer === question.answer
              ? 'bg-green-50 border border-green-200 text-green-700'
              : 'bg-amber-50 border border-amber-200 text-amber-700'
          }`}
        >
          <span className="font-semibold">
            {selectedAnswer === question.answer
              ? '✅ Correct!'
              : '❌ Incorrect.'}
          </span>{' '}
          {question.explanation}
        </div>
      )}
    </div>
  );
}

// ─── Result + Paywall CTA ───────────────────────────────────────────
function QuizResult({ score, onRestart }) {
  const percentage = Math.round((score / TOTAL) * 100);
  const isPassing = score >= 3;

  return (
    <div className="text-center animate-scale-in">
      {/* Score Circle */}
      <div
        className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-bold mb-4 shadow-lg ${
          isPassing
            ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white'
            : 'bg-gradient-to-br from-amber-400 to-orange-500 text-white'
        }`}
      >
        {score}/{TOTAL}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
        {isPassing ? 'Great Job! 🎉' : 'Keep Practicing! 💪'}
      </h3>
      <p className="text-gray-500 text-sm mb-6">
        You scored {percentage}% on the sample quiz
      </p>

      {/* Paywall CTA Card */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />

        <div className="relative z-10">
          <h4 className="text-lg md:text-xl font-bold mb-2">
            Want the Full 80-Question Bank?
          </h4>
          <p className="text-blue-100 text-sm mb-2 max-w-sm mx-auto leading-relaxed">
            Access our complete RTO mock test with timed exams, answer reviews,
            and question tracking — just like the real test.
          </p>
          <p className="text-xs text-blue-200 mb-5 italic">
            ⚡ Students who practice mock tests pass 2x faster
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/mocktest"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 hover:scale-[1.02] transition-all duration-300 shadow-md"
            >
              🎯 Take Full Mock Test
            </Link>
            <button
              onClick={() =>
                window.open(
                  whatsappUrl(
                    'Hi Royal Motor Training School, I just took the sample quiz on your website. I would like to enroll for driving training.'
                  )
                )
              }
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 hover:scale-[1.02] transition-all duration-300 shadow-md cursor-pointer"
            >
              🚗 Enroll & Start Training
            </button>
          </div>
        </div>
      </div>

      {/* Retry */}
      <button
        onClick={onRestart}
        className="mt-4 text-sm text-blue-600 font-medium hover:underline cursor-pointer"
      >
        ↻ Try Again
      </button>
    </div>
  );
}

// ─── Main SampleQuiz ────────────────────────────────────────────────
function SampleQuiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = useCallback(
    (answerIndex) => {
      setSelectedAnswer(answerIndex);
      setShowFeedback(true);

      if (answerIndex === sampleQuizQuestions[current].answer) {
        setScore((s) => s + 1);
      }

      // Auto-advance after feedback
      setTimeout(() => {
        if (current < TOTAL - 1) {
          setCurrent((c) => c + 1);
          setSelectedAnswer(null);
          setShowFeedback(false);
        } else {
          setFinished(true);
        }
      }, 1500);
    },
    [current]
  );

  const handleRestart = () => {
    setStarted(false);
    setCurrent(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setFinished(false);
  };

  return (
    <section
      id="sample-quiz"
      className="py-14 md:py-20 px-6 bg-white"
      aria-labelledby="quiz-heading"
    >
      <div className="max-w-xl mx-auto">
        {/* Section Label */}
        {!started && (
          <div className="text-center mb-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
              Free Sample Test
            </span>
          </div>
        )}

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
          {!started ? (
            <QuizTeaser onStart={() => setStarted(true)} />
          ) : finished ? (
            <QuizResult score={score} onRestart={handleRestart} />
          ) : (
            <QuestionCard
              question={sampleQuizQuestions[current]}
              index={current}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
              showFeedback={showFeedback}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default SampleQuiz;
