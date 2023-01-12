const Car = require('./Car');

let car;
beforeEach(() => {
    car = new Car('Ford', 40000, 'V4');
});

describe("can access properties", () => {
    test('has a manufacturer property', () => {
        expect(car.manufacturer).toBe('Ford');
    });

    test('has a price property', () => {
        expect(car.price).toBe(40000);
    });

    test('has a engineType property', () => {
        expect(car.engine).toBe('V4');
    });
});