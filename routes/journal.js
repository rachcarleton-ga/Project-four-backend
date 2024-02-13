const express = require('express');
const router = express.Router();
const journalCtrl = require('../controllers/journal');

router.post('/goal/:id', journalCtrl.goalCreate);

router.get('/goal/:id', journalCtrl.goalShow);

router.delete('/goal/:id', journalCtrl.goalDelete);

router.post('/arrived/:id', journalCtrl.arrivedCreate);

router.get('/arrived/:id', journalCtrl.arrivedShow);

router.delete('/arrived/:id', journalCtrl.arrivedDelete);

module.exports = router;