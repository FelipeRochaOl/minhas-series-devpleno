const express = require("express");

const Serie = require("../models/Serie");
const SerieController = require("../controllers/Serie");
const CommentsController = require("../controllers/Comments");

const router = express.Router();

const models = {
  Serie,
};

//SeriesController
router
  .get("/", SerieController.index.bind(null, models))
  .post("/", SerieController.create.bind(null, models))
  .put("/:_id", SerieController.edit.bind(null, models))
  .delete("/:_id", SerieController.delete.bind(null, models));

//CommentsController
router
  .get("/comments/:_id", CommentsController.index.bind(null, models))
  .post("/comments/:_id", CommentsController.create.bind(null, models))
  .put("/comments/:_id", CommentsController.edit.bind(null, models))
  .delete("/comments/:_id", CommentsController.delete.bind(null, models));

module.exports = router;
