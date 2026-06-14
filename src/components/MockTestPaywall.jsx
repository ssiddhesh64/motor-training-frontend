import { Link } from 'react-router-dom';
import { whatsappUrl } from '../constants/contact';

function MockTestPaywall({ onUnlock }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header Gradient */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-6 py-8 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/5" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm text-3xl mb-4">
                🔒
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Full RTO Mock Test
              </h1>
              <p className="text-blue-100 text-sm md:text-base">
                15 Questions • 30 Minutes • Real Exam Format
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-8">
            <p className="text-gray-600 text-center text-sm md:text-base mb-6 leading-relaxed">
              The full mock test is a{' '}
              <span className="font-semibold text-gray-800">
                premium feature
              </span>{' '}
              for enrolled students. Enroll with us to get unlimited access to
              the complete 80-question bank with timed tests.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {[
                '80+ real RTO exam questions',
                '30-minute timed test mode',
                'Instant score & answer review',
                'Flag & review difficult questions',
                'Practice until you pass confidently',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={() =>
                  window.open(
                    whatsappUrl(
                      'Hi Royal Motor Training School, I would like to enroll for driving training and access the full mock test.'
                    )
                  )
                }
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer"
              >
                🚗 Enroll Now on WhatsApp
              </button>

              <Link
                to="/services"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                📋 View Training Packages
              </Link>

              <button
                onClick={onUnlock}
                className="w-full text-gray-400 hover:text-gray-600 text-xs py-2 transition-colors cursor-pointer"
              >
                I&apos;m already enrolled — continue to test →
              </button>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            ← Try our free 5-question sample quiz first
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MockTestPaywall;
