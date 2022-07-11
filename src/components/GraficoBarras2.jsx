import React from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
} from "recharts";

import "../sass/stadistics.scss";

const GraficoBarras2 = ({data}) => {
    return (
        <>Grafico 2 - Ranking reclutadores x area
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
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
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

/*  */