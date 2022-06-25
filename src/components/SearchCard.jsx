import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "../style/searchs.scss";

function SearchCard({ country, area }) {
  return (
    <div class="container mb-4">
      <div class="card">
        <div class="row">
          <div class="col col-lg-2">
            <img
              src="https://play-lh.googleusercontent.com/m6ZiE8hHO29EuwHXFPXbpSHkr5mpc06rYQZZgC1G8llPi7VXtEILaE01ME5sgxLDAw"
              alt="logo"
              class="card-img"
            />
          </div>
          <div class="col ">
            <div
              class="card-body "
              style={{ maxHeight: "190px", overflow: "hidden" }}
            >
              <h5 class="card-title">
                Supervisor Alto Horno y Laminación - Ternium
              </h5>
              <p class="card-text">
                Importante empresa siderurgica en busca de persona capacitada y
                experimentada en el sector. Funciones Principales: 1- Conocer
                flujo del funcionamiento del alto Horno 2- Tener conocimiento
                previo de mantenimiento durante el proceso de colada 3-
                Implementar adecuadamente las tecnoñogías pedidas Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Praesentium ad
                deserunt quas, nam cupiditate aliquid numquam odit explicabo aut
                quo? Magnam neque iure repudiandae explicabo quis, reprehenderit
                fugiat veniam omnis.
              </p>
            </div>
          </div>
          <div class="col col-lg-1">
            <div
              class="vr mt-4 bg-secondary"
              style={{ height: "130px", width: "1px" }}
            ></div>
          </div>
          <div class="col col-lg-4 mt-5">
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
        </div>
        <div class="card-footer d-flex justify-content-center">
          <small>Publicado hace 5 horas</small>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
