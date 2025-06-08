import React, { useState } from 'react';
import './BMI.css';

const BMI = ({ lang = 'pl', translations }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const defaultLabels = {
    pl: {
      title: 'Kalkulator BMI',
      weight: 'Waga (kg)',
      height: 'Wzrost (cm)',
      calculate: 'Oblicz BMI',
      result: 'Twoje BMI:',
      category: 'Kategoria:',
      weightHint: 'Wprowadź swoją wagę w kilogramach',
      heightHint: 'Wprowadź swój wzrost w centymetrach',
      categories: [
        'Niedowaga',
        'Waga prawidłowa',
        'Nadwaga',
        'Otyłość'
      ]
    },
    en: {
      title: 'BMI Calculator',
      weight: 'Weight (kg)',
      height: 'Height (cm)',
      calculate: 'Calculate BMI',
      result: 'Your BMI:',
      category: 'Category:',
      weightHint: 'Enter your weight in kilograms',
      heightHint: 'Enter your height in centimeters',
      categories: [
        'Underweight',
        'Normal weight',
        'Overweight',
        'Obesity'
      ]
    }
  };

  const t = {
    ...defaultLabels[lang],
    ...translations?.[lang]
  };

  const getCategory = (bmiValue) => {
    const categories = defaultLabels[lang].categories;
    if (bmiValue < 18.5) return categories[0];
    if (bmiValue < 25) return categories[1];
    if (bmiValue < 30) return categories[2];
    return categories[3];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    const h = Number(height) / 100;
    const w = Number(weight);
    if (h <= 0 || w <= 0) return;
    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(2));
    setCategory(getCategory(bmiValue));
  };

  return (
    <div className="container bmi-container">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">{t.title}</h1>
        <p className="text-muted">{t.subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="bmi-form">
        <div className="mb-4">
          <label className="form-label fw-bold">{t.weight}</label>
          <small className="d-block mb-2" style={{ color: '#6c757d' }}>{t.weightHint}</small>
          <input
            type="number"
            className="form-control"
            value={weight}
            min="1"
            step="0.1"
            onChange={e => setWeight(e.target.value)}
            required
            placeholder="np. 70.5"
          />
        </div>
        
        <div className="mb-4">
          <label className="form-label fw-bold">{t.height}</label>
          <small className="d-block mb-2" style={{ color: '#6c757d' }}>{t.heightHint}</small>
          <input
            type="number"
            className="form-control"
            value={height}
            min="1"
            step="0.1"
            onChange={e => setHeight(e.target.value)}
            required
            placeholder="np. 175"
          />
        </div>
        
        <button type="submit" className="btn btn-warning w-100 py-2 fw-bold">
          {t.calculate}
        </button>
      </form>
      
      {bmi && (
        <div className="mt-4 p-4 border rounded shadow-sm bmi-form">
          <div className="mb-2">
            <strong>{t.result}</strong> {bmi}
          </div>
          <div>
            <strong>{t.category}</strong> {category}
          </div>
        </div>
      )}
    </div>
  );
};

export default BMI;