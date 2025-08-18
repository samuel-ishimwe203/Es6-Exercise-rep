
const isPrime=(num)=>{

    if(num<=1)return false;

    for(let i=2; i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
        return true
    }

}


const getPrime=(arr)=>{

    let prime =[]

    for(let el of arr){
        if(isPrime(el)){
        prime.push(el)
        }
    }

    return prime
}

console.log(getPrime([3,4,5,6,7,8,9,11,12,13,14,17]))