import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiCube } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { VscTrash } from "react-icons/vsc";
import { deleteSearch, getOneSearches } from "../redux/search";
import { sendAllRecruiters } from "../redux/recruiters";
import { Link } from "react-router-dom";
import RecruiterSideBar from "./RecruiterSideBar";
import "../sass/searchs.scss";

function SearchView() {
  const selectedSearch = useSelector((state) => state.search);
  const recruiters = useSelector((state) => state.recruiters);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const date = new Date().getTime();
  const searchTime = new Date(selectedSearch[0].time).getTime();
  const diff = (date - searchTime) / (1000 * 60 * 60 * 24);



  const params = useParams();
  const id = params.id;

  // PRIMERO 3 MEJORES RECRUITERS
  const mejoresRecruiters = recruiters
    .slice(1, 4)
    .sort((a, b) => b.rating - a.rating);



  useEffect(() => {
    dispatch(getOneSearches(id));
    //dispatch(sendAllRecruiters());
  }, []);


  const handleDeleteSearch = () => {
    dispatch(deleteSearch(id));
    setTimeout(() => {
      navigate("/searchs");
      window.location.reload();
    }, 500);
  };

  return (
    <div class="containerBox">
      <div className="boxTitle">
        <div>
          <h1 class="d-flex justify-content-center margin-top">
            {selectedSearch[0].title}
          </h1>
          <h3>Nombre de la Empresa S.A</h3>
        </div>

        <div class=" boxEditDelet ">
          <Link to={`/admin/searchs/update/${id}`}>
            <TbEdit className="BtnEdit" />
          </Link>

          <VscTrash onClick={handleDeleteSearch} className="BtnDelete" />
        </div>
      </div>

      <div className="boxTree">
        <div className="contenedorInfo">
          <div className="boxInfo">
            <div className="grup01 text-danger">
              <div class="boxicon">
                <BiCube />
                <p>{"Servicios"}</p>
              </div>

              <div class="boxicon">
                <FiUsers />
                <p>{selectedSearch[0].vacancies}</p>
              </div>

              <div class="boxicon ">
                <AiOutlineClockCircle />
                <p>{selectedSearch[0].jobSchedules}</p>
              </div>
            </div>

            <div className="grup02 text-primary">
              <div class="boxicon">
                <IoLocationSharp />
                <p> {selectedSearch[0].country}</p>
              </div>

              <div class="boxicon">
                <RiMoneyDollarCircleLine />
                <p>{"$" + selectedSearch[0].salary}</p>
              </div>

              <div class="boxicon">
                <FaBuilding />
                <p>Presencial</p>
              </div>
            </div>

            <div className="grup02 text-primary">
              <div class="boxicon">
                <AiOutlineClockCircle />
                <span>
                  {diff >= 1
                    ? parseInt(diff) === 1
                      ? "Publicado hace 1 día"
                      : `Publicado hace ${parseInt(diff)} días`
                    : `Publicado hace ${parseInt(diff * 24)} horas`}
                </span>
              </div>
            </div>
          </div>

          <div className="boxText">
            <p>{selectedSearch[0].description}</p>
          </div>
        </div>

        <div className="boxMoreSerach">
          {mejoresRecruiters.map((recruiter, index) => {
            return <RecruiterSideBar key={index} recruiter={recruiter} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchView;

///////////////////////////////////////// COSAS ANTETIORES VER //////////////////////////////

{
  /* <div class="boxicon ">
  <AiOutlineClockCircle />
  <span>
    {diff >= 1
      ? parseInt(diff) === 1
        ? "Publicado hace 1 día"
        : `Publicado hace ${parseInt(diff)} días`
      : `Publicado hace ${parseInt(diff * 24)} horas`}
  </span>
</div>; */
}

{
  /* <div class="containerBox">
<div class="row">
  <div class="card  mb-5">
    <div className="badge-pos">
      <span className="badge ">{selectedSearch[0].status}</span>
    </div>
    <h1 class="d-flex justify-content-center margin-top">
      {selectedSearch[0].title}
    </h1>

    <div class="d-flex justify-content-center mb-3">
      <FaUsers size={20} style={{ alignSelf: "center" }} />
      <h5 style={{ paddingTop: "0.5rem", marginLeft: "0.3rem" }}>
        Puestos vacantes:{selectedSearch[0].vacancies}
      </h5>
    </div>
    <div class="col  d-flex justify-content-center">
      <h5 class="info-text">{selectedSearch[0].description}</h5>
    </div>
    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <div class="card" id="search-card">
          <div class="card-body d-flex">
            <div class="col d-flex justify-content-left">
              <IoLocationSharp
                class="local"
                style={{ alignSelf: "center" }}
              />
              {selectedSearch[0].country}
            </div>
            <div
              class="vr bg-secondary"
              style={{ marginRight: "20px", width: "1px" }}
            ></div>
            <div class="col d-flex justify-content-left">
              <MdWork class="work" style={{ alignSelf: "center" }} />
              {selectedSearch[0].area}
            </div>
            <div
              class="vr bg-secondary"
              style={{ marginRight: "20px", width: "1px" }}
            ></div>
            <div class="col d-flex justify-content-left">
              <BsFillClockFill
                class="clock"
                style={{ alignSelf: "center" }}
              />
              {selectedSearch[0].jobSchedules}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row margin-bot">
      <div class="col d-flex justify-content-center">
        <div class="card" id="search-card">
          <div class="card-body d-flex">
            <div class="col d-flex justify-content-left">
              <FaBuilding class="local" style={{ alignSelf: "center" }} />
              Presencial
            </div>
            <div
              class="vr bg-secondary"
              style={{ marginRight: "20px", width: "1px" }}
            ></div>
            <div class="col d-flex justify-content-left">
              <RiMoneyDollarCircleFill
                class="work"
                style={{ alignSelf: "center" }}
              />
              {selectedSearch[0].salary}
            </div>
            <div
              class="vr bg-secondary"
              style={{ marginRight: "20px", width: "1px" }}
            ></div>
            <div class="col d-flex justify-content-left">
              <BsFillClockFill
                class="clock"
                style={{ alignSelf: "center" }}
              />
              {diff >= 1
                ? parseInt(diff) === 1
                  ? "Publicado hace 1 día"
                  : `Publicado hace ${parseInt(diff)} días`
                : `Publicado hace ${parseInt(diff * 24)} horas`}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{selectedSearch[0].status !== "Finalizada" ? (
  <div>
    <h3 className="mb-4">Reclutadores recomendados</h3>
  </div>
) : (
  ""
)}

{selectedSearch[0].status !== "Finalizada"
  ? recruitersCopy
      .filter((rec) => {
        if (
          rec.country === selectedSearch[0].country &&
          rec.experienceField === selectedSearch[0].area
        ) {
          return rec;
        }
      })
      .sort((x, y) => {
        if (x.rating < y.rating) {
          return 1;
        }
        if (x.rating > y.rating) {
          return -1;
        }
        return 0;
      })

      .slice(0, 3)
      .map((recruiter, index) => (
        <div key={index} class="d-flex justify-content-center mb-4">
          <div class="card card-border-radius" style={{ width: "70%" }}>
            <div class="card-header card-border-radius">
              <div class="col d-flex justify-content-left">
                <FaUserAlt
                  size={15}
                  style={{
                    marginRight: "10px",
                    alignSelf: "center",
                    color: "white",
                  }}
                />
                <div className="text-light">{recruiter.name}</div>
              </div>
            </div>
            <div class="card-body">
              <div class="row ">
                <div class="col col-lg-2 d-flex justify-content-center">
                  <img
                    src={perfil}
                    alt="profile-picture"
                    class="rounded-circle"
                  />
                </div>
                <div
                  class="col"
                  id="info-col"
                  style={{ alignSelf: "center" }}
                >
                  <div class="row">
                    <div class="col d-flex justify-content-left">
                      <IoLocationSharp
                        size={20}
                        style={{ marginRight: "10px" }}
                      />
                      {recruiter.country}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col d-flex justify-content-left">
                      <MdWork size={20} style={{ marginRight: "10px" }} />
                      {recruiter.experienceField}
                    </div>
                  </div>
                </div>
                <div
                  class="col col-lg-2 d-flex justify-content-center"
                  style={{ marginRight: "10px", alignSelf: "center" }}
                >
                  {recruiter.rating}
                  <AiFillStar
                    style={{ marginRight: "10px", alignSelf: "center" }}
                  />
                </div>
                <div
                  class="col col-lg-1  "
                  style={{ marginRight: "10px", alignSelf: "center" }}
                >
                  <button
                    class="btn btn-dark"
                    onClick={() => handleAsignament(recruiter.id)}
                  >
                    <MdOutlineAssignmentTurnedIn />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
  : ""}
</div>  */
}
