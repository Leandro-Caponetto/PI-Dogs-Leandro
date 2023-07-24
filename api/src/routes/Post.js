const router = require("express").Router();
const { postPuppy } = require('../controllers/PostController')


router.post("/puppy",  postPuppy);






module.exports = router;
