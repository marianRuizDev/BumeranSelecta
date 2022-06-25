import { BsSearch } from "react-icons/bs";
import marca from "../assets/navbar/logo-1.png";
import { Link } from "react-router-dom";
import "../style/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img src={marca} />
        </Link>
        <ul className="nav justify-content-end">
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
          <li className="nav-item">
            <Link to={"/searchs"}>
              <button type="button" className="btn btn-danger">
                <BsSearch />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
