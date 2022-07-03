import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { fetchClient } from "../config/index";
import perfil from "../assets/profiles/perfil2.png";
import SearchCard from "./SearchCard";
import "../sass/profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOneRecruiter } from "../redux/recruiters";
import { getAssignedSearchRequest } from "../redux/assignedSearch";

const Profile = () => {
  const dispatch = useDispatch();
  let userId = useParams().id;
  /* let [user, setUser] = useState({}); */
  /* let [searchs, setSearchs] = useState([]); */

  const userRedux = useSelector((state) => state.recruiters);
  const searchs = useSelector((state) => state.assigned);
  const user = userRedux[0];
  console.log(searchs);

  /*  const getSearchsAsync = async () => {
    try {
      const { data } = await fetchClient(
        `http://localhost:8000/api/search/asigned/${userId}`
      );
      setSearchs(data);
    } catch (error) {
      console.log(error);
    }
  }; */

  /*  const getUserAsync = async () => {
    try {
      const { data } = await fetchClient(
        `http://localhost:8000/api/recruiter/${userId}`
      );
      setUser(data[0]);
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    if (userRedux) {
      dispatch(getOneRecruiter(userId));
      /* getUserAsync(); */
      dispatch(getAssignedSearchRequest(userId));
    }
  }, []);

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
