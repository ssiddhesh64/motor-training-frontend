import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaGraduationCap,
  FaHandshake,
  FaFileAlt,
} from 'react-icons/fa';

const features = [
  {
    icon: FaGraduationCap,
    title: "RTO 'A' Grade Accredited",
    desc: "Established in 1989 and accredited with an 'A' grade by the RTO authority. Over 2 lakh+ students have successfully graduated.",
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FaHandshake,
    title: 'Professional Training',
    desc: 'We go beyond just passing tests. Our caring instructors ensure every student receives complete attention and hands-on experience.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: FaFileAlt,
    title: 'Hassle-Free Licence',
    desc: 'We handle your entire licence process smoothly and efficiently, allowing you to focus on learning with confidence.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
];

// const highlights = [
//     'Experienced Instructors',
//     '100% Personal Attention',
//     'Licence Assistance',
//     'Practical Driving Skills',
// ];

const highlights = [
  '2,00,000+ Students',
  'RTO A Grade School',
  '35+ Years Experience',
  'Certified Instructors',
  'Flexible Timings',
  'Licence Assistance',
  'Road Test Preparation',
  'Modern Training Vehicles',
];

function Middle() {
  return (
    <section
      className="px-6 md:px-10 pt-4 pb-2 mt-4 md:pt-10 md:pb-10 bg-gray-50"
      aria-labelledby="why-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="font-stretch-expanded tracking-widest uppercase text-blue-600"
            style={{ fontSize: '2.5rem', fontWeight: 800 }}
          >
            Why Choose Us
          </span>
          <h2
            id="why-heading"
            className="font-stretch-expanded md:text-4xl text-gray-800"
            style={{ fontSize: '1rem', fontWeight: 800, marginTop: '1.5rem' }}
          >
            Your Journey to Safe Driving Starts Here
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${f.bg} ${f.color} text-xl mb-4`}
              >
                <f.icon />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100"
            >
              <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
              <span className="text-gray-700 text-sm font-medium">{h}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col justify-evenly sm:flex-row">
          <Link
            to="/services"
            className="w-full mr-8 text-center bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-md font-semibold"
          >
            View Services
          </Link>
          <button
            className="w-full bg-green-500 text-white px-8 py-3 rounded-xl hover:bg-green-600 hover:scale-[1.02] transition-all duration-300 shadow-md font-semibold cursor-pointer"
            onClick={() => window.open('https://wa.me/919022441860')}
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default Middle;
