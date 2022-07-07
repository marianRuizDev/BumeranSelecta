
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { createSearches } from "../redux/search";
import "../sass/createSearch.scss";

export default function SearchCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const country = useInput();
  const area = useInput();
  const position = useInput();
  const description = useInput();
  const vacancies = useInput();
  const jobSchedules = useInput();
  const salary = useInput();
  const title = useInput();
  const category = useInput();



  const createSearch = (e) => {
    e.preventDefault();

    dispatch(
      createSearches({
        country,
        area,
        position,
        description,
        vacancies,
        jobSchedules,
        salary,
        title,
        category,
      })
    );

    setTimeout(() => {
      navigate("/searchs");
      window.location.reload();
    }, 500);
  };

  return (
    <div class="containerr mt-4">
      <form onSubmit={createSearch} className="form-searchs">
        <h4 class="form-title">Crear busquedas</h4>
        <div className="box">
          <div className="box1">
            <div class="mb-3">
              <label for="title" class="form-label">
                Titulo
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Ej.: Empleado administrativo"
                {...title}
              />
            </div>

            <div class="mb-3">
              <label for="area_search" class="form-label">
                Área
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Area de trabajo"
                {...area}
              />
            </div>

            <div class="mb-3">
              <label for="position" class="form-label">
                Puesto
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Puesto en la empresa"
                {...position}
              />
            </div>

            <div class="mb-3">
              <label for="category" class="form-label">
                Categoría{" "}
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Ej.: Junior"
                {...category}
              />
            </div>
          </div>

          <div className="box2">
            <div class="mb-3">
              <label for="vacancies" class="form-label">
                Vacantes
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Nùmero de vacantes"
                {...vacancies}
              />
            </div>

            <div class="mb-3">
              <label for="jobSchedules" class="form-label">
                Horarios de trabajo
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Ej.: 08:00 - 17:00 Hs"
                {...jobSchedules}
              />
            </div>

            <div class="mb-3">
              <label for="salary" class="form-label">
                Remuneración
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="$"
                {...salary}
              />
            </div>

            <div className="mb-3">
              <div className="box_01">
                <div class="mb-3">
                  <label for="country" class="form-label">
                    País
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Seleccione un país"
                    {...country}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">
            Descripción
          </label>

          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Escriba aquí..."
            class="form-control"
            {...description}
          ></textarea>
        </div>

        <div className="box_button">
          <button type="submit" class="btn btn-danger cambios m-2">
            Guardar
          </button>
          <Link to={"/searchs"} class="btn btn-danger cancelar m-2">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
