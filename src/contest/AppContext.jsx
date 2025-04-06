import React, { createContext } from "react";
import { recipes } from "../assets/assets";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const value = {
    recipes,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
