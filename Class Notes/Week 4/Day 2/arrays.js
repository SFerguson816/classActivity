///////////////////////////////////////////////Welcome To Arrays///////////////////////////////
///////////////////////////////////////////Non-primitive data type/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// How to create an empty array. 
// This the most recommended way to create an empty list. Here is a general syntax
// let arr=[]
// console.log(arr)



//////////////////////////////////////////////////////////////////////////////////////////////
// How to create an array with values
let arr=["Denmark", "Swedan", "Norway", 7, 8, true, false, null, undefined, [ "banana", "orange"], {color:"blue", make:"Honda", awd:false}]
console.log("this is a random list of items:", arr)
console.log("This is how many are inside the arr list:", arr.length)

//.........................................To Do..............................................
//Create an array with values and then console log the list and its length  
// array of numbers

let num=[1, 2, 3, 4, 5]
console.log(num)
console.log(num.length)


// array of strings, fruits

let fruit=["banana", "apple", "pear", "lemon", "kiwi"]
console.log(fruit)
console.log("number of fruit:",fruit.length)

// array of web technologies

let tech=["JavaScript", "CSS", "HTML", "HTTP"]
console.log(tech)
console.log(tech.length)


// /////////////////////////////////////////////////////////////////////////////////////////////
// Creating an array using split
let js = 'JavaScript'
const charOfJs=js.split("")
console.log(charOfJs)

let css = 'CascadingStyleSheets'
const charOfCss=css.split("")
console.log(charOfCss)
//.........................................To Do..............................................
//For the two strings use a split method to conosole.log and see the list of arrays
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'


// /////////////////////////////////////////////////////////////////////////////////////////////
//Accessing array items using index

const fruits = ['banana', 'orange', 'mango', 'lemon']
//index of Fruit////0/////////1////////2////////3////
let oneFruit=fruits[2]
console.log(oneFruit)

let lastIndex=fruits.length-1
console.log(fruits[lastIndex])

//.........................................To Do..............................................
//console how many are in  my shoping bag, just accsess and pring potato, Milk and sugar. Replace Avocado with Onion
const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products





//////////////////////////////////////////////////////////////////////////////////////////////
// Modifying array element
const numbers = [1, 2, 3, 4, 5]
/////////////////0//1//2
numbers[1]=12
console.log(numbers)



//////////////////////////////////////////////////////////////////////////////////////////////
// Methods to manipulate array


//Getting index an element in arr array (To check if an item exist in an array.)


//Getting index an element in arr array (To check if an item exist in an array.)