// reverse all words in string
function reverseWords(str){
    const inArray = str.split(' ')
    const result = inArray.reverse()
    return result.join(' ') 
}
console.log(reverseWords('samuel is a man who like to be with his freinds'))