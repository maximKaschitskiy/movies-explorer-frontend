import React from "react";

import "./Movies.css";
import Search from "./Search/Search";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

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
})

{

  return (
    <section className="movies">
      <Search onSubmit={onSubmit} />
      <FilterCheckbox checkboxName={"Короткометражки"} isFilterOn={isFilterOn} setIsFilterOn={setIsFilterOn}/>
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
    </section>
  );
}

export default Movies;
