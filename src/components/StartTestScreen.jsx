export default function StartScreen({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">RTO Mock Test</h1>
        <div className="text-gray-600 mb-6">
          15 Questions • 30 Minutes • Pass: 11
        </div>
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          onClick={onStart}
        >
          Start Test
        </button>
      </div>
    </div>
  );
}
