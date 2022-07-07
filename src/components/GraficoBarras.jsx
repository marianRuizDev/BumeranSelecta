import React from "react";
import { useSelector } from "react-redux";
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

const GraficosBarras = () => {
  
  const data = useSelector((state)=> state.stadistics)
  console.log(data)


  const data1 = [
    {
      country: 1,
      started: 20,
      "in process": 19,
      finished: 1,
    },
    {
      country: 2,
      started: 20,
      "in process": 19,
      finished: 1,
    },
    {
      country: 3,
      started: 20,
      "in process": 19,
      finished: 1,
    },
    {
      country: 4,
      started: 20,
      "in process": 10,
      finished: 10,
    },
    {
      country: 5,
      started: 5,
      "in process": 15,
      finished: 5,
    },

  ];

  data1.map((e) => {
    if (e.country === 1) {
      e.country = "Uruguay"
    }
    if (e.country === 2) {
      e.country = "Paraguay"
    }
    if (e.country === 3) {
      e.country = "Bolivia"
    }
    if (e.country === 4) {
      e.country = "Argentina"
    }
    if (e.country === 5) {
      e.country = "Chile"
    }
  })

 


  return (
    <div>

      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={300}
          height={100}
          data={data1}//es el arreglo de objetos mutado con el map
          margin={{
            top: 100,
            right: 100,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="country">
            <Label
              value="Evolución de las busquedas por país"
              position="bottom"
            />
          </XAxis>
          <YAxis>
            <Label
              value="Cantidad de busquedas"
              angle="-90"
              offset={0}
              position="center"
            />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="started" fill="#00DCD4" />
          <Bar dataKey="in process" fill="#eb0064" />
          <Bar dataKey="finished" fill="#000cf1" />
          {/*  barSize={20} */}
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default GraficosBarras;
