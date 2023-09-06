//create array with 10 elements
let arr1 = ['cat', 'apple', 5, null, 0.003, '!@#$%^&*()', 123, 'Ukraine', 'tExT', '' ]
console.log(arr1)

//create a function that will add value to array under index 500
function addingValueToArray(){
  for (let i = 0; i <=500; i++){
    arr1.push(arr1[undefined]);
    arr1[500] = 'this is value for 500 index element';
  }
}

addingValueToArray();
console.log(arr1);

//create a function with for inside and conditions to create two new arrays - 
//one with string elements only, another only with numbers
let arr1_strings = [];
let arr2_numbers = [];
function creatingTwoArrays(){
  for (let i =0; i < arr1.length; i++){
    if (typeof arr1[i] === 'string'){
      arr1_strings.push(arr1[i]);
    }
    if (typeof arr1[i] === 'number'){
      arr2_numbers.push(arr1[i]);
    }
  }
}
creatingTwoArrays();
console.log(arr1_strings);
console.log(arr2_numbers);