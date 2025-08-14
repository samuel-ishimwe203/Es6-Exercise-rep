
function vowels(str){

    const string = str.split('').filter(ele=>{
        return `a,i,o,e,u`.includes(ele)
    })
    return string.length

}

console.log(vowels('samuel'))