import React from "react";
import PropTypes from 'prop-types';

function RecipeDetail(props){
  const { recipe } = props;

  return (
    <React.Fragment>
      <h1>Recipe Details</h1>
      <h3>{recipe.name}</h3>
      <p>{recipe.image}</p>
      <p>Cook Time: {recipe.cookTime}min</p>
      <hr/>
    </React.Fragment>
  );
}

RecipeDetail.propTypes = {
  recipe: PropTypes.object
};

export default RecipeDetail;