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
          className={`absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-500 ${
            isActive
              ? 'w-full left-0'
              : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
          }`}
        ></span>
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-14">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-gray-800">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <RoyalLogo />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium items-center h-full">
          {renderLink('/', 'Home')}
          {renderLink('/services', 'Services')}
          {renderLink('/gallery', 'Gallery')}
          {renderLink('/contact', 'Contact')}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
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
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700"
          >
            Services
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
