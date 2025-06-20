import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogImg from '../Logo/logowanie.png';
import BmiImg from '../Logo/BMI.png';
import IphoneImg from '../Logo/Iphone.png';
import RegImg from '../Logo/Rejestracja.png';

const carouselImages = [
  { src: LogImg, alt: 'Login preview' },
  { src: RegImg, alt: 'Register Calc' },
  { src: BmiImg, alt: 'BMI Calc' },
];

const Home = ({ lang, translations }) => {
  const t = translations[lang];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setIsLoggedIn(!!storedUser);

    const handleStorage = () => {
      const storedUser = localStorage.getItem('user');
      setIsLoggedIn(!!storedUser);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-7">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#ffb300' }}>
            Gainify
          </h1>
          <h2 className="mb-4">
            {lang === 'pl'
              ? 'Najprostszy sposób na kontrolę kalorii i makroskładników'
              : 'The simplest way to control calories and macros'}
          </h2>
          <p className="lead mb-4">
            {lang === 'pl'
              ? 'Planuj posiłki, licz kalorie i osiągaj swoje cele zdrowotne szybciej niż kiedykolwiek!'
              : 'Plan your meals, count calories, and reach your health goals faster than ever!'}
          </p>
          {!isLoggedIn && (
            <div className="d-flex gap-3">
              <Link to="/register" className="btn btn-warning btn-lg">
                {t.register}
              </Link>
              <Link to="/login" className="btn btn-outline-warning btn-lg">
                {t.login}
              </Link>
            </div>
          )}
        </div>
        <div className="col-md-5 text-center">
          <img
            src={IphoneImg}
            alt="iPhone"
            className="img-fluid rounded shadow"
            style={{ maxHeight: 640 }}
          />
        </div>
      </div>

      <div className="row text-center g-4">
        <div className="col-md-4">
          <div className="p-4 border rounded h-100">
            <span style={{ fontSize: 40 }}>📱</span>
            <h5 className="mt-3">
              {lang === 'pl' ? 'Intuicyjny serwis internetowy' : 'Intuitive web service'}
            </h5>
            <p>
              {lang === 'pl'
                ? 'Szybko dodawaj produkty i posiłki, korzystaj z ogromnej bazy żywności.'
                : 'Quickly add products and meals, use a huge food database.'}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded h-100">
            <span style={{ fontSize: 40 }}>🎯</span>
            <h5 className="mt-3">
              {lang === 'pl' ? 'Realne cele' : 'Real goals'}
            </h5>
            <p>
              {lang === 'pl'
                ? 'Ustalaj cele kaloryczne i makroskładników, śledź postępy każdego dnia.'
                : 'Set calorie and macro goals, track your progress every day.'}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded h-100">
            <span style={{ fontSize: 40 }}>🔒</span>
            <h5 className="mt-3">
              {lang === 'pl' ? 'Prywatność i bezpieczeństwo' : 'Privacy & Security'}
            </h5>
            <p>
              {lang === 'pl'
                ? 'Twoje dane są bezpieczne i tylko do Twojej dyspozycji.'
                : 'Your data is safe and only for your use.'}
            </p>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
              aria-current={idx === 0 ? 'true' : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {carouselImages.map((img, idx) => (
            <div key={idx} className={`carousel-item${idx === 0 ? ' active' : ''}`}>
              <img src={img.src} className="d-block w-100 carousel-img-border" alt={img.alt} style={{ maxHeight: 600, objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;