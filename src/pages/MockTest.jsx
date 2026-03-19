// MockTest.jsx (Pure Tailwind - No external UI libs)
import { useState, useEffect } from 'react';
import { questions as allQuestions } from '../data/questions';
import StartScreen from '../components/StartTestScreen';

function shuffle(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

export default function MockTest() {
  const [started, setStarted] = useState(false);
  const TOTAL = 15;
  const PASS_MARK = 11;
  const TOTAL_TIME = 30 * 60;

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setQuestions(shuffle(allQuestions).slice(0, TOTAL));
  }, []);

  useEffect(() => {
    if (!questions.length) return;
    if (timeLeft <= 0) {
      setShowResult(true);
      return;
    }
    const t = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft, questions]);

  const handleSelect = (index) => {
    setAnswers({ ...answers, [current]: index });
  };

  const handleSubmit = () => setShowResult(true);

  const getScore = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) s++;
    });
    return s;
  };

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  if (!questions.length) return null;

  if (showResult) {
    const score = getScore();
    const passed = score >= PASS_MARK;

    return (
      <div className="min-h-screen bg-gray-100 py-6 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Result Summary */}
          <div className="bg-white rounded-2xl shadow p-6 text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Result</h2>
            <p className="text-lg">
              Score: {score} / {TOTAL}
            </p>
            <p
              className={`mt-2 font-semibold ${passed ? 'text-green-600' : 'text-red-600'}`}
            >
              {passed ? 'PASS' : 'FAIL'}
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
              onClick={() => window.location.reload()}
            >
              Restart
            </button>
          </div>

          {/* Review Answers */}
          <div className="space-y-4">
            {questions.map((q, i) => {
              const userAns = answers[i];
              const correct = q.answer;

              return (
                <div key={i} className="bg-white rounded-xl shadow p-4">
                  <h3 className="font-semibold mb-2">
                    Q{i + 1}. {q.question}
                  </h3>

                  <div className="space-y-2">
                    {q.options.map((opt, idx) => {
                      const isCorrect = idx === correct;
                      const isUser = idx === userAns;

                      return (
                        <div
                          key={idx}
                          className={`p-2 rounded-lg border
                            ${isCorrect ? 'bg-green-100 border-green-400' : ''}
                            ${isUser && !isCorrect ? 'bg-red-100 border-red-400' : ''}`}
                        >
                          {opt}
                        </div>
                      );
                    })}
                  </div>

                  {userAns !== correct && (
                    <p className="text-sm text-red-600 mt-2">
                      Your answer was incorrect
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const progress = (Object.keys(answers).length / TOTAL) * 100;

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-xl">RTO Mock Test</h1>
          <div className="font-mono text-red-600 text-lg">
            ⏱ {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 h-2 rounded mb-4">
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Question Section */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold mb-4">
              Q{current + 1}. {q.question}
            </h2>

            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className={`w-full text-left p-3 rounded-xl border transition
                    ${
                      answers[current] === i
                        ? 'bg-blue-600 text-white'
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  onClick={() => handleSelect(i)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 bg-gray-200 rounded-xl disabled:opacity-50"
                disabled={current === 0}
                onClick={() => setCurrent((c) => c - 1)}
              >
                Prev
              </button>

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-xl disabled:opacity-50"
                disabled={current === TOTAL - 1}
                onClick={() => setCurrent((c) => c + 1)}
              >
                Next
              </button>
            </div>
          </div>

          {/* Palette */}
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => (
                <button
                  key={i}
                  className={`text-sm py-2 rounded-lg
                    ${
                      current === i
                        ? 'bg-blue-600 text-white'
                        : answers[i] !== undefined
                          ? 'bg-green-200'
                          : 'bg-gray-100'
                    }`}
                  onClick={() => setCurrent(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              className="w-full mt-4 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
              onClick={handleSubmit}
            >
              Submit Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
