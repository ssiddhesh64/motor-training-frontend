import drivingImg from '../assets/driving.png';
import GoogleMaps from '../components/GoogleMaps';
import Hero from './Hero';
import Middle from './Middle';
import Services from './Services';

function Home() {
  return (
    <section>
      {/* IMAGE FIRST */}
      <Hero />
      <Middle />
      <GoogleMaps />

      {/* SERVICES SECTION */}
      <Services />
    </section>
  );
}

export default Home;
