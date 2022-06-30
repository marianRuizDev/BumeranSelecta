import React, { useEffect, useState } from "react";
import "../style/formProfile.scss";
import useInput from "../hooks/useInput";
import { getCountriesRequest } from "../redux/getCountries";
import { getAreasRequest } from "../redux/getAreas";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getOneRecruiter, modifyRecruiter } from "../redux/recruiters";

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
  const [selectedCountry, setSelectedContry] = useState(user[0].country);
  const [selectedJob, setSelectedJob] = useState(user[0].experienceField);

  const countries = useSelector((state) => state.country);
  const areas = useSelector((state) => state.area);

  const handleCountryChange = (e) => {
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
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
        selectedCountry,
        selectedJob,
      })
    );
  };

  useEffect(() => {
    dispatch(getOneRecruiter(id));
  }, []);

  return (
    <div>
      <div>
        <div className="title-recruiters">
          <h1>Admin - Edit Recruiters</h1>
        </div>
      </div>

      <form class="row g-3 from-edit-1" onSubmit={handlerSubmit}>
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

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            País de residencia
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleCountryChange}
            required
          >
            <option selected value={user[0].country}>
              {user[0].country}
            </option>

            {countries
              ?.filter((pais) => pais !== null)
              .map((pais, i) => {
                return <option key={i}>{pais}</option>;
              })}
          </select>
        </div>

        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Área de experiencia
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Área"
            onChange={handleJobAreaChange}
            required
          >
            <option selected value={user[0].experienceField}>
              {user[0].experienceField}
            </option>

            {areas
              ?.filter((area) => area !== null)
              .map((area, i) => {
                return <option key={i}>{area}</option>;
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
          <button type="submit" class="btn btn-dark">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProfile;
