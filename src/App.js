import React, { Component } from 'react';
import MoviesContainer from './MoviesContainer.js';
import movieData from './MovieData.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {movies: movieData.movies}
  }

  render() {
    return (
      <main>
        <nav className="nav-bar">
          <h1 className="nav-bar__app-name">Mile High Movies!</h1>
          // <img className="nav-bar__logo" src="" />
        </nav>
        <MoviesContainer movies={ this.state.movies } />
      </main>
    );
  }
}

export default App;
