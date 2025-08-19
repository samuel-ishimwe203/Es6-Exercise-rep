/*Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).*/

function duplicates(arr) {
    
    let duplicate =[]
   
   arr.forEach((ele,ind)=>{
       if(arr.indexOf(ele)!==ind ==!duplicate.includes(ele))
        duplicate.push(ele)
       
   })
   return duplicate
}

console.log(duplicates([3,5,1,4,2,1,1,1,'5']))