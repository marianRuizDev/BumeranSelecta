import React from 'react'
import img1 from '../assets/header/img1.png'
import img2 from '../assets/header/img2.jpeg'
import img5 from '../assets/header/img5.png'
import '../style/header.scss'


const Header = () => {

    /* Dar estilos */
    return (
        <div>


            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 id='title-color'>¿Cómo ser un buen líder de equipo?</h4>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 id='title-color'>¿Cómo identificar en un aviso los elementos claves que busca el reclutador?</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 id='title-color'>¿Cómo evaluar una propuesta de empleo?</h4>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Header