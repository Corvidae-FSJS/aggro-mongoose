/* eslint-disable new-cap */
const router = require('express').Router();
const Zip = require('../models/zip');

router
  .get('/', (req, res, next) => {
    Zip.topTenPopStates()
      .then(zips => res.json(zips))
      .catch(next);
  });

module.exports = router;