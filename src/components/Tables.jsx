import React from 'react'
import '../sass/stadistics.scss'



const Tables = ({ items }) => {


    return (
        <div>
            <div class="container container-resultados table-responsive">

                <div class="row row-resultados">
                    <div class="col"><p>{items.title}</p></div>
                    <div class="col">
                        {items.StatusId === "No iniciada" ?
                            <h6 className='text-no-iniciada'><strong>{items.StatusId}</strong></h6> : ""
                        }
                        {items.StatusId === "En proceso" ?
                            <h6 className='text-proceso'><strong>{items.StatusId}</strong></h6> : ""
                        }
                        {items.StatusId === "Finalizada" ?
                            <h6 className='text-finalizada'><strong>{items.StatusId}</strong></h6> : ""
                        }
                    </div>
                    <div class="col">{items.createdAt.slice(0,10)}</div>
                    <div class="col">{items.CountryId}</div>
                    <div class="col">{items.AreaId}</div>
                    <div class="col">{items.vacancies}</div>
                </div>
            </div>
        </div >
    )
}

export default Tables;