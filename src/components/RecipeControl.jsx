import React from "react";
import NewRecipeForm from "./NewRecipeForm";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";

class RecipeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainRecipeList: [],
      selectedRecipe: null,
    };
  }

  likeRecipe = (id) => {
    const tempList = this.state.mainRecipeList.map((recipe) => {
      if (recipe.id === id) {
          return {
            ...recipe,
            likes: recipe.likes + 1
          };
      }
      return recipe;
    });
    this.setState({ mainRecipeList: tempList });
  };

  handleClick = () => {
    if (this.state.selectedRecipe != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedRecipe: null
      });
    }else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewRecipeToList = (newRecipe) => {
    const newMainRecipeList = this.state.mainRecipeList.concat(newRecipe);
    this.setState({
                  mainRecipeList: newMainRecipeList,
                  formVisibleOnPage: false})
  }

  handleChangingSelectedRecipe = (id) => {
    const selectedRecipe = this.state.mainRecipeList.filter(recipe => recipe.id === id)[0];
    this.setState({selectedRecipe: selectedRecipe});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedRecipe != null) {
      currentlyVisibleState = <RecipeDetail recipe = {this.state.selectedRecipe} />
      buttonText="Return to Recipe List";
    }else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewRecipeForm onNewRecipeCreation={this.handleAddingNewRecipeToList} />
      buttonText = "Return to Recipe List";
    } else {
      currentlyVisibleState = <RecipeList recipeList={this.state.mainRecipeList} onRecipeSelection={this.handleChangingSelectedRecipe} likeRecipe={this.likeRecipe} />
      buttonText = "Add Recipe";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }


}

export default RecipeControl;