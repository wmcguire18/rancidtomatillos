import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadSingleMovie } from './apiCalls.js';
import './SingleMovie.css';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieToRender: {},
      movieId: props.id
    }
  }

  componentDidMount() {
    loadSingleMovie(this.state.movieId.id)
      .then(data => this.setState({movieToRender: data.movie}))
  }

  render() {
    const movie = this.state.movieToRender;
    return (
      <div className="single-movie-info">
        <img
          className="single-movie-info__movie-poster"
          src={movie.backdrop_path}
          alt="Large backdrop image of a promotional movie poster"
        />
        <h2 className="single-movie-info__title">{movie.title}</h2>
        <p className="single-movie-view__rating">{movie.average_rating}</p>
        <p className="single-movie-view__release-date">{movie.release_date}</p>
        <p className="single-movie-view__genres">{movie.genres}</p>
        <p className="single-movie-view__overview">{movie.overview}</p>
        <p className="single-movie-view__tagline">{movie.tagline}</p>
        <p className="single-movie-view__budget">{movie.budget}</p>
        <Link to="/">
          <button className="single-movie-info__home-view-button">Return to Home</button>
        </Link>
      </div>
    )
  }
}

export default SingleMovie;
