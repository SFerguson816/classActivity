//Functional Programming
//Instead of writing loops, the latest version of JS introduced lots of built in methods which
//can be used to solve complicated problems.  All builtin methods take callback functions, we will tKE
//a look at forEach, map, filter, reduce, find, every, some and sort.

//forEach
//forEach is used ato iterate an array of elements.  We use forEach with arrays. It takes a 
//callback function with elements, index paramters and array itself. The index and the array are
//optional
//map
//filter
//reduce
//find
//every
//some
//sort

///Practice For each method
let sum = 0
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(myNumbers)


function myNumbers(num) {
    sum += num
}
console.log(sum)