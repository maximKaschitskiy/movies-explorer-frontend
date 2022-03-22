import React from 'react';

import './Register.css';
import logo from "../../images/logo.svg";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from 'react-router-dom';

function Register({onLoad, onSubmit}) {

  const [inputField, setInputField] = React.useState({})

  React.useEffect(() => {
    setInputField({});
  }, []);

const handleChange = (event) =>{
    setInputField( { ...inputField,
      [event.target.name]: event.target.value
    } );
  }

const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputField);
}
  
  return(
    <div className="register">
      <div className="register__wrapper">
      <Link className="register__main-link" to={"/"}>
        <img src={logo} alt="Логотип Movie Explorer" className="register__logo"/>
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <Form
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        url="/signin"
        linkText="Войти"
        onSubmit={handleSubmit}
        formClassName="form_state_register"
      >
        <Input
          id="user-name"
          type="text"
          name="name"
          inputTitle="Имя"
          minLength="2"
          maxLength="20"
          errorText=""
          value={inputField.name || ""}
          onChange={(event)=>{handleChange(event)}}
          inputClassName="input__field_state_user-name"
          placeholder="Введите имя"
        />
        <Input
          id="user-email"
          type="email"
          name="email"
          inputTitle="E-mail"
          minLength="7"
          maxLength="200"
          value={inputField.email || ""}
          onChange={(event)=>{handleChange(event)}}
          inputClassName="input__field_state_user-email"
          placeholder="Введите e-mail"
        />
        <Input
          id="user-password"
          type="password"
          name="password"
          inputTitle="Пароль"
          minLength="8"
          maxLength="200"
          value={inputField.password || ""}
          onChange={(event)=>{handleChange(event)}}
          inputClassName="input__field_state_user-password"
          placeholder="Введите пароль"
        />
      </Form>
    </div>
    </div>
  );
}

export default Register;
