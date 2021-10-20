import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({id, src, title}) => {
  return (
    <div className="card-holder__movie-card">
      <Link to={`/movie_info/${id}`}>
        <img
          className="movie-card__movie-poster"
          tabIndex="0"
          role="button"
          aria-label="Movie Poster"
          src={ src }
          alt="A movie poster"
        />
      </Link>
      <p className="movies-card__movie-title">
        { title }
      </p>
    </div>
  )
}

export default MovieCard;
