'use client';
import { useState, useEffect } from 'react';
import { fetchBooks } from '../utils/api';
import Navbar from './components/Navbar';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const searchBooks = async () => {
    const results = await fetchBooks(query || 'Harry Potter');
    setBooks(results);
  };

  const addToFavorites = (book) => {
    if (!favorites.some((fav) => fav.key === book.key)) {
      const updatedFavorites = [...favorites, book];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="flex w-full max-w-lg bg-white rounded-lg overflow-hidden shadow-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow p-3 text-black focus:outline-none"
            placeholder="Search for books..."
          />
          <button onClick={searchBooks} className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-800">Search</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {books.map((book, index) => (
          <div key={`${book.key}-${index}`} className="bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col items-center transition transform hover:scale-105">
            <img src={book.cover} alt={book.title} className="w-32 h-48 object-cover rounded-md" />
            <p className="mt-2 text-lg font-semibold text-center">{book.title}</p>
            <button onClick={() => addToFavorites(book)} className="mt-3 p-2 bg-green-600 text-white rounded-lg hover:bg-green-800">Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
}