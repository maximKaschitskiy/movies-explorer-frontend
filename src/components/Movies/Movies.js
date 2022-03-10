import React from 'react';

import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Search from "./Search/Search";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies({ menuIsOpened, openMenu, closeMenu, isBookmarkPage, loggedIn }) {
  return(
    <section className="movies">
      <Search />
      <FilterCheckbox checkboxName={'Короткометражки'}/>
      <MoviesCardList isBookmarkPage={isBookmarkPage}/>
    </section>
  );
}

export default Movies;
