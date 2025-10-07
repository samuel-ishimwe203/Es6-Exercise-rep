// function that return the sum of negative and count of positive number in array 

const greet= (arr)=>{

    const array1 = arr.filter(num=>num<=0).reduce((acc,curr)=>acc+curr,0)
     const array2 = arr.filter(num=>num>0).length
    return [array1,array2]
}

console.log(greet([1,2,-4,-3,5,-6]))

// Find the shortest word in a string

const findShort= (str)=>{
    return str.split(' ').reduce((shortest, current)=>{
      return current.length< shortest.length ? current : shortest
    })
}
console.log(findShort("I am the youngest man in our home"))


// return the string each first letter in upperCase

const cap =(str)=>{
    return str.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
}
console.log(cap('hello my dear frinds her i have your tasks'))

// find the longest word in and start it with uppercase

const longest=(str)=>{
    const longestWord = str.split(" ").reduce((longest, current)=>{
    
    })
}


// find the unique element in array 

// const longestWord=(arr)=>{
//     const array = arr.filter(ele=>arr.indexOf(ele)===arr.lastIndexOf(ele))
//     return array
//     }
// console.log(greet([1,2,6,7,8,2,3,4,3,2]))

// find the longest word in a string and return that string with include that word with reversed order and first letter in uppercase

const longestwordIn = (str)=>{
    const longestWord = str.split(" ").reduce((longest,current)=>{
        return current.length>longest.length ? current:longest
    } )
    return str.split(" ").reverse().map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")+" "+longestWord
}

console.log(longestwordIn('hello this is you javascript please'))


// the original code here 

const longestwordIne = str => {
  const words = str.split(" ");
  const longest = words.reduce((a,b)=>b.length>a.length?b:a);
  const reversed = longest.split("").reverse().join("");
  return words.map(w => w === longest 
    ? reversed[0].toUpperCase() + reversed.slice(1) 
    : w).join(" ");
};

console.log(longestwordIne('hello this is you javascript please'));


const geet=(str)=>{

    const arrString = str.split(' ')
    const longestWord = arrString.reduce((shortest,longest)=>longest.length>shortest.length?longest:shortest)
    const toReverseLongest=longestWord.split('').reverse().join('')
    return arrString.map(word=>word===longestWord?toReverseLongest[0].toUpperCase()+toReverseLongest.slice(1):word).join(' ')

}


console.log(geet('hello this is you javascript please'));



const geetr=(str)=>{
    const array = str.split(' ')
    const result = array.map((word,index)=>{
        if(index%2===0){
            return word.split('').reverse().join('')
        }
        else{
            return word
        }
    })
    
    return result.join(' ')
    
}

console.log(geetr('hello this is you javascript please'));


// i want function which two parameters ,that take string when it leach on the word at index postion which is divisible by two it assign to it like symbol

const greets=(word,symbol)=>{
    const arr = word.split(' ')
    const result = arr.map((w,i)=>{
        if(i%2===0){
            return w+symbol
        }
        else {
            return w
        }
    })
    return result.join(' ')
}

console.log(greets('hello this is you javascript please','@'));



// continue by revising 

const array =[1,2,3,4,5,6,3,2,4,5,6,1,2,3,4,5,5,6,7,8]
const obj={}
for(let ele of array){
    obj[ele]=(obj[ele]|| 0)+1
}
console.log(obj)

const object = {
    name:'samuel',
    age:22,
    location:'kigali'
}
for(let key in object){
    console.log([key,object[key]])
}


const greet=(str)=>{
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
    
}
console.log(greet('hello my dear frinds her i have your tasks'))

const greet2=(str)=>{
    const arrays =str.split(' ')
    const array =arrays.reduce((shortest, largest)=>largest.length>shortest.length?largest:shortest)
    const reversed= array.split("").reverse().join('')
    const result = arrays.map(word=>word===array?reversed[0].toUpperCase()+reversed.slice(1):word).join(' ')
    return result
}
console.log(greet2('hello my dear frinds her i have your tasks'))