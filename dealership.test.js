const Dealership = require('./dealership');
const Car = require('./Car');

let dealership;

beforeEach(() => {
    dealership = new Dealership("Khalil's Dealership", 50, []);
    nineEleven = new Car("Ferrari", 10000000, "V12")
    a3 = new Car("Audi", 119000, "V8")
    fiesta = new Car("Ford", 40000, "V4")
});

describe('these methods work: ', () => {
    test('can count car stock', () => {
        const expected = 0;
        const actual = dealership.countCarStock();
        expect(actual).toBe(expected);
    });

    test('can add car to stock', () => {
        newCar = fiesta;
        dealership.addCarToStock(newCar);
        const actual = dealership.countCarStock();
        const expected = 1;
        expect(actual).toBe(expected);
        });
    
    test('can get manufacturer of car', () => {
        dealership.addCarToStock(nineEleven);
        dealership.addCarToStock(a3);
        dealership.addCarToStock(fiesta);
        const expected = ["Ferrari", "Audi", "Ford"];
        const actual = dealership.getManufacturers();
        expect(actual).toEqual(expected);

    })

    test('can find cars by manufacturer', () => {
        dealership.addCarToStock(nineEleven);
        dealership.addCarToStock(a3);
        dealership.addCarToStock(fiesta);
        const expected = [a3];
        const actual = dealership.findByManufacturer("Audi");
        expect(actual).toEqual(expected);
    });

test('can calculate total value of entire stock', () => {
        dealership.addCarToStock(nineEleven);
        dealership.addCarToStock(a3);
        dealership.addCarToStock(fiesta);
        const expected = 10159000;
        const actual = dealership.totalValueOfEntireStock();
        expect(actual).toEqual(expected);
    });
        
});
