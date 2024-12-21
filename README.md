# JavaScript Function Bug: Null and Undefined Handling

This repository demonstrates a potential bug in a JavaScript function related to the handling of null and undefined values. The function `foo` correctly handles null values but doesn't explicitly check for undefined values, leading to potential unexpected behavior.

## Bug Description
The `foo` function adds two numbers. It correctly handles cases where either `a` or `b` is null, returning 0. However, if either `a` or `b` is undefined, the behavior is not explicitly defined and may produce unexpected results or errors depending on the JavaScript engine.  This lack of explicit handling for undefined is the bug.

## Bug Solution
The solution involves adding a check for undefined values to ensure consistent behavior. This is done by adding a check for typeof a === 'undefined' and typeof b === 'undefined' before the null check in the condition and returning 0 if either is undefined. 

## How to Run
1. Clone this repository.
2. Open the `bug.js` and `bugSolution.js` files.
3. Run the `bug.js` file to see the bug in action.
4. Run `bugSolution.js` to see the fixed code in action.

This example highlights the importance of comprehensive null and undefined checks in JavaScript functions to prevent unexpected behavior and errors.