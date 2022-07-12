import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

import perfil from "../assets/profiles/perfil1.png";
import logo from "../assets/navbar/Group.png";
import background from "../assets/svg background/ondas.svg";
import phone from "../assets/fomrs/descarga3.png";
import useInput from "../hooks/useInput";
import { getOneRecruiter } from "../redux/recruiters";
import { getAssignedSearchRequest } from "../redux/assignedSearch";
import { getOneUpDate } from "../redux/search";
import { subtractAvtiveSearches } from "../redux/modifyActiveSearches";
import "../sass/profile2.scss";

const Profile = () => {
  const date = new Date();
  const dispatch = useDispatch();
  let userId = useParams().id;
  const [validate, setValidate] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(0);

  const userRedux = useSelector((state) => state.recruiters);
  const searchs = useSelector((state) => state.assigned);
  const filteredSearchs = searchs.filter((search) => search.StatusId !== 3);
  const filteredDate = filteredSearchs.map((search) =>
    addDaysToDate(search.updatedAt, 15)
  );
  const user = userRedux[0];
  console.log("USER", user);

  const userCountry = useSelector((state) => state.country).filter(
    (pais) => pais.id === user.CountryId
  );
  const userExperienceField = useSelector((state) => state.area).filter(
    (area) => area.id === user.AreaId
  );

  const workersNum = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workersNum.value !== undefined && workersNum.value !== "0") {
      dispatch(getOneUpDate({ id: selectedSearch, StatusId: 1 }));
      dispatch(subtractAvtiveSearches(userId));
      setValidate(true);
      setTimeout(() => {
        document.getElementById("closeBtn").click();
        window.location.reload();
      }, 1000);
    }

    e.target.reset();
  };

  const handleClose = (e) => {
    e.preventDefault();
    setValidate(false);
  };

  function addDaysToDate(date, days) {
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }

  useEffect(() => {
    dispatch(getOneRecruiter(userId));
    dispatch(getAssignedSearchRequest(userId));
  }, [userId]);

  return (
    <div className=" profile-container">
      <div
        class="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Datos requeridos
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Número de candidatos presentados:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="recipient-name"
                    min={0}
                    defaultValue={0}
                    {...workersNum}
                    required
                  />
                </div>
                {validate ? (
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Enviado correctamente</strong>
                    <button
                      type="reset"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div class="modal-footer">
                <button
                  id="closeBtn"
                  type="reset"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Cerrar
                </button>
                <button type="submit" class="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card userInfo-card">
        <div className="card-body">
          <div className="profile-photo-container">
            {user.admin ? (
              <Link to={`/admin/profiles/${user.id}`}>
                <FaEdit className="profile-edit" />
              </Link>
            ) : (
              <Link to={`/recruiter/profiles/${user.id}`}>
                <FaEdit className="profile-edit" />
              </Link>
            )}
            <img className="profile-photo" src={perfil} alt="" />
            <h5 className="user-name">{user.name + " " + user.lastName}</h5>
          </div>
          <div className="profile-infoContainer">
            <p className="profile-info">
              <span className="userInfo-tag">Nacionalidad:</span>
              <span className="userInfo-content">
                {userCountry[0] ? userCountry[0].name : "No asignado"}
              </span>
            </p>
            <p className="profile-info">
              <span className="userInfo-tag">Área:</span>
              <span className="userInfo-content">
                {userExperienceField[0]
                  ? userExperienceField[0].name
                  : "No asignado"}
              </span>
            </p>
            <p className="profile-info">
              <span className="userInfo-tag">Email:</span>
              <span className="userInfo-content">{user.email}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="card searchInfo-card">
        <div className="card-header">
          <nav>
            <div
              class="nav nav-tabs card-header-tabs"
              id="nav-tab"
              role="tablist"
            >
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                {"(" + user.activeSearchs + ")" + " " + "Búsquedas Activas"}
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Descripción
              </button>
            </div>
          </nav>
        </div>
        <div className="card-body p-0">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="">
                <table className="table profile-table">
                  {filteredSearchs.length !== 0 ? (
                    <thead className="searchTable-head">
                      <tr className="">
                        <th scope="col">Título</th>
                        <th scope="col">Fecha de cierre</th>
                        <th scope="col">Vacantes</th>
                        <th scope="col">Completar</th>
                      </tr>
                    </thead>
                  ) : (
                    ""
                  )}

                  {filteredSearchs.length !== 0 ? (
                    filteredSearchs.map((search, i) => (
                      <tbody className="searchTable-body">
                        <tr>
                          <th scope="row" className="align-middle">
                            <span>{search.title}</span>
                          </th>
                          <td className="align-middle">
                            <span>
                              {new Date(filteredDate[i]).toLocaleDateString(
                                "es"
                              )}
                            </span>
                          </td>
                          <td className="align-middle">
                            <span>{search.vacancies}</span>
                          </td>
                          <td className="align-middle">
                            <button
                              className="check-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => setSelectedSearch(search.id)}
                            >
                              <FaCheck />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <div className="background">No hay búsquedas activas</div>
                  )}
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="profile-description">{user.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div key={i} className="tasks">
                        <div className="card active-search-card">
                          <Link to={`/searchs/${search.id}`}>
                            <div className="left-content">
                              <img className="card-logo" src={logo} alt="" />
                              <span>{search.title}</span>
                            </div>
                          </Link>
                          <div className="right-content">
                            <button
                              className="botn "
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => setSelectedSearch(search.id)}
                            >
                              Completar
                            </button>
                          </div>
                        </div>
                      </div> */
}
