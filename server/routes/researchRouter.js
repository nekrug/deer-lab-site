const express = require('express');
const dbController = require('../controllers/dbController');
const { route } = require('../server');

const router = express.Router();

router.get('/', dbController.getResearch, (req, res) => {
  res.status(200).json(res.locals.research);
});

router.post('/', dbController.createResearch, (req, res) => {
  res.status(200).json(res.locals.newResearch);
});

router.patch('/', dbController.updateResearch, (req, res) => {
  res.status(200).json(res.locals.updatedResearch);
});

router.delete('/', dbController.deleteResearch, (req, res) => {
  res.status(200).send('Study successfully deleted');
});

router.patch('/undelete', dbController.undeleteResearch, (req, res) => {
  res.status(200).send('Study successfully undeleted');
});


module.exports = router; 
