// find() checks each element in the array.
// find() stops searching after it finds the first match.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result =  numbers.find(item => item > 5)
console.log(result);


const result2 = numbers.find(item => item % 2 === 0);

console.log(result2);  