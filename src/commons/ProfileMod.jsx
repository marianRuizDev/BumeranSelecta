import React from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { getOneRecruiter, modifyRecruiter } from "../redux/recruiters";
import "../sass/formProfile.scss"

/* El rucluter puede modificar su perfil */
const ProfileMod = () => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.login);
  const id = me.id;

  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const description = useInput();

  const paises = useSelector((state) => state.country);
  const areas = useSelector((state) => state.area); 


  const handleCountryChange = (e) => {
    console.log(e.target.value)
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
    console.log(e.target.value)
    setJobArea(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      modifyRecruiter({
        id,
        name,
        lastName,
        email,
        description,
      })
    );
  };

  /* useEffect(() => {
    dispatch(getOneRecruiter())
  }, []); */

  return (
    <div className="edit-recruiters">

      <h4 className="title-recruiters">Editar perfil</h4>
      <form class="row g-3 form-edit" onSubmit={handlerSubmit}>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control form-1"
            placeholder={me.name}
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
            placeholder={me.lastName}
            aria-label=""
            {...lastName}
          />
        </div>

        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={me.email}
            aria-label=""
            {...email}
          />
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            País de residencia
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Pais"

            onChange={handleCountryChange}
          >
            <option value={""}>Seleccione una opción</option>
            {paises.map((pais, index) => (
              <option key={index} value={pais.id}>
                {pais.name}
              </option>
            ))}
          </select>
        </div>

        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Área de experiencia
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Área"
            onChange={handleJobAreaChange}
          >
            <option value={""}>Seleccione una opción</option>
            {areas.map((area, index) => (
              <option key={index} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        <div class="form-floating">
          <textarea
            name="textarea"
            rows="10"
            cols="50"
            placeholder={me.description}
            {...description}
          ></textarea>
        </div>
        <div>
          <Link to={`/`}>
            <button type="submit" class="btn btn-danger cancelar">
              Cancelar
            </button>
          </Link>
          <button type="submit" class="btn btn-danger cambios">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileMod;
