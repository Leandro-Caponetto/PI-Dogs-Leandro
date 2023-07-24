const { STATUS_OK, STATUS_ERROR } = require('../statusConstants')
const { reqEachTemperament, reqALL } = require("../controllers/ReqData");


async function getAllTemperaments(req, res) {
  try {
    const temperamentAllData = await reqEachTemperament();
    res.status(STATUS_OK).json(temperamentAllData);
  } catch (error) {
    res.status(STATUS_ERROR).json(error);
  }
}

async function getDogsByTemperament(req, res) {
  const { temperament } = req.query;

  try {
    const everyDog = await reqALL();
  const dogSearchResult = everyDog.filter((dog) => {
    if (temperament === "all") return everyDog;
    else if (dog.temperament) {
      return dog.temperament.toLowerCase().includes(temperament.toLowerCase());
    }
  });
  res.status(STATUS_OK).send(dogSearchResult);
  } catch (error) {
    res.status(STATUS_ERROR).json(error);
  }
}

module.exports = {
    getAllTemperaments,
    getDogsByTemperament
}


