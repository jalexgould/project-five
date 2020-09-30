import React, { Component } from 'react';

class Recipe extends Component { 
   render () { 
      return ( 
         <p>Current Recipe is: {this.props.currentRecipe}</p>
         // <p>select new recipe by clicking the Recipe Button </p>
      )
   }
}

export default Recipe;