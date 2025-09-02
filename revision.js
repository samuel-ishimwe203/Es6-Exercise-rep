
function greet(arr){
    
    const array=arr.map(item=>`<li>${item}</li>`)
    return array
}

console.log(greet(['red','green','black']))