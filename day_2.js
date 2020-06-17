function addTwoDigits(num)  {
    // make sure it's a 2 digit number
    if (!num || typeof num !== 'number' || (num < 10 || num > 99)) {
        console.log('beep');
        return;
    }

    const digits = `${num}`.split('').map(n => parseInt(n));
    return digits[0] + digits[1];
}



/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('take a two digit number and return the sum of their numbers', () => {
       // arrange
        const num = 29;
        
        // act
        const result = addTwoDigits(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(11);
    });
});

// should refine this but it's good enough
describe('rejects invalid values', () => {
    const testCases = ['', false, {}, 100, 9, -1, NaN, []];
    
    testCases.forEach(testCase => {
        it(`rejects value ${testCase}`, () => {
            const result = addTwoDigits(testCase);
            expect(result).toBe(undefined);
        });
    });
});
