import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadSingleMovie } from './apiCalls.js';
import './SingleMovie.css';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieToRender: {},
      movieId: props.id,
      genre: [],
      average_rating: 0
    }
  }

  componentDidMount() {
    loadSingleMovie(this.state.movieId.id)
      .then(data => this.setState({
        movieToRender: data.movie,
        genre: data.movie.genres,
        average_rating: data.movie.average_rating
      }))
  }

  render() {
    const movie = this.state.movieToRender;
    const genre = this.state.genre.join(', ')
    const rating = this.state.average_rating.toFixed(2)
    return (
      <section className="single-movie-info">
        <img
          className="single-movie-info__movie-poster"
          src={movie.backdrop_path}
          alt="Large backdrop image of a promotional movie poster"
          id="moviePoster"
        />
        <h2 className="single-movie-info__title">{movie.title}</h2>
        <p className="single-movie-view__genres">{genre}</p>
        <p className="single-movie-view__release-date">{movie.release_date}</p>
        <p className="single-movie-view__rating">{`Viewer Rating: ${rating}`}</p>
        <p className="single-movie-view__tagline">{movie.tagline}</p>
        <p className="single-movie-view__overview">{movie.overview}</p>
        <p className="single-movie-view__budget">{`Budget: ${movie.budget}`}</p>
        <Link to="/">
          <button className="single-movie-info__home-view-button">Return to Home</button>
        </Link>
          <button className="single-movie-info__watched-movie-button">I've Seen It!</button>
          <button className="single-movie-info__queued-movie-button">I Want To See It!</button>
        <div className="single-movie-info__info-background">
        </div>
      </section>
    )
  }
}

export default SingleMovie;
