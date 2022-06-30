import React from 'react'
import '../style/formProfile.scss'
import useInput from '../hooks/useInput'
import { getCountriesRequest } from "../redux/getCountries";
import { getAreasRequest } from "../redux/getAreas";

/* El administrador puede modificar al recluter */
const FormProfile = () => {

    const name = useInput();
    const lastName = useInput();
    const email = useInput();
    const password = useInput();
    const ranking = useInput();
    const description = useInput();

    /*   const countries = useSelector((state) => state.country);
         const areas = useSelector((state) => state.area); */

    const handleCountryChange = (e) => {
        setSelectedContry(e.target.value);
    };
    const handleJobAreaChange = (e) => {
        setJobArea(e.target.value);
    };

    /*   const handlerSubmit = () =>{
  
      } */

    return (
        <div>
            <div>
                <div className='title-recruiters'>
                    <h1>
                        Admin - Edit Recruiters
                    </h1>
                </div>
            </div>

            <form class="row g-3 from-edit-1" /* onSubmit={handlerSubmit} */>

                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Nombre</label>
                    <input type="text" class="form-control" placeholder="Nombre" aria-label=""
                        {...name} />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Apellido</label>
                    <input type="text" class="form-control" placeholder="Apellido" aria-label=""
                        {...lastName} />
                </div>

                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="text" class="form-control" placeholder="Email" aria-label=""
                        {...email} />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"
                        {...password} />
                </div>

                <div class="col-md-6">
                    <label for="inputCity" class="form-label">País de residencia</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        placeholder="Pais"

                    /*  onChange={handleCountryChange} */
                    >
                        <option value={""}>País</option>

                        {/* {countries
                            ?.filter((pais) => pais !== null)
                            .map((pais, i) => {
                                return <option key={i}>{pais}</option>;
                            })} */}
                    </select>
                </div>

                <div class="col-md-4">
                    <label for="inputState" class="form-label">Área de experiencia</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        placeholder="Área"
                    /*  onChange={handleJobAreaChange} */
                    >
                        <option value={""}>Área</option>

                        {/* {areas
                                ?.filter((area) => area !== null)
                                .map((area, i) => {
                                    return <option key={i}>{area}</option>;
                                })} */}
                    </select>
                </div>

                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Ranking</label>
                    <input type="text" class="form-control" id="inputZip" placeholder='Ranking'
                        {...ranking} />
                </div>

                <div class="form-floating">
                    <textarea name="textarea" rows="10" cols="50" placeholder='Descripción' {...description}></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-dark">Guardar cambios</button>
                </div>
            </form>
        </div>
    )

}

export default FormProfile;