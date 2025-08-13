
// remove duplication
const greet=(arr)=>{
    return arr.filter((el,ind)=>arr.indexOf(el)===ind)
    
}

console.log(greet([1,2,3,4,3,1,4,5,6]))

// return duplication

function findDuplicates(arr) {
  return arr.filter((num, index) => arr.indexOf(num) !== index)
            .filter((num, index, self) => self.indexOf(num) === index);
}

console.log(findDuplicates([1,2,3,4,3,1,4,5,6]))





