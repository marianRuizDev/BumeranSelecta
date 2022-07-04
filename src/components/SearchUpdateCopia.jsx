import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import useInput from "../hooks/useInput";
import { getOneSearches, getOneUpDate } from "../redux/search";
import '../sass/searchCrud.scss'

export default function SearchUpdate() {
  /* const { id } = useParams();

  const navigate = useNavigate();

  const country = useInput();
  const area = useInput();
  const position = useInput();
  const description = useInput();
  const vacancies = useInput();
  const jobSchedules = useInput();
  const salary = useInput();
  const title = useInput();
  const category = useInput();

  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const editSearch = (e) => {
    e.preventDefault();
    dispatch(
      getOneUpDate({
        id,
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
    }, 500);
  };

  useEffect(() => {
    dispatch(getOneSearches(id));
  }, []); */

  return (
    <div className="container mt-4">
      <form onSubmit={editSearch} className="form-searchs">
        <h4 class="form-title">Editar busquedas</h4>
        <div class="mb-3">
          <label for="title" class="form-label">
            Titulo
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={search[0].title}
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
            placeholder={search[0].area}
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
            placeholder={search[0].position}
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
            placeholder={search[0].category}
            {...category}
          />
        </div>

        <div className="box_02">
          <div class="mb-3">
            <label for="vacancies" class="form-label">
              Vacantes
            </label>
            <input
              type="text"
              class="form-control"
              placeholder={search[0].vacancies}
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
              placeholder={search[0].jobSchedules}
              {...jobSchedules}
            />
          </div>
        </div>

        <div class="mb-3">
          <label for="salary" class="form-label">
            Remuneración
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={search[0].salary}
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
                placeholder={search[0].country}
                {...country}
              />
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
            class="form-control"
            placeholder={search[0].description}
            {...description}
          ></textarea>
        </div>

        <div className="box_button" >

          <Link to={"/searchs"} class="btn btn-danger cancelar m-2">
            Cancelar
          </Link>

          <button type="submit" class="btn btn-danger cambios m-2">
            Guardar
          </button>
        </div>
      </form >
    </div >
  );
}
