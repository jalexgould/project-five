import React, { Component } from 'react';

class Recipe extends Component { 
   render () { 
      return ( 
         <div className="results">
            <h2> Check Out Some Great Food Here</h2>
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
            <li>
            {this.props.currentRecipe.img}
            </li>
            </ol>
         </div>
      )
   }
}

export default Recipe;