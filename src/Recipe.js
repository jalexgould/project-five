import React, { Component } from 'react';

class Recipe extends Component { 
   render () { 
      return ( 
         <div>
            <h2>Current Recipe is:</h2>

            <p>
            {this.props.currentRecipe}
            </p>

         </div>

         // <p>select new recipe by clicking the Recipe Button </p>
      )
   }
}

export default Recipe;