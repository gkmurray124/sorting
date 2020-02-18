function bubbleSort(array) {

  let swaps = true

  while(swaps) { 
    swaps = false

    for(let i = 0; i < array.length; i++) { 
      if(array[i] > array[i+1]) { 
        array = swap(array, i, i + 1)
        swaps = true
      }
    }
    return array
  }
}

function swap(arr, leftIndex, rightIndex) {
  let biggerNumber = arr[leftIndex]
  arr[leftIndex] = arr[rightIndex]
  arr[rightIndex] = biggerNumber
  return arr
}

