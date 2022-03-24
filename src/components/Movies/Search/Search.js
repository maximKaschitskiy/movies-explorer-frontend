import React from 'react';

import './Search.css';

function Search() {
  return(
    <div className="search">
      <form className="search__form" name="search">
        <input type="text" placeholder="Фильм" className="search__input" required></input>
        <button className="search__input-button"/>
      </form>
    </div>
  );
}

export default Search;
