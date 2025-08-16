// regular expressions : Define a search pattern that can be used t search for things in a string and also is used to merge part of string
// i in regular expression is to get string as the same case even if upper or lower



// to know if given word is founded in the string or if you want to check if word if included in string
let sentence ='the dog chased the cat.'
let regex = /chaseds/
 
console.log(regex.test(sentence))

// to extract word in string 

let str ="the man is like 'coding' as she's career"
let reg=/coding/ig;
console.log(str.match(reg))

// g is going to return every single /repeat/g in sentence while when you use /repeat/ it returns only first repeat in sentence

let string1 = 'repeat , repeat , is , goinng , to , repeat'
let regEx = /repeat/ig
console.log(string1.match(regEx))