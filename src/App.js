import React, { Component} from 'react';
import './App.css';
import firebase from './firebase';
import Recipe from './Recipe.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data:null,
      currentRecipe: 'Select A Random Recipe'
    };
  }
  
  componentDidMount() {
    const dbref = firebase.database().ref();

    dbref.on('value', (response) => { 
      const firebaseData = response.val();

      this.setState ({
      data:firebaseData,
    });
  })
  }

  randomRecipe = () => { 
  const randomIndex = Math.floor(Math.random() * this.state.data.mood.length);

  console.log ('randomIndex', randomIndex);
  }
  
  render() {
    return (
      <div className ="App">
        <h1>Food Here</h1>
        <recipe currentRecipe={this.state.currentRecipe} />
        <button onClick={this.randomRecipe}>Pick a Random Recipe</button>
      </div>
    
      // <div className ="Recipes"></div>
    );
  }
}
export default App;
