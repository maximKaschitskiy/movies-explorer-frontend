import React from 'react';

import './NoMovies.css';
import SearchIcon from './SearchSvgrepoCom.svg'

function NoMovies() {

  return(
    <div className="no-movies">
      <div className="no-movies__wrapper">
        <img src={SearchIcon} alt="React Logo" className="no-movies__status" />
        <p className="no-movies__message">Нет результатов</p>
      </div>
    </div>
  );
}

export default NoMovies;
