import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadSingleMovie, loadSingleMovieVideo, addWatchedMovie } from './apiCalls.js';
import './SingleMovie.scss';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    const { id } = props
    this.state = {
      movieToRender: {},
      movieId: id.id,
      genre: [],
      releaseDate: '',
      average_rating: 0,
      budget: 0,
      trailer: []
    }
  }

  componentDidMount = () => {
    loadSingleMovie(this.state.movieId)
      .then(data => this.setState({
        movieToRender: data.movie,
        genre: data.movie.genres,
        releaseDate: data.movie.release_date,
        average_rating: data.movie.average_rating,
        budget: data.movie.budget,
        movieId: data.movie.id
      })
    )
    .then(this.getTrailer())
  }

  getTrailer = () => {
    loadSingleMovieVideo(this.state.movieId)
      .then(data => this.setState({
        trailer: data.videos
      }))
  }

  render() {
    const movie = this.state.movieToRender;
    const genre = this.state.genre.join(', ')
    const rating = this.state.average_rating.toFixed(2)

    let budget;
    if (!this.state.budget) {
      budget = 'Unknown'
    } else {
      budget = this.state.budget
    }

    const trailerSrc = this.state.trailer.map(preview => {
      return (
        <iframe
          key={preview.key}
          className="iframe-container__video"
          width="400"
          height="300"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`https://www.youtube.com/embed/${preview.key}?modestbranding=1&autoplay=0&fullscreen=1&allowfullscreen`}
        >
        </iframe>
      )
    })

    return (
      <section className="single-movie-info">
        <img
          className="single-movie-info__movie-poster"
          src={movie.backdrop_path}
          alt="Large backdrop image of a promotional movie poster"
          id="moviePoster"
        />
        <h2 className="single-movie-info__title">{movie.title}</h2>
        <p className="single-movie-view__genres">Genres: {genre}</p>
        <p className="single-movie-view__release-date">{movie.release_date}</p>
        <p className="single-movie-view__rating">Viewer Rating: {rating}</p>
        <p className="single-movie-view__tagline">{movie.tagline}</p>
        <p className="single-movie-view__overview">SYNOPSIS: {movie.overview}</p>
        <p className="single-movie-view__budget">Budget: {budget}</p>
        <Link to="/">
          <button className="single-movie-info__home-view-button">Return to Home</button>
        </Link>
        <div className="iframe-container">
          {trailerSrc}
        </div>
        <div className="single-movie-info__info-background">
        </div>
      </section>
    )
  }
}

export default SingleMovie;
