const Car = require('./Car');

let car;
beforeEach(() => {
    car = new Car('Ford', 40000, 'V4');
});

describe("can access properties", () => {
    test('has a manufacturer property', () => {
        expect(car.manufacturer).toEqual('Ford');
    });

    test('has a price property', () => {
        expect(car.price).toEqual(40000);
    });

    test('has a engineType property', () => {
        expect(car.engine).toEqual('V4');
    });
});