const { Farm } = require('./index')
const { Wheat, Sugarcane } = require('./crops')
const { Pig, Cow, Horse } = require('./animals')


test('We can add a crop to our farm', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
})

test('We can add an animal to our farm', () => {
    const farm = new Farm('TEST_NAME')
    farm.addAnimal(new Cow(100))
})

test('A new Farm can be created', () => {
    const farm = new Farm()
    expect(farm).toBeTruthy()
})

test('A Farm can have a name', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
})

test('The income of an empty farm is 0', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.calculateIncome()).toBe(0)
})

test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
    farm.addCrop(new Sugarcane(100))
    expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
})

test('Animal will be taken into account for calculateIncome', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
    expect(farm.calculateIncome()).not.toBe(0)
})

test('The income of a full farm', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
    farm.addCrop(new Sugarcane(100))
    farm.addAnimal(new Cow(100))
    farm.addAnimal(new Horse(10))
    expect(farm.calculateIncome()).toBeCloseTo(2838.4, 1)
})