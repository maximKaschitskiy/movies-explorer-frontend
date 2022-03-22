import React from 'react';

import './Input.css';

function Input({ type, id, inputTitle, name, minLength, maxLength, errorText, value, onChange, inputClassName, placeholder }) {
  return(
    <div className="input">
      <label className="input__label">{inputTitle}</label>
      <input
        required
        className={`input__field ${inputClassName}`}
        type={type}
        id={id}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span className={`input__error input__error_visible ${id}-error`}></span>
    </div>
  );
}

export default Input;
