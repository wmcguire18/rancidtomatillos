import React from 'react';
import './SingleMovie.css';

const SingleMovie = ({title, average_rating, release_date, src, handleClick}) => {
  return (
    <div className="single-movie-info">
      <img
        className="single-movie-info__movie-poster"
        src={src}
        alt="Large backdrop image of a promotional movie poster"
      />
      <h2 className="single-movie-info__title">{title}</h2>
      <p className="single-movie-view__rating">{average_rating}</p>
      <p className="single-movie-view__release-date">{release_date}</p>
      <button className="single-movie-info__home-view-button" onClick={handleClick}>Return to Home</button>
    </div>
  )
}

export default SingleMovie;
