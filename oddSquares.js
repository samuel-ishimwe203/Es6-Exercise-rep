//   You are given an array of numbers. Your task is to implement a function called oddSquares that filters out
//  the even numbers from the array and then maps the remaining numbers to their squares.

const oddSquares =(arr)=>{

    const odd=arr.filter(num=>num%2!==0)
    const oddSquares = odd.map(num=>num*num)
    return oddSquares
    
}
console.log(oddSquares([1, 2, 3, 4, 5, 6]))
console.log(oddSquares([10, 15, 20, 25, 30]))