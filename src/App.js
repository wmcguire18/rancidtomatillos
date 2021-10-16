import React, { Component } from 'react';
import MoviesContainer from './MoviesContainer.js';
import movieData from './MovieData.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      isShowingDetails: false,
      selectedMovie: null
    }
  }

  handleClick = (id) => {
    if(!this.state.isShowingDetails) {
    const selectedMovie = this.state.movies.find(movie => {
      return movie.id === id
    })
    this.setState({
      selectedMovie: selectedMovie,
      isShowingDetails: true
    })
  } else {
    this.setState({
      selectedMovie: null,
      isShowingDetails: false
    })
  }
  }


  render() {
    return (
      <main>
        <nav className="nav-bar">
          <h1 className="nav-bar__app-name">Mile High Movies!</h1>
          // <img className="nav-bar__logo" src="" />
        </nav>
        <MoviesContainer movies={ this.state.movies } handleClick={this.handleClick} isShowingDetails={this.state.isShowingDetails} selectedMovie={this.state.selectedMovie}/>
      </main>
    );
  }
}

export default App;
