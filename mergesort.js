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
        // for(let j = 0; j < secondHalf.length; j++) { 
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
    // }
    return mergedArray;
}