import React, { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { getCountriesRequest } from "../redux/getCountries";
import { getAreasRequest } from "../redux/getAreas";
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

  /*     const countries = useSelector((state) => state.country);
         const areas = useSelector((state) => state.area); */

  const handleCountryChange = (e) => {
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
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
    console.log("hgol");
  }, []); */

  return (
    <div>
      <div>
        <div className="title-recruiters">
          <h1>Recruiters - Editar perfil</h1>
        </div>
      </div>

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
        {/* <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"
                        {...password} />
                </div> */}

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            País de residencia
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Pais"

          /*  onChange={handleCountryChange} */
          >
            <option value={""}>Selecciona una opción</option>

            {/* {countries
                            ?.filter((pais) => pais !== null)
                            .map((pais, i) => {
                                return <option key={i}>{pais}</option>;
                            })} */}
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
          /*  onChange={handleJobAreaChange} */
          >
            <option value={""}>Selecciona una opción</option>

            {/* {areas
                                ?.filter((area) => area !== null)
                                .map((area, i) => {
                                    return <option key={i}>{area}</option>;
                                })} */}
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
        <div class="col-12">
          <button type="submit" class="btn btn-danger">
            Cancelar
          </button>
          <button type="submit" class="btn btn-danger">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileMod;
