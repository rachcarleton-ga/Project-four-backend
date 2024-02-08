const express = require('express')
const router = express.Router()
const arrivedCtrl = require('../controllers/arrived')

router.get("/", arrivedCtrl.index);

router.post("/", arrivedCtrl.create);

router.put("/:id", arrivedCtrl.update)

router.get("/:id", arrivedCtrl.show);

router.delete("/:id", arrivedCtrl.delete);

module.exports = router