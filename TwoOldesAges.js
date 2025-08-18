/*The two oldest ages function/method needs to be completed. It should take an 
array of numbers as its argument and return the two highest numbers within the 
array. The returned value should be an array in the format [second oldest age,  oldest age */



function twoOldestAges(ages){

  const arr = ages.sort((a,b)=>b-a)
  const arr1 = arr[0]
  const arr2 = arr[1]
  const twoArr = [arr1,arr2]
  
  return twoArr.sort((a,b)=>a-b)
  
   
}

console.log(twoOldestAges([10,23,45,6,7,8,9]))