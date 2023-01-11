const Dealership = require('./dealership');
const Car = require('./Car');

let dealership;

beforeEach(() => {
    dealership = new Dealership("Khalil's Dealership", 50, []);
});

describe('these methods work: ', () => {
    test('can count car stock', () => {
        const expected = [];
        const actual = dealership.countCarStock();
        expect(actual).toBe(expected);
    });

});
