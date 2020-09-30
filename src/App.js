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

      this.setState ({
      data:firebaseData,
    });
  })
  }
// random button for recipes
  randomRecipe = () => { 
  const randomIndex = Math.floor(Math.random() * this.state.data.recipe.length);

  console.log ('randomIndex', randomIndex);
  }
// display requested data 
  render() {
    return (
      <div className ="App">
        <h1>Food Here</h1>
        <Recipe currentRecipe={this.state.currentRecipe} />
        <button onClick={this.randomRecipe}>Pick a Random Recipe</button>
      </div>
    
      // <div className ="Recipes"></div>
      // figure out how to display firebase results in a div per click
    );
  }
}
export default App;
