const express = require('express');
const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/', dbController.getResearch, (req, res) => {
  res.status(200).json(res.locals.research);
});

module.exports = router; 
