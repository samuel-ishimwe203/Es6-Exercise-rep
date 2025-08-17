// /*regular expressions : Define a search pattern that can be used t search for things in a string and also is used to merge part of string
// i in regular expression is to get string as the same case even if upper or lower*/



// to know if given word is founded in the string or if you want to check if word if included in string
let sentences ='the dog chased the cat.'
let regex = /chaseds/
 
console.log(regex.test(sentences))

// to extract word in string 

let str ="the man is like 'coding' as she's career"
let regs=/coding/ig;
console.log(str.match(regs))

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



//to find the word that start with give character all words//

let string4 = 'the fun of manchester is all funney with or thing than the funne'
let reg4 = /\bfu\w*/ig
console.log(string4.match(reg4))



let sentence ="my name is samuel ishimwe from nyagatere tabagwe student at tumba college of technology"

let reg=/\bn\w*/ig
console.log(sentence.match(reg))

// return all vowels in sentences

let sentence2 = "my name is samuel ishimwe from nyagatere tabagwe student at tumba college of technology"
let regular = /[iouae]/ig
console.log(sentence2.match(regular))

// return all letters in string

let sentence3 = "my name is samuel ishimwe from nyagatere tabagwe student at tumba college of technology"
let regular3 = /[a-z]/ig
console.log(sentence3.match(regular3))

// string with number and letters

let sentence4= "my name is samuel 45678 ishimwe from nyagatere 123456 tabagwe student at tumba college of technology"
let regular4 = /[0-6a-f]/ig
console.log(sentence4.match(regular4))

// string with numbers and words but you want to return only string vowel letters only

let sentence5= "my name is samuel 45678 ishimwe from nyagatere 123456 tabagwe student at tumba college of technology"
let regular5 = /[^0-9iouea]/ig
console.log(sentence5.match(regular5))

// to return character that occurs more times

let sentence6= "ipikipiki ya muPagasi iratogota"
let reg6 = /p+/gi
console.log(sentence6.match(reg6))

// return this 

let sentence7 ="Goooooooooo lalalal kabsa"
let reg7 = /go*/ig
console.log(sentence7.match(reg7))


// to return some character in string

let sentence8 = 'samuel'
let reg8 =/s[a-z]*u/ig
console.log(sentence8.match(reg8))

// return criminals 

let sentence9 ='PP1CCCC4UP8DHET3U3INDYUEI3UIIINSDN'
let reg9=/c+/ig
console.log(sentence9.match(reg9))

// to test if given word star in string


let sentence10 ='the dog ate boy'
let reg10 =/^the/
console.log(reg10.test(sentence10))

// to test if the given character is at the end


let sentencea= "samuel is software developer using react and node"
let rega = /node$/
console.log(rega.test(sentencea))

// the regEx to return all number and letters and underscore in string

let sentenceb = 'a1b2c3d4e5f6'
let regb = /\w/g
console.log(sentenceb.match(regb).length)





