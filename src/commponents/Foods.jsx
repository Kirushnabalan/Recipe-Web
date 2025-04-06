import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contest/AppContext";

const Foods = () => {
    const { recipes } = useContext(AppContext);
    const navigate = useNavigate();


    const handleClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Foods</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded shadow p-4 cursor-pointer"
                    >
                        <img
                            className="w-full h-40 object-cover mb-4"
                            src={recipe.image}
                            alt={recipe.title}
                        />
                        <h2 className="text-lg font-semibold text-black mb-2">{recipe.name}</h2>
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
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => handleClick(recipe.id)}
                            >
                                View Recipe
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                onClick={() => handleFavorite(recipe)}
                            >
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