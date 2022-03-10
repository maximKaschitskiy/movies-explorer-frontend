import React from 'react';

import './Form.css';

function Form({ name, buttonText, linkText, url, text, children }) {
  return(
    <form name={name} method="post" className="form" noValidate>
      { children }
      <button className="form__button">{buttonText}</button>
      <div className="form__subText-wrapper">
        <p className="form__text">{text}</p>
        <a href="#" className="form__link">{linkText}</a>
      </div>
    </form>
  );
}

export default Form;
