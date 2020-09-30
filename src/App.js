import React, { Component} from 'react';
import './App.css';
import firebase from './firebase';


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

    dbref.on('value'), (response) => { 
      const firebaseData = response.val();

      this.setState ({
      data:firebaseData,
    });
  }
  }

  randomRecipe = () => { 
    console.log (this.state.data);
    const randomIndex = math.floor(math.random() * this.state.data.recipe.length);
    const randomRecipe = this.state.data.mood[randomIndex];
    
    this.setState({
      currentRecipe: randomRecipe
    })
  }

  render() {
    return (
      <div className ="App">
        <h1>Food Here</h1>
        <recipe currentRecipe={this.state.currentRecipe} />

        <button onClick={this.randomRecipe}>Pick a Random Recipe</button>
      </div>
    );
  }
}
export default App;
