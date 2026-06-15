import GoogleMaps from '../components/GoogleMaps';
import StatsBar from '../components/StatsBar';
import Hero from './Hero';
import Middle from './NewMiddle';
import Services from './Services';

function Home() {
  return (
    <section>
      {/* IMAGE FIRST */}
      <Hero />
      <StatsBar />
      <Middle />
      <GoogleMaps />

      {/* SERVICES SECTION */}
      <Services />
    </section>
  );
}

export default Home;
