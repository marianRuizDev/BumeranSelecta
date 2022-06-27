import { BsSearch } from 'react-icons/bs'
import marca from '../assets/navbar/logo-1.png'
import { Link } from 'react-router-dom'
import '../style/navbar.scss'


const Navbar = () => {

    /* Navbar transparente */
    /*  window.addEventListener("scroll", function () {
         let nav = document.querySelector('nav')
         nav.classList.toggle('abajo', window.scrollY > 0)
     })
  */
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-light p-md-3">{/* fixed-top */}
            <div className="container">
                <Link to={'/'} className="navbar-brand" ><img src={marca} width={250} /></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to={"#"}>Opción</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to={"#"}>Opción</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to={"/admin"}>Vista Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to={"/searchs"}>Busquedas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to={"login"}>Iniciar sesión</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to={"sigup"}>Registrase</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar