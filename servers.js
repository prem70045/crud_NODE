const notes =require('./notes.js');
var _ =require('lodash')
let age =notes.age;
console.log(age);

console.log(notes.addNumber(age,10));

let data = ['prem','prem',1,2,3,4,5,1,3,5];

let filter = _.uniq(data);
console.log(filter);
