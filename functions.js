function convertToUppercase(inputString) {
  if (typeof inputString === 'string') {
    return inputString.toUpperCase();
  } else {
    return console.log("Input is not a valid string.");
  }
}

//create js function that add properties for the object, allowing only number
function addNumberProperty(obj, propertyName, propertyValue) {
  if (typeof propertyValue === 'number') {
    obj[propertyName] = propertyValue;
  } else {
    console.error(`Property "${propertyName}" is not a valid number.`);
  }
}

//create JS object with 5 different properties
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
  isStudent: false
};

//with previously created function add a new property
addNumberProperty(person, 'height', 180); // Adds a new property "height" with a numeric value
console.log(person);

//check the function syntax and if some issues propose
let sum = function(a, b) {
  return a + b;
};