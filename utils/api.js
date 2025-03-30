export async function fetchBooks(query) {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`);
    const data = await res.json();
    return data.docs.map((book, index) => ({
      key: `${book.key}-${index}`,
      title: book.title,
      cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : '/placeholder.jpg',
    }));
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return [];
  }
}