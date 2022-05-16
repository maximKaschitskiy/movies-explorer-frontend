import React from "react";
import {
  useLocation
} from "react-router-dom";
import { movieDuration } from "../../../constants/config";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MovieCard";

function MoviesCardList({
  isSavedMovies,
  movies,
  savedMovies,
  savedMoviesId,
  handleLikeClick,
  handleDeleteClick,
  visibleMovies,
  handleMoreClick,
  isLoading
}) {

  const location = useLocation();

  return (
    location.pathname === "/movies" ?
        <section className="movies-card-list">
          <ul className="movies-card-list__movies-wrapper">
            { visibleMovies && visibleMovies.map((item) => {
              return (
                <MovieCard
                  key={item.id}
                  movieId={item.id}
                  image={`https://api.nomoreparties.co${item.image.url}`}
                  nameRU={item.nameRU}
                  providedDuration={movieDuration(item.duration)}
                  handleLikeClick={handleLikeClick}
                  savedMovies={savedMovies}
                  savedMoviesId={savedMoviesId}
                  handleDeleteClick={handleDeleteClick}
                  trailerLink={
                    item.trailerLink
                      ? item.trailerLink.startsWith("https")
                        ? item.trailerLink
                        : "https://www.youtube.com"
                      : "https://www.youtube.com"
                  }
                  country={item.country || "null"}
                  director={item.director || "null"}
                  year={item.year}
                  description={item.description}
                  nameEN={item.nameEN || "null"}
                  thumbnail={`https://api.nomoreparties.co${item.image.formats.thumbnail.url}`}
                  duration={item.duration}
                  movies={movies}
                />
              );
            })}
          </ul>
          { 
             movies.length !== visibleMovies.length
            ?
              ( 
                <button className="movies-card-list__load-button" onClick={handleMoreClick}>Ещё</button>
              )
            :
            (
              <div className="saved-movies__footer-gap" />
            )
          }
        </section>
    :
    <section className="movies-card-list">
    <ul className="movies-card-list__movies-wrapper">
      { visibleMovies && visibleMovies.map((item) => {
        return (
          <MovieCard
            key={item._id}
            movieId={item.movieId}
            image={item.image}
            nameRU={item.nameRU}
            providedDuration={movieDuration(item.duration)}
            handleLikeClick={handleLikeClick}
            savedMovies={savedMovies}
            savedMoviesId={savedMoviesId}
            handleDeleteClick={handleDeleteClick}
            trailerLink={
              item.trailerLink
                ? item.trailerLink.startsWith("https")
                  ? item.trailerLink
                  : "https://www.youtube.com"
                : "https://www.youtube.com"
            }
            country={item.country || "null"}
            director={item.director || "null"}
            year={item.year}
            description={item.description}
            nameEN={item.nameEN || "null"}
            thumbnail={item.thumbnail}
            duration={item.duration}
            movies={movies}
          />
        );
      })}
    </ul>
    { 
      (
        <div className="saved-movies__footer-gap" />
      )
    }
  </section>
      )}

export default MoviesCardList;
