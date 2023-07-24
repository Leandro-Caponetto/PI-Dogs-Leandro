const { Dog, Temperament } = require("../db");
const { default: axios } = require("axios");
const { STATUS_OK, STATUS_ERR4 } = require("../statusConstants");

const postPuppy = async (req, res) => {
  let { 
      name,
      height,
      weight,
      life_span,
      image,
      temperament, 
      createdInDB 
    } = req.body;

  if (!image) {
    try {
      image = await (
        await axios.get("https://dog.ceo/api/breeds/image/random")
      ).data.message;
    } catch (error) {
      throw new Error(error);
    }
  }

  if (name && height && weight && temperament && image) {
    const newBreed = await Dog.create({
      name,
      height,
      weight,
      life_span,
      image: image || "https://dog.ceo/api/breeds/image/random",
      createdInDB,
    });
    temperament.map(async (el) => {
      const findTemp = await Temperament.findOrCreate({
        where: { name: el },
      });

      await newBreed.addTemperament(findTemp);
    });
    res.status(STATUS_OK).send(newBreed);
  } else {
    res.status(STATUS_ERR4).send("Data needed to proceed is missing");
  }
};

module.exports = {
  postPuppy,
};
