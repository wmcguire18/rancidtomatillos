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
import mhm from './assets/mhm.jpeg'

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
    try {
      loadMovies().then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState({ error: error.message }))

    } catch (error) {
      return (
        <main>
          <nav className="nav-bar">
            <h1 className="nav-bar__app-name">ERROR 500 (...oooo, sounds scary, and no one even knows what this one means. Just try refreshing the page, though, and that should fix it)</h1>
            <img className="nav-bar__logo" src={mhm} />
          </nav>
        </main>
      )
    }
  }

  handleClick = (id) => {
    if(!this.state.isShowingDetails) {
      try {
        loadSingleMovie(id).then(data => {
          this.setState({
            selectedMovie: data.movie,
            isShowingDetails: true
          })
        })
        .catch(error => this.setState({ error: error.message }))

      } catch (error) {
        return (
          <main>
            <nav className="nav-bar">
              <h1 className="nav-bar__app-name">ERROR 500 (...oooo, sounds scary, and no one even knows what this one means. Just try refreshing the page, though, and that should fix it)</h1>
              <img className="nav-bar__logo" src="" />
            </nav>
          </main>
        )
      }

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
