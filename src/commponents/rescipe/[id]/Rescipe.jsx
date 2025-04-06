import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../contest/AppContext"; // Corrected path

const Rescipe = () => {
    const { id } = useParams();
    const { recipes } = useContext(AppContext);
    
    // Find the recipe by ID
    const recipe = recipes.find((recipe) => recipe.id === Number(id));

    // Timer state
    const [timeLeft, setTimeLeft] = useState(null);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // Convert recipe time to seconds
    const convertTimeToSeconds = (time) => {
        const [minutes] = time.split(" ");
        return parseInt(minutes, 10) * 60;
    };

    // Start the timer
    const startTimer = () => {
        const totalSeconds = convertTimeToSeconds(recipe.time);
        setTimeLeft(totalSeconds);
        setIsTimerRunning(true);
    };

    // Stop the timer
    const stopTimer = () => {
        setIsTimerRunning(false);
    };

    // Timer countdown logic
    useEffect(() => {
        if (isTimerRunning && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setIsTimerRunning(false);
            alert("Time's up!");
        }
    }, [isTimerRunning, timeLeft]);

    // Reset timer when recipe ID changes
    useEffect(() => {
        setTimeLeft(null);
        setIsTimerRunning(false);
    }, [id]);

    // Format time for display
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{recipe.name}</h1>
            <img
                className="w-full h-72 object-cover rounded-lg mb-6 shadow-md"
                src={recipe.image}
                alt={recipe.name}
            />
            <p className="text-lg text-gray-700 mb-6 italic text-center">{recipe.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Category:</strong> {recipe.category}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Cuisine:</strong> {recipe.cuisine}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Rating:</strong> ⭐ {recipe.rating}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Time:</strong> ⏱ {recipe.time}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Servings:</strong> {recipe.servings}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-600 mb-4">
                        <strong>Ingredients:</strong>
                        <ul className="list-disc list-inside mt-2">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-700">{ingredient}</li>
                            ))}
                        </ul>
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
                <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-inner text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Timer</h2>
                {isTimerRunning ? (
                    <>
                        <p className="text-2xl font-bold text-gray-800">{formatTime(timeLeft)}</p>
                        <button
                            onClick={stopTimer}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
                        >
                            Stop Timer
                        </button>
                    </>
                ) : (
                    <button
                        onClick={startTimer}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Start Timer
                    </button>
                )}
            </div>
        </div>
    );
};

export default Rescipe;