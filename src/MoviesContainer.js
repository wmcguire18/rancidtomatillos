import React from 'react';
import MovieCard from './MovieCard.js';
import SingleMovie from './SingleMovie.js';
import './MoviesContainer.css';

const MoviesContainer = (props) => {
  console.log(props.selectedMovie)
  const movieCards = props.movies.map(movie => {
    return (
      <MovieCard
        key={ movie.id }
        id={ movie.id }
        title={ movie.title }
        src={ movie.poster_path }
        handleClick={ props.handleClick }
      />
    )
  })

  return (
    <section>
      {
        !props.isShowingDetails &&
          <div className="movies-container__featured">
            <h2 className="movies-container__featured-text">FEATURED:</h2>
            <article className="featured__card-holder">
              {movieCards}
            </article>
          </div>
      }
      {
        props.isShowingDetails &&
          <SingleMovie
            key={ props.selectedMovie.id }
            title={ props.selectedMovie.title }
            average_rating={ props.selectedMovie.average_rating }
            release_date={ props.selectedMovie.release_date }
            genres={ props.selectedMovie.genres }
            overview={ props.selectedMovie.overview }
            tagline={ props.selectedMovie.tagline }
            budget={ props.selectedMovie.budget }
            src={ props.selectedMovie.backdrop_path }
            handleClick={ props.handleClick }
          />
      }
    </section>
  )
}

export default MoviesContainer;
