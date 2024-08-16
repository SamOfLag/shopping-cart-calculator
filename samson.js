//var time = 'morning';
// console.log(time)
// var time = 'morning';

// Always use const and let. By default, always use const when the value is not going to change. 
// Let can be used for functions like numberOfItems.
// Take Home: Research on rules for naming variables // Some keywords are reserved and can't be used
// as variables. You don't start a variable name with a sign. You don't use the '-' sign
// But you can use underscore. The naming convention for JS is PascalCase.
// Always pick a name that is descriptive. Datatypes you will be working with most are:
// Number, Boolean, String, Undefined, Null. Things to learn are: 
// operators: arithmetic, assignment, comparison, logical (&&, ||, !), bitwise
// The  = sign JS is called assignment operator. Use '===' for equality sign, to check the values are true in value and type.
// Don't use '==' when you're checking equality between two things.

// Conditional or control flow
// Conditions
// Take Homes: loops (for, while, do-while), functions, objects
const age = 65;

switch (true) {
  case age <= 18:
    console.log('Too young to vote');
    break;
  case age > 18 && age <= 60:
    console.log('Eligible to vote');
    break;
  default:
    console.log('You should retire');
}
// parameters are inputs you give your function
// function multiplication(number, limit){
//     for (let i = 1, i <=limit={, i++}){
//         console.log()
//     }
// }