import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";

import logo from "../assets/navbar/Group.png";
import "../style/searchs.scss";

function SearchCard({ id, country, area, time, status, text }) {
  const dispatch = useDispatch();
  const date = new Date().getTime();
  const diff = (date - time) / (1000 * 60 * 60 * 24);

  const handleDeleteSearch = () => {
    console.log("hola");
  };

  const textSplit = text.split(" ").slice(0, 50).join(" ");

  console.log(textSplit);

  return (
    <div class="container mb-4">
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
            <Link to={"/admin/searchs/create"}>
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
    </div>
  );
}

export default SearchCard;
