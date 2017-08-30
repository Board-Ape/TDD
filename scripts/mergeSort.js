function mergeSort(array)  {
  if (array.length < 2)  {
    return array;
  }

  var middle = parseInt(array.length / 2);
  var leftArray = array.slice(0, middle);
  var rightArray = array.slice(middle, array.length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray)   {
  debugger;
  var sortedArray = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  sortedArray.push(...leftArray, ...rightArray)

  return sortedArray;
}

module.exports = mergeSort;
