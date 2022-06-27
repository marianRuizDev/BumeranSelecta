/* Relacionado con ViewAdmin */
import React, { useState } from 'react'
import perfil from '../assets/profiles/perfil2.png'
import { VscTrash } from "react-icons/vsc";
import { Link } from 'react-router-dom'
import '../style/cardsAdmin.scss'
import '../style/ranking.scss'



const CardsAdmin = ({ items }) => {
    /* Usar logica de redux para que persista el estado */

    return (
        <div>
            <div class="card-recluter">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-1">
                            {/* Hacer un link to al profile */}
                            <Link to={'/profile'}><img src={perfil} height={75} /></Link>
                        </div>

                        <div class="col-sm-3">
                            <Link to={'/profile'}><h6 className='nombre'>{items.nombre} </h6></Link>
                        </div>
                        <div class="col-sm-1">
                            <div className='skills-wrapper'>
                                <div className='skill'>
                                    <div className='skill-content'>
                                        <span>{items.rank}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2 cantidad">
                            <h6>{items.cantidad} </h6>
                        </div>
                        <div class="col-sm-4">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-danger">Alta</button>
                                <button type="button" class="btn btn-danger">Baja</button>
                                <button type="button" class="btn btn-danger">Modificar</button>
                                <button type="button" class="btn btn-dark"><VscTrash /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardsAdmin