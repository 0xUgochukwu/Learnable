// console.log(/[0123456789]/.test("1fda uhds sn"));
// // Starts with a digit
// console.log(/\d./.test("1gasdh"))

// + : one or more 
// ? : zero or one
// * : zero or more

// // has three to seven digits
// console.log(/\d{3,7}/.test("1fda uhds sn"))

// // has three or more digits
// console.log(/\d{3,}/.test("1fda 345 uhds sn"))

// quantifiers +, *, ?
// console.log(/'\d+'/.test("'123'"))
// console.log(/'\d*'/.test("'123'"))
// console.log(/'\d*'/.test("''"))

// console.log(/hello[0-9]+/.test('hello')) // ==> false
// console.log(/hello[0-9]+/.test('hello1')) // ==> true
// console.log(/hello[0-9]+/.test('hello12642')) // ==> true

// console.log(/hello[0-9]*/.test('hello')) // ==> true
// console.log(/hello[0-9]*/.test('hello1')) // ==> true


// // optional example
// console.log(/hello[0-9]?/.test('hello')) // ==> true
// console.log(/hello[0-9]?/.test('hello1')) // ==> true

// Matches and Groups
const match = /^\S+.+\d+$/.exec("one  11") 
console.log(match)
// . means there should be space

const match2 = /^\S+\d+$/.exec("one11") 
console.log(match2)

console.log(/bad(ly)?/.exec("badly"))
