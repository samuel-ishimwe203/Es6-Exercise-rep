/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because  */


// function squareSum(numbers){
  
//   return numbers.map(num=>num*num).reduce((acc,curr)=>acc+curr,0)

// }

// console.log(squareSum([1,2,4]))


/* proxy in javaScript is built-in object that we take as man in middle sits
between you and object that lets you to control what happen when you want to intract with that object like getting or setting the properties*/ 

const object ={
  firstName:'samuel',
  lastName:'Ishimwe'
}

const proxy =new Proxy(object,{

  get:function(target,prop){
    if(prop==='fullName'){
      return `${target.lastName} ${target.firstName}`
    }
    return target[prop]

  },

  set:function(ta)

})

console.log(proxy.fullName)