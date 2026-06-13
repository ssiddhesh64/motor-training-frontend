import { Link } from 'react-router-dom';
import RoyalLogo from '../components/Royal';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* BRAND */}
        <div>
          <RoyalLogo darkText="#FFFFFF" />
          <p className="mt-3 text-sm text-gray-400">
            Royal Motor Training School has been helping students become
            confident drivers since 1989.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-white transition text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/documents"
                  className="hover:text-white transition text-sm"
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/mocktest"
                  className="hover:text-white transition text-sm"
                >
                  Mock Test
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-white transition text-sm"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
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
