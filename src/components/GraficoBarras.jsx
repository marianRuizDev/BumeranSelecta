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

const GraficosBarras = ({ data }) => {
  /* Data ya llega desestructurado */
  /* console.log(data) */



  const data1 = [
    {
      country: "Alemania",
      started: 20, //barra celeste
      "in process": 19, //barra rosa
      finished: 1, //barra violeta
    },
    {
      country: "Argentina",
      started: 20, //barra celeste
      "in process": 19, //barra rosa
      finished: 1, //barra violeta
    },
    {
      country: "Austria",
      started: 20, //barra celeste
      "in process": 19, //barra rosa
      finished: 1, //barra violeta
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
  ];

  return (
    <div>
      {/*   <p className='titulo-y-avisos'>Cantidad de avisos</p> */}
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={300}
          height={100}
          data={data1}
          margin={{
            top: 100,
            right: 50,
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
              position="center" /* className='cantidad' */
            />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="started" fill="#eb0064" />
          <Bar dataKey="in process" fill="#00DCD4" />
          <Bar dataKey="finished" fill="#000cf1" />
          {/* barSize={20} */}
        </BarChart>
      </ResponsiveContainer>
      {/* <h5 className='titulo-'>Evolución de las búsquedas por país</h5>
       */}
    </div>
  );
};

export default GraficosBarras;
