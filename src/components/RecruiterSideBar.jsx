import React from "react";
import avatar from "../assets/profiles/perfil1.png";
import { BsStarFill } from "react-icons/bs";

import "../sass/searchs.scss";

export default function RecruiterSideBar({ recruiter }) {
  console.log(recruiter);
  return (
    <div className="card">
      <img src={avatar} alt="imagen" />

      <div className="boxData">
        <div className="boxPerson">
          <h1>{recruiter.name}</h1>
          <h1>{recruiter.lastName}</h1>
        </div>

        <div className="boxCountry">
          <h1>{recruiter.country}</h1>
        </div>
      </div>

      <div className="itemRating">
        <BsStarFill className="estella" />
        <p className="numero">{recruiter.rating}</p>
      </div>
    </div>
  );
}
