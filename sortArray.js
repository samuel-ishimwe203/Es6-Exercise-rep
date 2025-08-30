//  Sort an array according to the indices in another array.
// It is guaranteed that the two arrays have the same size, 
// and that the sorting array has all the required indices.sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']



function greet(initialArray,sortArray){
    let result = []

    for(let i=0; i<initialArray.length;i++){
        result[sortArray[i]]=initialArray[i]
    }

    return result
}

console.log(greet(['z', 'x', 'y'], [0, 2, 1]))