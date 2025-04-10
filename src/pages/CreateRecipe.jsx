import React from 'react';
import RecipeForm from '../commponents/RecipeForm';
import RecipeList from '../commponents/RecipeList';

const CreateRecipe = () => {
  return (
    <div className='min-h-screen'>
      <RecipeForm/>
      <RecipeList/>
    </div>
  );
};

export default CreateRecipe;
