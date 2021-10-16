import React from 'react';
import './MovieCard.css';

const MovieCard = ({id, title, src, handleClick}) => {
  return (
    <div className="card-holder__movie-card">
      <img
        className="movie-card__movie-poster"
        tabIndex="0"
        role="button"
        aria-label="Movie Poster"
        src={ src }
        alt="A movie poster"
        onClick={() => handleClick(id)}
      />
      <p className="movies-card__movie-title">
        { title }
      </p>
    </div>
  )
}

export default MovieCard;
