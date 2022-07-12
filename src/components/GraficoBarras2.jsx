import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label,
} from "recharts";

import "../sass/stadistics.scss";




const GraficoBarras2 = () => {

   

    return (
        <>Grafico 2 - Ranking reclutadores x area
            <ResponsiveContainer width="100%" aspect={3} >
                <BarChart width={500}
                    height={100}
                    /*  data={data} */
                    margin={{
                        top: 170,
                        right: 70,
                        left: 50,
                        bottom: 30,
                    }}>
                    {/* Le tengo que pasar el area */}
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

