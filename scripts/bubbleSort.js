const bubbleSort = (numbersArray) => {

  for (let i = 0; i < numbersArray.length; i++) {
    for (let j = 0; j < numbersArray.length; j++) {
      if(numbersArray[j] > numbersArray[j+1]) {
        [numbersArray[j], numbersArray[j+1]] = [numbersArray[j+1], numbersArray[j]]
      }
    }
  }
  return numbersArray
}


module.exports = bubbleSort;
