import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogoutRequest } from "../redux/login";
import marca from "../assets/navbar/logo-1.png";
import "../style/navbar.scss";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login) || undefined;
  console.log("ACA LOGIN", login);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(postLogoutRequest());
    localStorage.removeItem("persist:root");
    navigate("/");
  };

  window.addEventListener("scroll", menuFixed);
  function menuFixed() {
    let navegacion = document.querySelector(".nav-menu_medium");
    navegacion.classList.toggle("fixed", window.scrollY > 236);
  }

  // d-flex justify-content-end
  // d-flex justify-content-end align-items-center
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark   fixed-top shadow-lg p-3 mb-5 bg-white  nav2  nav-menu_medium ">
        <div class="container-fluid  align-items-baseline d-flex   p-4 ">
          <Link to={"/"} className="navbar-brand">
            <img src={marca} width={250} />
          </Link>
          <button
            class="navbar-toggler navtoggler2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" id="navtoggler"></span>
          </button>
          <div
            class="collapse navbar-collapse  p-2 nav2  justify-content-end "
            id="navbarNavDarkDropdown"
          >
            <ul class="navbar-nav  ">
              <li className="nav-item">
                <h5>Home</h5>
              </li>
              <li className="nav-item">
                <h5>Hunting</h5>
              </li>

              <li className="nav-item">
                <h5>¿Quiénes somos?</h5>
              </li>
              <li>
                <h5>Contacto</h5>
              </li>
              {login.name ? (
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle perfil"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mi Perfil
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li className="nav-item">
                      <Link className="nav-link text-danger" to={"/searchs"}>
                        Busquedas
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link text-danger" to={"/admin"}>
                        Vista Admin
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/admin/searchs"}
                        className="nav-link text-danger"
                      >
                        Publicaciones
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                ""
              )}

              {login.name ? (
                <li>
                  <span
                    type="button"
                    className="btn btn-danger m-3 buttonLogOut "
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/login"}
                      className="btn btn-outline-danger m-3 buttonLogOut buttonLoging "
                    >
                      Iniciar sesión
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/sigup"}
                      className="btn btn-outline-danger m-3 buttonLogOut buttonSinUp "
                    >
                      Registrarse
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
