import React from 'react';

import './MoviesCardList.css';
import MovieCard from "../MoviesCard/MovieCard";

import moviePreview from '../../../images/movie-preview.png';

function MoviesCardList({ isBookmarkPage }) {

  const moviesMock = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const listItems = moviesMock.map((value, index) =>
    <MovieCard
      movieImage={moviePreview}
      isBookmarkPage={isBookmarkPage}
      key={value.toString()}
    />
  );

  return(
    <section className="movies-card-list">
      <div className="movies-card-list__movies-wrapper">
        {listItems}
      </div>
      {
        isBookmarkPage ?
          (
            <div className="saved-movies__footer-gap" />
          ) : (
            <button className="movies-card-list__load-button">Ещё</button>
          )
      }
    </section>
  );
}

export default MoviesCardList;
