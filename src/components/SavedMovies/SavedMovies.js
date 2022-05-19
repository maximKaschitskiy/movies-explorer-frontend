import React from "react";

import "./SavedMovies.css";
import SearchSavedMovies from "./SearchSavedMovies/SearchSavedMovies";
import FilterSavedMoviesCheckbox from "./FilterSavedMoviesCheckbox/FilterSavedMoviesCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import NoMovies from "../Movies/NoMovies/NoMovies";

function SavedMovies({
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
      <SearchSavedMovies onSubmit={onSubmit} input={input} />
      <FilterSavedMoviesCheckbox
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

export default SavedMovies;
