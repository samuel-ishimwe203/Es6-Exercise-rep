//  return the sum of positive number and count number of negative


function greet(arr){
    
    const positive= arr.filter(num=>num>0)
    const leng = positive.length
    const negative=arr.filter(num=>num<0).reduce((acc,curr)=>acc+curr,0)
   
      return [leng,negative]


    
}

console.log(greet([1,4,5,6,-3,-7,-8]))
