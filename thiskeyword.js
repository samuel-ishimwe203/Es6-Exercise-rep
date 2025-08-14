
 /* 1. This keyword : This is object that execute the current function.

If function is part of an object which is called method this references to object itself,
otherwise if function is regular function this means that is not part of an object this references 
to the global object which is window object in browser.*/



const obj ={
name:'samuel',
age:23,
greet(){
console.log(this.name)
}
}
obj.greet()    // samuel

/* arrow this doesn’t refer to obj in arrow functions — 
it’s lexically bound, meaning it uses the this from the scope where it was created. */


const obj2 ={
    name:'samuel',
    age:30,
    greet:()=>{
        console.log(this.name)

    }
}
obj2.greet()