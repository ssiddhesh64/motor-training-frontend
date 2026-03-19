import { Link } from 'react-router-dom';
import RoyalLogo from '../components/Royal';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* BRAND */}
        <div>
          <svg
            viewBox="0 0 360 90"
            className="h-12 transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_gold]"
          >
            <defs>
              <linearGradient id="goldMain" x1="0" x2="1">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>

            <path
              d="M50 25 L56 10 L64 20 L72 10 L78 25 Z"
              fill="url(#goldMain)"
            />

            <text x="40" y="55" fontSize="36" fontWeight="700" fill="#b91c1c">
              ROYAL
            </text>

            <text x="42" y="75" fontSize="13" fill="#FFFFFF" letterSpacing="2">
              MOTOR DRIVING SCHOOL
            </text>
          </svg>
          <p className="mt-3 text-sm text-gray-400">
            Royal Motor Training School has been helping students become
            confident drivers since 1989.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>

          <p className="text-sm">📍 Maharashtra</p>
          <p className="text-sm mt-2">📞 +91 9022441860</p>

          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={() => window.open('https://wa.me/919022441860')}
          >
            WhatsApp Us
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Royal Motor Training School. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
