import React from "react";
import useInput from "../hooks/useInput";

import "../style/forms.scss";
import { Link, useNavigate } from "react-router-dom";
import { postLoginRequest } from "../redux/login";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handlerLogin = (e) => {
    e.preventDefault();
    dispatch(postLoginRequest({ email, password }));
    navigate("/");
  };

  return (
    <div>
      <h3 className="title-register-login">Iniciar sesión</h3>
      <form className="form" onSubmit={handlerLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@email.com"
            {...email}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control input"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            {...password}
          />
        </div>
        <p>
          ¿No tienes cuenta todavía? <span></span>
          <span>
            <strong>
              <Link to={"/sigup"} className="detalles">
                Regístrate
              </Link>
            </strong>
          </span>
        </p>
        <button
          type="submit"
          className="btn btn-danger input btn-form btn-register"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LogIn;
