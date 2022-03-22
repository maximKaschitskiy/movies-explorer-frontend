import React from 'react';

import './AboutMe.css';
import photo from '../../../images/avatar.png';
import PortfolioTitle from "../../PortfolioTitle/PortfolioTitle";

function AboutMe() {

  return(
    <section className="about-me" id="student">
      <div className="about-me__wrapper">
      <PortfolioTitle title="Студент" />
        <div className="about-me__bio-wrapper">
          <div className="about-me__bio-wrapper-info">
            <h3 className="about-me__name">Максим</h3>
            <h4 className="about-me__subtitle">
              Фронтенд-разработчик, 31 год
            </h4>
            <p className="about-me__bio">
              Живу в Москве. 10 лет работал видеомонтажером в новостях и не только.
              Ранее получил несколько средних-специальных образований.
              На 30-ом году решил, что пора менять професиию и теперь стремлюсь в IT.
              <br/>Играю музыку, хожу на концерты, собираю коллекцию редких клавишных инструментов.
              Люблю готовить пищу :D
            </p>
          </div>
          <img src={photo} alt="Кащицкий Максим" className="about-me__photo"/>
          <ul className="about-me__contacts">
            <li className="about-me__contacts-link">
              <a href="https://www.linkedin.com/in/maxim-kaschitskiy/" className="about-me__contacts-link"
                 target="_blank" rel="noreferrer" >LinkedIn</a>
            </li>
            <li className="about-me__contacts-link">
              <a href="https://github.com/maximKaschitskiy" className="about-me__contacts-link"
                 target="_blank" rel="noreferrer" >GitHub</a>
            </li>
            <li className="about-me__contacts-link">
              <a href="https://t.me/maximkaschitskiy" className="about-me__contacts-link"
                 target="_blank" rel="noreferrer" >Telegram</a>
            </li>
          </ul>
        </div>
        </div>
    </section>
  );
}

export default AboutMe;
