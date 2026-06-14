import GoogleMaps from '../components/GoogleMaps';
import StatsBar from '../components/StatsBar';
import Testimonials from '../components/Testimonials';
import SampleQuiz from '../components/SampleQuiz';
import Hero from './Hero';
import Middle from './Middle';
import Services from './Services';

function Home() {
  return (
    <section>
      {/* 1. Hero — headline, CTAs, background image */}
      <Hero />

      {/* 2. Stats Bar — animated trust indicators */}
      <StatsBar />

      {/* 3. Why Choose Us — features + highlights */}
      <Middle />

      {/* 4. Sample Quiz — 5-question interactive quiz + paywall CTA */}
      <SampleQuiz />

      {/* 5. Services — training packages */}
      <Services />

      {/* 6. Testimonials — social proof carousel */}
      <Testimonials />

      {/* 7. Google Maps — location link */}
      <GoogleMaps />
    </section>
  );
}

export default Home;
