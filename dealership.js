const Car = require("./car");

const Dealership = function(name, maxNumberOfCars, currentStockOfCars){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.currentStockOfCars = currentStockOfCars;
}

Dealership.prototype.countCarStock = function(){
    return this.countCarStock.length;
}

Dealership.prototype.addCarToStock = function(newCar){
    this.currentStockOfCars.push(newCar);
}

const Hybrid919 = new Car("Porsche", 30000, "V4")
const odyssey = new Car("Honda", 37000, "V6")
const RS7 = new Car("Audi", 119000, "V8")





module.exports = Dealership;