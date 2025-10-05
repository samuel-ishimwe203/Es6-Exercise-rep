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
