import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <div>
        <div className="justify-center items-center">
          <p className="text-center text-3xl font-bold">Find your favour Recipe here</p>
        </div>
        <form className="flex justify-center items-center gap-4 mt-5">
        <input
         type="text"
         placeholder="Search for a recipe..."
         className="border dark:text-white rounded-lg p-2 w-1/2 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button className="bg-blue-500 text-white rounded-lg p-2">
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;