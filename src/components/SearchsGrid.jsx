import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import { FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { sendAllSearches } from "../redux/search";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../sass/searchs.scss";
import "../sass/viewAdmin.scss";

function SearchsGrid() {
  const dispatch = useDispatch();
  const date = new Date().getTime();
  const paises = [
    "Argentina",
    "Chile",
    "Colombia",
    "Ecuador",
    "Mexico",
    "Panama",
    "Peru",
    "Uruguay",
  ];
  const areas = [
    "Administración",
    "Comercial",
    "Producción",
    "Tecnología",
    "Logística",
    "Gastronomía",
    "Recursos Humanos",
    "Salud",
    "Ingenierías",
    "Atención al Cliente",
    "Marketing",
    "Construcción",
    "Comercio Exterior",
  ];

  const searchs = useSelector((state) => state.search);
  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setJobArea] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const handleCountryChange = (e) => {
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
    setJobArea(e.target.value);
  };
  const handlSearchStatusChange = (e) => {
    setSearchStatus(e.target.value);
  };
  const handleSearchTimeChange = (e) => {
    setSearchTime(e.target.value);
    searchs.map((s) => {
      console.log(date - s.time);
    });
  };

  const handleReset = () => {
    setSelectedContry("");
    setJobArea("");
    setSearchTime("");
    setSearchStatus("");
  };
  useEffect(() => {
    dispatch(sendAllSearches());
  }, []);
  return (
    <div class="container">
      <div class="card card-search p-2">
        <div class="col col-lg-1  justify-content-center create ">
          <Link
            to={"/admin/searchs/create"}
            className="navbar-brand btn btn-search "
          >
            <AiOutlinePlusCircle />
          </Link>
        </div>
        <div class="d-flex justify-content-center boxBusqueda">
          <div>
            <select
              aria-label="Default select example"
              onChange={handleCountryChange}
              className="form-select"
            >
              <option value={""}>País</option>
              {paises.map((pais, index) => (
                <option key={index} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={handleJobAreaChange}
              aria-label="Default select example"
              className="form-select"
            >
              <option value={""}>Área</option>
              {areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div class=" ">
            <select
              onChange={handleSearchTimeChange}
              aria-label="Default select example"
              className="form-select"
            >
              <option value={""}>Fecha</option>
              <option value={1}>Hoy</option>
              <option value={7}>Esta semana</option>
              <option value={30}>Este mes</option>
              <option value={365}>Este año</option>
            </select>
          </div>
          <div class=" ">
            <select
              onChange={handlSearchStatusChange}
              aria-label="Default select example"
              className="form-select"
            >
              <option value={""}>Status</option>
              <option value={"No iniciada"}>No iniciada</option>
              <option value={"En proceso"}>En proceso</option>
              <option value={"Finalizada"}>Finalizada</option>
            </select>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="col col-lg-1 create2">
            <Link
              to={"/admin/searchs/create"}
              className="navbar-brand btn btn-search "
            >
              <AiOutlinePlusCircle className="icono" />
            </Link>
          </div>

          <div class="col col-lg-1">
            <FiTrash onClick={handleReset} class="btnDelete " />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="col ContainerSearch">
          {searchs
            .filter((val) => {
              if (searchStatus === "") {
                return val;
              } else if (val.status === searchStatus) {
                return val;
              }
            })
            .filter((val) => {
              if (searchTime === "") {
                return val;
              } else if (
                (date - val.time) / (1000 * 60 * 60 * 24) <=
                searchTime
              ) {
                return val;
              }
            })
            .filter((val) => {
              if (jobArea === "") {
                return val;
              } else if (val.area === jobArea) {
                return val;
              }
            })
            .filter((val) => {
              if (selectedCountry === "") {
                return val;
              } else if (val.country === selectedCountry) {
                return val;
              }
            })
            .map((search, index) => {
              return (
                <SearchCard
                  key={index}
                  country={search.country}
                  area={search.area}
                  time={search.createdAt}
                  status={search.StatusId}
                  id={search.id}
                  description={search.description}
                  title={search.title}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchsGrid;
