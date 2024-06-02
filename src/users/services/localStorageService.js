import { jwtDecode } from "jwt-decode";

const TOKEN = "my token";
const INFO = "info";	

export const setTokenInLocalStorage = (encryptedToken) => {
  localStorage.setItem(TOKEN, encryptedToken);
};

export const setInfoInLocalStorage = (userInfo) => {
  localStorage.setItem(INFO, userInfo);
}

export const removeToken = () => localStorage.removeItem(TOKEN);

export const removeInfo = () => localStorage.removeItem(INFO);

export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
  try {
    const myToken = getToken();
    return jwtDecode(myToken);
  } catch (error) {
    return null;
  }
};

export const getInfo = () => localStorage.getItem(INFO);

export const getFavorites = () => {
  const favoritesJSON = localStorage.getItem('favorites');
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};
export const addToFavorites = (cardId) => {
  const favorites = getFavorites();
  if (!favorites.includes(cardId)) {
    favorites.push(cardId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

export const isFavorite = (cardId) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites.includes(cardId);
}

export const removeFromFavorites = (cardId) => {
  const favorites = getFavorites().filter(id => id !== cardId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};