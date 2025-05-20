import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Logo/Logo2.png';
import PolandFlag from '../Logo/pl.png';
import USFlag from '../Logo/us.png';
import SunIcon from '../Logo/sun.png';   // Dodaj import
import MoonIcon from '../Logo/moon.png'; // Dodaj import

const Navbar = ({ darkMode, setDarkMode, lang, setLang, translations }) => {
  const t = translations[lang];

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const handleLangChange = () => {
    setLang(prev => (prev === 'pl' ? 'en' : 'pl'));
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm`}>
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center w-100 justify-content-between">

          {/* Logo */}
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Gainify Logo" style={{ height: '60px' }} />
            </Link>
          </div>

          {/* Jakiś tekst motywacyjny */}

          {/* Przyciski nawigacyjne */}
          <div className="d-flex align-items-center gap-2">
            <Link className="btn btn-warning navbar-btn" to="/about">{t.about}</Link>
            <Link className="btn btn-warning navbar-btn" to="/products">{t.products}</Link>
            <Link className="btn btn-warning navbar-btn" to="/login">{t.login}</Link>
            <Link className="btn btn-warning navbar-btn" to="/register">{t.register}</Link>
            <button 
              onClick={toggleTheme} 
              className="btn navbar-btn navbar-btn-small border-0"
              aria-label={darkMode ? 'Tryb jasny' : 'Tryb ciemny'}
              style={{ background: 'none', padding: 0 }}
            >
              <img 
                src={darkMode ? SunIcon : MoonIcon} 
                alt={darkMode ? 'Słońce' : 'Księżyc'} 
                style={{ width: 24, height: 24 }} 
              />
            </button>

            {/* Po zalogowaniu Napis zamiast buttona Login i Register, Witaj - (Nazwa Użytkownika zalogowanego) */}

            <button
              onClick={handleLangChange}
              className="btn btn-light border-0 navbar-btn navbar-btn-small"
              title={t.switchLang}
              style={{ background: 'none', padding: 0 }}
            >
              <img src={lang === 'pl' ? PolandFlag : USFlag} alt={t.flagAlt} style={{ width: 28, height: 20, objectFit: 'cover' }} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;