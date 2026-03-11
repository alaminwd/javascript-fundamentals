const numbers = [1, 2, 3, 4, 5]; 

const result = numbers.forEach((item) =>{
    console.log(item);  
})


console.log('multiplication');

const result2 = numbers.forEach((item) =>{
    console.log(item*2);
})
// print item and index 

console.log('Print index item');


const result3 = numbers.forEach((item, index)=>{
    console.log(index+"=>"+item);
    
})