const lodash = require('lodash');
const arr = ["nitish", "mohan", "kumar", "karthik"];

const newArr = lodash.map(arr, lodash.capitalize); 
console.log(newArr);


console.log(__dirname)