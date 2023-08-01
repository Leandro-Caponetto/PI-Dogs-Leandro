const { Dog, Temperament } = require("../db");
const { default: axios } = require("axios");
const { STATUS_OK, STATUS_ERR4 } = require("../statusConstants");
const {Op} = require('sequelize')


const postPuppy = async (req, res) => {
  try{
    const { id,name,height, weight, life_span, image, temperament, createdInDb } = req.body;
    console.log(temperament)
    const temperamentDB = await Temperament.findAll(
      {
        where:{name: temperament}});

    console.log("t=", temperamentDB)
    const newRace = await Dog.create({
      name,
      height,
      weight,
      life_spam: life_span, 
      image,
      createdInDb: true
    });
    
    await newRace.addTemperament(temperamentDB);
    console.log(newRace)
    
    return res.status(STATUS_OK).send({ msg: "successfully created" });
}catch (error) {
    res.status(STATUS_ERR4 ).json(error.message)
}
};
module.exports = {
  postPuppy,
};
