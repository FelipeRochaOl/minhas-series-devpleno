const express = require("express");

const Serie = require("../models/Serie");
const SerieController = require("../controllers/Serie");

const router = express.Router();

const models = {
  Serie,
};

router.get("/", SerieController.index.bind(null, models));
router.post("/create", SerieController.create.bind(null, models));

module.exports = router;
