import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscTrash } from "react-icons/vsc";
import SearchCard from "./SearchCard";
import "../style/searchs.scss";

function SearchsGrid() {
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
  const searchs = [
    {
      country: "Argentina",
      area: "Producción",
    },
    {
      country: "Mexico",
      area: "Salud",
    },
    {
      country: "Colombia",
      area: "Comercial",
    },
    {
      country: "Chile",
      area: "Marketing",
    },
    {
      country: "Argentina",
      area: "Logística",
    },
    {
      country: "Ecuador",
      area: "Marketing",
    },
  ];
  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setJobArea] = useState("");

  const handleCountryChange = (e) => {
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
    setJobArea(e.target.value);
  };

  const handleReset = () => {
    setSelectedContry("");
    setJobArea("");
  };
  useEffect(() => {
    console.log("PAIS", selectedCountry);
  }, [selectedCountry]);

  return (
    <div class="container">
      <div class="row d-flex justify-content-center mt-5">
        <div class="col col-lg-2 ">
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
          <select class="form-select" aria-label="Default select example">
            <option value={""}>Fecha</option>
            <option value="1">Hoy</option>
            <option value="1">Esta semana</option>
            <option value="2">Este mes</option>
            <option value="3">Este año</option>
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
      <div class="mt-4">
        <div class="col">
          {searchs
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
              <Link to={`/searchs/${index}`}>
                <SearchCard
                  key={index}
                  country={search.country}
                  area={search.area}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchsGrid;
