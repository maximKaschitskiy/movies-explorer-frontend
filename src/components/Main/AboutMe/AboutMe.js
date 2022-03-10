import React from 'react';

import './AboutMe.css';
import photo from '../../../images/avatar.png';
import PortfolioTitle from "../../PortfolioTitle/PortfolioTitle";

function AboutMe() {

  return(
    <section className="about-me" id="student">
      <PortfolioTitle title="Студент" />
      <div className="about-me__wrapper">
        <img src={photo} alt="Фотография меня (Артёма)" className="about-me__photo"/>
        <div className="about-me__bio-wrapper">
          <div className="about-me__bio-wrapper-info">
            <h3 className="about-me__name techs__title">Максим</h3>
            <h4 className="about-me__subtitle">
              Фронтенд-разработчик, 31 год
            </h4>
            <p className="about-me__bio about-project__item-text">
              Живу в Москве. 10 лет работал видеомонтажером в новостях и не только.
              До этого получил несколько средних-специальных образований.
              На 30-ом году решил, что пора менять професиию и теперь стремлюсь в IT.
              <br/>Играю музыку, хожу на концерты, собираю коллекцию редких клавишных инструментов.
              Люблю готовить пищу :D
            </p>
          </div>
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
