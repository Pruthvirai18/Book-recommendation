'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function BookDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://openlibrary.org/works/${id}.json`)
        .then((res) => res.json())
        .then((data) => setBook(data));
    }
  }, [id]);

  if (!book) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <Navbar />
      <h1>{book.title}</h1>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.covers?.[0]}-L.jpg`}
        alt={book.title}
        width="200"
      />
      <p>{book.description?.value || 'No description available'}</p>
    </div>
  );
}
