function isAllUpperCase(inputString) {
  // Check if the string is empty or doesn't have any letters
  if (!inputString || !/[a-zA-Z]/.test(inputString)) {
    return false;
  }

  // Check if all letters in the string are uppercase
  return /^[A-Z]+$/.test(inputString);
}

console.log(isAllUpperCase('HELlO'))
console.log(isAllUpperCase('HELLO'))