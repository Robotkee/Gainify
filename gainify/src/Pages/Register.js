import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ lang, translations }) => {
  const t = translations[lang];
  const [form, setForm] = useState({ name: '', surname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        alert(t.registerSuccess);
        navigate('/login');
      } else {
        alert(t.registerFail);
      }
    } catch (error) {
      alert(t.registerError);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow p-4" style={{ maxWidth: 430, width: '100%', borderRadius: 20 }}>
        <h2 className="mb-4 text-center" style={{ color: '#ffb300', fontWeight: 700 }}>{t.registerTitle}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">{t.nameLabel}</label>
            <input
              type="text"
              name="name"
              className="form-control form-control-lg rounded-pill"
              value={form.name}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label className="form-label">{t.surnameLabel}</label>
            <input
              type="text"
              name="surname"
              className="form-control form-control-lg rounded-pill"
              value={form.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">{t.emailLabel}</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg rounded-pill"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">{t.passwordLabel}</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg rounded-pill"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-warning btn-lg rounded-pill" style={{ fontWeight: 600 }}>
              {t.registerBtn}
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <span>{lang === 'pl' ? 'Masz już konto?' : 'Already have an account?'} </span>
          <a href="/login" className="text-warning" style={{ fontWeight: 500 }}>
            {t.login}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;