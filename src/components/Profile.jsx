import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { fetchClient } from '../config/index';
import perfil from '../assets/profiles/perfil2.png';
import SearchCard from './SearchCard';
import '../style/profile.scss';

const Profile = () => {
  let userId = useParams().id;
  let [user, setUser] = useState({});

  useEffect(() => {
    if (userId) {
      getUserAsync();
    }
  }, []);

  const getUserAsync = async () => {
    try {
      const { data } = await fetchClient(
        `http://localhost:8000/api/recruiter/${userId}`
      );
      setUser(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

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
          <SearchCard country={'argentina'} area={'produccion'} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
