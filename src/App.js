import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SingleMovie from './SingleMovie.js';
import AllMoviesContainer from './AllMoviesContainer.js';
import {
  loadMovies,
  loadSingleMovie
} from './apiCalls.js';
import './App.css';
import img1 from './red-nav.png';
import img2 from './seats.png';
import img3 from './assets/mhm.jpeg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      queuedMovies: [],
      error: null
    }
  }

  queueMovie = (id) => {
    const queuedMovie = this.state.movies.find(movie => {
      return movie.id === id
    })
    this.setState({queuedMovies:[...this.state.queuedMovies, queuedMovie]})
  }

  componentDidMount = () => {
    loadMovies().then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <main>
        <nav className="nav-bar">
          <div className="nav-bar__app-name"><span><img className="logo" src={img3}/></span></div>
          <img className="nav-bkg" src={img1} />
          <img className="nav-bar__logo" src="" />
        </nav>
        <Route
          exact path="/"
          render={() => {
            return (
              <nav className="bottom-nav">
              {this.state.queuedMovies.length &&
              <div className="movies-container__movie-lists">
              <h1>Your Queue</h1>
              <AllMoviesContainer movies={ this.state.queuedMovies }/>
              </div> }
                <AllMoviesContainer movies={ this.state.movies }/>
                <img className="bottom-nav__image" src={img2} />
              </nav>
            )
          }}
        />
        <Route
          exact path="/movie_info/:id"
          render={({match}) => {
            const movieToRender = this.state.movies.find(movie => {
              return movie.id === parseInt(match.params.id)
            })
            return <SingleMovie id={ movieToRender }
            queueMovie = {this.queueMovie}
            />
          }}
        />
      </main>
    )
  }
}

export default App;
