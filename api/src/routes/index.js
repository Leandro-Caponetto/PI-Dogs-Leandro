const router = require("express").Router();


const GetDogs = require("./GetDogs");
const GetTemperament = require("./GetTemperament");
const Post = require("./Post");


router.use("/", GetDogs);
router.use("/", GetTemperament);
router.use("/", Post);


module.exports = router;
