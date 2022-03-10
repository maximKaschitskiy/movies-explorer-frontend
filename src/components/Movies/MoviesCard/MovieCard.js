import React, {useState} from 'react';

import './MoviesCard.css';

import likeActive from '../../../images/like-icon-active.svg';
import likeDisable from '../../../images/like-icon-disable.svg';

function MovieCard({ movieImage, isBookmarkPage, keyIndex }) {

  const [isInBookmark, setIsInBookmark] = useState(false);

  function handleAddBookmark() {
    setIsInBookmark(!isInBookmark);
  }

  return(
    <article className="movie-card" key={keyIndex}>
      <figure className="movie-card__content">
        <img src={movieImage} className="movie-card__image" alt="В погоне за Бэнкси"/>
        <figcaption className="movie-card__info">
          <h3 className="movie-card__title">Заголовок</h3>
          <button className={`movie-card__button
                ${isInBookmark && "movie-card__button_type_in-bookmark"}
                ${isBookmarkPage && "movie-card__button_type_remove-bookmark"}`}
                onClick={handleAddBookmark}>
          </button>
          <p className="movie-card__duration">1ч 42м</p>
        </figcaption>
      </figure>
    </article>
  );
}

export default MovieCard;
