import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contest/AppContext";
import { Search } from "lucide-react";

const Foods = () => {
  const { recipes } = useContext(AppContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  const handleClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputRef.current.value.toLowerCase());
  };

  const filteredRecipes = [];
  for (let recipe of recipes) {
    if (
      (selectedCategory === "All" || recipe.category === selectedCategory) &&
      recipe.name.toLowerCase().includes(searchTerm)
    ) {
      filteredRecipes.push(recipe);
    }
  }

  const uniqueCategories = ["All"];
  for (let recipe of recipes) {
    if (!uniqueCategories.includes(recipe.category)) {
      uniqueCategories.push(recipe.category);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center mb-6">Foods</h1>
      <div>
        <div className="justify-center items-center">
          <p className="text-center text-3xl font-bold">
            Find your favour Recipe here
          </p>
        </div>
        <form
          className="flex justify-center items-center gap-4 mt-5"
          onSubmit={handleSearch}
        >
         <input
          type="text"
          placeholder="Search for a recipe..."
          ref={inputRef}
          className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 w-full max-w-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2"
          />

          <button
            type="submit"
            className="rounded-lg p-2 cursor-pointer bg-gray-500"
          >
            <Search />
          </button>
        </form>
      </div>

      <div className="mb-6 text-center pt-5">
        <label htmlFor="category" className="mr-2 font-semibold">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border bg-white text-black cursor-pointer rounded px-4 py-2"
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded shadow p-4 cursor-pointer"
          >
            <img
              className="w-full h-40 object-cover mb-4"
              src={recipe.image}
              alt={recipe.title}
            />
            <h2 className="text-lg font-semibold text-black mb-2">
              {recipe.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              Category: {recipe.category}
            </p>
            <p className="text-gray-700 mb-4">{recipe.description}</p>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span>⭐ {recipe.rating}</span>
              <span>⏱ {recipe.time} mins</span>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => handleClick(recipe.id)}
              >
                View Recipe
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded">
                Add to Favorite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
