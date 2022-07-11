import React from "react";
import "../sass/cardsContenido.scss";
import img1 from "../assets/contenido/descarga16.png";
import img2 from "../assets/contenido/descarga17.png";
import img3 from "../assets/contenido/descarga18.png";

const CardContenido = () => {
  return (
    <div className="cards__home" id="Servicios">
      <h3 className="justify center">Otros servicios</h3>
      <div class="container">
        <div class="row row__cards">
            <div class="col p-3">
            <div className="container__cards">
              <div className="cards">
                <div className="cover">
                  <img src={img1} />
                  <div className="img_back"></div>
                </div>
                <div className="description">
                  <h3>Selección Curricular</h3>
                  <p>
                    {" "}
                    Presentación de candidatos de acuerdo a un screening
                    teléfonico alineados al perfil requerido.
                  </p>
                </div>
                <a href="#" className="btn btn-danger-cards">
                  CONTACTO
                </a>
              </div>
            </div>
          </div>
          <div class="col p-3">
            <div className="container__cards">
              <div className="cards">
                <div className="cover">
                  <img src={img2} />
                  <div className="img_back"></div>
                </div>
                <div className="description">
                  <h3>Estudios Comportamentales</h3>
                  <p>
                    Evaluaciones psicotécnicas, psicométricas, gaming para medir
                    competencias, habilidades y personalidad.
                  </p>
                </div>
                <a href="#" className="btn btn-danger-cards">
                  CONTACTO
                </a>
              </div>
            </div>
          </div>
          <div class="col p-3">
            <div className="container__cards">
              <div className="cards">
                <div className="cover">
                  <img src={img3} />
                  <div className="img_back"></div>
                </div>
                <div className="description">
                  <h3>Capacitaciones</h3>
                  <p>
                    Un talento capacitado es más efectivo y productivo lo que te
                    permitirá reducir costos y tiempo.
                  </p>
                </div>
                <a href="#" className="btn btn-danger-cards">
                  CONTACTO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="titulo_qs" id="quienes_somos">
          Quienes Somos?{" "}
        </h3>
        <div className="boxQuienesSomos">
          <div className="item_img_1">
            <div className="bg1"></div>
          </div>

          <div className="item_img_2">
            <div className="bg2"></div>
          </div>
        </div>
      </div>

      <h4>
        Te ayudamos a <span className="text-light">encontrar</span> talento
      </h4>
    </div>
  );
};

export default CardContenido;
