// count character in string 

function countChrInString(str){
    
    const count={}
    
    for(let char of str){
      count[char]=(count[char]||0)+1;
  
    }
    return count
}

console.log(countChrInString('sweeet'))


//   return non-repeated character in string 

function firstNonRepeatingChar(str){
    
    const count={}
    
    for(let char of str){
      count[char]=(count[char]||0)+1;
  
    }
    
    for (let i=0; i<str.length;i++){
        if(count[str[i]]===1)return str[i]
    }
    return null
}

console.log(firstNonRepeatingChar('sweeyet'))

// to return all character appers once 

function firstNonRepeatingChar(str){
    
    const count={}
    
    for(let char of str){
      count[char]=(count[char]||0)+1;
  
    }
    
    const result =[]
    for (let char of str){
        if(count[char]===1){
            result.push(char)
        }
    }
    return result.join(' ')
}

console.log(firstNonRepeatingChar('sweeyet'))
