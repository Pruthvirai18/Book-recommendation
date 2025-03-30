// app/components/Navbar.js
'use client';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg rounded-b-lg">
      <h1 className="text-3xl font-bold tracking-wide">📚 Book Finder</h1>
      <div className="space-x-4">
        <button onClick={() => router.push('/')} className="px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">Home</button>
        <button onClick={() => router.push('/favorites')} className="px-4 py-2 bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition">Favorites</button>
      </div>
    </nav>
  );
}