import React, { useEffect, useState } from "react";

const RecipeForm = ({ recipe, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    time: "",
    cuisine: "",
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        name: recipe.name || "",
        description: recipe.description || "",
        time: recipe.time || "",
        cuisine: recipe.cuisine || "",
      });
    } else {
      // Reset form when no recipe is selected (new creation)
      setFormData({
        name: "",
        description: "",
        time: "",
        cuisine: "",
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">
        {recipe ? "Edit Recipe" : "Create New Recipe"}
      </h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Recipe Name"
        className="w-full p-2 mb-3 border rounded"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="time"
        value={formData.time}
        onChange={handleChange}
        placeholder="Time (e.g. 30 mins)"
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine (e.g. Italian)"
        className="w-full p-2 mb-3 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {recipe ? "Update Recipe" : "Create Recipe"}
      </button>
    </form>
  );
};

export default RecipeForm;
