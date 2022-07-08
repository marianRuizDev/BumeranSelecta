import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Tables from "../components/Tables";
import GraficoBarras from "./GraficoBarras";
import GraficoBarras2 from "./GraficoBarras2";
import GraficoPie from "./GraficoPie";
import "../sass/viewAdmin.scss";
import "../sass/stadistics.scss";
import { CSVLink } from "react-csv";
import axios from "axios";
import { getAlldata } from "../redux/stadistics";
import { getAreasRequest } from "../redux/getAreas";
import { getCountriesRequest } from "../redux/getCountries";
import { Types } from "mysql";
import { sendAllSearches } from "../redux/search";
import { getAlldataTable } from "../redux/stadisticsTable";

const Stadistics = () => {
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.country);
  const areas = useSelector((state) => state.area);

  // const estados = ["En proceso", "No iniciada", "Finalizada"];

  const table = useSelector((state) => state.stadisticsTable);
  const datos = useSelector((state) => state.stadistics);

  const tableData = [
    { ...table[0] },
    { ...table[1] },
    { ...table[2] },
    { ...table[3] },
    { ...table[4] },
    { ...table[5] },
    { ...table[6] },
    { ...table[7] },
    { ...table[8] },
    { ...table[9] },
    { ...table[10] },
    { ...table[11] },
    { ...table[12] },
    { ...table[13] },
  ];
  tableData.map((e) => {
    if (e.CountryId === 1) {
      e.CountryId = "Uruguay";
    }
    if (e.CountryId === 2) {
      e.CountryId = "Paraguay";
    }
    if (e.CountryId === 3) {
      e.CountryId = "Bolivia";
    }
    if (e.CountryId === 4) {
      e.CountryId = "Argentina";
    }
    if (e.CountryId === 5) {
      e.CountryId = "Chile";
    }

    if (e.StatusId === 1) {
      e.StatusId = "En proceso";
    }
    if (e.StatusId === 2) {
      e.StatusId = "No iniciada";
    }
    if (e.StatusId === 3) {
      e.StatusId = "Finalizada";
    }
    if (e.AreaId === 1) {
      e.AreaId = "Tecnologia";
    }

    if (e.AreaId === 2) {
      e.AreaId = "Gastronomía";
    }

    if (e.AreaId === 3) {
      e.AreaId = "Marketing";
    }

    if (e.AreaId === 4) {
      e.AreaId = "Administración";
    }

    if (e.AreaId === 5) {
      e.AreaId = "Comercial";
    }

    if (e.AreaId === 6) {
      e.AreaId = "Producción";
    }

    if (e.AreaId === 7) {
      e.AreaId = "Logística";
    }

    if (e.AreaId === 8) {
      e.AreaId = "Gastronomía";
    }

    if (e.AreaId === 9) {
      e.AreaId = "Recursos Humanos";
    }

    if (e.AreaId === 10) {
      e.AreaId = "Ingenierías";
    }

    if (e.AreaId === 11) {
      e.AreaId = "Comercial";
    }

    if (e.AreaId === 12) {
      e.AreaId = "Atención al Cliente";
    }
  });
  console.log(tableData);
  const data = [
    { ...datos[0] },
    { ...datos[1] },
    { ...datos[2] },
    { ...datos[3] },
    { ...datos[4] },
  ];

  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setJobArea] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  console.log(searchStatus);

  const handleCountryChange = (e) => {
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
    setJobArea(e.target.value);
  };
  const handlSearchStatusChange = (e) => {
    setSearchStatus(e.target.value);
  };
  const handleReset = () => {
    setSelectedContry("");
    setJobArea("");
    setSearchStatus("");
  };
  useEffect(() => {
    dispatch(getCountriesRequest());
    dispatch(getAreasRequest());
    dispatch(getAlldata());
    dispatch(sendAllSearches());
    dispatch(getAlldataTable());
  }, []);
  return (
    <div>
      <div className="container-xxl">
        <div className="card-busqueda">
          <div class="container">
            <div class="row ">
              <div class="col-3"></div>

              <div class="col-2">
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
                      return (
                        <option key={i} value={pais.id}>
                          {pais.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div class="col-2">
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
                      return (
                        <option key={i} value={area.id}>
                          {area.name}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div class="col-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  placeholder="Área"
                  onChange={handlSearchStatusChange}
                >
                  <option value={""}>Estado</option>
                  <option value={2}>No iniciada</option>
                  <option value={1}>En proceso</option>
                  <option value={3}>Finalizada</option>
                </select>
              </div>
              <div class="col-1">
                <BiTrash
                  className="borrar"
                  type="button"
                  id="button-addon2"
                  onClick={handleReset}
                />
              </div>

              <div class="col-1">
                {/* pasar infoCopy */}
                <CSVLink data={tableData} target=" _blank">
                  <AiOutlineDownload className="borrar" />
                </CSVLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container container-titulos table-responisve">
        <div class="row row-tabla">
          <div class="col">
            <h5>Titulos</h5>
          </div>
          <div class="col">
            <h5>Estado</h5>
          </div>
          <div class="col">
            <h5>Fecha</h5>
          </div>
          <div class="col">
            <h5>País</h5>
          </div>
          <div class="col">
            <h5>Area</h5>
          </div>
          <div class="col">
            <h5>Vacantes</h5>
          </div>
        </div>
      </div>

      {table
        .filter((val) => {
          if (jobArea === "") {
            return val;
          } else if (val.AreaId === Number(jobArea)) {
            return val;
          }
        })
        .filter((val) => {
          if (selectedCountry === "") {
            return val;
          } else if (val.CountryId === Number(selectedCountry)) {
            return val;
          }
        })
        .filter((val) => {
          if (searchStatus === "") {
            return val;
          } else if (val.StatusId === Number(searchStatus)) {
            return val;
          }
        })
        .map((items, i) => {
          return (
            <div key={i}>
              <Tables items={items} />
            </div>
          );
        })}
      <GraficoBarras
        data={data.filter((val) => {
          if (selectedCountry === "") {
            return val;
          } else if (val.CountryId === Number(selectedCountry)) {
            return val;
          }
        })}
      />
      <GraficoBarras2 data={info} />
      <GraficoPie data={info} />
    </div>
  );
};

export default Stadistics;
