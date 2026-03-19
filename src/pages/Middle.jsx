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
        <div className="mt-10 bg-white p-8 rounded-2xl shadow-md text-left space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Welcome to{' '}
            <span className="font-semibold text-gray-800">
              Royal Motor Training School
            </span>
            , established in 1989 and accredited with an 'A' grade by the RTO
            authority. Over 2 lakh students have successfully graduated from our
            institute.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We go beyond just helping you pass driving tests. Our caring and
            polite instructors ensure that every student receives 100% attention
            throughout the course.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We handle your complete licence process smoothly and efficiently, so
            you can focus on learning with confidence.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-700">
              ✅ Experienced Instructors
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              ✅ 100% Personal Attention
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              ✅ Licence Assistance
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              ✅ Practical Driving Skills
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md">
              View Courses
            </button>

            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 hover:scale-105 transition duration-300 shadow-md"
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
