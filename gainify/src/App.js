import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Register from './Pages/Register';
import BMI from './Pages/BMI';
import './App.css';


const translations = {
  pl: {
    about: 'O nas',
    products: 'Baza produktów',
    login: 'Logowanie',
    register: 'Rejestracja',
    switchLang: 'Switch to English',
    flagAlt: 'Polska flaga',
    home: 'Strona główna - Gainify',
    welcome: 'Witaj',
    search: 'Wyszukaj produkt...',
    name: 'Nazwa',
    calories: 'Kalorie',
    protein: 'Białko (g)',
    carbs: 'Węglowodany (g)',
    fat: 'Tłuszcz (g)',
    noResults: 'Brak wyników',
    registerTitle: 'Rejestracja',
    registerBtn: 'Zarejestruj',
    nameLabel: 'Imię',
    surnameLabel: 'Nazwisko',
    emailLabel: 'Email',
    passwordLabel: 'Hasło',
    registerSuccess: 'Zarejestrowano!',
    registerFail: 'Rejestracja nie powiodła się!',
    registerError: 'Błąd połączenia z serwerem!',
    loginTitle: 'Logowanie',
    loginBtn: 'Zaloguj',
    loginSuccess: 'Zalogowano!',
    loginFail: 'Błędny email lub hasło!',
    loginError: 'Błąd połączenia z serwerem!',
    bmiCalculator: 'Kalkulator BMI',
    BMI: 'Kalkulator BMI',
  },
  en: {
    about: 'About',
    products: 'Product database',
    login: 'Login',
    register: 'Register',
    switchLang: 'Zmień na polski',
    flagAlt: 'US flag',
    home: 'Home - Gainify',
    welcome: 'Welcome',
    search: 'Search product...',
    name: 'Name',
    calories: 'Calories',
    protein: 'Protein (g)',
    carbs: 'Carbs (g)',
    fat: 'Fat (g)',
    noResults: 'No results',
    registerTitle: 'Register',
    registerBtn: 'Register',
    nameLabel: 'Name',
    surnameLabel: 'Surname',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    registerSuccess: 'Registered!',
    registerFail: 'Registration failed!',
    registerError: 'Server connection error!',
    loginTitle: 'Login',
    loginBtn: 'Login',
    loginSuccess: 'Logged in!',
    loginFail: 'Wrong email or password!',
    loginError: 'Server connection error!',
    bmiCalculator: 'BMI Calculator',
    BMI: 'BMI Calculator',
  },
};

      function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('pl');

  return (
    <Router>
      <div className="app-wrapper">
        <div className="page-container">
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            translations={translations}
          />
          <main className={`main-content ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            <Routes>
              <Route path="/" element={<Home lang={lang} translations={translations} darkMode={darkMode} />} />
              <Route path="/about" element={<About lang={lang} translations={translations} />} />
              <Route path="/products" element={<Products lang={lang} translations={translations} />} />
              <Route path="/login" element={<Login lang={lang} translations={translations} />} />
              <Route path="/register" element={<Register lang={lang} translations={translations} />} />
              <Route path="/bmi" element={<BMI lang={lang} translations={translations} />} />
            </Routes>
          </main>
          <Footer lang={lang} translations={translations} />
        </div>
      </div>
    </Router>
  );
}

export default App;