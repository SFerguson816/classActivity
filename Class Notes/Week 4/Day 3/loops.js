
// ///////////////////////////////for Loop///////////////////////////////////////////////
// // For loop structure
// for(initialization, condition, increment/decrement){
//     // code goes here
//   }


/////////////////////////////////////////while loop///////////////////////////////////////



//////////////////////////////////////// do while loop////////////////////////////////////



// ///////////////////////////// for of loop//////////////////////////////////////////////
// for (const element of arr) {
//     // code goes here
//   }



// ///////////////////////////////////////////break/////////////////////////////////////
//Break is used to interrupt a loop.




/////////////////////////////////////// continue///////////////////////////////////////
//We use the keyword continue to skip a certain iterations.








//..........................................To do .......................................
// Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 0; i <= 5; i++){
    console.log({i} * {i})
}
// Use for loop to iterate from 0 to 100 and print only odd numbers

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.



///////////////////////////////////////////Challenge///////////////////////////////////////
let countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//Using the above countries array, create an array for countries length'.
//Expected outcome is [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]


// let i=0
// for(let i=0; i<100; i+=2){
//     console.log('count',i)
// }

let i = 0
while (i <= 100){
    console.log('count', i)
    i+=2
}
