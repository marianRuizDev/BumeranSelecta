import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Label,
  XAxis,
} from "recharts";
import { deleteNull } from "../utils/recluterConversor";
import "../sass/stadistics.scss";
import axios from "axios";

const GraficoPie = () => {
  //Cambiar ID del reclutador por el nombre del mismo

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/search/chart/daterecruiter`)
      .then((res) => setData(res.data));
  }, []);

  const newData = data.flat();
  const depurateData = deleteNull(newData);

  console.log(depurateData);

  return (
    <>
      <ResponsiveContainer width="100%" aspect={5}>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="avarage"
            isAnimationActive={false}
            data={depurateData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#f43c87"
            label="Tiempo promedio de las busquedas por reclutador"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <p>Tiempo promedio de las busquedas por reclutador</p>
    </>
  );
};

export default GraficoPie;
