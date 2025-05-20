import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Jabłko', calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
  { id: 2, name: 'Banana', calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
  { id: 3, name: 'Kurczak', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { id: 4, name: 'Ryż', calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  // Dodaj więcej produktów według potrzeb
];

const Products = () => {
  const [search, setSearch] = useState('');

  const filtered = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Baza produktów</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Wyszukaj produkt..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <table className="table table-striped table-bordered">
        <thead className="table-warning">
          <tr>
            <th>Nazwa</th>
            <th>Kalorie</th>
            <th>Białko (g)</th>
            <th>Węglowodany (g)</th>
            <th>Tłuszcz (g)</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">Brak wyników</td>
            </tr>
          ) : (
            filtered.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
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