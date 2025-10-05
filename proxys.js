
const target ={
    name:'samuel',
    age:12
}

const handler={
    get(use,properties){
        console.log('access this value: ')
        return use[properties]
    },

    set(target,property,value){
        if(property==='age' && value < 17){
            throw new Error("age must be above 17");
        
        }else{
            target[property]=value}
            
        }
       
    }

const prozx= new Proxy(target,handler)

console.log(prozx.age)
