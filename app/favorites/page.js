'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (key) => {
    const updatedFavorites = favorites.filter(book => book.key !== key);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      <h1 className="text-center text-2xl font-bold p-6">Your Favorite Books ❤️</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {favorites.length > 0 ? (
          favorites.map((book, index) => (
            <div key={`${book.key}-${index}`} className="bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col items-center transition transform hover:scale-105">
              <img src={book.cover} alt={book.title} className="w-32 h-48 object-cover rounded-md" />
              <p className="mt-2 text-lg font-semibold text-center">{book.title}</p>
              <button onClick={() => removeFromFavorites(book.key)} className="mt-3 p-2 bg-red-600 text-white rounded-lg hover:bg-red-800">Remove</button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400">No favorites added yet.</div>
        )}
      </div>
    </div>
  );
}