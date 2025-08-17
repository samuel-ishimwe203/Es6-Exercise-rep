/* Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.*/


function solution(...arg) {
  return  arg.filter((el,ind)=>arg.indexOf(el)===ind).length !== arg.length;
}

console.log(solution(1,2,3,4,4,5))