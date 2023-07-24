const router = require("express").Router();
const {  getAllTemperaments, getDogsByTemperament } = require("../controllers/temperamentController");


router.get("/temperament", getAllTemperaments)
router.get("/dog/", getDogsByTemperament)

module.exports = router;
