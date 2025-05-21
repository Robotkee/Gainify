import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Logo/Logo2.png';
import PolandFlag from '../Logo/pl.png';
import USFlag from '../Logo/us.png';
import SunIcon from '../Logo/sun.png';
import MoonIcon from '../Logo/moon.png';
import { ReactComponent as UserIcon } from '../Logo/person.svg';

const Navbar = ({ darkMode, setDarkMode, lang, setLang, translations }) => {
  const t = translations[lang];

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const handleLangChange = () => {
    setLang(prev => (prev === 'pl' ? 'en' : 'pl'));
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm`}>
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center w-100 justify-content-between">

          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Gainify Logo" style={{ height: '65px' }} />
            </Link>
          </div>

         {/* Po zalogowaniu Napis zamiast, Witaj - (Nazwa Użytkownika zalogowanego) */}

          <div className="d-flex align-items-center gap-2">
            <Link className="btn btn-warning navbar-btn" to="/about">{t.about}</Link>
            <Link className="btn btn-warning navbar-btn" to="/products">{t.products}</Link>
            <Link
              to="/login"
              className="btn navbar-btn navbar-btn-small border-0"
              style={{ background: 'none', padding: 7 }}
              aria-label={t.login}
            >
              <UserIcon
                style={{ width: 28, height: 28, objectFit: 'cover', fill: '#ffc107' }} // #ffc107 to domyślny kolor Bootstrap btn-warning
              />
            </Link>
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