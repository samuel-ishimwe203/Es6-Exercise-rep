
// find the all missing numbers in array

function findMissingNumbers(arr){
  
  const max=Math.max(...arr)
  const min=Math.min(...arr)
  
  const miss=[]
  for(let i=min; i<=max;i++){
    if(!arr.includes(i))
      miss.push(i)
    
  }
  return miss

}
console.log(findMissingNumbers([-3,0,1,3,5,7]))