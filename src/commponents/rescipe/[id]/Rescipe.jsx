import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../contest/AppContext";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Rescipe = () => {
  const { id } = useParams();
  const { recipes, theme } = useContext(AppContext);

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
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">
        {recipe.name}
      </h1>
      <img
        className="w-full h-80 object-cover rounded-lg mb-8 shadow-lg"
        src={recipe.image}
        alt={recipe.name}
      />
      <p className="text-lg mb-8 italic text-center">{recipe.description}</p>
      <div className="flex flex-wrap bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 mb-6 max-w-3xl mx-auto">
        <div className="w-full md:w-1/2">
          <p className="text-base mb-3">
            <strong className="font-semibold">Category:</strong>{" "}
            {recipe.category}
          </p>
          <p className="text-base mb-3">
            <strong className="font-semibold">Cuisine:</strong> {recipe.cuisine}
          </p>
          <p className="text-base mb-3">
            <strong className="font-semibold">Rating:</strong> ⭐{" "}
            {recipe.rating}
          </p>
          <p className="text-base mb-3">
            <strong className="font-semibold">Time:</strong> ⏱ {recipe.time}
          </p>
          <p className="text-base mb-3">
            <strong className="font-semibold">Servings:</strong>{" "}
            {recipe.servings}
          </p>
          <p className="text-base mb-3">
            <strong className="font-semibold">Favorite:</strong>{" "}
            {recipe.isFavorite ? "Yes" : "No"}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 mb-4 max-w-md mx-auto">
            <strong className="font-semibold">Ingredients:</strong>
            <ul className="list-disc list-inside mt-3 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 max-w-md mx-auto">
            <strong className="font-semibold">Substitutions:</strong>
            <ul className="list-disc list-inside mt-3 space-y-2">
              {Object.entries(recipe.substitutions).map(
                ([key, values], index) => (
                  <li key={index}>
                    <strong>{key}:</strong> {values.join(", ")}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="p-6 mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Instructions</h2>
        <p className="leading-relaxed">{recipe.instructions}</p>
      </div>
      <div className="p-6 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Timer</h2>
        {isTimerRunning ? (
          <>
            <p className="text-3xl font-extrabold">{formatTime(timeLeft)}</p>
            <button
              onClick={stopTimer}
              className="bg-red-600 text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-red-700 mt-6 transition duration-300"
            >
              Stop Timer
            </button>
          </>
        ) : (
          <button
            onClick={startTimer}
            className="bg-gray-600 text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Start Timer
          </button>
        )}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-8 max-w-3xl mx-auto">
        <button
          className="flex items-center cursor-pointer"
          title="Share on Facebook"
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u`,
              "_blank",
            )
          }
        >
          <FaFacebookF className="mr-2" />
        </button>
        <button
          className="flex items-center cursor-pointer"
          onClick={() =>
            window.open(`https://twitter.com/intent/tweet?tex`, "_blank")
          }
          title="Share on Twitter"
        >
          <FaTwitter className="mr-2" />
        </button>
        <button
          className="flex items-center cursor-pointer"
          title="Share on Instagram"
          onClick={() => window.open(`https://www.instagram.com`, "_blank")}
        >
          <FaInstagram className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default Rescipe;
