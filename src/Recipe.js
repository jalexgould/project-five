import React, { Component } from 'react';

class Recipe extends Component { 
   render () { 
      return ( 
         <div className="results">
            {/* <h2> Current Recipe :</h2> */}
            <ol>
            <li>
               {this.props.currentRecipe.name}
            </li>
            <li>
               {this.props.currentRecipe.ingredients}
            </li>
            <li>
               {this.props.currentRecipe.steps}
            </li>
            </ol>
         </div>
      )
   }
}

export default Recipe;