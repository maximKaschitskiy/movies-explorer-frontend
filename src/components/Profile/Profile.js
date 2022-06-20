import React, { useState } from "react";

import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";

function Profile({ menuIsOpened, openMenu, closeMenu, loggedIn, onSubmit, onLoad, onLogout, onFail }) {

  const [currentUser] = React.useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [inputField, setInputField] = React.useState({});
  const [changeFields, setChangeFields] = useState(true);

  React.useEffect(() => {
    if (onFail) {
      setIsEditing(true);
    }
  }, [onFail]);

  React.useEffect(() => {
    setInputField({
        email: currentUser.email,
        name: currentUser.name
      });
  }, [currentUser]);

  const handleChange = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
    setChangeFields(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputField);
    if (!onFail) {
      setIsEditing(false);
    }
  }

  function handleEditProfile() {
    setIsEditing(true);
  }

  if (Object.keys(currentUser).length === 0) {
    return <Preloader isLoading={true} />
  }

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <h2 className="profile__title account__title">{`Привет, ${currentUser.name}!`}</h2>
        <form
          className="profile__form"
          name="profile-form"
          onSubmit={handleSubmit}
          noValidate
        >
        <fieldset className={"fieldset "}>
          <div className="profile__field-wrapper">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              className="profile__input input__field_state_user-name"
              required
              disabled={!isEditing}
              name="name"
              value={inputField.name || ""}
              onChange={(event) => {
                handleChange(event);
              }}
              minLength="2"
              maxLength="30"
              id="user-name"
            />
            <span className={`input__error input__error_visible user-name-error`}></span>
          </div>
          <div className="profile__field-wrapper">
            <label className="profile__label">Email</label>
            <input
              type="text"
              className="profile__input input__field_state_user-email"
              required
              disabled={!isEditing}
              name="email"
              value={inputField.email || ""}
              onChange={(event) => {
                handleChange(event);
              }}
              minLength="2"
              maxLength="30"
              id="user-email"
            />
            <span className={`input__error input__error_visible user-email-error`}></span>
          </div>
          <div className="profile__form-actions">
            {!isEditing ? (
              <div className="profile__form-actions-wrapper">
                <button
                  className="profile__action-button profile__action-button_action_edit"
                  onClick={handleEditProfile}
                >
                  Редактировать
                </button>
                <button
                  className="profile__action-button profile__action-button_action_logout"
                  onClick={onLogout}
                >
                  Выйти из аккаунта
                </button>
              </div>
            ) : (
              <div className="profile__form-actions-wrapper">
                <input type="submit" className="profile__action-button profile__action-button_action_save" disabled={onLoad || changeFields} value={"Сохранить"}></input>
              </div>
            )}
          </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Profile;
