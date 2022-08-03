// Array learning in JS

// to print array simply log the name of variable
// to know how many elements are in an array use (name."length")
// to know an elements position in array use 
// what is index?
// --> index is the position number of elements inside an array list

// array
var officeAge = [11, 26, 35, 50, 56, 70, 18];

// console.log(officeAge.length);
// console.log(officeAge);


// 1. how to get element by index
var element = officeAge[6];
console.log(element);

// 2. how to set element value by index
officeAge[5] = 10;
console.log(officeAge);

// 3. how to find index of element
var positionIndex = officeAge.indexOf(18);
console.log(positionIndex);

// if there is no such element found inside Array,
// --> it will show as (-1)