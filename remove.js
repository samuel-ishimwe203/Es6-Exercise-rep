
function greet(string){
    if(!string)return null;

    const arr =string.split("")
    if(arr.length<=2) return null;
    return arr.slice(1,-1).join('')
}

console.log(greet('samuee'))