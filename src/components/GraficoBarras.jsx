import axios from "axios";
import React, { useEffect, useState } from "react";
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



  const [estatico, setEstatico] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/search/chart")
      .then((res) => setEstatico(res.data));
  }, []);

  //console.log(estatico);

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

  estatico.map((e) => {
    if (e.CountryId === 1) {
      e.CountryId = "Uruguay";
    }
    if (e.CountryId === 2) {
      e.CountryId = "Paraguay";
    }
    if (e.CountryId === 3) {
      e.CountryId = "Bolivia";
    }
    if (e.CountryId === 4) {
      e.CountryId = "Argentina";
    }
    if (e.CountryId === 5) {
      e.CountryId = "Chile";
    }
  });

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={300}
          height={100}
          data={estatico} //es el arreglo de objetos mutado con el map
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
          <Bar dataKey="En_Proceso" fill="#00DCD4" />
          <Bar dataKey="No_Iniciada" fill="#eb0064" />
          <Bar dataKey="Finalizada" fill="#000cf1" />
          {/*  barSize={20} */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficosBarras;
