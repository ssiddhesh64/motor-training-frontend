import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import RoyalLogo from './Royal';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const renderLink = (path, label) => {
    const isActive = location.pathname === path;

    return (
      <Link
        to={path}
        className={`group relative flex items-center h-full px-3 transition-all duration-300 ${
          isActive
            ? 'text-blue-600'
            : 'text-gray-700 hover:text-blue-600 hover:-translate-y-0.5'
        }`}
      >
        {label}

        {/* Premium underline */}
        <span
          className={`absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-500 ${
            isActive
              ? 'w-full left-0'
              : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
          }`}
        ></span>
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-3">
      <div className="max-w-6xl flex items-center h-14">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-gray-800 shrink-0">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <RoyalLogo />
          </div>
        </Link>

        {/* Desktop Menu — centered */}
        <div className="hidden md:flex flex-1 justify-center gap-1 text-xs font-medium items-center h-full">
          {renderLink('/', 'Home')}
          {renderLink('/services', 'Services')}
          {renderLink('/how-it-works', 'How It Works')}
          {renderLink('/faq', 'FAQ')}
          {renderLink('/documents', 'Documents')}
          {renderLink('/gallery', 'Gallery')}
          {renderLink('/contact', 'Contact')}
          {renderLink('/mocktest', 'Mock Test')}
        </div>

        {/* Book Driving Lesson CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex shrink-0 items-center px-5 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Book Driving Lesson
        </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden ml-auto text-gray-800 text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            Services
          </Link>
          <Link
            to="/how-it-works"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            How It Works
          </Link>
          <Link
            to="/documents"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            Documents
          </Link>
          <Link
            to="/faq"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            FAQ
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            Contact
          </Link>
          <Link
            to="/mocktest"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            Mock Test
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
