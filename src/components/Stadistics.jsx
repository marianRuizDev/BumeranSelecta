import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { AiOutlineDownload } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Tables from '../components/Tables'
import GraficoBarras from "./GraficoBarras"
import "../sass/viewAdmin.scss"
import "../sass/stadistics.scss"
import { CSVLink } from "react-csv"



const Stadistics = () => {
    /* Cambiar por state de area countries y status */
    const estados = ["No iniciada", "En proceso", "Finalizada"]
    const countries = ["Argentina", "Chile", "Colombia", "Ecuador", "Mexico", "Panama", "Perú", "Uruguay"
    ]
    const areas = useSelector((state) => state.area)


    /*  const info = useSelector((state) => state)
     const infoCopy = [...info] */

    const [selectedCountry, setSelectedContry] = useState("");
    const [jobArea, setJobArea] = useState("");
    const [searchStatus, setSearchStatus] = useState("");


    const handleCountryChange = (e) => {
        setSelectedContry(e.target.value);
    };
    const handleJobAreaChange = (e) => {
        console.log(e.target.value)
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

    const info = [
        {
            title: "Preventista Zona SUR - CABA...",
            country: "Argentina",
            area: "Administración",
            vacancies: "10",
            status: "En proceso",
            updatedAt: "2022-07-05",
        },

        {
            title: "Preventista Zona SUR - CABA...",
            country: "Perú",
            area: "Gastronomía",
            vacancies: "5",
            status: "Finalizada",
            updatedAt: "2022-07-05",

        },
        {
            title: "Preventista Zona SUR - CABA...",
            country: "Colombia",
            area: "Comercial",
            vacancies: "20",
            status: "No iniciada",
            updatedAt: "2022-07-05",
        },
        {
            title: "Preventista Zona SUR - CABA...",
            country: "Colombia",
            area: "Comercial",
            vacancies: "20",
            status: "En proceso",
            updatedAt: "2022-07-05",
        },
    ]


    return (
        <div>
            <div className="container-xxl">
                <div className="card-busqueda">
                    <div class="container">
                        <div class="row ">
                            <div class="col-3">
                                Calendar
                            </div>

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
                                            return <option key={i}>{pais}</option>;
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
                                            return <option key={i}>{area}</option>;
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
                                    {estados
                                        ?.filter((estado) => estado !== null)
                                        .map((estado, i) => {
                                            return <option key={i}>{estado}</option>;
                                        })}
                                </select>
                            </div>
                            <div class="col-1">
                                <BiTrash className="borrar"
                                    type="button"
                                    id="button-addon2"
                                    onClick={handleReset} />
                            </div>

                            <div class="col-1">
                                {/* pasar infoCopy */}
                                <CSVLink data={info} target=" _blank">
                                    <AiOutlineDownload className="borrar" />
                                </CSVLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container container-titulos table-responisve">
                <div class="row row-tabla">
                    <div class="col"><h5>Titulos</h5></div>
                    <div class="col"><h5>Estado</h5></div>
                    <div class="col"><h5>Fecha</h5></div>
                    <div class="col"><h5>País</h5></div>
                    <div class="col"><h5>Area</h5></div>
                    <div class="col"><h5>Vacantes</h5></div>
                </div>
            </div>



            {
                info.filter((val) => {
                    if (jobArea === "") {
                        return val;
                    } else if (val.area === jobArea) {
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
                    .filter((val) => {
                        if (searchStatus === "") {
                            return val;
                        } else if (val.status === searchStatus) {
                            return val;
                        }
                    })
                    .map((items, i) => {
                        return (
                            <div key={i}>
                                <Tables items={items} />
                            </div>
                        )
                    })
            }
            <GraficoBarras className='grafico-barras' />
        </div >

    )

}

export default Stadistics