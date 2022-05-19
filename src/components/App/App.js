import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import { FormValidator, formSelectorsObj } from "../../utils/FormValidator";
import useMediaQuery from "../../hooks/useMediaQuery";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import {
  loginFail,
  somethingWrong,
  registerFail,
  registerSuccsess,
  profileEditSuccess,
} from "../../constants/errors";

import {
  handleFilter,
  handleDurationFilter,
  handleMediaFilter,
} from "../../utils/searchFilter";

import "./App.css";
import PublicRoute from "../PublicRoute/PublicRoute";

function App() {
  const [loggedIn, setLoggedIn] = React.useState();
  const [menuIsOpened, setMenuIsOpened] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isFilterOn, setIsFilterOn] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filteredDurationMovies, setFilteredDurationMovies] = React.useState(
    []
  );
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  const [savedDurationMovies, setSavedDurationMovies] = React.useState([]);
  const [onLoad, setOnload] = React.useState(false);
  const [isEntranceFail, setIsEntranceFail] = React.useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMoviesId, setSavedMoviesId] = React.useState([]);
  const [tooltipStatus, setTooltipStatus] = React.useState({});
  const [inputField, setInputField] = React.useState({
    searchKeywords: "",
  });

  React.useEffect(() => {
    document.title = "Films Database"
 }, []);

  React.useEffect(() => {
    const values = JSON.parse(localStorage.getItem("searchField"));
    if (values) {
      setInputField({
        searchKeywords: values.searchKeywords,
      });
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("searchField", JSON.stringify(inputField));
  }, [inputField]);

  const validateLoginForm = new FormValidator(
    formSelectorsObj,
    formSelectorsObj.loginFormSelector
  );
  const validateRegisterForm = new FormValidator(
    formSelectorsObj,
    formSelectorsObj.registerFormSelector
  );

  const location = useLocation();
  const navigate = useNavigate();

  const media = useMediaQuery();

  document.documentElement.lang = "ru";

  React.useEffect(() => {
    validateLoginForm.enableValidation();
    validateRegisterForm.enableValidation();
  }, [location.pathname]);

  document.documentElement.lang = "ru";

  React.useEffect(() => {
    media.callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoreClick = () => {
    media.setDisplayMovies((prevState) => prevState + media.moreDisplayMovies);
  };

  const visibleMovies = handleMediaFilter(filteredMovies, media.displayMovies);
  const visibleDurationMovies = handleMediaFilter(
    filteredDurationMovies,
    media.displayMovies
  );
  const visibleSavedMovies = handleMediaFilter(
    filteredSavedMovies,
    media.displayMovies
  );
  const visibleDurationSavedMovies = handleMediaFilter(
    savedDurationMovies,
    media.displayMovies
  );

  function handleOpenMenu() {
    setMenuIsOpened(true);
    window.addEventListener("click", handleClosePopupWithOverlayClick);
  }

  function handleCloseMenu() {
    setMenuIsOpened(false);
    window.removeEventListener("click", handleClosePopupWithOverlayClick);
  }

  function handleClosePopupWithOverlayClick(evt) {
    if (evt.target.classList.contains("navigation__wrapper")) {
      handleCloseMenu();
    }
  }

  function handleLoginSubmit(event) {
    setOnload(true);
    mainApi
      .auth(event)
      .then((response) => {
        if (response.token) {
          localStorage.setItem("jwt", response.token);
          handleValidation(response.token);
          setLoggedIn(true);
          navigate("/movies");
        } else {
          return;
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setTooltipStatus(loginFail);
        } else {
          setTooltipStatus(somethingWrong);
        }
        setIsEntranceFail(true);
        setIsInfoTooltip(true);
      })
      .finally(() => {
        setOnload(false);
      });
  }

  React.useEffect(() => {
    setSavedMoviesId(savedMovies.map((item) => item.movieId));
  }, [savedMovies]);

  React.useEffect(() => {
    if (loggedIn) {
      setOnload(true);
      mainApi
        .getSavedMovies()
        .then((response) => {
          setSavedMovies(response);
          localStorage.setItem("savedMovies", JSON.stringify(response));
        })
        .catch((err) => {
          console.log(err.status, err.statusText);
          setOnload(false);
        })
        .finally(() => {
          setOnload(false);
        });
    }
  }, [loggedIn]);

  function handleUpdateUser(event) {
    setOnload(true);
    mainApi
      .setUserInfo(event)
      .then((response) => {
        setCurrentUser(response);
        setTooltipStatus(profileEditSuccess);
        setIsInfoTooltip(true);
      })
      .catch((err) => {
        console.log(err.status, err.statusText);
        setIsEntranceFail(true);
        setIsInfoTooltip(true);
      })
      .finally(() => {
        setOnload(false);
      });
  }

  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((response) => {
          setCurrentUser(response);
        })
        .catch((err) => {
          console.log(err.status, err.statusText);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (localStorage.jwt) {
      mainApi
        .validation(localStorage.jwt)
        .then((response) => {
          if (response) {
            setCurrentUser(response);
            setLoggedIn(true);
          } else {
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  function handleValidation(token) {
    mainApi
      .validation(token)
      .then((response) => {
        if (response) {
          setCurrentUser(response);
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err.status, err.statusText);
      });
  }

  function handleSearchSubmit(event) {
    if (movies.length > 0) {
      setOnload(true);
      // если все мовсы уже были загружены
      const searchedMovies = handleFilter(movies, event.searchKeywords);
      const searchedMoviesWithDuration = handleDurationFilter(searchedMovies);
      setFilteredMovies(searchedMovies);
      setFilteredDurationMovies(searchedMoviesWithDuration);

      const searchedSavedMovies = handleFilter(
        savedMovies,
        event.searchKeywords
      );
      const searchedSavedMoviesWithDuration =
        handleDurationFilter(searchedMovies);
      setFilteredSavedMovies(searchedSavedMovies);
      setSavedDurationMovies(searchedSavedMoviesWithDuration);

      setOnload(false);
    } else {
      setOnload(true);
      //если все мовсы ещё не были загружены
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem("movies", JSON.stringify(res));
          return res;
        })
        .then((data) => {
          const searchedMovies = handleFilter(data, event.searchKeywords);
          const searchedMoviesWithDuration =
            handleDurationFilter(searchedMovies);
          setFilteredMovies(searchedMovies);
          setFilteredDurationMovies(searchedMoviesWithDuration);
          const searchedSavedMovies = handleFilter(
            savedMovies,
            event.searchKeywords
          );
          const searchedSavedMoviesWithDuration =
            handleDurationFilter(searchedMovies);
          setFilteredSavedMovies(searchedSavedMovies);
          savedDurationMovies(searchedSavedMoviesWithDuration);
        })
        .catch((err) => {
          console.log(err);
          setOnload(false);
        })
        .finally(() => {
          setOnload(false);
        });
    }
  }

  function handleSavedMoviesSearch(event) {
    if (savedMovies.length > 0) {
      const result = handleFilter(savedMovies, event.searchKeywords);
      const resultWithDuration = handleDurationFilter(result);
      setFilteredSavedMovies(result);
      setSavedDurationMovies(resultWithDuration);
    }
  }

  const handleLikeMovie = (movieData) => {
    mainApi
      .addSavedMovie(movieData)
      .then((res) => {
        setSavedMovies((prevState) => [res, ...prevState]);
      })
      .catch((err) => {
        console.log(err.status, err.statusText);
      });
  };

  const handleDeleteMovie = (savedMovie) => {
    mainApi
      .deleteSavedMovie(savedMovie._id)
      .then((res) => {
        setSavedMovies(savedMovies.filter((item) => item._id !== res._id));
        setFilteredSavedMovies(
          filteredSavedMovies.filter((item) => item._id !== res._id)
        );
      })
      .catch((err) => {
        console.log(err.status, err.statusText);
      });
  };

  function handleRegisterSubmit(event) {
    setOnload(true);
    mainApi
      .register(event)
      .then((res) => {
        setIsEntranceFail(false);
        setTooltipStatus(registerSuccsess);
        mainApi
          .auth(event)
          .then((response) => {
            if (response.token) {
              localStorage.setItem("jwt", response.token);
              handleValidation(response.token);
              setLoggedIn(true);
              navigate("/movies");
            } else {
              return;
            }
          })
          .catch((err) => {
            if (err.status === 401) {
              setTooltipStatus(loginFail);
            } else {
              setTooltipStatus(somethingWrong);
            }
            setIsEntranceFail(true);
            setIsInfoTooltip(true);
          })
          .finally(() => {
            setOnload(false);
          });
      })
      .catch((err) => {
        console.log(err.status, err.statusText);
        if (err.status === 409) {
          setTooltipStatus(registerFail);
        } else {
          setTooltipStatus(somethingWrong);
        }
        setIsEntranceFail(true);
      })
      .finally(() => {
        setOnload(false);
        setIsInfoTooltip(true);
      });
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchField");
    localStorage.removeItem("isFilterOn");
    localStorage.removeItem("movies");
    localStorage.removeItem("savedMovies");
    setLoggedIn(false);
    navigate("/");
  }

  function closePopups() {
    setIsInfoTooltip(false);
  }

  // чекбокс
  React.useEffect(() => {
    if (isFilterOn && location.pathname === "/movies") {
      if (movies.length > 0) {
        const result = handleDurationFilter(filteredMovies);
        setFilteredDurationMovies(result);
      }
    }
    if (isFilterOn && location.pathname === "/saved-movies") {
      const result = handleDurationFilter(filteredSavedMovies);
      if (savedMovies.length > 0) {
        setSavedDurationMovies(result);
      }
    }
    if (!isFilterOn) {
      setSavedMovies(savedMovies);
      setMovies(movies);
      setFilteredMovies(filteredMovies);
    }
  }, [isFilterOn]);

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setIsFilterOn(false);
    }
  }, [location.pathname]);

  React.useEffect(() => {
    const values = JSON.parse(localStorage.getItem("isFilterOn"));
    if (values && location.pathname === "/movies") {
      setIsFilterOn(values);
    }
  }, [location.pathname]);

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      localStorage.setItem("isFilterOn", isFilterOn);
    }
  }, [isFilterOn]);

  React.useEffect(() => {
    const values = JSON.parse(localStorage.getItem("searchField"));
    let keyword = "";
    if (values) {
      keyword = values.searchKeywords;
    }
    moviesApi
      .getMovies()
      .then((res) => {
        setMovies(res);
        localStorage.setItem("movies", JSON.stringify(res));
        return res;
      })
      .then((data) => {
        const result = handleFilter(data, keyword);
        const resultWithDuration = handleDurationFilter(result);
        setFilteredMovies(result);
        setFilteredDurationMovies(resultWithDuration);
      })
      .catch((err) => {
        console.log(err.status, err.statusText);
      });
  }, [loggedIn]);

  React.useEffect(() => {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
          return res;
        })
        .then((data) => {
          const searchedSavedMovies = handleFilter(data, "");
          const searchedSavedMoviesWithDuration =
            handleDurationFilter(searchedSavedMovies);
          setFilteredSavedMovies(searchedSavedMovies);
          setSavedDurationMovies(searchedSavedMoviesWithDuration);
        })
        .catch((err) => {
          console.log(err.status, err.statusText);
        });
  }, [loggedIn, location.pathname]);

  return (
    <React.StrictMode>
      <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
        <div className="page">
          <div className="page__wrapper">
            <InfoTooltip
              isOpen={isInfoTooltip}
              onClose={closePopups}
              tooltipStatus={tooltipStatus}
            />
            <Preloader isLoading={onLoad} />
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute loggedIn={loggedIn}>
                    <Register onSubmit={handleRegisterSubmit} />
                  </PublicRoute>
                }
              />
              <Route
                path="/sign-in"
                element={
                  <PublicRoute loggedIn={loggedIn}>
                    <Login onSubmit={handleLoginSubmit} />
                  </PublicRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Header
                      loggedIn={loggedIn}
                      menuIsOpened={menuIsOpened}
                      openMenu={handleOpenMenu}
                      closeMenu={handleCloseMenu}
                    />
                    <Profile
                      onSubmit={handleUpdateUser}
                      onFail={isEntranceFail}
                      onLogout={handleLogOut}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/"
                element={[
                  <Header
                    loggedIn={loggedIn}
                    menuIsOpened={menuIsOpened}
                    openMenu={handleOpenMenu}
                    closeMenu={handleCloseMenu}
                    key={"header"}
                  />,
                  <Main key={"main"} />,
                  <Footer key={"footer"} />,
                ]}
              />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Header
                      loggedIn={loggedIn}
                      menuIsOpened={menuIsOpened}
                      openMenu={handleOpenMenu}
                      closeMenu={handleCloseMenu}
                    />
                    <Movies
                      onSubmit={handleSearchSubmit}
                      visibleMovies={
                        isFilterOn ? visibleDurationMovies : visibleMovies
                      }
                      movies={
                        isFilterOn ? filteredDurationMovies : filteredMovies
                      }
                      savedMovies={savedMovies}
                      savedMoviesId={savedMoviesId}
                      isFilterOn={isFilterOn}
                      setIsFilterOn={setIsFilterOn}
                      handleMoreClick={handleMoreClick}
                      handleLikeClick={handleLikeMovie}
                      handleDeleteClick={handleDeleteMovie}
                      input={[inputField, setInputField]}
                    />
                    <Footer />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Header
                      loggedIn={loggedIn}
                      menuIsOpened={menuIsOpened}
                      openMenu={handleOpenMenu}
                      closeMenu={handleCloseMenu}
                    />
                    <SavedMovies
                      onSubmit={handleSavedMoviesSearch}
                      visibleMovies={
                        isFilterOn
                          ? visibleDurationSavedMovies
                          : visibleSavedMovies
                      }
                      movies={
                        isFilterOn ? filteredDurationMovies : filteredMovies
                      }
                      savedMovies={savedMovies}
                      savedMoviesId={savedMoviesId}
                      isFilterOn={isFilterOn}
                      setIsFilterOn={setIsFilterOn}
                      handleMoreClick={handleMoreClick}
                      handleLikeClick={handleLikeMovie}
                      handleDeleteClick={handleDeleteMovie}
                      input={[inputField, setInputField]}
                    />
                    <Footer />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </CurrentUserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
