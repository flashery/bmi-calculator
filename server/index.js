const express = require("express");
const axios = require("axios");
const CalcBmi = require("./calc-bmi")
const app = express();

const PORT = process.env.PORT || "3001"

app.get("/api", async (req, res) => {
  const { type, feet, inches, cm, weight } = req.query
  let bmi = 0;
  
  if(type === "metric_units") {
    bmi = CalcBmi.metricUnits(cm,weight)
  } else {
    bmi = CalcBmi.usUnits(feet, inches, weight)
  }

  res.json({ bmi });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
