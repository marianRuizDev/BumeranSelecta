import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";

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
    console.log("AREA", jobArea);
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
            <option selected>País</option>
            {paises.map((pais) => (
              <option value={pais}>{pais}</option>
            ))}
          </select>
        </div>
        <div class="col  col-lg-2 ">
          <select
            onChange={handleJobAreaChange}
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Área</option>
            {areas.map((area) => (
              <option value={area}>{area}</option>
            ))}
          </select>
        </div>
        <div class="col col-lg-2 ">
          <select class="form-select" aria-label="Default select example">
            <option selected>Fecha</option>
            <option value="1">Hoy</option>
            <option value="1">Esta semana</option>
            <option value="2">Este mes</option>
            <option value="3">Este año</option>
          </select>
        </div>
        <div class="col col-lg-2">
          <button onClick={handleReset} type="button" class="btn btn-dark">
            Eliminar filtros
          </button>
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-4">
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
              if (selectedCountry === "" || selectedCountry === 1) {
                return val;
              } else if (val.country === selectedCountry) {
                return val;
              }
            })
            .map((search) => (
              <SearchCard country={search.country} area={search.area} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchsGrid;
