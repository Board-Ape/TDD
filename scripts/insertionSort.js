const insertionSort = (numberArray) => {
  for (let i = 0; i < numberArray.length; i++){
    for (let j = i - 1; j >= 0; j--){
      if(numberArray[j] > numberArray[j+1]){
        [numberArray[j], numberArray[j+1]] = [numberArray[j+1], numberArray[j]]
      }
    }
  }
  return numberArray;
}


module.exports = insertionSort;
