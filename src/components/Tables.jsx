import React from 'react'
import '../sass/stadistics.scss'



const Tables = ({ items }) => {

    /* console.log(items.updatedAt) */

    return (
        <div>
            <div class="container container-resultados table-responsive">

                <div class="row row-resultados">
                    <div class="col"><p>{items.title}</p></div>
                    <div class="col">
                        {items.status === "No iniciada" ?
                            <h6 className='text-no-iniciada'><strong>{items.status}</strong></h6> : ""
                        }
                        {items.status === "En proceso" ?
                            <h6 className='text-proceso'><strong>{items.status}</strong></h6> : ""
                        }
                        {items.status === "Finalizada" ?
                            <h6 className='text-finalizada'><strong>{items.status}</strong></h6> : ""
                        }

                    </div>
                    <div class="col">{items.updatedAt}</div>
                    <div class="col">{items.country}</div>
                    <div class="col">{items.area}</div>
                    <div class="col">{items.vacancies}</div>
                </div>
            </div>
        </div >
    )
}

export default Tables;