import React, { createContext, useState } from "react";
import { recipes as initialRecipes } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    setFavorites((prev) => {
      if (!prev.find((r) => r.id === recipe.id)) {
        return [...prev, recipe];
      }
      return prev;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  const value = {
    recipes: initialRecipes,
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
