// Number check: integer or not
const number1 = 17.5;  // যদি number integer হয় তাহলে true, না হলে false , string হয় return false 

const result1 = Number.isInteger(number1);
console.log(result1);


// parseInt
const number2 = 2127.00;
console.log(Number.parseInt(number2));  // perseInt return integer value . if variable value is float  

// parseFloat = parseFloat("50") → string কে number-এ convert করে, decimal number হিসেবে
let num = parseFloat("50");
console.log(num);



let fixed = 17.5678;

console.log(fixed.toFixed(2));
console.log(fixed.toFixed(0));  
console.log(fixed.toFixed(4));  
