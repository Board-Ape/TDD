function quickSort (arr) {
  let pivot = arr[0]
  let left = []
  let right = []


  if (arr.length < 2) {
    return arr;
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (pivot >= arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}


module.exports = quickSort;
