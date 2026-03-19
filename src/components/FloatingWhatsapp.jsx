import { FaWhatsapp } from 'react-icons/fa';

function FloatingWhatsApp() {
  return (
    <div>
      <a
        href="https://wa.me/919022441860"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition duration-300 animate-pulse"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
