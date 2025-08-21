
function findUnique(numbers) {
    // Return the unique number
  const array = numbers.filter((ele,ind)=>numbers.indexOf(ele)===numbers.lastIndexOf(ele))
  
  return array.join()
}

console.log(findUnique([1,2,3,4,5,6,1,2,3,4,5]))

// second way 

function findUnique(numbers) {
  return numbers.reduce((acc, num) => acc ^ num, 0);
}
