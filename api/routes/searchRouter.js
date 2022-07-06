const express = require('express');
const router = express.Router();
const searchControllers = require('../controllers/searchControllers');
//no va aca
const { Search, Recruiter } = require('../models');
const { search } = require('./recruiter');
///
router.get('/all', searchControllers.allSearch);
router.post('/add', searchControllers.createSearch);
router.get('/:id', searchControllers.getOne);
router.put('/edit/:id', searchControllers.edit);
router.delete('/:id', searchControllers.delete);

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

module.exports = router;
