const Dog = require('../models/Dog');

async function getAllTemperaments() {
  try {
    const allTemperaments = await Dog.findAll({
      attributes: ['temperament'],
    });

    const uniqueTemperaments = allTemperaments
      .map((dog) => dog.temperament.split(', '))
      .flat()
      .filter((value, index, self) => self.indexOf(value) === index);

    return uniqueTemperaments;
  } catch (error) {
    throw error;
  }
}

async function getDogsByTemperament(temperament) {
  try {
    if (temperament === 'all') {
      const dogsAllData = await Dog.findAll();
      return dogsAllData;
    } else {
      const dogSearchResult = await Dog.findAll({
        where: {
          temperament: {
            [sequelize.Op.iLike]: `%${temperament}%`,
          },
        },
      });
      return dogSearchResult;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllTemperaments,
  getDogsByTemperament,
};
