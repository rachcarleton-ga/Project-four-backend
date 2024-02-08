const express = require('express');
const router = express.Router();
const journalCtrl = require('../controllers/journal');

router.post('/goal/:id', journalCtrl.create);

router.delete('/goal/:id', journalCtrl.delete);

router.post('/arrived/:id', journalCtrl.create);

router.delete('/arrived/:id', journalCtrl.delete);

module.exports = router;