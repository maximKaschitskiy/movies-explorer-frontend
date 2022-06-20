import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile-icon.svg';
import './Header.css';
import Navigation from "../Navigation/Navigation";
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Header({ menuIsOpened, openMenu, closeMenu, isProfilePageActive, loggedIn }) {

  const [currentUser] = React.useContext(CurrentUserContext);

  return(
    <header className={`header ${isProfilePageActive && "header__theme_white"} ${loggedIn && "header_type_logged-in"}`}>
      { loggedIn ? (
          <div className="header__wrapper">
            <Link to={"/"} className="header__main-link">
              <img src={logo} alt="Логотип Movie Explorer" className="header__logo"/>
            </Link>
            <div className="header__menu-link-wrapper">
              <NavLink to={"/movies"} onClick={closeMenu} className={(navData) => navData.isActive ? "navigation__link navigation__link_is-active" : "navigation__link" }>
                Фильмы
              </NavLink>
              <NavLink to={"/saved-movies"} onClick={closeMenu} className={(navData) => navData.isActive ? "navigation__link navigation__link_is-active" : "navigation__link" }>
                Сохраненные фильмы
              </NavLink>
            </div>
            <Link to={"/profile"} href="#" className="navigation__account">
              <span href="#" className="navigation__account-caption" onClick={closeMenu}>
                {currentUser.name}
              </span>
              <img className="navigation__account-icon" src={profileIcon} alt="Иконка аккаунта"></img>
            </Link>
            <button className={`header__button-burger ${!isProfilePageActive && "header__button-burger_white"}`} onClick={openMenu}/>
            <Navigation menuIsOpened={menuIsOpened} closeMenu={closeMenu}/>
          </div>
        ) : (
          <div className={`header__wrapper ${isProfilePageActive && "header__button_hidden"}`}>
            <Link to={"/"} href="#" className="header__main-link">
              <img src={logo} alt="Логотип Movie Explorer" className="header__logo"/>
            </Link>
            <NavLink to={"/sign-up"} href="#" className="header__register">Регистрация</NavLink>
            <NavLink to={"/sign-in"} href="#" className="header__button">Войти</NavLink>
          </div>
        )
      }
    </header>
  );
}

export default Header;
