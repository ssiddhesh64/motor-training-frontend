// MockTest.jsx (Pure Tailwind - No external UI libs)
import { useState, useEffect, useCallback } from 'react';
import { questions as allQuestions } from '../data/questions';
import StartScreen from '../components/StartTestScreen';

function shuffle(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

const TOTAL = 15;
const PASS_MARK = 11;
const TOTAL_TIME = 30 * 60;

// ─── Palette Legend ────────────────────────────────────────────────────────────
function PaletteLegend() {
  return (
    <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
      <span className="flex items-center gap-1">
        <span className="w-4 h-4 rounded bg-blue-600 inline-block" /> Current
      </span>
      <span className="flex items-center gap-1">
        <span className="w-4 h-4 rounded bg-green-200 inline-block" /> Answered
      </span>
      <span className="flex items-center gap-1">
        <span className="w-4 h-4 rounded bg-amber-100 border border-amber-300 inline-block" />{' '}
        Flagged
      </span>
      <span className="flex items-center gap-1">
        <span className="w-4 h-4 rounded bg-gray-100 inline-block" /> Not
        visited
      </span>
    </div>
  );
}

// ─── Confirm Submit Modal ──────────────────────────────────────────────────────
function ConfirmModal({ unanswered, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
        <h3 className="text-lg font-bold mb-2">Submit Test?</h3>
        {unanswered > 0 && (
          <p className="text-amber-600 text-sm mb-3">
            ⚠️ You have <strong>{unanswered}</strong> unanswered question
            {unanswered > 1 ? 's' : ''}. Unanswered questions will be marked
            wrong.
          </p>
        )}
        <p className="text-gray-600 text-sm mb-5">
          Once submitted, you cannot change your answers.
        </p>
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
            onClick={onCancel}
          >
            Go Back
          </button>
          <button
            className="flex-1 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition font-semibold"
            onClick={onConfirm}
          >
            Yes, Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Result Screen ─────────────────────────────────────────────────────────────
function ResultScreen({ questions, answers, timeTaken, onRestart }) {
  const score = questions.reduce(
    (s, q, i) => (answers[i] === q.answer ? s + 1 : s),
    0
  );
  const passed = score >= PASS_MARK;
  const unanswered = questions.filter(
    (_, i) => answers[i] === undefined
  ).length;
  const accuracy = Math.round((score / TOTAL) * 100);
  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Summary Card */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <div className="text-center mb-6">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl font-bold mb-3
                ${passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
            >
              {passed ? '✓' : '✗'}
            </div>
            <h2 className="text-2xl font-bold">
              {passed ? 'Congratulations!' : 'Better luck next time'}
            </h2>
            <p
              className={`font-bold text-lg mt-1 ${passed ? 'text-green-600' : 'text-red-600'}`}
            >
              {passed ? 'PASS' : 'FAIL'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Score', value: `${score}/${TOTAL}` },
              { label: 'Accuracy', value: `${accuracy}%` },
              { label: 'Time taken', value: `${mins}m ${secs}s` },
              { label: 'Unanswered', value: unanswered },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-gray-50 rounded-xl p-3 text-center"
              >
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-lg font-bold text-gray-800">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm text-gray-500 mb-1">
              Pass mark: {PASS_MARK}/{TOTAL}
            </p>
            <button
              className="mt-2 bg-blue-600 text-white px-8 py-2 rounded-xl hover:bg-blue-700 transition font-semibold"
              onClick={onRestart}
            >
              Try Again
            </button>
          </div>
        </div>

        {/* Review */}
        <h3 className="font-bold text-gray-700 mb-3 px-1">Answer Review</h3>
        <div className="space-y-4">
          {questions.map((q, i) => {
            const userAns = answers[i];
            const correct = q.answer;
            const isRight = userAns === correct;
            const skipped = userAns === undefined;

            return (
              <div
                key={i}
                className={`bg-white rounded-xl shadow p-4 border-l-4
                  ${isRight ? 'border-green-400' : skipped ? 'border-gray-300' : 'border-red-400'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="font-semibold text-sm">
                    Q{i + 1}. {q.question}
                  </h4>
                  <span
                    className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full
                      ${isRight ? 'bg-green-100 text-green-700' : skipped ? 'bg-gray-100 text-gray-500' : 'bg-red-100 text-red-700'}`}
                  >
                    {isRight ? 'Correct' : skipped ? 'Skipped' : 'Wrong'}
                  </span>
                </div>

                <div className="space-y-2">
                  {q.options.map((opt, idx) => {
                    const isCorrect = idx === correct;
                    const isUser = idx === userAns;
                    return (
                      <div
                        key={idx}
                        className={`p-2 rounded-lg border text-sm
                          ${isCorrect ? 'bg-green-100 border-green-400 font-medium' : ''}
                          ${isUser && !isCorrect ? 'bg-red-100 border-red-400' : ''}
                          ${!isCorrect && !isUser ? 'border-gray-200' : ''}`}
                      >
                        {isCorrect && <span className="mr-1">✓</span>}
                        {isUser && !isCorrect && (
                          <span className="mr-1">✗</span>
                        )}
                        {opt}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Main MockTest ─────────────────────────────────────────────────────────────
export default function MockTest() {
  const [started, setStarted] = useState(false);
  // const [questions, setQuestions] = useState([]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [timetaken, setTimetaken] = useState(0);

  const [questions, setQuestions] = useState(() => {
    const q = shuffle(allQuestions).slice(0, TOTAL);
    return q;
  });

  const initQuestions = useCallback(() => {
    const q = shuffle(allQuestions).slice(0, TOTAL);
    setQuestions(q);
  }, []);

  const finishTest = useCallback((taken) => {
    setTimetaken(taken);
    setFinished(true);
    setShowResult(true);
  }, []);

  // Timer
  useEffect(() => {
    if (!started || !questions.length || finished) return;

    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          finishTest(TOTAL_TIME);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [started, questions.length, finished, finishTest]);

  const handleSelect = (index) => {
    setAnswers((prev) => ({ ...prev, [current]: index }));
  };

  const toggleFlag = () => {
    setFlagged((prev) => {
      const next = new Set(prev);
      next.has(current) ? next.delete(current) : next.add(current);
      return next;
    });
  };

  const handleSubmitRequest = () => setShowConfirm(true);

  const handleConfirmSubmit = () => {
    finishTest(TOTAL_TIME - timeLeft);
    setShowConfirm(false);
  };

  const handleRestart = () => {
    initQuestions();
    setCurrent(0);
    setAnswers({});
    setFlagged(new Set());
    setTimeLeft(TOTAL_TIME);
    setFinished(false);
    setShowResult(false);
    setShowConfirm(false);
    setTimetaken(0);
  };

  // ── Pre-start ────────────────────────────────────────────────────────────────
  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  if (!questions.length) return null;

  // ── Result ───────────────────────────────────────────────────────────────────
  if (showResult) {
    return (
      <ResultScreen
        questions={questions}
        answers={answers}
        timeTaken={timetaken}
        onRestart={handleRestart}
      />
    );
  }

  // ── Test ─────────────────────────────────────────────────────────────────────
  const q = questions[current];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isLowTime = timeLeft < 120;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / TOTAL) * 100;
  const unanswered = TOTAL - answeredCount;

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      {showConfirm && (
        <ConfirmModal
          unanswered={unanswered}
          onConfirm={handleConfirmSubmit}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold text-xl">RTO Mock Test</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {answeredCount}/{TOTAL} answered
            </span>
            <div
              aria-live="polite"
              aria-label={`Time remaining: ${minutes} minutes ${seconds} seconds`}
              className={`font-mono text-lg font-bold px-3 py-1 rounded-lg transition-colors
                ${
                  isLowTime
                    ? 'bg-red-100 text-red-600 animate-pulse'
                    : 'bg-gray-200 text-gray-700'
                }`}
            >
              ⏱ {minutes}:{seconds.toString().padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 h-2 rounded-full mb-4 overflow-hidden">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Mobile: Submit button above grid */}
        <div className="md:hidden mb-3">
          <button
            className="w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition"
            onClick={handleSubmitRequest}
          >
            Submit Test
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Question Section */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow p-6">
            <div className="flex items-start justify-between gap-2 mb-4">
              <h2 className="font-semibold text-base leading-snug">
                Q{current + 1}/{TOTAL}. {q.question}
              </h2>
              <button
                aria-label={
                  flagged.has(current) ? 'Remove flag' : 'Flag for review'
                }
                onClick={toggleFlag}
                className={`shrink-0 text-lg transition-transform hover:scale-110
                  ${flagged.has(current) ? 'text-amber-400' : 'text-gray-300'}`}
              >
                🚩
              </button>
            </div>

            <div className="space-y-3" role="group" aria-label="Answer options">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  aria-pressed={answers[current] === i}
                  className={`w-full text-left p-3 rounded-xl border transition
                    ${
                      answers[current] === i
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  onClick={() => handleSelect(i)}
                >
                  <span className="font-medium mr-2 text-sm opacity-60">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                aria-label="Previous question"
                className="px-5 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={current === 0}
                onClick={() => setCurrent((c) => c - 1)}
              >
                ← Prev
              </button>
              <button
                aria-label="Next question"
                className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={current === TOTAL - 1}
                onClick={() => setCurrent((c) => c + 1)}
              >
                Next →
              </button>
            </div>
          </div>

          {/* Palette Sidebar */}
          <div className="bg-white rounded-2xl shadow p-4 order-first md:order-last">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Questions
            </p>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to question ${i + 1}`}
                  aria-current={current === i ? 'true' : undefined}
                  className={`text-sm py-2 rounded-lg font-medium transition
                    ${
                      current === i
                        ? 'bg-blue-600 text-white'
                        : flagged.has(i)
                          ? 'bg-amber-100 border border-amber-300 text-amber-700'
                          : answers[i] !== undefined
                            ? 'bg-green-200 text-green-800'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  onClick={() => setCurrent(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <PaletteLegend />

            {/* Desktop submit */}
            <button
              className="hidden md:block w-full mt-4 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition font-semibold"
              onClick={handleSubmitRequest}
            >
              Submit Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
