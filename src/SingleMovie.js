import React from 'react';
import { Link } from 'react-router-dom';
import './SingleMovie.css';

const SingleMovie = ({title, average_rating, release_date, backdrop_path, genres, overview, tagline, budget}) => {
  return (
    <div className="single-movie-info">
      <img
        className="single-movie-info__movie-poster"
        src={backdrop_path}
        alt="Large backdrop image of a promotional movie poster"
      />
      <h2 className="single-movie-info__title">{title}</h2>
      <p className="single-movie-view__rating">{average_rating}</p>
      <p className="single-movie-view__release-date">{release_date}</p>
      <p className="single-movie-view__genres">{genres}</p>
      <p className="single-movie-view__overview">{overview}</p>
      <p className="single-movie-view__tagline">{tagline}</p>
      <p className="single-movie-view__budget">{budget}</p>
      <button className="single-movie-info__home-view-button">Return to Home</button>
    </div>
  )
}

export default SingleMovie;
