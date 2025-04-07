import React from "react";
import Navbar from "./commponents/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import CreateRecipe from "./pages/CreateRecipe";
import PageFooter from "./commponents/PageFooter";
import Rescipe from "./commponents/rescipe/[id]/Rescipe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-5 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/recipe/:id" element={<Rescipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
      <PageFooter />
    </>
  );
}

export default App;
