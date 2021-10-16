import React from 'react';
import MovieCard from './MovieCard.js';
import SingleMovie from './SingleMovie.js';
import './MoviesContainer.css';

const MoviesContainer = (movieData) => {
console.log(movieData.isShowingDetails);
console.log(movieData.selectedMovie);
  const movieCards = movieData.movies.map(movie => {
    return (
      <MovieCard
        key={ movie.id }
        id={ movie.id }
        title={ movie.title }
        src={ movie.poster_path }
        handleClick={ movieData.handleClick }
      />
    )
  })

  return (
    <section>
    { !movieData.isShowingDetails &&
      <div className="movies-container__featured">
        <h2 className="movies-container__featured-text">FEATURED:</h2>
        <article className="featured__card-holder">
          {movieCards}
        </article>
      </div>
    }
    { movieData.isShowingDetails &&
      <SingleMovie
      key={ movieData.selectedMovie.id }
      title={ movieData.selectedMovie.title}
      src={ movieData.selectedMovie.backdrop_path}
      handleClick={ movieData.handleClick }
      />

    }
    </section>
  )
}

export default MoviesContainer;
