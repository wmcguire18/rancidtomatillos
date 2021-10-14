import React from 'react';
import './MovieCard.css';

const MovieCard = ({id, title, src}) => {
  render() {
    return (
      <div className="movies-container__movie-card"
        <img tabindex="0" role="button" aria-label="Movie Poster" { src } />
        <p className="movies-container__movie-title">
          { title }
        </p>
      </div>
    )
  }
}
