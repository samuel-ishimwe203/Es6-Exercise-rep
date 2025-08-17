//  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
   
  const arr =n.split('').map(Number).reverse()
 return arr
}

console.log(digitize('12453'))

