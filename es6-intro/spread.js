const numbers = [23,65,99,21,34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(...numbers);
console.log(max);


const number2 = [...numbers];
numbers.push(55);
console.log(number2);