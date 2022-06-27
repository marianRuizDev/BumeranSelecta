import React from 'react'
import img from '../assets/contenido/descarga.png'
import '../style/contenido.scss'
import { BsNewspaper } from 'react-icons/bs'
import { FaCodeBranch, FaPeopleArrows, FaLaptopCode, FaHandsHelping } from 'react-icons/fa'


const Content = () => {

    /* Sabri: Continuar en otra rama */
    return (
        <div>
            <div clasName='contenido'>
                <div class="card-contenido">
                    <div class="card-body">
                        <h2 className='titulo-contenido'><strong>Hunting</strong>, un reclutamiento inteligente</h2>
                        <strong><p>Ahorra tiempo y dinero seleccionando al candidato ideal</p></strong>
                        <h3>¿Cómo <strong>funciona?</strong></h3>
                    </div>
                </div>
                <div class="row home">
                    <div className="col-sm-3 lg-4">
                        <img src={img} height={200} className='img-con' />
                    </div>


                    <div class="col-sm-4 lg-4">
                        <div className='rectangulo-4'><h3 className='rec-titulo'>Expertos</h3></div>
                        <div className='rectangulo-3'><h3 className='rec-titulo'>Difusión</h3></div>
                        <div className='rectangulo-2'><h3 className='rec-titulo'>Candidatos</h3></div>
                        <div className='rectangulo-1'><h3 className='rec-titulo'>Evaluación</h3></div>
                        <div className='rectangulo'><h3 className='rec-titulo'>Finalistas</h3></div>
                    </div>
                    <div class="col-sm-5 lg-4">
                        <li>
                            <FaLaptopCode className='iconos' /> Inteligencia Artificial vinculada al reclutador experto que mejor <br />
                            se adapta a la búsqueda.</li>
                        <li><BsNewspaper className='iconos' />
                            Públicaión del aviso en principales portales de empleo y universidades <br /> con el máximo destaque.</li>
                        <li><FaCodeBranch className='iconos' />
                            Algoritmos que detectan a los mejores candidatos.</li>
                        <li><FaPeopleArrows className='iconos' /> Entrevistas y estudios comportamentales liderados por el experto en reclutamiento.</li>
                        <li><FaHandsHelping className='iconos' /> Presentación de finalistas</li>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Content;