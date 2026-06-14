import drivingImg from '../assets/driving.webp';
import { whatsappUrl } from '../constants/contact';

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[520px] md:h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={drivingImg}
        alt="Student learning to drive at Royal Motor Training School"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-10">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            RTO &apos;A&apos; Grade Accredited · Since 1989
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up-delay-1 text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg"
            style={{ margin: 0, fontSize: undefined }}
          >
            <span className="text-4xl md:text-6xl">Learn Driving with</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-4xl md:text-6xl">
              Confidence
            </span>
            <span className="text-4xl md:text-6xl"> 🚗</span>
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-in-up-delay-2 mt-4 text-gray-200 text-base md:text-xl max-w-lg leading-relaxed">
            Trusted by <span className="font-bold text-white">2 lakh+</span>{' '}
            students. Expert instructors. Complete licence assistance.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up-delay-3 mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() =>
                window.open(
                  whatsappUrl(
                    'Hi Royal Motor Training School, I would like to book a free demo session.'
                  )
                )
              }
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              📞 Book Free Demo
            </button>
            <a
              href="#sample-quiz"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/25 hover:scale-[1.02] transition-all duration-300"
            >
              📝 Try Free Mock Test
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
