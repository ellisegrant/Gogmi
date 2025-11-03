import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { 
      name: 'Resources', 
      path: '/resources',
      dropdown: [
        { name: 'Publications', path: '/resources' },
        { name: 'Blog & News', path: '/blog' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
        : 'bg-white/10 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 rounded-xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-lg">
              <Waves className="w-7 h-7 text-yellow-400" strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <div className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              GOGMI
            </div>
            <div className={`text-xs font-medium ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
              Maritime Institute
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            item.dropdown ? (
              <div 
                key={item.path}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
                    isActive(item.path) || location.pathname === '/blog'
                      ? scrolled
                        ? 'bg-blue-900 text-white'
                        : 'bg-white/20 text-white'
                      : scrolled
                        ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl py-2 border border-gray-100">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? scrolled
                      ? 'bg-blue-900 text-white'
                      : 'bg-white/20 text-white'
                    : scrolled
                      ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
          <Link to="/contact" className="ml-4 bg-yellow-500 text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-lg hover:scale-105">
            Get Started
          </Link>
        </div>

        <button
          className={`lg:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.path}>
                  <button className="block w-full text-left py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-blue-50">
                    {item.name}
                  </button>
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 px-4 text-gray-600 hover:text-blue-900 text-sm"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                    isActive(item.path)
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;