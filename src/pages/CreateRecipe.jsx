import React from 'react';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';

const CreateRecipe = () => {
  return (
    <div className='min-h-screen'>
      <RecipeForm/>
      <RecipeList/>
    </div>
  );
};

export default CreateRecipe;
