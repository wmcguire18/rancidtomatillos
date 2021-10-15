import React from 'react';
import MovieCard from './MovieCard.js';
import './MoviesContainer.css';

const MoviesContainer = (movieData) => {

  const movieCards = movieData.movies.map(movie => {
    return (
      <MovieCard
        key={ movie.id }
        id={ movie.id }
        title={ movie.title }
        src={ movie.poster_path }
      />
    )
  })

  return (
    <section>
      <div className="movies-container__featured">
        <h2 className="movies-container__featured-text">FEATURED:</h2>
        <article className="featured__card-holder">
          {movieCards}
        </article>
      </div>
    </section>
  )
}

export default MoviesContainer;
