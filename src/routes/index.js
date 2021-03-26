const express = require('express');

const router = express.Router();

const Service = require('../services/service');

let service = new Service();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.json(service.getAll())
});

router.post('/', (req, res, next) => {
  console.log(req.body)
  console.log("CONSOLE LOOOOOOG")
  console.log(req.params)
  console.log("CONSOLE LOOOOOOG 2")
  console.log(req.query)
  res.json(service.create(req.body))
});

router.delete('/', (req, res, next) => {
  res.json(service.delete())
});
module.exports = router;
