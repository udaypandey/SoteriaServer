import express from "express";
import logger from "morgan";

import * as sample from "./sample.js";

const app = express();

app.use(logger("short"));

app.get("/", (request, response) => {
  console.log("Hitting routing handler for root");

  let homes = sample.sampleModelData();
  response.json({homes});
});

app.listen(3000, () => {
  console.log("Starting server");
});
