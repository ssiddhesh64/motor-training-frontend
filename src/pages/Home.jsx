import drivingImg from '../assets/driving.png';
import Hero from './Hero';
import Middle from './Middle';
import Services from './Services';

function Home() {
  return (
    <section>
      {/* IMAGE FIRST */}
      <Hero />
      <Middle />

      {/* WHATSAPP CTA */}
      <div className="mt-10">
        <button
          className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 hover:scale-105 transition duration-300 shadow-md"
          onClick={() => window.open('https://wa.me/919022441860')}
        >
          Chat on WhatsApp
        </button>
      </div>

      {/* SERVICES SECTION */}
      <Services />
    </section>
  );
}

export default Home;
