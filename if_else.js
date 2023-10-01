let num215 = 215;
if (num215 ==215) {
  console.log('yes value is under condition')
  console.log('1')
}

if (num215 >= 215 && num215 <=250){
  console.log('second condition works')
}

if (num215 >500){
  console.log('num215 is greater thatn 500')
} else {
  console.log('code goes to the else')
}

if (num215 >500){
  console.log('num215 is greater thatn 500')
} else if (num215 > 250 ) {
  console.log('num greater than 250')
} else if (num215 >= 200 ){
  console.log ('num215 = 200')
} else if (Number.isInteger(num215) ){
  console.log ('num is integer')
}else {
  console.log('code goes to the else')
}