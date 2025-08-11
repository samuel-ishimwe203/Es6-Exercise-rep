
// You are given an array of numbers. Your task is to implement a function called arrayStats that
//  returns an object containing various statistics about the array.


const arrayStats =(array)=>{

    const max= Math.max(...array)
    const min= Math.min(...array)
    const sum =array.reduce((acc, curr)=>acc+curr,0)
    const lengthOfArray= array.length
    const average = sum/lengthOfArray

    return {sum , average, min , max}
   
}
console.log(arrayStats([1, 2, 7]))