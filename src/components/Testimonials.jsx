import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';
import testimonials from '../data/testimonialsData';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Royal+Motor+Training+School+Reviews';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-amber-400" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-200" />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 mx-3 hover:shadow-xl transition-shadow duration-300">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-blue-100 text-2xl mb-3" />

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[72px]">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-800 text-sm">
            {testimonial.name}
          </p>
          <StarRating rating={testimonial.rating} />
        </div>
        <span className="text-xs bg-blue-50 text-blue-600 font-medium px-3 py-1 rounded-full">
          {testimonial.tag}
        </span>
      </div>
    </div>
  );
}

function Testimonials() {
  // Duplicate for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className="py-14 bg-gray-50 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2
              id="testimonials-heading"
              className="text-2xl md:text-3xl font-bold text-gray-800"
            >
              What Our Students Say
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Rated <span className="font-bold text-amber-500">4.6/5</span>{' '}
              based on 398+ reviews
            </p>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:underline"
          >
            See all reviews on Google →
          </a>
        </div>
      </div>

      {/* Scrolling Track */}
      <div className="testimonials-track flex w-max">
        {allTestimonials.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
