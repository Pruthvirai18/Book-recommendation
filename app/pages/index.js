'use client';
import { useState, useEffect } from 'react';
import { fetchBooks } from '../utils/api';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  const [query, setQuery] = useState('Harry Potter');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const data = await fetchBooks(query);
      if (data && data.docs) setBooks(data.docs);
    }
    getBooks();
  }, [query]);

  return (
    <div className="container">
      <Navbar />
      <h1>📖 Find Your Next Book</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid">
        {books.map((book) => (
          <Link key={book.key} href={`/book/${book.key.split('/').pop()}`}>
            <div className="card">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                width="100"
              />
              <h3>{book.title}</h3>
              <p>{book.author_name?.[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
