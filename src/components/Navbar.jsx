import marca from "../assets/navbar/logo-1.png";
import {
  BsPersonXFill,
  BsPersonSquare,
  BsFillPersonPlusFill,
  BsBarChart,
} from "react-icons/bs";
import { MdPersonSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postLogoutRequest } from "../redux/login";
import "../sass/navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(postLogoutRequest());
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img src={marca} width={250} />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              {user.name ? (
                user.admin ? (
                  <div className="d-flex">
                    <li class="nav-item">
                      <Link to={"/searchs"} class="nav-link active text">
                        <MdPersonSearch class="icon" /> Busquedas
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/admin"} className="nav-link active text">
                        <BsFillPersonPlusFill /> Reclutadores
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a className="nav-link active text">
                        <BsBarChart /> Estadisticas
                      </a>
                    </li>

                    <li class="nav-item">
                      <Link
                        to={`/profile/${user.id}`}
                        className="nav-link active text"
                      >
                        <BsPersonSquare class="icon" />
                        Mi perfil
                      </Link>
                    </li>
                  </div>
                ) : (
                  <li class="nav-item">
                    <Link
                      to={`/profile/${user.id}`}
                      className="nav-link active text"
                    >
                      <BsPersonSquare class="icon" />
                      Mi perfil
                    </Link>
                  </li>
                )
              ) : (
                ""
              )}
            </ul>
          </div>
          {user.id ? (
            <span className="boton-logout">
              <button onClick={handleLogout} class="btn btn-dark" type="submit">
                <BsPersonXFill class="icon" />
              </button>
            </span>
          ) : (
            <div className="d-flex">
              <Link to={"/login"} className="boton-login">
                <button class="btn btn-danger" type="submit">
                  Ingresar
                </button>
              </Link>

              <Link to={"/sigup"}>
                <button class="btn btn-danger boton-registro" type="submit">
                  Registrarse
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
