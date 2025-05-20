import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo2.png';
import PolandFlag from '../Logo/pl.png';
import USFlag from '../Logo/us.png';

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

          {/* Linki */}
          <div className="d-none d-lg-flex gap-4">
            <Link className="btn btn-outline-warning" to="/about">{t.about}</Link>
            <Link className="btn btn-outline-warning" to="/products">{t.products}</Link>
          </div>

          {/* Logowanie + przycisk trybu + Flaga */}
          <div className="d-flex gap-2 align-items-center">
            <Link className="btn btn-warning" to="/login">{t.login}</Link>
            <Link className="btn btn-warning" to="/register">{t.register}</Link>
              <button onClick={toggleTheme} className="btn btn-outline-warning">
                {darkMode ? '☀️' : '🌙'}
              </button>
            <button
              onClick={handleLangChange}
              className="btn btn-light p-1 border-0"
              title={t.switchLang}
              style={{ background: 'none' }}
            >
            <img src={lang === 'pl' ? PolandFlag : USFlag}alt={t.flagAlt} style={{ width: 28, height: 20, objectFit: 'cover' }}
            />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;