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
    <div className="container mt-5">
      <h2><center>{t.registerTitle}</center></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>{t.nameLabel}</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>{t.surnameLabel}</label>
          <input
            type="text"
            name="surname"
            className="form-control"
            value={form.surname}
            onChange={handleChange}
            required
          />
        </div>
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
        <center><button type="submit" className="btn btn-warning">{t.registerBtn}</button></center>
      </form>
    </div>
  );
};

export default Register;