
  /*  Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
 */



function flick(arr){
    let now = true
    return array = arr.map(el=>{
        if(el==='flick'){
            now = !now
            return now 
        }
       
          return now
        
    })
 
 
    
}
console.log(flick(['codewars', 'flick', 'code', 'flick'] ))
console.log(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] )
