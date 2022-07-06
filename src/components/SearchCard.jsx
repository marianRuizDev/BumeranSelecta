import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";

import bu from "../assets/navbar/bu.png";
import useTime from "../hooks/useTime";
import logo from "../assets/navbar/Group.png";
import "../sass/searchs.scss";
import { deleteSearch } from "../redux/search";

function SearchCard({ id, country, area, time, status, description, title }) {
  const dispatch = useDispatch();
  const date = new Date().getTime();
  const searchTime = new Date(time);
  const diff = (date - searchTime) / (1000 * 60 * 60 * 24);

  let timeStamp = "";

  if (diff > 1) {
    timeStamp = `Publicado hace ${parseInt(diff)} días`;
  } else if (parseInt(diff) === 1) {
    timeStamp = "Publicado hace 1 día";
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

  // const desc = description.slice(0, 400);

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
          <div className="flexHorizontal">
            <div class=" d-flex justify-content-left p-2">
              <span class="badge">{actualStatus}</span>
            </div>
            <div class="col d-flex justify-content-center aline-items-baseline">
              <IoLocationSharp class="local" size={30} />
              <p>{country}</p>
            </div>

            {/* <div class="col d-flex justify-content-left">
              <FaBuilding class="build" size={30} />
              <p>Presencial</p>
            </div>
            <div class="col d-flex justify-content-left">
              <MdWork class="work" size={30} />
              <p>{area}</p>
            </div> */}

            {/*
            
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
            </div> */}
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
