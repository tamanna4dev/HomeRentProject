// screen/FavoritesContext.js
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (property) => {
    const isFav = favorites.some((item) => item.id === property.id);
    if (isFav) {
      setFavorites(favorites.filter((item) => item.id !== property.id));
    } else {
      setFavorites([...favorites, property]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
