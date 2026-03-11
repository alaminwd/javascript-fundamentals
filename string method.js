// string.charAt(index)

let Myname = "Alamin";
let result = Myname.charAt(2);
console.log(result);

let text = "JavaScript";
console.log(text.charAt(0));


// string1.concat(string2, string3, ...)
console.log(Myname.concat(text));


// string.indexOf(searchValue, start)
console.log(Myname.indexOf("a"));
console.log(Myname.indexOf("n"));

// last indexOf 

let text2 = "Hello World Hello";
console.log(text2.lastIndexOf("Hello"));


// string.replace(searchValue, newValue)
let text3 = "I love Java";
const rplace = text3.replace("Java", "JavaScript");
console.log(rplace);


// string.substr(start, length)  start → কোন index থেকে শুরু হবে, length → কয়টি character নেওয়া হবে
let text4 = "JavaScript";
let result4 = text4.substr(4, 6);
console.log(result4);


// string.substring(start, end) start → কোন index থেকে শুরু হবে end (optional) → কোন index পর্যন্ত যাবে 
let text5 = "Hello World";
console.log(text5.substring(6));



// trim 
let text6 = "   Hello World!   ";
console.log(text6.length);

let result6 = text6.trim();
console.log(result6);
console.log(result6.length);
