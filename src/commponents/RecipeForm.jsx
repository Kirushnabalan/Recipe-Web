import React, { useState, useEffect } from "react";
import { createRecipe, updateRecipe } from "../api/api";

const RecipeForm = ({ selectedRecipe, clearSelection, reload }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    time: "",
    cuisine: "",
  });

  useEffect(() => {
    if (selectedRecipe) setForm(selectedRecipe);
  }, [selectedRecipe]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.id) {
      await updateRecipe(form.id, form);
    } else {
      await createRecipe(form);
    }

    setForm({
      name: "",
    description: "",
    time: "",
    cuisine: "",
    });

    clearSelection();
    reload();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-bold mb-4">{form.id ? "Edit" : "Add"} Recipe</h2>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <input
        name="time"
        placeholder="Time"
        value={form.time}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="servings"
        placeholder="Servings"
        value={form.servings}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="cuisine"
        placeholder="Cuisine"
        value={form.cuisine}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
    
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {form.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default RecipeForm;
