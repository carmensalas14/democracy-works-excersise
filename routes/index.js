const express = require('express');

const router = express.Router();
const path = require('path');
const data = require('../models/election.js');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.post('/', async (req, res) => {
  const { state, city } = req.body;
  console.log(req.body);

  const electionData = await data.electionData(state, city);

  res.send(electionData);
});

module.exports = router;
