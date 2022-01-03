# json-manipulation-code-challenge
Coding challenge for JSON manipulation in Typescript

Implement the `manipulateJson` function in `index.js`. It should behave as follows:
Accepts  arbitrary nested JS Object.
For all strings found in the input: Add the string `BB2` concatenated to the end so that it's not adjacent to any characters except newlines or spaces. A space should be added if required.
For all numbers found in the input: Multiply the number by 2 and then subtract 2
The result should be returned.
The original object should not be modified.
Make sure to include types where appropriate!

To Install: `yarn install`
To Test: `yarn test`