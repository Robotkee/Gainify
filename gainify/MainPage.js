import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Błąd pobierania produktów:', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products', {
        name: form.name,
        calories: Number(form.calories),
        protein: Number(form.protein),
        carbs: Number(form.carbs),
        fat: Number(form.fat),
      });
      setForm({ name: '', calories: '', protein: '', carbs: '', fat: '' });
      fetchProducts();
    } catch (err) {
      console.error('Błąd dodawania produktu:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Dodaj produkt spożywczy</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nazwa produktu"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="calories"
            className="form-control"
            placeholder="Kalorie"
            value={form.calories}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="protein"
            className="form-control"
            placeholder="Białko (g)"
            value={form.protein}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="carbs"
            className="form-control"
            placeholder="Węglowodany (g)"
            value={form.carbs}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="fat"
            className="form-control"
            placeholder="Tłuszcze (g)"
            value={form.fat}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Dodaj produkt
        </button>
      </form>

      <h3 className="mt-5">Lista produktów</h3>
      {products.length === 0 ? (
        <p>Brak produktów.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Kalorie</th>
              <th>Białko</th>
              <th>Węglowodany</th>
              <th>Tłuszcze</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.calories}</td>
                <td>{prod.protein}</td>
                <td>{prod.carbs}</td>
                <td>{prod.fat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
