import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdWork } from "react-icons/md";

import perfil from "../assets/profiles/perfil2.png";
import SearchCard from "./SearchCard";
import { getOneRecruiter } from "../redux/recruiters";
import { getAssignedSearchRequest } from "../redux/assignedSearch";
import "../style/profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  let userId = useParams().id;

  const userRedux = useSelector((state) => state.recruiters);
  const searchs = useSelector((state) => state.assigned);
  const user = userRedux[0];

  useEffect(() => {
    if (userRedux) {
      dispatch(getOneRecruiter(userId));
      dispatch(getAssignedSearchRequest(userId));
    }
  }, [userId]);

  return (
    <div>
      <div align="center">
        <h1 className="titleProfile">
          {user.name} {user.lastName}
        </h1>
        <div className="col-sm">
          <img class="profileImg" src={perfil}></img>
          <h2> {user.rating} </h2>
          <p>{user.description}</p>
        </div>
        <div align="center" className="description">
          <ul>
            <li>
              <AiOutlineMail size={60} /> {user.email}
            </li>
            <li>
              <IoLocationSharp size={60} /> {user.country}
            </li>
            <li>
              <MdWork size={60} /> {user.experienceField}
            </li>
          </ul>
        </div>
        <br></br>
      </div>
      <div class="mt-4">
        <h2 className="h2profile" align="center">
          Busquedas activas
        </h2>
        <div class="col">
          {searchs.map((search, index) => {
            return (
              <SearchCard
                key={index}
                country={search.country}
                area={search.area}
                time={search.time}
                status={search.status}
                id={search.id}
                description={search.description}
                title={search.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
