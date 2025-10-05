// function that return the sum of negative and count of positive number in array 

const greet= (arr)=>{

    const array = arr.filter(num=>num<=0).reduce((acc,curr)=>acc+curr,0)
    return array
}

console.log(greet([1,2,-4,-3,5,-6]))