import React from 'react';
import { useRef } from 'react';

import "./FilterCheckbox.css";

function FilterCheckbox({ checkboxName, isFilterOn, setIsFilterOn }) {

  const checked = useRef();

  const handleChange = () => setIsFilterOn(checked.current.checked);
  
  React.useEffect(() => {
    localStorage.setItem("isFilterOn", isFilterOn);
  }, [isFilterOn]);

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

export default FilterCheckbox;
