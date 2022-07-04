import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import perfil from "../assets/profiles/perfil2.png";
import logo from "../assets/navbar/Group.png";
import background from "../assets/svg background/ondas.svg";
import phone from "../assets/fomrs/descarga3.png";
import { getOneRecruiter } from "../redux/recruiters";
import { getAssignedSearchRequest } from "../redux/assignedSearch";
import "../style/profile.scss";

const Profile = () => {
  const date = new Date();
  const dispatch = useDispatch();
  let userId = useParams().id;

  const userRedux = useSelector((state) => state.recruiters);
  const searchs = useSelector((state) => state.assigned);
  const user = userRedux[0];

  useEffect(() => {
    if (userRedux) {
      dispatch(getOneRecruiter(userId));
      dispatch(getAssignedSearchRequest(userId));
    }
  }, []);

  return (
    <div>
      <img className="background" src={background} />
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Confirmación Requerida
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Desea completar la búsqueda?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Descartar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container card-container">
        <div className="card glass-card">
          <div className="row">
            <div class="col-md-4 sidebar profile-card">
              <img className="profile-img" src={perfil} alt="" />
              <h2>{user.name}</h2>
              <Link to={`/admin/profiles/${user.id}`}>
                <FaEdit />
              </Link>
              <ul>
                <li>
                  <IoLocationSharp className="local" />
                  {user.country}
                </li>
                <li>
                  <MdWork className="work" />
                  {user.experienceField}
                </li>
                <li>
                  <MdEmail className="build" />
                  {user.email}
                </li>
              </ul>
            </div>
            <div class="col-md-8">
              <div class="card-body main">
                <div className="row">
                  <div className="col-md-10">
                    <div className="header">
                      <h2>Búsquedas Activas</h2>
                      <span>{date.toDateString()}</span>
                    </div>
                    {searchs.length !== 0 ? (
                      searchs.map((search, i) => (
                        <div key={i} className="tasks">
                          <div className="search-card">
                            <Link to={`/searchs/${search.id}`}>
                              <div className="content">
                                <div className="left">
                                  <img src={logo} width="50" alt="" />
                                </div>
                                <div className="right">
                                  <div className="task">{search.title}</div>
                                </div>
                              </div>
                            </Link>
                            <div className="buttons">
                              <button
                                className="botn "
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                Completar
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h2>NO HAY BÚSQUEDAS ASIGNADAS</h2>
                    )}
                  </div>
                  <div className="col-md-1">
                    <img className="phone" src={phone} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
