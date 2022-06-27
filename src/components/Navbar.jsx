import { BsSearch } from "react-icons/bs";
import marca from "../assets/navbar/logo-1.png";
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { postLogoutRequest } from "../redux/login";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login.data.name);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(postLogoutRequest());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img src={marca} />
        </Link>
        <ul className="nav d-flex align-items-center">
          {login ? (
            <>
              <li className="nav-item  ">
                <p className="">Hola! {login}</p>
                <Link to={"/admin/searchs"} className="">
                  ADMINITRACION
                </Link>
              </li>
             
              <li className="nav-item">
                <button
                  type="button"
                  class="btn btn-outline-danger m-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Iniciar sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/sigup"} className="nav-link">
                  Registrase
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
