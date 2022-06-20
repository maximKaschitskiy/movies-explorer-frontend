import React from 'react';
import { useRef } from 'react';

import "./FilterSavedMoviesCheckbox.css";

function FilterSavedMoviesCheckbox({ checkboxName, isFilterOn, setIsFilterOn }) {

  const checked = useRef();

  const handleChange = () => setIsFilterOn(checked.current.checked);
  
  return (
    <div className="checkbox__wrapper">
      <label className="checkbox">
        <input
          type="checkbox"
          name="short-movie-checkbox"
          id="short-movie-checkbox"
          className="checkbox__input"
          onChange={handleChange}
          ref={checked}
          checked={isFilterOn}
        />
        <span className="checkbox__switcher" />
        <p className="checkbox__title">{checkboxName}</p>
      </label>
    </div>
  );
}

export default FilterSavedMoviesCheckbox;
