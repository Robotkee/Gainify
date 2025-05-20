import React from 'react';
import { Link } from 'react-router-dom';
import IphoneImg from '../Logo/Iphone.png';

const Home = ({ lang, translations }) => {
  const t = translations[lang];

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
          <div className="d-flex gap-3">
            <Link to="/register" className="btn btn-warning btn-lg">
              {t.register}
            </Link>
            <Link to="/login" className="btn btn-outline-warning btn-lg">
              {t.login}
            </Link>
          </div>
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

      {/* Sekcja zalet */}
      <div className="row text-center g-4">
        <div className="col-md-4">
          <div className="p-4 border rounded h-100">
            <span style={{ fontSize: 40 }}>📱</span>
            <h5 className="mt-3">
              {lang === 'pl' ? 'Intuicyjna aplikacja' : 'Intuitive app'}
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
    </div>
  );
};

export default Home;