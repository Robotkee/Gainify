import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include', // ważne, by wysłać ciasteczka sesji!
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const data = await res.json();
        onLoginSuccess(data.user);
      } else {
        const err = await res.json();
        setError(err.message);
      }
    } catch (err) {
      setError('Błąd połączenia z serwerem');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Logowanie</h2>
      <input 
        type="text" placeholder="Nazwa użytkownika" value={username} 
        onChange={e => setUsername(e.target.value)} required 
      />
      <input 
        type="password" placeholder="Hasło" value={password} 
        onChange={e => setPassword(e.target.value)} required 
      />
      <button type="submit">Zaloguj się</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  );
};

export default LoginForm;
