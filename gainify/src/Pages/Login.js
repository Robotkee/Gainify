import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ lang, translations }) => {
  const t = translations[lang];
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify({ name: data.name || form.email, email: form.email }));
      window.dispatchEvent(new Event('storage'));
      alert(t.loginSuccess);
      navigate('/');
    } else {
      alert(t.loginFail);
    }
  } catch (error) {
    alert(t.loginError);
  }
};

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow p-4" style={{ maxWidth: 400, width: '100%', borderRadius: 20 }}>
        <h2 className="mb-4 text-center" style={{ color: '#ffb300', fontWeight: 700 }}>{t.loginTitle}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">{t.emailLabel}</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg rounded-pill"
              value={form.email}
              onChange={handleChange}
              required
              autoFocus
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
              {t.loginBtn}
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <span>{lang === 'pl' ? 'Nie masz konta?' : "Don't have an account?"} </span>
          <a href="/register" className="text-warning" style={{ fontWeight: 500 }}>
            {t.register}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;