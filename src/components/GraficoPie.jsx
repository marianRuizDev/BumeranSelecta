import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Label, XAxis } from 'recharts';
import "../sass/stadistics.scss"


const GraficoPie = () => {

    const data01 = [
        { name: 'Administracióm', tiempo: 60 },
        { name: 'Atención al cliente', tiempo: 30 },
        { name: 'Comercial', tiempo: 30 },
        { name: 'Ingenierías', tiempo: 20 },
        { name: 'Logística', tiempo: 27 },
        { name: 'Marketing', tiempo: 18 },
        { name: 'Producción', tiempo: 18 },
        { name: 'Recursos Humanos', tiempo: 89 },
        { name: 'Salud', tiempo: 19 },
        { name: 'Tecnologia', tiempo: 1 },
    ];


    return (
        <>
        Grafico 3 - Tiempo de cierre de las busquedas por area?
        Grafico 4 - Tiempo de cierre de las busquedas por reclutador?
           {/*  <ResponsiveContainer width="100%" aspect={5}>
                <PieChart width={300} height={300}>
                    <Pie
                        dataKey="tiempo"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#f43c87"
                        label="Tiempo promedio de las busquedas por area"
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <p>Tiempo promedio de las busquedas por area</p> */}
        </>


    )
}

export default GraficoPie