import React from 'react'
import '../style/cardsContenido.scss'



const CardContenido = () => {

    return (

        <div>
            <h3 className='justify center'>Otros servicios</h3>
            <div className="contenido">
                <div className="card-body">
                    <div className='cards'>
                        <div className='card-tarjetas'>
                            <h1>01</h1>
                            <h5>
                                Selección Curricular
                            </h5>
                            <p>
                                Presentación de candidatos de acuerdo a un screening teléfonico alineados al perfil requerido.
                            </p>
                            <a href="#" className="btn btn-danger">CONTACTO</a>
                        </div>
                    </div>

                    <div className='cards'>
                        <div className='card-tarjetas'>
                            <h1>02</h1>
                            <h5>
                                Estudios Comportamentales
                            </h5>
                            <p>
                                Evaluaciones psicotécnicas, psicométricas, gaming para medir competencias, habilidades y personalidad.
                            </p>
                            <a href="#" className="btn btn-danger">CONTACTO</a>
                        </div>
                    </div>

                    <div className='cards'>
                        <div className='card-tarjetas'>
                            <h1>03</h1>
                            <h5>
                                Capacitaciones
                            </h5>
                            <p>
                                Un talento capacitado es más efectivo y productivo lo que te permitirá reducir costos y tiempo.
                            </p>
                            <a href="#" className="btn btn-danger">CONTACTO</a>
                        </div>
                    </div>

                    {/*  </div>
              
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Outplacement
                            Empresas</h5>
                        <p class="card-text">Apoyamos a tus colaboradores en el proceso de transición de carrera profesional.</p>
                        <br />
                        <p class="card-text">Diseñamos un plan integral adaptado al profesional. </p>
                        <a href="#" class="btn btn-danger">CONTACTO</a>
                    </div>
                </div>

                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Outplacement
                            Personas</h5>
                        <p className="card-text">Apoyamos a tus colaboradores en el proceso de transición de carrera profesional.</p>
                        <br />
                        <p className="card-text">Te acompañamos en tu transición laboral para hacerla más efectiva y alineada a tus intereses.</p>
                        <a href="#" className="btn btn-danger">CONTACTO</a>
                    </div>
                </div> */}
                </div>
                <h3 className='justify center'>Te ayudamos a   <span>encontrar</span>  talento</h3>
            </div>
        </div>
    )

}

export default CardContenido;