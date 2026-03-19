import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaCar,
  FaIdCard,
} from 'react-icons/fa';

function Middle() {
  return (
    <section className="px-6 md:px-10 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* HEADING */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Learn Driving with Confidence 🚗
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Trusted by 2+ lakh students since 1989
        </p>
        {/* CONTENT CARD */}
        <div className="mt-10 bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 text-left space-y-6 hover:shadow-xl transition duration-300">
          {/* INTRO */}
          <div className="space-y-6">
            {/* BLOCK 1 */}
            <div className="flex flex-col gap-2 pl-4 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-800">
                Royal Motor Training School
              </h3>

              <span className="text-gray-600 leading-relaxed">
                Established in 1989 and accredited with an 'A' grade by the RTO
                authority. Over{' '}
                <span className="font-semibold text-blue-600">2 lakh+</span>{' '}
                students have successfully graduated from our institute.
              </span>
            </div>

            {/* BLOCK 2 */}
            <div className="flex flex-col gap-2 pl-4 border-l-4 border-blue-500">
              <h4 className="text-md font-semibold text-gray-800">
                Professional Training Approach
              </h4>

              <span className="text-gray-600 leading-relaxed">
                We go beyond just helping you pass driving tests. Our caring
                instructors ensure that every student receives complete
                attention and hands-on experience.
              </span>
            </div>

            {/* BLOCK 3 */}
            <div className="flex flex-col gap-2 pl-4 border-l-4 border-blue-500 pb-4">
              <h4 className="text-md font-semibold text-gray-800">
                Hassle-Free Licence Process
              </h4>

              <span className="text-gray-600 leading-relaxed">
                We handle your entire licence process smoothly and efficiently,
                allowing you to focus on learning with confidence.
              </span>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-200 pt-6"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-gray-50 hover:shadow-md transition">
              <FaUsers className="mx-auto text-blue-600 text-xl mb-2" />
              <p className="text-xl font-bold">2L+</p>
              <p className="text-sm text-gray-600">Students</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 hover:shadow-md transition">
              <FaAward className="mx-auto text-blue-600 text-xl mb-2" />
              <p className="text-xl font-bold">30+</p>
              <p className="text-sm text-gray-600">Years</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 hover:shadow-md transition">
              <FaCar className="mx-auto text-blue-600 text-xl mb-2" />
              <p className="text-xl font-bold">100%</p>
              <p className="text-sm text-gray-600">Training</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 hover:shadow-md transition">
              <FaIdCard className="mx-auto text-blue-600 text-xl mb-2" />
              <p className="text-xl font-bold">Fast</p>
              <p className="text-sm text-gray-600">Licence</p>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-lg" />
              <span className="text-gray-700">Experienced Instructors</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-lg" />
              <span className="text-gray-700">100% Personal Attention</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-lg" />
              <span className="text-gray-700">Licence Assistance</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-lg" />
              <span className="text-gray-700">Practical Driving Skills</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="flex-1 text-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition duration-300 shadow-md"
            >
              View Services
            </Link>

            <button
              className="flex-1 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 hover:scale-[1.02] transition duration-300 shadow-md"
              onClick={() => window.open('https://wa.me/919022441860')}
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Middle;
