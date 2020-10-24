import React, { Component } from 'react';

class Recipe extends Component { 
   render () { 
      return ( 
         <div className="results">
            <ol>
            <li className ="recipeName">
               {this.props.currentRecipe.name}
            </li>
            <li>
               {this.props.currentRecipe.ingredients}
            </li>
            <li>
               {this.props.currentRecipe.steps}
            </li>
            <li>
            {this.props.currentRecipe.img}
            </li>
            </ol>
         </div>
      )
   }
}

export default Recipe;