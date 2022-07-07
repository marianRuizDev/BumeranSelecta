import React, { useState } from "react";
import { BiTrash } from 'react-icons/bi'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendAllRecruiters } from "../redux/recruiters";
import { getCountriesRequest } from "../redux/getCountries";
import { getAreasRequest } from "../redux/getAreas";
import CardsAdmin from "./CardsAdmin";
import "../sass/viewAdmin.scss"

const ViewAdmin = () => {
  const dispatch = useDispatch();
  const recruiters = useSelector((state) => state.recruiters);
  /* const countries = useSelector((state) => state.country);
  const areas = useSelector((state) => state.area); */

  const countries = ['Alemania', 'Argentina', 'Austria', 'Canada', 'Colombia', 'Finlandia', 'Francia', 'Honduras', 'México', 'Iran', 'Suiza', 'Perú'
  ]

  const areas = [
    'Administración',
    'Atención al Cliente',
    'Comercial',
    'Gastronomía',
    'Ingenierías',
    'Logística',
    'Marketing',
    'Producción',
    'Recursos Humanos',
    'Salud',
    'Tecnologia',

  ]
  const recruitersCopy = [...recruiters];

  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setJobArea] = useState("");
  const [value, setValue] = useState("");

  const handlerClick = (e) => {
    setValue(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
    setJobArea(e.target.value);
  };

  const handleReset = () => {
    setValue("");
    setSelectedContry("");
    setJobArea("");
    console.log(recruiters);
  };

  useEffect(() => {
    dispatch(sendAllRecruiters());
    dispatch(getCountriesRequest());
    dispatch(getAreasRequest());
  }, []);

  return (
    <div>
      <div className="container-xxl">
        <div className="card-busqueda">
          <div class="container">
            <div class="row row-admin">
              <div class="col-3">
                <form>
                  <input
                    className="form-control form-admin me-2"
                    type="search"
                    placeholder="Nombre o Apellido"
                    aria-label="Search"
                    onChange={handlerClick}
                  />
                </form>
              </div>

              <div class="col-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  placeholder="Pais"
                  onChange={handleCountryChange}
                >
                  <option value={""}>Pais</option>

                  {countries
                    ?.filter((pais) => pais !== null)
                    .map((pais, i) => {
                      return <option key={i}>{pais}</option>;
                    })}
                </select>
              </div>
              <div class="col-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  placeholder="Área"
                  onChange={handleJobAreaChange}
                >
                  <option value={""}>Área</option>

                  {areas
                    ?.filter((area) => area !== null)
                    .map((area, i) => {
                      return <option key={i}>{area}</option>;
                    })}
                </select>
              </div>
              <div class="col-1">
                <BiTrash className="borrar"
                  type="button"
                  id="button-addon2"
                  onClick={handleReset} />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="card-titulos">
        <div className="card-body">
          <div className="row fila-titulos">
            <div className="col-lg-4">
              <h5 className="title-admin">Reclutador</h5>
            </div>
            <div className="col-lg-3">
              <h5 className="title-admin">Ranking</h5>
            </div>
            <div className="col-lg-2">
              <h5 className="title-admin">Bus. Asignadas</h5>
            </div>
            <div className="col-lg-3">
              <h5 className="title-admin">Permisos</h5>
            </div>
          </div>
        </div>
      </div>
      <hr className="linea" />

      <div>
        {recruitersCopy
          .filter((recruiter) => recruiter.admin !== true)
          .sort((x, y) => {
            if (x.rating < y.rating) {
              return 1;
            }
            if (x.rating > y.rating) {
              return -1;
            }
            return 0;
          })
          .filter((val) => {
            if (value === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(value.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .filter((val) => {
            if (jobArea === "") {
              return val;
            } else if (val.experienceField === jobArea) {
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
          .map((items, i) => {
            return (
              <div key={i}>
                <CardsAdmin items={items} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ViewAdmin;
