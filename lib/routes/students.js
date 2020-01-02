/* eslint-disable new-cap */
const router = require('express').Router();
const Student = require('../models/student');

router
  .get('/', (req, res, next) => {
    Student.minAvgMaxScoresByType()
      .then(students => res.json(students))
      .catch(next);
  });

module.exports = router;