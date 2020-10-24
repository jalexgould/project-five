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

  this.setState({
    currentRecipe:this.state.data[randomIndex],

    
  })
}
// display requested data 
  render() {
    return (
      <div>
        <div className ="App">
          <h1>Cook Book</h1>
          <h2>Vegetarian Recipe Finder</h2>
          <p> Click The Search Button Below To Start Searching</p>
          <button onClick={this.randomRecipe}>Get New Recipes Here</button>
        </div>
        <div>
        </div>
        <div className ="recipeDisplay">
          <Recipe currentRecipe={this.state.currentRecipe} />
        </div>
        <div className="footer">
          <p> Click The Search Button To Start New Search </p>
          <button onClick={this.randomRecipe}>Get New Recipes Here</button>
          <p className="created">Created By Alex Gould 2020</p>
        </div>
      </div>
    );
  }
}
export default App;
