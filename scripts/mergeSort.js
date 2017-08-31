function mergeSort (arr) {
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)

  if (arr.length < 2) {
    return arr;
  } else {
    return merge(mergeSort(left), mergeSort(right))
  }
}

function merge (left, right) {
  let sortedArray = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }
  sortedArray.push(...left, ...right)
  return sortedArray
}


module.exports = mergeSort;
