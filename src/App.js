import React, { Component } from 'react';
import MoviesContainer from './MoviesContainer.js';
import {
  loadMovies,
  loadSingleMovie
  // loadSingleMovieVideo,
  // loginUser,
  // loadUserRatings,
  // submitNewUserRating
} from './apiCalls.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      isShowingDetails: false,
      selectedMovie: null,
      error: null
    }
  }

  componentDidMount = () => {
    loadMovies().then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState({ error: error.message }))
  }

  handleClick = (id) => {
    if(!this.state.isShowingDetails) {
      loadSingleMovie(id).then(data => {
        this.setState({
          selectedMovie: data.movie,
          isShowingDetails: true
        })
      })
      .catch(error => this.setState({ error: error.message }))
    } else {
      this.setState({
        selectedMovie: null,
        isShowingDetails: false
      })
    }
  }

  render() {
    if (this.state.movies) {
      return (
        <main>
          <nav className="nav-bar">
            <h1 className="nav-bar__app-name">Mile High Movies!</h1>
            <img className="nav-bar__logo" src="" />
          </nav>
          {this.state.error && <h2>{this.state.error}</h2>}
          <MoviesContainer movies={ this.state.movies } handleClick={this.handleClick} isShowingDetails={this.state.isShowingDetails} selectedMovie={this.state.selectedMovie}/>
        </main>
      )
    } else {
      return (
        <main>
          <nav className="nav-bar">
            <h1 className="nav-bar__app-name">...Loading...</h1>
            <img className="nav-bar__logo" src="" />
          </nav>
        </main>
      )
    }
  }
}

export default App;
