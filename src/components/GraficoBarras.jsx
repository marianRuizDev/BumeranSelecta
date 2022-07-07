import React from "react";
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
  /* Data ya llega desestructurado */
  /* console.log(data) */

  const prueba = [

    [
      {
        "CountryId": 1,
        "En proceso": 1
      },
      {
        "CountryId": 5,
        "En proceso": 2
      },
      {
        "CountryId": 2,
        "En proceso": 2
      }
    ],
    [

      [
        {
          "CountryId": 3,
          "No iniciada": 2
        },
        {
          "CountryId": 1,
          "No iniciada": 2
        },
        {
          "CountryId": 4,
          "No iniciada": 1
        }
      ]
    ],
    [

      [
        {
          "CountryId": 2,
          "Finalizada": 1
        },
        {
          "CountryId": 4,
          "Finalizada": 1
        },
        {
          "CountryId": 3,
          "Finalizada": 2
        }
      ]
    ]
  ]


  const data = [...prueba[0], ...prueba[1], ...prueba[2]].flat()


  data.map((e) => {
    if (e.CountryId === 1) {
      e.CountryId = "Uruguay"
    }
    if (e.CountryId === 2) {
      e.CountryId = "Paraguay"
    }
    if (e.CountryId === 3) {
      e.CountryId = "Bolivia"
    }
    if (e.CountryId === 4) {
      e.CountryId = "Argentina"
    }
    if (e.CountryId === 5) {
      e.CountryId = "Chile"
    }
  })

  //me devuelve CountryId con los nombres de los paises :) 



  /* const data1 = [
    {
      country: "Alemania",
      started: 20, 
      "in process": 19, 
      finished: 1, 
    },
    {
      country: "Argentina",
      started: 20, 
      "in process": 19, 
      finished: 1, 
    },
    {
      country: "Austria",
      started: 20, 
      "in process": 19, 
      finished: 1, 
    },
    {
      country: "Colombia",
      started: 20,
      "in process": 10,
      finished: 10,
    },
    {
      country: "Peru",
      started: 5,
      "in process": 15,
      finished: 5,
    },
    {
      country: "Finlandia",
      started: 30,
      "in process": 15,
      finished: 15,
    },
    {
      country: "Francia",
      started: 30,
      "in process": 15,
      finished: 15,
    },
    {
      country: "Honduras",
      started: 30,
      "in process": 15,
      finished: 15,
    },
    {
      country: "Iran",
      started: 30,
      "in process": 15,
      finished: 15,
    },
    {
      country: "Suiza",
      started: 30,
      "in process": 15,
      finished: 15,
    },
    {
      country: "Perú",
      started: 30,
      "in process": 15,
      finished: 15,
    },
  ]; */


  return (
    <div>

      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={300}
          height={100}
          data={data}//es el arreglo de objetos mutado con el map
          margin={{
            top: 100,
            right: 100,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="CountryId">
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
          <Bar dataKey="En proceso" fill="#00DCD4" />
          <Bar dataKey="No iniciada" fill="#eb0064" />
          <Bar dataKey="Finalizada" fill="#000cf1" />
          {/*  barSize={20} */}
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default GraficosBarras;
