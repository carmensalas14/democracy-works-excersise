const express = require('express');

const router = express.Router();
const path = require('path');
const data = require('../models/Elections.js');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.post('/', async (req, res) => {
  const { city, state } = req.body;
  console.log(req.body);

  try {
    if (city.length < 1) {
      const electionData = await data.stateElectionData(city, state);
      res.send(electionData);
    } else {
      const electionData = await data.cityElectionData(city, state);
      res.status(200).send(electionData);
    }
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

module.exports = router;
