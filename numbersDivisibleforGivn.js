function greet(array,divisor){
    return array.filter(num=>num%divisor===0)
}

console.log(greet([2,3,4,5,6,8,9,10],3))