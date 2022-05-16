import React from "react";
import { useRef } from "react";

import "./Search.css";

function Search({ onSubmit }) {
  const inputRef = useRef();

  const [inputField, setInputField] = React.useState({searchKeywords: ''});
  const [validTrue, setValidTrue] = React.useState(false);
  const [validMessage, setValidMessage] = React.useState("");

  React.useEffect(() => {
    const values = JSON.parse(localStorage.getItem("searchField"));
    if (values) {
      inputRef.current.value = values.searchKeywords;
      localStorage.setItem("searchField", JSON.stringify(values.searchKeywords));
      setInputField({searchKeywords: values.searchKeywords});
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("searchField", JSON.stringify(inputField));
  }, [inputField]);

  const handleChange = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
    checkValidation();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkValidation();
    if (validTrue) {
      onSubmit(inputField);
    } else {
      showError();
    }
  };

  const checkValidation = () => {
    setValidTrue(inputRef.current.validity.valid);
  };

  const showError = () => {
    if (!validTrue) {
      setValidMessage("Нужно ввести ключевое слово");
    } else {
      setValidMessage("");
    }
  };

  return (
    <div className="search">
      <form
        className="search__form"
        method="post"
        name="search"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          onChange={(event) => {
            handleChange(event);
          }}
          type="text"
          placeholder="Фильм"
          className="search__input"
          id="search"
          minLength="2"
          name="searchKeywords"
          required
          ref={inputRef}
        ></input>
        <button className="search__input-button" type="submit" />
      </form>
      <span
        className={`input__error ${
          !validTrue && "input__error_visible"
        } search__error `}
      >
        {validMessage}
      </span>
    </div>
  );
}

export default Search;
