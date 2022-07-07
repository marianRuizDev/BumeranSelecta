import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';



const GraficoBarras2 = () => {

    /* Hacer arreglos, calcular con reduce la suma y dividir por el largo del arreglo */

    const data = [
        {
            country: 'Alemania',
            "promedio": 60,

        },
        {
            country: 'Argentina',
            "promedio": 60,

        },
        {
            country: 'Austria',
            "promedio": 60,

        },
        {
            country: 'Canada',
            "promedio": 60,

        },
        {
            country: 'Colombia',
            "promedio": 30,
        },
        {
            country: 'Filandia',
            "promedio": 30,
        },
        {
            country: 'Francia',
            "promedio": 30,
        },
        {
            country: 'Honduras',
            "promedio": 15,
        },
        {
            country: 'México',
            "promedio": 15,
        },
        {
            country: 'Iran',
            "promedio": 28,
        },
        {
            country: 'Suiza',
            "promedio": 28,
        },
        {
            country: 'Peru',
            "promedio": 15,
        },
    ];

    return (

        <div>
            <ResponsiveContainer width="100%" aspect={3} >
                <BarChart width={500}
                    height={100}
                    data={data}
                    margin={{
                        top: 170,
                        right: 70,
                        left: 50,
                        bottom: 30,
                    }}>
                    <XAxis dataKey="country" stroke="#8884d8" >
                        <Label value="Tiempo promedio de las búsquedas por país" offset={0} position="bottom" />
                    </XAxis>
                    <YAxis >
                        <Label value="Días promedio" angle="-90" offset={0} position="center" />
                    </YAxis>
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
                    <Bar dataKey="promedio" fill="#434bf0" barSize={37}>
                        {/* <LabelList value="Hola" position="top" /> */}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            {/*  <p>Tiempo promedio de las búsquedas por país</p> */}
        </div >


    )
}

export default GraficoBarras2

/* 
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 100,
                        right: 500,
                        left: 50,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="time" fill="#434bf0" />
                </BarChart>  */

