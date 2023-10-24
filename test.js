const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
let total = sum(14, 9);

expect(total).toBe(23);
});

test("3.5 euros should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1 euros should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(9);
    const expected = 1 * 1.07;
    expect(fromEuroToDollar(1)).toBe(1.07);
})

test("1 euros should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(9);
    const expected = 9 * 1.07;
    expect(fromEuroToDollar(9)).toBe(9.63); 
})

test("1 euros should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(0);
    const expected = 0 * 1.07;
    expect(fromEuroToDollar(0)).toBe(0); 
})

test("1 euros should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(100);
    const expected = 100 * 1.07;
    expect(fromEuroToDollar(100)).toBe(107); 
})

test("1 dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(1) * 156.5;
    expect(fromDollarToYen(1)).toBe(146.26168224299064); 
})

test("1 dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(100) * 156.5;
    expect(fromDollarToYen(100)).toBe(14626.168224299065); 
})

test("1 dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(9) * 156.5;
    expect(fromDollarToYen(9)).toBe(1316.3551401869158); 
})

test("1 yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(1) * 0.87;
    expect(fromYenToPound(1)).toBe(0.0055591054313099035); 
})

test("1 yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(1) * 0.87;
    expect(fromYenToPound(0)).toBe(0); 
})

test("1 yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(100) * 0.87;
    expect(fromYenToPound(100)).toBe( 0.5559105431309904); 
})

test("1 yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(9) * 0.87;
    expect(fromYenToPound(9)).toBe( 0.050031948881789134); 
})

test("1 yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(945) * 0.87;
    expect(fromYenToPound(945)).toBe(5.253354632587859); 
})