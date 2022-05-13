import React from "react";

import { useLocation } from "react-router-dom";

import "./MoviesCard.css";

function MovieCard({
  movieId,
  duration,
  savedMovies,
  savedMoviesId,
  trailerLink,
  country,
  director,
  year,
  description,
  image,
  nameRU,
  nameEN,
  thumbnail,
  providedDuration,
  handleLikeClick,
  handleDeleteClick,
  isBookmarkPage,
}) {

  const location = useLocation();

  const movieData = {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  };

  const handleIsLiked = (movieData, savedMoviesId) => {
    if (movieData.movieId && savedMoviesId) {
      return savedMoviesId.some(item => item === movieData.movieId);
    }
  }

  const isLiked = handleIsLiked(movieData, savedMoviesId);

  const savedMovie = savedMovies.find(item => item.movieId === movieId);

  const cardStatus = () => {
    if (isLiked && location.pathname === "/movies") {
      return "movie-card__button_type_active-bookmark"
    }
    if (isLiked && location.pathname !== "/movies") {
      return "movie-card__button_type_remove-bookmark"
    }
  }

  // Обработчики лайка и удаления фильма
  const handleLikeMovie = () =>
    isLiked ? handleDeleteClick(savedMovie) : handleLikeClick(movieData);

  const handleDeleteMovie = () => handleDeleteClick(savedMovie);

  return (
    <li className="movie-card" key={movieData.movieId}>
      <a href={trailerLink} className="movie-card__link" target="_blank" rel="noopener noreferrer">
        <img
          src={movieData.image}
          className="movie-card__image"
          alt={nameRU}
        />
      </a>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{nameRU}</h3>
        <button
          className={
            `movie-card__button ${cardStatus()}`
          }
          onClick={
            isLiked ? () => handleDeleteMovie() : () => handleLikeMovie()
          }>
        </button>
        <p className="movie-card__duration">{providedDuration}</p>
      </div>
    </li>
  );
}

export default MovieCard;
