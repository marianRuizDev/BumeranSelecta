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
  let one = [];
  let two = [];
  let three = [];
  Search.findAll({
    where: { StatusId: 1 },
    attributes: [
      'CountryId',
      [sequelize.fn('COUNT', sequelize.col('StatusId')), 'En proceso'],
    ],
    group: ['CountryId'],
  }).then((search1) => {
    one.push(search1);
  });

  Search.findAll({
    where: { StatusId: 2 },
    attributes: [
      'CountryId',
      [sequelize.fn('COUNT', sequelize.col('StatusId')), 'No iniciada'],
    ],
    group: ['CountryId'],
  }).then((search2) => {
    two.push(search2);
  });

  Search.findAll({
    where: { StatusId: 3 },
    attributes: [
      'CountryId',
      [sequelize.fn('COUNT', sequelize.col('StatusId')), 'Finalizada'],
    ],
    group: ['CountryId'],
  }).then((search3) => {
    three.push(search3);
    one.push(two);
    one.push(three);
    res.send(one);
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

//Asigna a un recruiter -TAMPOCO VA ACA
router.put('/:id', async function (req, res, next) {
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
