function foo(a, b) {
  if (typeof a === 'undefined' || typeof b === 'undefined' || a === null || b === null) {
    return 0; // Handle null and undefined values
  }
  return a + b;
}

console.log(foo(undefined, 5)); // Output: 0
console.log(foo(10, undefined)); // Output: 0
console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10