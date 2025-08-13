
const greet=(arr)=>{
    return arr.filter((el,ind)=>arr.indexOf(el)==ind)
    
}

console.log(greet([1,2,3,4,3,1,4,5,6]))
