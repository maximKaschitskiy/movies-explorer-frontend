import React from 'react';

import './Form.css';

function Form({ name, buttonText, linkText, url, text, children, onLoad, onSubmit, formClassName }) {
  return(
    <form name={name} method="post" className={`form ${formClassName}`} noValidate onSubmit={onSubmit}>
      <fieldset className={`fieldset`}>
      { children }
      <input type="submit" className="form__button" disabled={onLoad} value={buttonText}></input>
      <div className="form__subText-wrapper">
        <p className="form__text">{text}</p>
        <a href="#" className="form__link">{linkText}</a>
      </div>
      </fieldset>
    </form>
  );
}

export default Form;
