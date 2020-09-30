import React, { Component } from 'react';

class Recipe extends Component { 
   render () { 
      return ( 
         <p>Current Recipe is: {this.props.currentRecipe}</p>
      )
   }
}

export default Recipe;