import React, { useEffect, useState } from "react";
import avatar from "../assets/profiles/perfil1.png";
import { BsStarFill } from "react-icons/bs";

import "../sass/searchs.scss";

import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getOneUpDate, sendAllSearches } from "../redux/search";
import { updateActiveSearch } from "../redux/recruiters";
import { Link } from "react-router-dom";

export default function RecruiterSideBar({ recruiter }) {
  const [updateRec, setUpdateRec] = useState();

  const dispatch = useDispatch();

  const { id } = useParams();

  // ASIGNAR UN RECRUITER//
  const asignRecruiter = async () => {
    dispatch(getOneUpDate({ id, updateRec })); //SEARCH
    dispatch(updateActiveSearch({ updateRec })); //RECRUITER
  };

  useEffect(() => {
    if (updateRec) {
      asignRecruiter();
    }
    dispatch(sendAllSearches());
  }, [updateRec]);

  const handleAsignament = (id) => {
    setUpdateRec(id);
  };

  // console.log(recruiter);

  // const handleAsignament = (id) => {

  //   console.log("RECRUTER NUMERO: ", + id)

  // };

  return (
    
      <div className="card">
        <Link to={`/profile/${recruiter.id}`}>
        <img src={avatar} alt="imagen" />
        </Link>
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

        <button onClick={() => handleAsignament(recruiter.id)} type="button">
          asignar
        </button>
        
      </div>
    
  );
}
