/* eslint-disable new-cap */
const router = require('express').Router();
const Trade = require('../models/trade');

router
  .get('/top', (req, res, next) => {
    Trade.hourlyTrades('top')
      .then(trades => res.json(trades))
      .catch(next);
  })

  .get('/bottom', (req, res, next) => {
    Trade.hourlyTrades('bottom')
      .then(trades => res.json(trades))
      .catch(next);
  });

module.exports = router;