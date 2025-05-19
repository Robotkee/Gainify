import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
      alert('Zarejestrowano!');
      navigate('/login');
    } else {
      alert('Rejestracja nie powiodła się!');
    }
  } catch (error) {
    alert('Błąd połączenia z serwerem!');
  }
};

  return (
    <div className="container mt-5">
      <h2><center>Rejestracja</center></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Imię</label>
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
          <label>Nazwisko</label>
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
          <label>Email</label>
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
          <label>Hasło</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <center><button type="submit" className="btn btn-warning">Zarejestruj</button></center>
      </form>
    </div>
  );
};

export default Register;