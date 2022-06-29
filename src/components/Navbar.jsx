import marca from "../assets/navbar/logo-1.png";
import { BsPersonCircle, BsPersonXFill, BsPersonSquare, BsFillPersonPlusFill } from 'react-icons/bs'
import { MdPersonSearch } from 'react-icons/md'
import { BiNews } from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/navbar.scss";

const Navbar = () => {
  const admin = useSelector((state) => state.admin);

  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img src={marca} width={250} />
          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={"/searchs"} class="nav-link active text"><MdPersonSearch class='icon' /> Busquedas</Link>
              </li>
              <li class="nav-item">
                <Link to={"/admin"} className="nav-link active text"><BsFillPersonPlusFill /> Reclutadores</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active text" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><BiNews class='icon' />
                  Publicaciones
                </a>
                {/* Si quieren agregar opciones cambiar tag a por tag Link to={'/...'} */}
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item">Action</a></li>
                  <li><a class="dropdown-item">Another action</a></li>
                  <li><a class="dropdown-item">Something else here</a></li>
                </ul>
              </li>

              {/* Si es reclutador solo su perfil */}
              <li class="nav-item">
                <Link to={"/profile"} className="nav-link active text"><BsPersonSquare class='icon' />Mi perfil</Link>
              </li>
            </ul>
          </div>
          <div>

          </div>
          <span className="boton-logout"><button class="btn btn-dark" type="submit"><BsPersonXFill class='icon' /></button></span>

          {/* Si no está logueado, muetra iniciar sesión y register  */}
          <Link to={'/login'} className="boton-login"><button class="btn btn-danger" type="submit"><BsPersonCircle /></button></Link>

          <Link to={'/sigup'}><button class="btn btn-danger boton-registro" type="submit">Registrarse</button></Link>

        </div>
      </nav>
    </div>


  );
};


export default Navbar;
