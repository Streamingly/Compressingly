// Header.js
import React, { useState } from 'react';
import { Play, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <Play className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">compressingly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-blue-500 px-3 py-2">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-500 px-3 py-2">Pricing</a>
            <a href="docs" className="text-gray-600 hover:text-blue-500 px-3 py-2">Documentation</a>
            <button className="ml-4 px-4 py-2 bg-gray-100 text-gray-700 rounded">Sign In</button>
            <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Get Started</button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#features" className="px-3 py-2 text-gray-600">Features</a>
              <a href="#pricing" className="px-3 py-2 text-gray-600">Pricing</a>
              <a href="docs" className="px-3 py-2 text-gray-600">Documentation</a>
              <button className="mt-2 mx-3 px-4 py-2 bg-gray-100 text-gray-700 rounded">Sign In</button>
              <button className="mt-2 mx-3 px-4 py-2 bg-blue-500 text-white rounded">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
