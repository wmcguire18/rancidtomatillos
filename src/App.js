import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SingleMovie from './SingleMovie.js';
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
import img1 from './nav-bkg2.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: null
    }
  }

  componentDidMount = () => {
    loadMovies().then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <main>
        <img className="nav-bkg" src={img1} />
        <nav className="nav-bar">
          <h1 className="nav-bar__app-name">Mile-High Movies</h1>
          <img className="nav-bar__logo" src="" />
        </nav>
        <Route
          exact path="/"
          render={() => {
            return (
              <MoviesContainer movies={ this.state.movies }/>
            )
          }}
        />
        <Route
          exact path="/movie_info/:id"
          render={({match}) => {
            const movieToRender = this.state.movies.find(movie => {
              return movie.id === parseInt(match.params.id)
            })
            return <SingleMovie id={ movieToRender }/>
          }}
        />
      </main>
    )
  }
}

export default App;
