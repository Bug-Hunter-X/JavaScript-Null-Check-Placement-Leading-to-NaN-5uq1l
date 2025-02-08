# JavaScript Null Check Placement Leading to NaN

This repository demonstrates a common error in JavaScript where the placement of null checks can lead to unexpected NaN (Not a Number) results.  The `bar` function incorrectly places the null check *after* the addition operation, resulting in NaN when either `a` or `b` is null. The `foo` function shows the correct approach: perform the null check *before* any operation. 

## How to reproduce:
1. Clone the repository
2. Open `bug.js` and `bugSolution.js` to see the buggy and corrected code respectively. 
3. Run the JavaScript files using Node.js or a browser's developer console. 

## Learning Points
- Always perform null checks before any arithmetic or other operations that might produce undefined results.
- Understand how JavaScript handles null and undefined values in arithmetic operations.  This example highlights how easy it is to unintentionally generate NaN values.