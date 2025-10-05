// function that return the sum of negative and count of positive number in array 

const greet= (arr)=>{

    const array1 = arr.filter(num=>num<=0).reduce((acc,curr)=>acc+curr,0)
     const array2 = arr.filter(num=>num>0).length
    return [array1,array2]
}

console.log(greet([1,2,-4,-3,5,-6]))

// Find the shortest word in a string

const findShort= (str)=>{
    return str.split(' ').reduce((shortest, current)=>{
      return current.length< shortest.length ? current : shortest
    })
}
console.log(findShort("I am the youngest man in our home"))