const chai = require('chai');
const assert = chai.assert;
const insertionSort = require('../scripts/insertionSort.js');
const randomNumbGen = require('../scripts/randomNumbGen.js');

describe('Insertion Sort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should sort positive numbers from least to greatest', () => {
    let numbers = [ 3, 5, 7, 8, 2 ];
    let sortedNumbers = insertionSort(numbers);

    assert.deepEqual(sortedNumbers, numbers.sort());
  })

  it('should sort negative numbers from least to greatest', () => {
    let numbers = [ -3, -5, -7, -8, -2 ];
    let sortedNumbers = insertionSort(numbers);

    assert.deepEqual(sortedNumbers, numbers.sort());
  })

  it('should sort letters alphabetically', () => {
    let letters = [ 's', 'i', 'n', 'g', 'e', 'r' ];
    let sortedLetters = insertionSort(letters);

    assert.deepEqual(sortedLetters, letters.sort());
  })

  it('should sort a large random array', () => {
    let randomArray = randomNumbGen(250);
    let sortedArray = [ ...randomArray ].sort( (a, b) => a - b );

    assert.deepEqual(sortedArray, randomArray.sort( (a,b) => a - b));

  })  

})
