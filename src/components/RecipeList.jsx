import React from "react";
import Recipe from "./Recipe";
import PropTypes from 'prop-types'


function RecipeList(props){

  return (
    <React.Fragment>  
      <hr/>
      {props.recipeList.map((recipe) =>
        <Recipe 
        whenRecipeClicked = { props.onRecipeSelection}
        name ={recipe.name}
        image={recipe.image}
        instructions={recipe.instructions}
        cookTime={recipe.cookTime}
        id={recipe.id}
        key={recipe.id}
        likes={recipe.likes}
        likeRecipe={props.likeRecipe}/>
      )}
    </React.Fragment>
  );
}

RecipeList.propTypes = {
  recipeList: PropTypes.array,
  onRecipeSelection: PropTypes.func,
  likeRecipe: PropTypes.func
};

export default RecipeList;