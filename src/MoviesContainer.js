import React from 'react';
import MovieCard from './MovieCard';
import movieData from './MovieData';
import './MoviesContainer.css';

const MoviesContainer = (movieData) => {

  const movieCards = movieData.movies.map(movie => {
    return (
      <MovieCard
        id={ movie.id }
        title={ movie.title }
        src={ movie.poster_path }
      />
    )
  })

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default MoviesContainer;
