import React, { useEffect, useState } from "react";
import { getRecipes, deleteRecipe, updateRecipe } from "../api/api";

const RecipeList = ({ refresh }) => {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [updatedRecipe, setUpdatedRecipe] = useState({
    name: "",
    Recipe: "",
    time: "",
    cuisine: ""
  });

  const loadRecipes = async () => {
    try {
      const res = await getRecipes();
      setRecipes(res.data || []);
    } catch (error) {
      console.error("Failed to load recipes:", error);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      loadRecipes();
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    setUpdatedRecipe({
      name: recipe.name,
      Recipe: recipe.Recipe,
      time: recipe.time || "",
      cuisine: recipe.cuisine
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateRecipe(editingRecipe.id, updatedRecipe);

      setEditingRecipe(null);
      setUpdatedRecipe({
        name: "",
        Recipe: "",
        time: "",
        cuisine: ""
      });

      loadRecipes(); 
    } catch (error) {
      console.error("Failed to update recipe:", error);
    }
  };

  return (
    <div className="max-w-4xl text-black mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">All Recipes</h2>

      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg p-6 mb-4"
          >
            <p className="text-sm mb-2">
              <strong>Food Name:</strong> {recipe.name}
            </p>
            <p className="text-sm mb-2">
              <strong>Recipe:</strong> {recipe.Recipe}
            </p>
            <p className="text-sm mb-2">
              <strong>Time:</strong> {recipe.time || "N/A"}
            </p>
            <p className="text-sm mb-4">
              <strong>Cuisine:</strong> {recipe.cuisine}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleEdit(recipe)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(recipe.id)}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {editingRecipe && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Edit Recipe</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">
                Food Name
              </label>
              <input
                type="text"
                id="name"
                name="Food Name"
                value={updatedRecipe.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Recipe" className="block text-sm font-semibold">
                Recipe 
              </label>
              <textarea
                id="Recipe"
                name="Recipe"
                value={updatedRecipe.Recipe}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="time" className="block text-sm font-semibold">
                Time
              </label>
              <input
                type="text"
                id="time"
                name="time"
                value={updatedRecipe.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cuisine" className="block text-sm font-semibold">
                Cuisine
              </label>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={updatedRecipe.cuisine}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mt-2"
                required
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingRecipe(null);
                  setUpdatedRecipe({
                    name: "",
                    Recipe: "",
                    time: "",
                    cuisine: ""
                  });
                }}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
