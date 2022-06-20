import React from 'react';

import './Promo.css';

function Promo({children}) {
  return(
    <section className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        {children}
      </div>
    </section>
  );
}

export default Promo;
