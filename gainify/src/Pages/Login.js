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
        localStorage.setItem('username', data.name || form.email);
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
    <div className="container mt-5">
      <h2><center>{t.loginTitle}</center></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>{t.emailLabel}</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>{t.passwordLabel}</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <center><button type="submit" className="btn btn-warning">{t.loginBtn}</button></center>
      </form>
    </div>
  );
};

export default Login;