//A callback is a function which can be passed as a parameter to other function.  See the
//example 
//a callback function, the name of the function could be any name
// const callback = (n) => {
//     return n * 2
// }

//function that takes other function as a callback
// function cube(callback, n) {
//     return callback(n) * n
// }
// console.log(cube(callback, 3))

/////Practice
////Setting interval
// function sayHello() {
// console.log("Hello")
// }
// setInterval(sayHello, 1000)




//example for each
// let fruits = ["apple", "orange", "banana", "coconut"];
// fruits.forEach(display);
// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function display(element) {
//     console.log(element);
// }

/////for each - An Array
const names = ['sadie', 'dax', 'weston', 'brooklyn', 'samy']
names.forEach((element) => console.log(element.toUpperCase()))