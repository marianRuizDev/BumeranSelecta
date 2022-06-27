const express = require("express");
const router = express.Router();
const searchControllers = require("../controllers/searchControllers");




router.get("/all", searchControllers.allSearch);
router.post("/create", searchControllers.createSearch);
router.get("/:id", searchControllers.getOne);
router.put("/edit/:id", searchControllers.edit);








module.exports = router;