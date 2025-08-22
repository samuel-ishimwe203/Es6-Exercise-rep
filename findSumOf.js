/* #Task Given a sorted array of integer numbers A and another integer number sum, write a function that returns true if there are two (distinct) numbers in A that add up to sum. Return false otherwise.

#Input

A: The array is guaranteed to be sorted and has at least two elements. All elements are integers.
sum: An integer. */



function hasPair(A, sum) {
  const seen = new Set(); 

  for (let num of A) {
    const needed = sum - num;
    if (seen.has(needed)) {
      return true; 
    }
    seen.add(num); 
  }

  return false; 
}