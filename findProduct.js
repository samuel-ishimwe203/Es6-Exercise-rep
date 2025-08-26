
function sumOfProducts(arr) {
  let result = 1;
  for (let x of arr) {
    result *= (x + 1);
  }
  return result - 1;
}

console.log(sumOfProducts([12,13]))