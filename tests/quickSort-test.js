const chai = require('chai');
const assert = chai.assert;
const quickSort = require('../scripts/quickSort.js');
const randomNumbGen = require('../scripts/randomNumbGen.js');

describe('Quick Sort', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('should sort postive numbers from least to greatest', () => {
    let numbers = [ 1, 3, 5, 7, 8, 2, 8, 7, 3 ];
    let sortedNumbers = quickSort(numbers);
    console.log(sortedNumbers);
    assert.deepEqual(sortedNumbers, numbers.sort((a,b) => a-b));
  })

  it('should sort negative numbers from least to greatest', () => {
    let numbers = [ -3, -5, -7, -8, -2 ];
    let sortedNumbers = quickSort(numbers);

    assert.deepEqual(sortedNumbers, numbers.sort().reverse());
  })

  it('should sort letters alphabetically', () => {
    let letters = [ 's', 'i', 'n', 'g', 'e', 'r' ];
    let sortedLetters = quickSort(letters);

    assert.deepEqual(sortedLetters, letters.sort());
  })

  it('should sort a large array of random numbers', () => {
    let randomArray = randomNumbGen(400);
    let sortedRandomArray = [...randomArray].sort( (a,b) => a - b);

    assert.deepEqual(sortedRandomArray, randomArray.sort((a,b) => a - b));
  })

})
