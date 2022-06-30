import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineFileAdd } from "react-icons/ai";
import SearchCard from "./SearchCard";
import "../style/searchs.scss";
import { sendAllSearches } from "../redux/search";

function SearchsGrid() {
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
  const dispatch = useDispatch();

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
      <div class="card card-search">
        <div class="row  d-flex justify-content-center mt-3">
          <div class="col col-lg-1">
            <Link to={"/admin/searchs/create"}>
              <button type="button" class="btn btn-add">
                <AiOutlineFileAdd />
              </button>
            </Link>
          </div>
          <div class="col select-container col-lg-2 ">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={handleCountryChange}
            >
              <option value={""}>País</option>
              {paises.map((pais, index) => (
                <option key={index} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
          </div>
          <div class="col  col-lg-2 ">
            <select
              onChange={handleJobAreaChange}
              class="form-select"
              aria-label="Default select example"
            >
              <option value={""}>Área</option>
              {areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div class="col col-lg-2 ">
            <select
              onChange={handleSearchTimeChange}
              class="form-select"
              aria-label="Default select example"
            >
              <option value={""}>Fecha</option>
              <option value={1}>Hoy</option>
              <option value={7}>Esta semana</option>
              <option value={30}>Este mes</option>
              <option value={365}>Este año</option>
            </select>
          </div>
          <div class="col col-lg-2 ">
            <select
              onChange={handlSearchStatusChange}
              class="form-select"
              aria-label="Default select example"
            >
              <option value={""}>Status</option>
              <option value={"No iniciada"}>No iniciada</option>
              <option value={"En proceso"}>En proceso</option>
              <option value={"Finalizada"}>Finalizada</option>
            </select>
          </div>
          <div class="col col-lg-1">
            <button
              onClick={handleReset}
              type="button"
              class="btn btn-search "
              id="btn-search"
            >
              <VscTrash />
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="col">
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
            .map((search, index) => (
              <SearchCard
                key={index}
                country={search.country}
                area={search.area}
                time={search.time}
                status={search.status}
                id={search.id}
                description={search.description}
                title={search.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchsGrid;
