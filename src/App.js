import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Loading from './Loading.js';
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
import mhm from './assets/mhm.jpeg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovies: [],
      error: null,
      movieToRender: {}
    }
  }

  componentDidMount = () => {
    loadMovies().then(data => this.setState({ movies: data.movies }))
    .then(() => this.getSingleMovieInfo(this.state.movies))
    .catch(error => this.setState({ error: error.message }))
  }

  getSingleMovieInfo = (movies) => {
    movies.map(movie => {
      loadSingleMovie(movie.id).then(data => {
        this.state.singleMovies.push(data.movie)
      })
    })
    .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <main>
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
            this.state.movieToRender = this.state.singleMovies.find(movie => {
              return movie.id === parseInt(match.params.id)
            })
            return <SingleMovie {...this.state.movieToRender} />
          }}
        />
      </main>
    )
  }
}

export default App;
