import React from 'react';

import './Footer.css';

function Footer({ moviesPage }) {

  return(
    <footer className={`footer ${moviesPage && 'footer__movies-media'}`}>
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__wrapper">
        <div className="footer__links-wrapper">
          <ul className="footer__links">
            <li className="footer__item">
              <a href="https://praktikum.yandex.ru/" className="footer__item-link"
                 target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/maximKaschitskiy" className="footer__item-link"
                 target="_blank" rel="noreferrer" >Github</a>
            </li>
            <li className="footer__item">
              <a href="https://www.linkedin.com/in/maxim-kaschitskiy/" className="footer__item-link"
                 target="_blank" rel="noreferrer" >LinkedIn</a>
            </li>
            <li className="footer__item">
              <a href="https://t.me/maximkaschitskiy" className="footer__item-link"
                 target="_blank" rel="noreferrer" >Telegram</a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">&copy; 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
