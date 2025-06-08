import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Logo/Logo2.png';
import PolandFlag from '../Logo/pl.png';
import USFlag from '../Logo/us.png';
import SunIcon from '../Logo/sun.png';
import MoonIcon from '../Logo/moon.png';
import { ReactComponent as UserIcon } from '../Logo/person.svg';

const Navbar = ({ darkMode, setDarkMode, lang, setLang, translations }) => {
  const navigate = useNavigate();
  const t = translations[lang];
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Pobierz dane użytkownika z localStorage (obiekt z imieniem)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userObj = JSON.parse(storedUser);
        setUsername(userObj.name || userObj.email || '');
      } catch {
        setUsername('');
      }
    } else {
      setUsername('');
    }

    const handleStorage = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const userObj = JSON.parse(storedUser);
          setUsername(userObj.name || userObj.email || '');
        } catch {
          setUsername('');
        }
      } else {
        setUsername('');
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const handleLangChange = () => {
    setLang(prev => (prev === 'pl' ? 'en' : 'pl'));
  };

  const handleLogout = () => {
  localStorage.removeItem('user');
  setUsername('');
  setShowDropdown(false);
  alert(lang === 'pl' ? 'Wylogowano pomyślnie' : 'Logged out successfully');
  navigate('/');
  window.location.reload();
};

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm`}>
      <div className="container-fluid px-5">
        <div className="d-flex align-items-center w-100 justify-content-between">
          <Link className="navbar-brand mx-5" to="/">
            <img src={Logo} alt="Gainify Logo" style={{ height: '65px' }} />
          </Link>
          
          <div className="d-flex align-items-center justify-content-center flex-grow-1 mx-4">
            {username && (
              <span className="text-warning" style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                {lang === 'pl' ? 'Witaj' : 'Welcome'}, {username}!
              </span>
            )}
          </div>

          <div className="d-flex align-items-center gap-2">
            <Link className="btn btn-warning navbar-btn" to="/Bmi">{t.BMI}</Link>
            <Link className="btn btn-warning navbar-btn" to="/about">{t.about}</Link>
            <Link className="btn btn-warning navbar-btn" to="/products">{t.products}</Link>
            
            <div className="position-relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="btn navbar-btn navbar-btn-small border-0"
                style={{ background: 'none', padding: 7 }}
              >
                <UserIcon
                  style={{ width: 28, height: 28, objectFit: 'cover', fill: '#ffc107' }}
                />
              </button>
              
              {showDropdown && username && (
                <div className="position-absolute end-0 mt-2 py-2 bg-white rounded shadow" 
                     style={{ minWidth: '200px', zIndex: 1000 }}>
                  <Link
                    to="/dashboard"
                    className="dropdown-item px-4 py-2 text-dark text-decoration-none"
                    onClick={() => setShowDropdown(false)}
                  >
                    {lang === 'pl' ? 'Panel użytkownika' : 'User Dashboard'}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item px-4 py-2 text-dark w-100 text-start"
                    style={{ border: 'none', background: 'none' }}
                  >
                    {lang === 'pl' ? 'Wyloguj' : 'Logout'}
                  </button>
                </div>
              )}
              
              {showDropdown && !username && (
                <div className="position-absolute end-0 mt-2 py-2 bg-white rounded shadow" 
                     style={{ minWidth: '200px', zIndex: 1000 }}>
                  <Link
                    to="/login"
                    className="dropdown-item px-4 py-2 text-dark text-decoration-none"
                    onClick={() => setShowDropdown(false)}
                  >
                    {lang === 'pl' ? 'Zaloguj' : 'Login'}
                  </Link>
                  <Link
                    to="/register"
                    className="dropdown-item px-4 py-2 text-dark text-decoration-none"
                    onClick={() => setShowDropdown(false)}
                  >
                    {lang === 'pl' ? 'Zarejestruj' : 'Register'}
                  </Link>
                </div>
              )}
            </div>

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
              <img 
                src={lang === 'pl' ? PolandFlag : USFlag} 
                alt={t.flagAlt} 
                style={{ width: 28, height: 20, objectFit: 'cover' }} 
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;