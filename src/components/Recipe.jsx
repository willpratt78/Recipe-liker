import React from "react";
import PropTypes from "prop-types"


class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.pint
    };
  };
  
  render() {
    return (
      <React.Fragment>
        <div onClick={() => this.props.whenRecipeClicked(this.props.id)}>
          <h3>{this.props.name} </h3>
          <h1>{this.props.image}</h1>
          <p>{this.props.instructions} {this.props.cookTime}min</p>
        </div>
        <button 
          onClick={() => this.props.likeRecipe(this.props.id)}
        >
          Like
        </button>
        <p>Likes {this.props.likes}</p>
      </React.Fragment>
    );
  }
}

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  cookTime: PropTypes.string.isRequired,
  likes: PropTypes.number,
  id: PropTypes.string,
  whenRecipeClicked: PropTypes.func,
  likeRecipe: PropTypes.func
}

export default Recipe;