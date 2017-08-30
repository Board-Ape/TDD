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

    assert.deepEqual(sortedNumbers, [ 2, 3, 5, 7, 8 ]);
  })

  it('should sort negative numbers from least to greatest', () => {
    let numbers = [ -3, -5, -7, -8, -2 ];
    let sortedNumbers = insertionSort(numbers);

    assert.deepEqual(sortedNumbers, [ -8, -7, -5, -3, -2]);
  })

  it('should sort letters alphabetically', () => {
    let letters = [ 's', 'i', 'n', 'g', 'e', 'r' ];
    let sortedLetters = insertionSort(letters);

    assert.deepEqual(sortedLetters, [ 'e', 'g', 'i', 'n', 'r', 's' ]);
  })

  it('should sort large random arrays', () => {
    let randomArray = randomNumbGen(200)
  })

})
