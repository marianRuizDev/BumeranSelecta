import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FaUserAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md';
import { BsFillClockFill } from 'react-icons/bs';
import { FaBuilding } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { fetchClient } from '../config';
import perfil from '../assets/profiles/perfil2.png';
import '../style/searchs.scss';
import { getOneSearches } from '../redux/search';
import { sendAllRecruiters } from '../redux/recruiters';

function SearchView() {
  const [updateRec, setUpdateRec] = useState();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const date = new Date().getTime();
  const diff =
    'hola'; /* (date - selectedSearch.time) / (1000 * 60 * 60 * 24); */

  const selectedSearch = useSelector((state) => state.search);
  console.log('SELECTED', selectedSearch);

  const recruiters = useSelector((state) => state.recruiters);
  const recruitersCopy = [...recruiters];
  console.log('ACA RECRUITER', recruitersCopy);

  useEffect(() => {
    dispatch(getOneSearches(id));
    dispatch(sendAllRecruiters());
  }, []);

  useEffect(() => {
    if (updateRec) {
      asignRecruiter();
    }
  }, [updateRec]);

  const asignRecruiter = async () => {
    try {
      const { data } = await fetchClient.put(
        `http://localhost:8000/api/search/${id}`,
        {
          RecruiterId: updateRec,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleAsignament = (id) => {
    setUpdateRec(id);
  };

  return (
    <div class="container">
      
      <div class="row">
        <div class="card  mb-5">
          <div className="badge-pos">
            <span className="badge ">{selectedSearch[0].status}</span>
          </div>
          <h1 class="d-flex justify-content-center margin-top">
            {selectedSearch[0].title}
          </h1>

          <div class="d-flex justify-content-center mb-3">
            <FaUsers size={20} style={{ alignSelf: 'center' }} />
            <h5 style={{ paddingTop: '0.5rem', marginLeft: '0.3rem' }}>
              Puestos vacantes:{selectedSearch[0].vacancies}
            </h5>
          </div>
          <div class="col  d-flex justify-content-center">
            <h5 class="info-text">{selectedSearch[0].description}</h5>
          </div>
          <div class="row mt-4">
            <div class="col d-flex justify-content-center">
              <div class="card" id="search-card">
                <div class="card-body d-flex">
                  <div class="col d-flex justify-content-left">
                    <IoLocationSharp
                      class="local"
                      style={{ alignSelf: 'center' }}
                    />
                    {selectedSearch[0].country}
                  </div>
                  <div
                    class="vr bg-secondary"
                    style={{ marginRight: '20px', width: '1px' }}
                  ></div>
                  <div class="col d-flex justify-content-left">
                    <MdWork class="work" style={{ alignSelf: 'center' }} />
                    {selectedSearch[0].area}
                  </div>
                  <div
                    class="vr bg-secondary"
                    style={{ marginRight: '20px', width: '1px' }}
                  ></div>
                  <div class="col d-flex justify-content-left">
                    <BsFillClockFill
                      class="clock"
                      style={{ alignSelf: 'center' }}
                    />
                    {selectedSearch[0].jobSchedules}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row margin-bot">
            <div class="col d-flex justify-content-center">
              <div class="card" id="search-card">
                <div class="card-body d-flex">
                  <div class="col d-flex justify-content-left">
                    <FaBuilding class="local" style={{ alignSelf: 'center' }} />
                    Presencial
                  </div>
                  <div
                    class="vr bg-secondary"
                    style={{ marginRight: '20px', width: '1px' }}
                  ></div>
                  <div class="col d-flex justify-content-left">
                    <RiMoneyDollarCircleFill
                      class="work"
                      style={{ alignSelf: 'center' }}
                    />
                    {selectedSearch[0].salary}
                  </div>
                  <div
                    class="vr bg-secondary"
                    style={{ marginRight: '20px', width: '1px' }}
                  ></div>
                  <div class="col d-flex justify-content-left">
                    <BsFillClockFill
                      class="clock"
                      style={{ alignSelf: 'center' }}
                    />
                    {diff >= 1
                      ? parseInt(diff) === 1
                        ? 'Publicado hace 1 día'
                        : `Publicado hace ${parseInt(diff)} días`
                      : `Publicado hace ${parseInt(diff * 24)} horas`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedSearch[0].status !== 'Finalizada' ? (
        <div>
          <h3 className="mb-4">Reclutadores recomendados</h3>
        </div>
      ) : (
        ''
      )}

      {selectedSearch[0].status !== 'Finalizada'
        ? recruitersCopy
            .sort((x, y) => {
              if (x.rating < y.rating) {
                return 1;
              }
              if (x.rating > y.rating) {
                return -1;
              }
              return 0;
            })
            .slice(0, 3)
            .map((recruiter, index) => (
              <div key={index} class="d-flex justify-content-center mb-4">
                <div class="card card-border-radius" style={{ width: '70%' }}>
                  <div class="card-header card-border-radius">
                    <div class="col d-flex justify-content-left">
                      <FaUserAlt
                        size={15}
                        style={{
                          marginRight: '10px',
                          alignSelf: 'center',
                          color: 'white',
                        }}
                      />
                      <div className="text-light">{recruiter.name}</div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row ">
                      <div class="col col-lg-2 d-flex justify-content-center">
                        <img
                          src={perfil}
                          alt="profile-picture"
                          class="rounded-circle"
                        />
                      </div>
                      <div
                        class="col"
                        id="info-col"
                        style={{ alignSelf: 'center' }}
                      >
                        <div class="row">
                          <div class="col d-flex justify-content-left">
                            <IoLocationSharp
                              size={20}
                              style={{ marginRight: '10px' }}
                            />
                            {recruiter.country}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col d-flex justify-content-left">
                            <MdWork size={20} style={{ marginRight: '10px' }} />
                            {recruiter.experienceField}
                          </div>
                        </div>
                      </div>
                      <div
                        class="col col-lg-2 d-flex justify-content-center"
                        style={{ marginRight: '10px', alignSelf: 'center' }}
                      >
                        {recruiter.rating}
                        <AiFillStar
                          style={{ marginRight: '10px', alignSelf: 'center' }}
                        />
                      </div>
                      <div
                        class="col col-lg-1  "
                        style={{ marginRight: '10px', alignSelf: 'center' }}
                      >
                        <button
                          class="btn btn-dark"
                          onClick={() => handleAsignament(recruiter.id)}
                        >
                          <MdOutlineAssignmentTurnedIn />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        : ''}
    </div>
  );
}

export default SearchView;
