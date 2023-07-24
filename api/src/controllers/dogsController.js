
const { STATUS_OK, STATUS_ERR, STATUS_ERR4, STATUS_ERROR } = require('../statusConstants');
const { reqALL } = require('./ReqData');
const Dog = require('../models/Dog');

const getDogs = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const dogFilterData = await Dog.findAll({
        where: {
          name: {
            [sequelize.Op.iLike]: `%${name}%`,
          },
        },
      });

      dogFilterData.length
        ? res.status(STATUS_OK).send(dogFilterData)
        : res.status(STATUS_ERR).send("Puppy not found :c");
    } else {
      const dogsAllData = await reqALL();
      res.status(STATUS_OK).json(dogsAllData);
    }
  } catch (error) {
    res.status(STATUS_ERROR).json(error);
  }
};

const getDogById = async (req, res) => {
  const { id } = req.params;
  const dogsAllData = await reqALL();

  try {
    if (id) {
      let dogFound = await dogsAllData.filter((e) => e.id == id);
      dogFound.length
        ? res.status(STATUS_OK).json(dogFound)
        : res.status(STATUS_ERR4).send("Puppy not found :c");
    }
  } catch (error) {
    res.status(STATUS_ERROR).send(error);
  }
};


module.exports = {
   getDogs,
   getDogById
  
};