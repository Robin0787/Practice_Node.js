const {add, subtract} = require("./local");
const {add: add2} = require("./local-2");


const result = add(10,34);
const result2 = subtract(40, 34);
const result3= add(40, 34, 34);
console.log(result3);


