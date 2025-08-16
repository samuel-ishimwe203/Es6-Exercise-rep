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

// to find the word that start with give char

let string2 = 'the fun of manchester is all funney with or thing than the funne'
let reg2 = /fu./ig
console.log(string2.match(reg2))//['fun', 'fun', 'fun']

// to find the word that ends with give char

let string3 = "Let's have fun with regular expressions! funnun ."
let reg3 = /.un/
console.log(reg3.test(string3))



// to find the word that start with give character all words

let string4 = 'the fun of manchester is all funney with or thing than the funne'
let reg4 = /\bfu\w*/ig
console.log(string4.match(reg4))