class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop)
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    calculateIncome() {
        return this.crops
            .map(crop => crop.getYieldInEuros())
            .concat(
                this.animals
                    .map(animal => animal.getValueInEuros())
            )
            .reduce((a, b) => a + b, 0)
    }

    printReport() {
        console.log(`
     ----------------------
     - Farm: FARM NAME    -
     - No. of crops: ${this.crops.length}   -
     - No. of animals: ${this.animals.length} -
     - Total income: ${Math.round(this.calculateIncome() * 100) / 100}€ -
     ----------------------
        `)
    }
}


module.exports.Farm = Farm