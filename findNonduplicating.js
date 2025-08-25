// create function that return the word that comes once in this array

function greet(arr){

    let count ={}

    for (let str of arr){
        count[str]=(count[str]||0)+1
    }

    for(let strs in count){
        if(count[strs]===1){
            return strs
        }
    }
}

console.log(greet(['banana','tomato','apple','tomato','banana']))