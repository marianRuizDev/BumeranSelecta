import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Label } from 'recharts';
import "../sass/stadistics.scss"


const GraficoPie = ({ data }) => {

    const data01 = [
        { name: 'Administracióm', value: 400 },
        { name: 'Atención al cliente', value: 300 },
        { name: 'Comercial', value: 300 },
        { name: 'Ingenierías', value: 200 },
        { name: 'Logística', value: 278 },
        { name: 'Marketing', value: 189 },
        { name: 'Producción', value: 189 },
        { name: 'Recursos Humanos', value: 189 },
        { name: 'Salud', value: 189 },
        { name: 'Tecnologia', value: 189 },
    ];


    return (
        <div>

            <ResponsiveContainer width="100%" aspect={5}>
                <PieChart width={300} height={300}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#f43c87"
                        label
                    />

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <p>Tiempo de cierre de las busquedas por area</p>

        </div>
    )
}

export default GraficoPie