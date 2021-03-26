const express = require('express');

const router = express.Router();

const Service = require('../services/service');

let service = new Service();

// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  await service.getAll().then(data => res.json(data))
});

router.post('/', (req, res, next) => {
  res.json(service.create(req.body.value))
});

router.post('/led', (req, res, next) => {
  res.json(service.power(req.body.value))
});

router.delete('/', (req, res, next) => {
  res.json(service.delete())
});
module.exports = router;
