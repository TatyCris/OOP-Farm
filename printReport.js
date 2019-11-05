const { Farm } = require('./index')
const { Pig, Cow, Horse } = require('./animals')
const { Wheat, Sugarcane } = require('./crops')

const farm = new Farm('TEST_NAME')
farm.addCrop(new Wheat(100))
farm.addCrop(new Sugarcane(100))
farm.addAnimal(new Cow(100))
farm.addAnimal(new Horse(10))
farm.addAnimal(new Pig(50))

farm.printReport()
