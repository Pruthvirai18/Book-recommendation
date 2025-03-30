export function saveFavorite(book) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(book);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }
  