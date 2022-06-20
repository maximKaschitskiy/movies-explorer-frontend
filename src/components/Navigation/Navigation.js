import React from 'react';

import './Navigation.css';
import profileIcon from '../../images/profile-icon.svg';
import {Link, NavLink} from "react-router-dom";

function Navigation({ menuIsOpened, closeMenu }) {
  return(
    <div className={`navigation__wrapper ${!menuIsOpened && "navigation__wrapper_hidden"}`}>
      <nav className="navigation">
        <ul className="navigation__links">
          <li className="navigation__link-wrapper">
            <NavLink to={"/"} onClick={closeMenu} className={(navData) => navData.isActive ? "navigation__link navigation__link_is-active" : "navigation__link" }>Главная</NavLink>
          </li>
          <li className="navigation__link-wrapper">
            <NavLink to={"/movies"} onClick={closeMenu} className={(navData) => navData.isActive ? "navigation__link navigation__link_is-active" : "navigation__link" }>Фильмы</NavLink>
          </li>
          <li className="navigation__link-wrapper">
            <NavLink to={"/saved-movies"} onClick={closeMenu} className={(navData) => navData.isActive ? "navigation__link navigation__link_is-active" : "navigation__link" }>Сохраненные фильмы</NavLink>
          </li>
        </ul>
        <Link to={"#"} className="navigation__account navigation__account_theme_dark">
          <span className="navigation__account-caption" onClick={closeMenu}>
            Аккаунт
          </span>
          <img className="navigation__account-icon" src={profileIcon} alt="Иконка аккаунта"></img>
        </Link>
      </nav>
      <div className="navigation__close-button" onClick={closeMenu}/>
    </div>
  );
}

export default Navigation;
