function split(wholeArray) { 
    if(wholeArray.length % 2 === 0) { 
        let firstHalf = wholeArray.slice(0, wholeArray.length/2)
        let secondHalf = wholeArray.slice(wholeArray.length/2)
        return [firstHalf, secondHalf]
    } else { 
        let firstHalf = wholeArray.slice(0, wholeArray.length/2 + 0.5)
        let secondHalf = wholeArray.slice(wholeArray.length/2 + 0.5)
        return [firstHalf, secondHalf]
    }
}


function merge(array) { 
    let mergedArray = [];
    let firstHalf = array[0]
    let secondHalf = array[1]
        for(let i = 0; i < firstHalf.length; i++) {
            if(!secondHalf[i]) { 
                mergedArray.push(firstHalf[i])
            }
            else if(firstHalf[i] > secondHalf[i]) { 
                mergedArray.push(secondHalf[i]) 
                mergedArray.push(firstHalf[i])
            } else { 
                mergedArray.push(firstHalf[i])
                mergedArray.push(secondHalf[i])
            }
        }
    
    return mergedArray;
}


function mergeSort (array) {
    if (array.length <= 1) return array
    let splitedArr = split(array)
    let first = mergeSort(splitedArr[0])
    let second = mergeSort(splitedArr[1])
    // console.log(first)
    // console.log(second)
    let result = merge([first, second])
    console.log(result)
    return result
}