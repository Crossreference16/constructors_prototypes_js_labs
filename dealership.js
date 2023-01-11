const Car = require("./car");

const Dealership = function(name, maxNumberOfCars, currentStockOfCars = []){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.currentStockOfCars = currentStockOfCars;
}

//////////////////////////////    METHODS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


Dealership.prototype.countCarStock = function(){
    return this.currentStockOfCars.length;          // Counts number of cars in stock. 
}
Dealership.prototype.addCarToStock = function(newCar){
    if(this.currentStockOfCars.length >= this.maxNumberOfCars){
        console.log("Cannot add more cars, dealership is at maximum capacity.");
    } else {
        this.currentStockOfCars.push(newCar);
    }     // Adds cars to stock. (Modified: dealership cannot exceed the maximum number of cars that it can hold.)
}

Dealership.prototype.getManufacturers = function(){
    return this.currentStockOfCars.map(car => car.manufacturer); // Returns array of each car's manufacturers.
}
Dealership.prototype.findByManufacturer = function(manufacturer){
    return this.currentStockOfCars.filter(car => car.manufacturer === manufacturer);; // Finds all cars from a single manufacturer.
}
Dealership.prototype.totalValueOfEntireStock = function(){
    return this.currentStockOfCars.reduce((accumulator, car) => accumulator + car.price, 0); // Finds total value of all cars in the dealership's stock.
}

const hybrid919 = new Car("Porsche", 30000, "V4")
const odyssey = new Car("Honda", 37000, "V6")
const accord = new Car("Honda", 25000, "V6")
const rs7 = new Car("Audi", 119000, "V8")
const focus = new Car("Ford", 40000, "V4")

const dealership = new Dealership("Khalil's Dealership",50,[hybrid919,odyssey,rs7,focus])





/////////////////////////////     EXPORT     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


module.exports = Dealership;