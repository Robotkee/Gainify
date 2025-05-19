import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo2.png';

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
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
            <Link className="btn btn-outline-warning" to="/about">O nas</Link>
            <Link className="btn btn-outline-warning" to="/products">Baza produktów</Link>
          </div>

          {/* Logowanie + przycisk trybu */}
          <div className="d-flex gap-2 align-items-center">
            <Link className="btn btn-warning" to="/login">Logowanie</Link>
            <Link className="btn btn-warning" to="/register">Rejestracja</Link>
            <button onClick={toggleTheme} className="btn btn-outline-warning">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
