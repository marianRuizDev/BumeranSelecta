const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const searchControllers = require('../controllers/searchControllers');
//no va aca
const { Search, Recruiter } = require('../models');
const { search } = require('./recruiter');
///
router.get('/all', searchControllers.allSearch);
router.post('/add', searchControllers.createSearch);

//getall status - Chart
router.get('/chart', (req, res) => {
  Search.findAll({
    attributes: [
      'CountryId',
      [
        sequelize.fn(
          'COUNT',
          sequelize.literal('CASE WHEN StatusId = 1 THEN 1 END')
        ),
        'En_Proceso',
      ],
      [
        sequelize.fn(
          'COUNT',
          sequelize.literal('CASE WHEN StatusId = 2 THEN 1 END')
        ),
        'No_Iniciada',
      ],
      [
        sequelize.fn(
          'COUNT',
          sequelize.literal('CASE WHEN StatusId = 3 THEN 1 END')
        ),
        'Finalizada',
      ],
    ],
    group: ['CountryId'],
  }).then((search) => {
    res.send(search);
  });
});

//get all Searchs - Chart

router.get('/chart/table', (req, res) => {
  Search.findAll({
    attributes: [
      'title',
      'StatusId',
      'createdAt',
      'CountryId',
      'AreaId',
      'vacancies',
    ],
  }).then((search) => {
    res.send(search);
  });
});

//char time 1
router.get('/chart/datearea/:areaId', (req, res) => {
  let cant = 0;
  Search.findAll({
    where: {
      areaId: req.params.areaId,
      searchTime: { [sequelize.Op.ne]: null },
    },
    attributes: ['areaId', 'searchTime'],
  }).then((result) => {
    for (let i = 0; i < result.length; i++) {
      cant += parseInt(result[i].searchTime);
    }
    let avarege = cant / result.length;
    result.push({ avarege });
    res.send(result);
  });
});



//char time 2
router.get('/chart/daterecruiter/:RecruiterId', (req, res) => {
  let cant = 0;
  Search.findAll({
    where: {
      RecruiterId: req.params.RecruiterId,
      searchTime: { [sequelize.Op.ne]: null },
    },
    attributes: ['RecruiterId', 'searchTime'],
  }).then((result) => {
    for (let i = 0; i < result.length; i++) {
      cant += parseInt(result[i].searchTime);
    }
    let avarege = cant / result.length;
    result.push({ avarege });
    res.send(result);
  });
});

//Asigna a un recruiter -TAMPOCO VA ACA
router.put('/:id', async function (req, res, next) {
  console.log('ACA REQ BODY', req.body);
  try {
    const searcher = await Search.findOne({ where: { id: req.params.id } });

    searcher.setRecruiter(req.body.RecruiterId);
    searcher.setStatus(1);
    res.status(200).json(searcher);
  } catch (error) {
    console.log(error);
  }
});

//Trae las busquedas asignadas a X reclutador
router.get('/asigned/:id', (req, res) => {
  Search.findAll({ where: { RecruiterId: req.params.id } })
    .then((search) => {
      res.send(search);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/:id', searchControllers.getOne);
router.put('/edit/:id', searchControllers.edit);
router.delete('/:id', searchControllers.delete);
module.exports = router;
