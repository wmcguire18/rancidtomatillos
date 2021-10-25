import React from 'react';
import MovieCard from './MovieCard.js';
import SingleMovie from './SingleMovie.js';
import './MoviesContainer.scss';
import img1 from './theater2.jpeg';



const MoviesContainer = ({movies}) => {
  const movieCards = movies.map(movie => {
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
    <img className="background-image" src={img1}/>
      <div className="movies-container__featured">
        <article className="featured__card-holder">
          {movieCards}
        </article>
      </div>
    </section>
  )
}

export default MoviesContainer;
