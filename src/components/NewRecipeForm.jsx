import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types'


function NewRecipeForm(props) {

  function handleNewRecipeFormSubmission(event) {
    event.preventDefault();
    props.onNewRecipeCreation({name: event.target.name.value, image: event.target.image.value, instructions: event.target.instructions.value, cookTime: event.target.cookTime.value, likes: 0, id: v4()})
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewRecipeFormSubmission}>
        <input 
          type="text"
          name="name"
          placeholder='Recipe Name' />
        <input 
          type="text"
          name="image"
          placeholder='Image link' />
        <input 
          type="number"
          name="cookTime"
          placeholder='Cook Time in Min' />
        <input 
          type="text"
          name="instructions"
          placeholder='Recipe Instructions' />
          <button type='submit'>Add Recipe!!</button>
      </form>
    </React.Fragment>
  );
}

NewRecipeForm.propTypes= {
  onNewRecipeCreation: PropTypes.func
};

export default NewRecipeForm;