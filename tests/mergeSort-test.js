const chai = require('chai');
const assert = chai.assert;
const mergeSort = require('../scripts/mergeSort.js');
const randomNumbGen = require('../scripts/randomNumbGen.js');

describe('Merge Sort', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it('should sort postive numbers from least to greatest', () => {
    let numbers = [ 100, 3, 5, 7, 8, 2, 8, 7, 3, 10, 100, 1 ];
    let sortedNumbers = mergeSort(numbers);
    assert.deepEqual(sortedNumbers, numbers.sort((a,b) => a-b));
  })

  it('should sort negative numbers from least to greatest', () => {
    let numbers = [ -3, -5, -7, -8, -2 ];
    let sortedNumbers = mergeSort(numbers);

    assert.deepEqual(sortedNumbers, numbers.sort().reverse());
  })

  it('should sort letters alphabetically', () => {
    let letters = [ 's', 'i', 'n', 'g', 'e', 'r' ];
    let sortedLetters = mergeSort(letters);

    assert.deepEqual(sortedLetters, letters.sort());
  })

  it('should sort a large array of random numbers', () => {
    let randomArray = randomNumbGen(300);
    let sortedRandomArray = [...randomArray].sort( (a,b) => a - b);

    assert.deepEqual(sortedRandomArray, randomArray.sort((a,b) => a - b));
  })

})
