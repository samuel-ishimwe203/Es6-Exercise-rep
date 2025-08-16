// regular expressions : Define a search pattern that can be used t search for things in a string and also is used to merge part of string



// to know if given word is founded in the string or if you want to check if word if included in string
let sentence ='the dog chased the cat.'
let regex = /chaseds/
 
console.log(regex.test(sentence))