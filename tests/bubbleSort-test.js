const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../scripts/bubbleSort.js');
const randomNumbGen = require('../scripts/randomNumbGen.js');

describe('Bubble Sort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('should sort positive numbers from greatest to least', () => {
    let numbers = [4, 3, 8, 1, 7];
    let sortedNumbers = bubbleSort(numbers);

    assert.deepEqual(sortedNumbers, numbers.sort());
  })

  it('should sort negative numbers from greatest to least', () => {
    let numbers = [-2, -5, -3, -1, -8, -7];
    let sortedNumbers = bubbleSort(numbers);

    assert.deepEqual(sortedNumbers, numbers.sort());

  })

  it('should sort letters reverse alphabetically', () => {
    let letters = ['s', 'i', 'n', 'g', 'e', 'r'];
    let sortedLetters = bubbleSort(letters);

    assert.deepEqual(sortedLetters, letters.sort());

  })

  it('should sort large arrays that are randomly generated', () => {
    let randomArray = randomNumbGen(120);
    let sortedArray = [ ...randomArray ].sort( (a, b) => a - b );

    assert.deepEqual(sortedArray, randomArray.sort( (a,b) => a - b));

  })

})
