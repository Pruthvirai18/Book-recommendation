'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h1>❤️ Favorite Books</h1>
      <div className="grid">
        {favorites.map((book, index) => (
          <div key={index} className="card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
