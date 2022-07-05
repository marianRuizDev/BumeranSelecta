import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../sass/stadistics.scss"




const GraficosBarras = () => {

    const data = [
        {
            country: 'Argentina',
            started: 20, //barra celeste
            "in process": 19, //barra rosa
            finished: 1,//barra violeta
        },
        {
            country: 'Colombia',
            started: 20,
            "in process": 10,
            finished: 10,
        },
        {
            country: 'Peru',
            started: 5,
            "in process": 15,
            finished: 5,
        },

    ];


    return (
        <div>

            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={300}
                    height={100}
                    data={data}
                    /* className="grafico-barras" */
                    margin={{
                        top: 20,
                        right: 500,
                        left: 50,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="started" stackId="a" fill="#eb0064" />
                    <Bar dataKey="in process" stackId="a" fill="#00DCD4" />
                    <Bar dataKey="finished" fill="#000cf1" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default GraficosBarras

{/* <ResponsiveContainer width="100%" aspect={3} className='grafico-barras'>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 500,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Paises" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="searchStarted" fill="#00DCD4" />
                    <Bar dataKey="searchInProcess" fill="#eb0064" />
                    <Bar dataKey="searchsFinished" fill="#000cf1" />
                </BarChart>
            </ResponsiveContainer> */}