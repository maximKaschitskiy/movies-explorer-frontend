import React, { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import Header from "../Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";

import { FormValidator, formSelectorsObj } from "../../utils/FormValidator";

import "./App.css";


function App() {

  const validateEditProfileForm = new FormValidator(formSelectorsObj, formSelectorsObj.loginFormSelector);
  const validateAddPlaceForm = new FormValidator(formSelectorsObj, formSelectorsObj.registerFormSelector);



  React.useEffect(() => {
    validateEditProfileForm.enableValidation();
    validateAddPlaceForm.enableValidation();
  }, []);


  document.documentElement.lang = 'ru';

  const [loggedIn, setLoggedIn] = useState(true);

  const [menuIsOpened, setMenuIsOpened] = useState(false);

  function handleOpenMenu() {
    setMenuIsOpened(true);
    window.addEventListener('click', handleClosePopupWithOverlayClick);
  }

  function handleCloseMenu() {
    setMenuIsOpened(false);
    window.removeEventListener('click', handleClosePopupWithOverlayClick);
  }

  function handleClosePopupWithOverlayClick(evt) {
    if (evt.target.classList.contains('navigation__wrapper')) {
      handleCloseMenu();
    }
  }

  function handleRegisterSubmit(event) {
    console.log(event);
  }

  function handleLoginSubmit(event) {
    console.log(event);
  }

  return (
    <React.StrictMode>
        <div className="page">
              <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/sign-up" element={<Register onSubmit={handleRegisterSubmit} />} />
                <Route path="/sign-in" element={<Login onSubmit={handleLoginSubmit} />} />
                <Route path="/" element={[
                  <Header
                    loggedIn={true}
                    menuIsOpened={menuIsOpened}
                    openMenu={handleOpenMenu}
                    closeMenu={handleCloseMenu}
                  />,
                  <Main />,
                  <Footer />
                ]}/>
                <Route path="/movies" element={[
                  <Header
                    loggedIn={true}
                    menuIsOpened={menuIsOpened}
                    openMenu={handleOpenMenu}
                    closeMenu={handleCloseMenu}
                  />,
                  <Movies />,
                  <Footer />
                ]}/>
                <Route path="/saved-movies" element={[
                  <Header
                    loggedIn={true}
                    menuIsOpened={menuIsOpened}
                    openMenu={handleOpenMenu}
                    closeMenu={handleCloseMenu}
                  />,
                  <SavedMovies />,
                  <Footer />
                ]}/>
              </Routes>
        </div>
    </React.StrictMode>
  );
}

export default App;
