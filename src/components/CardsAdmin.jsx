/* Relacionado con ViewAdmin */
import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { deleteRecruiter } from "../redux/recruiters";
import { BiTrash } from 'react-icons/bi'
import perfil from "../assets/profiles/perfil2.png";
import "../sass/cardsAdmin.scss";
import "../sass/ranking.scss";
/* import "../sass/stadistics.scss" */

const CardsAdmin = ({ items }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteRecruiter(items.id));
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div>
      <div className="container-xxl">
        <div class="card-recluter">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-1">
                <Link to={`/profile/${items.id}`}>
                  <img src={perfil} height={75} />
                </Link>
              </div>

              <div class="col-lg-4 nombre-container">
                <Link to={`/profile/${items.id}`}>
                  <h6 className="nombre">{items.name + " " + items.lastName} </h6>
                </Link>
              </div>
              <div class="col-lg-2" id="ranking">
                <div className="skills-wrapper">
                  <div className="skill">
                    <div className="skill-content">
                      <span>{items.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 cantidad">
                <h6>{items.activeSearchs} </h6>
              </div>
              <div class="col-lg-2">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <Link to={`/admin/profiles/${items.id}`}>
                    <button type="button" class="btn btn-danger">
                      Modificar
                    </button>
                  </Link>
                  <button
                    onClick={handleDelete}
                    type="button"
                    class="btn btn-dander trash-btn"
                  >
                    <BiTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container container-resultados table-responsive">
        <div class="row row-table">
          <div class="col col-nombre">
            <Link to={`/profile/${items.id}`}>
              <img src={perfil} height={75} />
              <h6 className="nombre">{items.name + " " + items.lastName} </h6>
            </Link>
          </div>

          <div class="col">
            <div className="skills-wrapper">
              <div className="skill">
                <div className="skill-content">
                  <span>{items.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col ">
            <h6>{items.activeSearchs} </h6> 
          </div>


          <div class="btn-group" role="group" aria-label="Basic example">
           <Link to={`/admin/profiles/${items.id}`}>
              <button type="button" class="btn btn-danger">
                Modificar
              </button>
            </Link>
            <button
              onClick={handleDelete}
              type="button"
              class="btn btn-dander trash-btn"
            >
              <BiTrash />
            </button> 
          </div>
        </div>
      </div>
    </div> */}

    </div>


  );
};

export default CardsAdmin;
