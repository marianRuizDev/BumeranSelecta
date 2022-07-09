/* Relacionado con ViewAdmin */
import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { deleteRecruiter } from "../redux/recruiters";
import { BiTrash } from 'react-icons/bi'
import { FaEdit } from "react-icons/fa";
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
      {/* <div className="container-xxl">
        <div class="card-recluter d-flex   align-items-center">
          <div class="card-body">
            <div class="row ">
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
              <div class="col-lg-1 " id="ranking">
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
 */}
      <div className="container-parent">
        <div className="container-card">

          <div className="avatar">
            <img src={perfil} height={75} />
            <Link to={`/profile/${items.id}`}>
              <h6>{items.name + " " + items.lastName} </h6>
            </Link>
          </div>

          <div className="flex">

            <div className="container-ranking">
              <div className="skills-wrapper">
                <div className="skill">
                  <div className="skill-content">
                    <span>{items.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-busquedas">
              <p>{items.activeSearchs} </p>
            </div>


          </div>

          <div className="btn-grupo">
            <Link to={`/admin/profiles/${items.id}`}>
              <button type="button" class="btn btn-danger">
                <FaEdit />
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
    </div >


  );
};

export default CardsAdmin;
