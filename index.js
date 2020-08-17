require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 9000;

const mongo = {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
};

const mongoConnect =
  process.env.MONGODB ||
  `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`;

const series = require("./routes/series");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("ExpressJS"));
app.use("/series", series);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: "Houve um erro com a aplicação!" });
});

mongoose
  .connect(mongoConnect, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log("Express listening in port " + port));
  })
  .catch((e) => console.log(e));
