import React from "react";
import Navbar from "./commponents/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import CreateRecipe from "./pages/CreateRecipe";
import PageFooter from "./commponents/PageFooter";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
      <PageFooter />
    </>
  );
}

export default App;
