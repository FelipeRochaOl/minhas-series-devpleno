const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const mongo = process.env.MONGODB || "mongodb://mongo/minhas-series";

const mongoose = require("mongoose");

const series = require("./routes/series");

app.get("/", (req, res) => res.send("ExpressJS"));

app.use("/series", series);

mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log("Express listening in port " + port));
  })
  .catch((e) => console.log(e));
