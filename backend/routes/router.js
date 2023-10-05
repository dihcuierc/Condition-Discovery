const express = require("express");
const router = express.Router();
const schemas = require("../models/schema");
const axios = require("axios");

router.get("/users", async (req, res) => {
  const users = schemas.Users;

  const userData = await users.find({}).exec();
  if (userData) {
    res.send(JSON.stringify(userData));
  } else {
    console.log("failed");
  }
});

router.get("/symptom", async (req, res) => {
  const symptom = schemas.Symptom;

  const userData = await users.find({}).exec();
  if (userData) {
    res.send(JSON.stringify(userData));
  } else {
    console.log("failed");
  }
});

router.get("/symptoms", async (req, res) => {
  const paramValue = req.query.param;
  fetch(`https://drug-app-7o2mnqk4sa-as.a.run.app/getDrugs/${paramValue}`)
    .then((response) => response.json())
    .then((data) => res.send(JSON.stringify(data)));
});

module.exports = router;
