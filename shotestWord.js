
// find the shortest and longest word in string

function greet(str){
    const arr = str.split(' ')
    const result = arr.reduce((short, current)=>current.length<short.length?current:short)

    return result
}

console.log(greet(`samuel is boy from Nyagatare please don't play with him pett`))





