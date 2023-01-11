const Dealership = require('./dealership');
const Car = require("./car");

const Customer = function(name, wallet){
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

Customer.prototype.buyCar = function(dealership, car) {
    if(this.wallet < car.price){
        console.log(`${this.name} can not afford this car.`);
    } else if(!dealership.currentStockOfCars.includes(car)){
        console.log(`${car.manufacturer} is not in stock at ${dealership.name} dealership.`);
    } else {
        this.wallet -= car.price;
        dealership.currentStockOfCars.splice(dealership.currentStockOfCars.indexOf(car), 1);
        this.car = car;
    }
};

// const dealership = new Dealership(name, maxNumberOfCars, currentStockOfCars);

// const customer = new Customer("The Stig", 50000);
// customer.buyCar(dealership, rs7);
// console.log(customer); 