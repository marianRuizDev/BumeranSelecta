import React from 'react'
import GraficoBarras from "./GraficoBarras";
import GraficoBarras2 from "./GraficoBarras2";
import GraficoPie from "./GraficoPie"
import '../sass/graficos.scss'


const CarouselGraficos = ({ data }) => {
    /* Apartir de cierto ancho de la pagia hacer que desaparescan los gráficos */

    return (
        <>
            <div id="carouselExampleControls" class="carousel slide carousel-graficos" data-bs-ride="carousel"> 
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <GraficoBarras data={data} />
                    </div>
                    <div class="carousel-item">
                        <GraficoBarras2 />
                    </div>
                    <div class="carousel-item">
                        <GraficoPie />
                    </div>
                </div>
                <button class="carousel-control-prev btn-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon prev-slice" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next btn-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon next-slice" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                
            </div>
        </>
    )


}

export default CarouselGraficos