
const target={
    name:'samuel',
    age:22
}

const handler ={
    get(target,properties){
        console.log('please now you can access this value ')
        return target[properties]
    }
}

const proxy = new Proxy(target,handler)
console.log(proxy.name)