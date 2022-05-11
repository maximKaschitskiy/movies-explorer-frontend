import React from 'react';

import './Portfolio.css';
import arrow from '../../../images/portfolio-arrow.svg';

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a href="https://maximkaschitskiy.github.io/how-to-learn/" className="portfolio__list-link"
             target="_blank" rel="noreferrer" >Статичный сайт</a>
          <img src={arrow} alt="Ссылка" className="portfolio__list-link-image"/>
        </li>
        <li className="portfolio__list-item">
          <a href="https://maximkaschitskiy.github.io/russian-travel/" className="portfolio__list-link"
             target="_blank" rel="noreferrer" >Адаптивный сайт</a>
          <img src={arrow} alt="Ссылка" className="portfolio__list-link-image"/>
        </li>
        <li className="portfolio__list-item">
          <a href="http://hot-chicks.nomoredomains.work/" className="portfolio__list-link"
             target="_blank" rel="noreferrer" >Одностраничное приложение</a>
          <img src={arrow} alt="Ссылка" className="portfolio__list-link-image"/>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
