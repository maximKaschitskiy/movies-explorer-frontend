import React from 'react';

import './Login.css';

import logo from "../../images/logo.svg";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from 'react-router-dom';

function Login({onLoad, onSubmit}) {

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
    <div className="login">
      <div className="login__wrapper">
      <Link className="register__main-link" to={"/"}>
        <img src={logo} alt="Логотип Movie Explorer" className="register__logo"/>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <Form
        buttonText="Войти"
        text="Еще не зарегистрированы?"
        url="/signup"
        linkText="Регистрация"
        onSubmit={handleSubmit}
        formClassName="form_state_login"
      >
        <Input
          id="user-email"
          type="email"
          name="email"
          inputTitle="E-mail"
          minLength="7"
          maxLength="200"
          errorText=""
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

export default Login;
