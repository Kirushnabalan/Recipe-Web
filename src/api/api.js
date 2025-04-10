import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", 
});

export const getRecipes = () => API.get("/recipes");
export const getRecipe = (id) => API.get(`/recipes/${id}`);
export const createRecipe = (data) => API.post("/recipes", data);
export const updateRecipe = (id, data) => API.put(`/recipes/${id}`, data);
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);
