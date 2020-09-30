import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';
import Recipe from './Recipe.js';
// imports 

class App extends Component {
  // initilize state 
  constructor() {
    super();

    this.state = {
      data:'',
      currentRecipe: 'Click To Get Started'
    };
  }
  // request for data 
  componentDidMount() {
    const dbref = firebase.database().ref();

    dbref.on('value', (response) => { 
      const firebaseData = response.val();
      console.log(firebaseData)
      this.setState ({
      data:firebaseData,
    });
  })
  }
// random button for recipes
  randomRecipe = () => { 
  const randomIndex = Math.floor(Math.random() * this.state.data.length);

  console.log ('randomIndex', randomIndex);
  
  this.setState({
    currentRecipe:this.state.data[randomIndex],

    
  })
}
// display requested data 
  render() {
    return (
      <div>
        <div className ="App">
          <h1>Find Vegetarian Recipes Here</h1>
          <button onClick={this.randomRecipe}>Click for a Random Recipe</button>
        </div>
        <div className ="recipeDisplay">
          <Recipe currentRecipe={this.state.currentRecipe} />
        </div>
      </div>
      // figure out how to display firebase results in a div per click
    );
  }
}
export default App;
