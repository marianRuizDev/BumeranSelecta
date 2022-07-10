import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { Link } from 'react-router-dom'
import { getAreasRequest } from "../redux/getAreas";
import { getCountriesRequest } from "../redux/getCountries";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getOneRecruiter, modifyRecruiter } from "../redux/recruiters";
import "../sass/formProfile.scss"

/* El administrador puede modificar al recluter */
const FormProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.recruiters);

  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();
  const rating = useInput();
  const description = useInput();
  const country = useInput();
  const experienceField = useInput();

  const countries = useSelector((state) => state.country);
  const areas = useSelector((state) => state.area);

  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setSelectedJob] = useState("");

  const handleCountryChange = (e) => {
    console.log(e.target.value)
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
    console.log(e.target.vaalue)
    setSelectedJob(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      modifyRecruiter({
        id,
        name,
        lastName,
        email,
        rating,
        description,
        country,
        experienceField,
      })
    );
  };

  useEffect(() => {
    dispatch(getOneRecruiter(id));
  }, []);

  return (
    <div>
      <form class="row g-3 from-edit-1" onSubmit={handlerSubmit}>
        <h4 className="title-recruiters">Editar reclutadores</h4>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={user[0].name}
            aria-label=""
            {...name}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Apellido
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={user[0].lastName}
            aria-label=""
            {...lastName}
          />
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={user[0].email}
            aria-label=""
            {...email}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            {...password}
          />
        </div>

        <div class="col-md-5">
          <label for="inputEmail4" class="form-label">
            País
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Seleccione un país"
            onChange={handleCountryChange}
          >
            <option value={""}>Seleccione un pais</option>
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

        <div class="col-md-5">
          <label for="inputEmail4" class="form-label">
            Área
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Seleccione un área"
            onChange={handleJobAreaChange}
          >
            <option value={""}>Seleccione un área</option>
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

        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Rating
          </label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            placeholder={user[0].rating}
            {...rating}
          />
        </div>

        <div class="form-floating">
          <textarea
            name="textarea"
            rows="10"
            cols="50"
            placeholder={user[0].description}
            {...description}
          ></textarea>
        </div>
        <div>
          <Link to={`/profile/${user[0].id}`}>
            <button type="submit" class="btn btn-danger cancelar align-items-center">
              Cancelar
            </button>
          </Link>
          <button type="submit" class="btn btn-danger cambios align-items-center">
            Guardar
          </button>
        </div>
      </form >
    </div >
  );
};

export default FormProfile;
