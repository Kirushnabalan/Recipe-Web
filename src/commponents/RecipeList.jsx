import React, { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../api/api";

const RecipeList = ({ onEdit, refresh }) => {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div className="max-w-4xl text-black mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">All Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        recipes.map((r) => (
          <div
            key={r.id}
            className="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col items-center"
          >

            <p className="text-sm mb-2">{r.description}</p>
            <p className="text-sm font-semibold mb-2">
              <strong>Time:</strong> {r.time || "N/A"}
            </p>
            <p className="text-sm font-semibold mb-4">
              <strong>Rating:</strong> {r.rating || "N/A"}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => onEdit(r)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(r.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
