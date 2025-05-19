import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', { // <-- podmień na swój adres API
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('username', data.name || form.email); // zakładając, że backend zwraca imię
      alert('Zalogowano!');
      navigate('/');
    } else {
      alert('Błędny email lub hasło!');
    }
  } catch (error) {
    alert('Błąd połączenia z serwerem!');
  }
};

  return (
    <div className="container mt-5">
      <h2><center>Logowanie</center></h2>
      <form onSubmit={handleSubmit}>
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
        <center><button type="submit" className="btn btn-warning">Zaloguj</button></center>
      </form>
    </div>
  );
};

export default Login;