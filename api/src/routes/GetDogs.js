const router = require("express").Router();
const {getDogs, getDogById} = require('../controllers/dogsController')



router.get("/dogs", getDogs) 
router.get("/dogs/:id", getDogById)


module.exports = router;
