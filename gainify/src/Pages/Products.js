import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: { pl: 'Jabłko', en: 'Apple' }, calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
  { id: 2, name: { pl: 'Banana', en: 'Banana' }, calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
  { id: 3, name: { pl: 'Kurczak', en: 'Chicken' }, calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { id: 4, name: { pl: 'Ryż', en: 'Rice' }, calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  // Dodaj więcej produktów według potrzeb
];

const Products = ({ lang, translations }) => {
  const t = translations[lang];
  const [search, setSearch] = useState('');

  const filtered = PRODUCTS.filter(product =>
    product.name[lang].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">{t.products}</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={t.search}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <table className="table table-striped table-bordered">
        <thead className="table-warning">
          <tr>
            <th>{t.name}</th>
            <th>{t.calories}</th>
            <th>{t.protein}</th>
            <th>{t.carbs}</th>
            <th>{t.fat}</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">{t.noResults}</td>
            </tr>
          ) : (
            filtered.map(product => (
              <tr key={product.id}>
                <td>{product.name[lang]}</td>
                <td>{product.calories}</td>
                <td>{product.protein}</td>
                <td>{product.carbs}</td>
                <td>{product.fat}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;