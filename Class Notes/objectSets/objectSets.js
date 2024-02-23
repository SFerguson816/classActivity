///3 sets Array, Empty, declare varibales
//Create a Set
// const numbers = new Set();

//Add Values to the Set
// numbers.add(1);
// numbers.add(2);
// numbers.add(3)

// console.log(numbers)


///Create Variables
// const a = "apples";
// const b = "balls";
// const c = "cat";

////create set 
// const things = new Set();

////Add variables to the set
// things.add(a);
// things.add(b);
// things.add(c);

// console.log(things)

///array set
//create a set 
const fruits = new Set (["bananas", "coconuts", "pineapples"]);
let text = "";
fruits.forEach (function(value){
    text += value + "<br>";
})
console.log(fruits)

//create a Set
// const letters = new Set(["a", "b", "c"]);

///list all elements
// let text = "";
// for (const x of letters.values()) {
//     text += x + "<br>";
// }

// //deleting an element
console.log(fruits.delete('pineapples'))
console.log(fruits.size)

///checking for an element in a Set
console.log(fruits.has('pineapples'))
console.log(fruits.has('coconuts'))

////Sets AND Maps

///Union of two sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(c)