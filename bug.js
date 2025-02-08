function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

// This code seems correct for handling null values, but let's see a case where unexpected behavior might happen
function bar(a, b) {
  let result = a + b; // Performs the operation before null check 
  if (a === null || b === null) {
    return null;
  }
  return result;
}
console.log(bar(null, 5)); // Output: NaN
console.log(bar(5, null)); // Output: NaN
console.log(bar(5, 5)); // Output: 10