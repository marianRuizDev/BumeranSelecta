import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import bu from "../assets/navbar/bu.png";
import useTime from "../hooks/useTime";
import logo from "../assets/navbar/Group.png";
import "../sass/searchs.scss";
import { useState } from "react";
import { getOneRecruiter, sendAllRecruiters } from "../redux/recruiters";

function SearchCard({
  id,
  country,
  area,
  time,
  status,
  description,
  title,
  ratingRecruiter,
  candidates,
  Recruiter,
}) {
  const dispatch = useDispatch();

  const recruiters = useSelector((state) => state.recruiters).filter(
    (rec) => rec.id === Recruiter
  );

  // tiempo
  const date = new Date().getTime();
  const searchTime = new Date(time);
  const diff = (date - searchTime) / (1000 * 60 * 60 * 24);
  const countryName = useSelector((state) => state.country).filter(
    (pais) => pais.id === country
  );
  const areaName = useSelector((state) => state.area).filter(
    (areas) => areas.id === area
  );

  let timeStamp = "";

  if (parseInt(diff) === 1) {
    timeStamp = "Publicado hace 1 día";
  } else if (diff > 1) {
    timeStamp = `Publicado hace ${parseInt(diff)} días`;
  } else if (diff * 24 < 24 && diff * 24 * 60 >= 120) {
    timeStamp = `Publicado hace ${parseInt(diff * 24)} horas`;
  } else if (diff * 24 * 60 < 120) {
    timeStamp = "Nuevo";
  }

  let actualStatus;

  switch (status) {
    case null:
      actualStatus = "No iniciada";
      break;

    case 2:
      actualStatus = "No iniciada";
      break;

    case 1:
      actualStatus = "En proceso";
      break;

    case 3:
      actualStatus = "Finalizada";
      break;
  }

  const handleDeleteSearch = () => {
    dispatch(deleteSearch(id));
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  useEffect(() => {
    dispatch(sendAllRecruiters());
  }, []);
  return (
    <div className="card">
      <div className="boxTime">
        <small>{timeStamp}</small>
      </div>

      <div className="box">
        <div className="flex">
          <div class="col ">
            <Link to={`/searchs/${id}`}>
              <div>
                <h5>{title}</h5>
                <p>{areaName[0] ? areaName[0].name : ""}</p>
                <p class="card-text card-texto">{description}</p>
              </div>
            </Link>
          </div>
        </div>

        {/*
        
        
     /////////   LINEA DIVISORA
        
        <div class="col p-3 boxLine">
          <div class="vr mt-4 lineaDivisora"></div>
        </div> */}

        <div className="infoCard">
          <div class=" d-flex justify-content-left p-2">
            <span class="badge">{actualStatus}</span>
          </div>
          <div class="boxLocation">
            <IoLocationSharp class="local" size={30} />
            <p>{countryName[0] ? countryName[0].name : ""}</p>
          </div>
          <div class="boxLocation">
            <h6>Rating del reclutador</h6>
            <p>{ratingRecruiter}</p>
          </div>
          <div class="boxLocation">
            <h6>Candidatos presentados</h6>
            <p>{candidates}</p>
          </div>

          <div class="boxLocation">
            <h6>Reclutador</h6>
            <p>
              {recruiters.length !== 0
                ? recruiters[0].name
                : "Recruiter no asignado"}
            </p>
          </div>
        </div>
      </div>

      <div className="col bumeran-container">
        <img src={bu} className="bumeran" />
      </div>
    </div>
  );
}

export default SearchCard;

//////////////////////////// COSAS ANTERIORES //////////////////////

{
  /* <div class="col d-flex justify-content-left">
              <FaBuilding class="build" size={30} />
              <p>Presencial</p>
            </div>
            */
}

{
  /*
            
///////////BOTONES DE EDITAR Y BORRAR///////////
            
            <div class=" d-flex justify-content-left">
              <Link to={`/admin/searchs/update/${id}`}>
                <button className="btn ">
                  <FaPencilAlt />
                </button>
              </Link>
              <button onClick={handleDeleteSearch} className="btn ">
                <VscTrash />
              </button>
            </div> */
}

/* <div class="container mb-4 ">
<div class="card">
  <div class="row">
    <div class="col img-container col-lg-2">
      <img src={logo} alt="logo" class="card-img" />
    </div>
    <div class="col ">
      <Link to={`/searchs/${id}`}>
        <div
          class="card-body "
          style={{ maxHeight: "190px", overflow: "hidden" }}
        >
          <h5 class="card-title">
            Supervisor Alto Horno y Laminación - Ternium
          </h5>
          <p class="card-text card-texto">{textSplit + "..."}</p>
        </div>
      </Link>
    </div>

    <div class="col col-lg-1">
      <div
        class="vr mt-4 bg-secondary"
        style={{ height: "130px", width: "1px" }}
      ></div>
    </div>
    <div class="col col-lg-2 mt-5">
      <div class="row">
        <div class="col d-flex justify-content-left">
          <IoLocationSharp class="local" size={30} />
          <p>{country}</p>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-left">
          <FaBuilding class="build" size={30} />
          <p>Presencial</p>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-left">
          <MdWork class="work" size={30} />
          <p>{area}</p>
        </div>
      </div>
    </div>
    <div class="col mt-2 col-lg-1">
      <span class="badge">{status}</span>
    </div>
  </div>
  <div class="card-footer d-flex justify-content-center">
    <div className="col time-container">
      <small>
        {diff >= 1
          ? parseInt(diff) === 1
            ? "Publicado hace 1 día"
            : `Publicado hace ${parseInt(diff)} días`
          : `Publicado hace ${parseInt(diff * 24)} horas`}
      </small>
    </div>
    <div className="col col-lg-5 modify-btns">
      <Link to={`/admin/searchs/update/${id}`}>
        <button className="btn ">
          <FaPencilAlt />
        </button>
      </Link>

      <button onClick={handleDeleteSearch} className="btn ">
        <VscTrash />
      </button>
    </div>
  </div>
</div>
</div> */
