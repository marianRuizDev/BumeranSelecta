const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const { Recruiter } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//all unic countrys
router.get("/country", (req, res) => {
  let countrys = [];
  Recruiter.findAll({ attributes: ["country"], group: ["country"] })
    .then((recruiter) =>
      recruiter.map((recruiter) => {
        countrys.push(recruiter.country);
      })
    )
    .then(() => res.send(countrys));
});

//all unic experience fields
router.get("/area", (req, res) => {
  let areas = [];
  Recruiter.findAll({
    attributes: ["experienceField"],
    group: ["experienceField"],
  })
    .then((area) =>
      area.map((area) => {
        areas.push(area.experienceField);
      })
    )
    .then(() => res.send(areas));
});

//devolver todas los reclutadores
router.get("/", (req, res) => {
  Recruiter.findAll()
    .then((search) => {
      res.send(search);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/:id", (req, res) => {
  Recruiter.findAll({ where: { id: req.params.id } })
    .then((search) => {
      res.send(search);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Crea un reclutador
router.post("/", (req, res) => {
  const { name, lastName, country } = req.body;
  Recruiter.findOne({ where: { name, lastName, country } }).then((result) => {
    if (result === null) {
      Recruiter.create(req.body).then((user) => res.status(201).send(user));
    } else {
      res.status(401).send();
    }
  });
});

router.put("/:id", function (req, res, next) {
  const { id } = req.params;

  const {
    name,
    lastName,
    country,
    email,
    description,
    experienceField,
    rating,
  } = req.body;

  Recruiter.update(
    {
      name,
      lastName,
      country,
      email,
      description,
      experienceField,
      rating,
    },
    { where: { id } }
  )
    .then((result) => res.status(201).send(result))
    .catch((err) => res.status(404).send(err));
});

//Elimina un reclutador
router.delete("/:id", (req, res) => {
  Recruiter.destroy({ where: { id: req.params.id } }).then(() =>
    res.sendStatus(202)
  );
});

//Pagination simple
router.get("/list", (req, res) => {
  let { page } = req.query;
  Number(page);
  console.log(page);
  let cant = page * 5;
  let offset = page === 1 ? 0 : cant - 5;
  Recruiter.findAll({ limit: 5, offset: offset }).then((users) =>
    res.send(users)
  );
});

//Encontrar por nombre -deberia tener mas opciones ajustadas al formulario-
router.post("/search", (req, res) => {
  Recruiter.findAll({
    where: { name: { [Op.like]: `%${req.body.search}%` } },
  }).then((users) => res.send(users));
});

module.exports = router;
