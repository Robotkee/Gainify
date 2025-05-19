import React from 'react';

const Home = () => {
  const username = localStorage.getItem('username');
  return (
    <h2>
      {username ? `Witaj ${username}` : 'Strona główna - Gainify'}
    </h2>
  );
};

export default Home;