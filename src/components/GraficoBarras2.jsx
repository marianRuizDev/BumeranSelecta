import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';


const GraficoBarras2 = () => {

    /* Hacer arreglos, calcular con reduce la suma y dividir por el largo del arreglo */

    const data = [
        {
            country: 'Argentina',
            "promedio": 60,

        },
        {
            country: 'Colombia',
            "promedio": 30,
        },
        {
            country: 'Peru',
            "promedio": 15,
        },
        {
            country: 'Chile',
            "promedio": 20,
        },
        {
            country: 'México',
            "promedio": 28,
        },

    ];

    return (

        <div>
            <ResponsiveContainer width="100%" aspect={3} >
                <BarChart width={300}
                    height={100}
                    data={data}
                    margin={{
                        top: 150,
                        right: 500,
                        left: 50,
                        bottom: 5,
                    }}>
                    <XAxis dataKey="country" stroke="#8884d8" >
                        <XAxis dataKey="country" >
                            {/* <Label value="Evolución de las busquedas por país" angle="-90" offset={0} position="center" /> */} 
                        </XAxis>
                    </XAxis>
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
                    <Bar dataKey="promedio" fill="#434bf0" barSize={37}>
                        {/* <LabelList value="Hola" position="top" /> */}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            <p>Tiempo promedio de las búsquedas por país</p>
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

