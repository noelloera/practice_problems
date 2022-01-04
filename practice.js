//Always place the script tags at the end of the body
console.log("Hello this is a log in the console!");
//Best practice is using let keyword instead of var
//Use cammel notation
//Best practice is to initatlize variables on each line
let name = "Noel";
console.log(name);

//There are 5 different primitive/variable types in JS [string, number, boolean, undefined, null]
let age = 24;
let isApproved = true;
//This has no value at all, variable exists but no values
let firstName = undefined;
//This is an assigment value, when you want a variable to have no value
let lastName = null;
undefined = "hey";
console.log(firstName);

//Dynamic languages can change at runtime

//There are 3 reference types [object, array, function]
//Objects
let person = {
  name: "Noel",
  age: 30,
};
//dot notation is most common but target bracket notation are also used
person["name"] = "John";

console.log(person.name);

//Arrays
let selectedColors = ["red", "blue"];
console.log(selectedColors[0]);

//JavasScript is dynamic and can save different types in arrays

//The parameter is the variable that stores the argument
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
//The argument is what is passed
greet("Noel", "Loera");

function square(number) {
  return number * number;
}

console.log(0 / 5);
