import React from "react";

import "./Movies.css";
import SearchMovies from "./SearchMovies/SearchMovies";
import FilterMoviesCheckbox from "./FilterMoviesCheckbox/FilterMoviesCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import NoMovies from "./NoMovies/NoMovies";

function Movies({
  movies,
  visibleMovies,
  savedMovies,
  savedMoviesId,
  menuIsOpened,
  openMenu,
  closeMenu,
  isBookmarkPage,
  loggedIn,
  onSubmit,
  handleMoreClick,
  handleLikeClick,
  handleDeleteClick,
  isFilterOn,
  setIsFilterOn,
  input,
}) {

  return (
    <section className="movies">
      <SearchMovies onSubmit={onSubmit} input={input} />
      <FilterMoviesCheckbox
        checkboxName={"Короткометражки"}
        isFilterOn={isFilterOn}
        setIsFilterOn={setIsFilterOn}
      />
      {movies.length ? (
        <MoviesCardList
          movies={movies}
          visibleMovies={visibleMovies}
          savedMovies={savedMovies}
          isBookmarkPage={isBookmarkPage}
          handleMoreClick={handleMoreClick}
          handleLikeClick={handleLikeClick}
          handleDeleteClick={handleDeleteClick}
          savedMoviesId={savedMoviesId}
        />
      ) : (
        <NoMovies />
      )}
    </section>
  );
}

export default Movies;
