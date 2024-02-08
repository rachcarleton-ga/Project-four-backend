const express = require('express')
const router = express.Router()
const goalCtrl = require('../controllers/goal')

router.get("/", goalCtrl.index);

router.post("/", goalCtrl.create);

router.get("/:id", goalCtrl.show);

router.delete("/:id", goalCtrl.delete);

module.exports = router