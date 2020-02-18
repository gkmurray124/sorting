function bubbleSort(array) {

  console.log('hello')

  for (let i=0; i<array.length; i++) {
    if (array[i] > array[i+1]) {
      let swapArray = swap(array, i, i+1)
      return swapArray
    }
  }

  return array
}

function swap(arr, leftIndex, rightIndex) {
  let biggerNumber = arr[leftIndex]
  arr[leftIndex] = arr[rightIndex]
  arr[rightIndex] = biggerNumber
  return arr
}


bubbleSort([])
bubbleSort([3,2,1])

