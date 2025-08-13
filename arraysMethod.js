
// first using array method map

const array=[1,2,3,4,5,6,7,8,9]

// myMap
const result=[]
array.forEach((el,ind)=> {
    if(el==4){
        result.push(`I am on 4`)
    }
    result.push(el)
})
console.log(result)