const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const quickSort = require('../scripts/quickSort.js');
const randomNumbGen = require('../scripts/randomNumbGen.js');

describe('Quick Sort', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('should sort postive numbers from least to greatest', () => {
    let numbers = [ 1, 3, 5, 7, 8, 2, 8, 7, 3 ];
    let sortedNumbers = quickSort(numbers);
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

  // it('should only accept arrays', () => {
  //   let objInput = {};
  //   expect(quickSort(objInput)).to.equal('This is not a valid array to be sorted!');
  //   let stringInput = 'string';
  //   expect(quickSort(stringInput)).to.equal('This is not a valid array to be sorted!');
  //   let arrayInput = [4, 3, 1, 5, 2];
  //   expect(quickSort(arrayInput)).to.deep.equal([1, 2, 3, 4, 5]);
  // })

})
