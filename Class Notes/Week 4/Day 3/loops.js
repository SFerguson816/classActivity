
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
// for(let i = 0; i <= 5; i++){
//     console.log({i} * {i})
// }
// Use for loop to iterate from 0 to 100 and print only odd numbers

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.



///////////////////////////////////////////Challenge///////////////////////////////////////
// let countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// //Using the above countries array, create an array for countries length'.
//Expected outcome is [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]


// let i=0
// for(let i=0; i<100; i+=2){
//     console.log('count',i)
// }

// let i = 0
// while (i <= 100){
//     console.log('count', i)
//     i+=2
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

////Practice do while
// let i = 2
// do {
//     console.log(i)
//     i+=2
// } while (i <= 22)





////do while loop

// let i = 0 
// do {
//     console.log(i)
//     i++
// } while (i <= 5)

////// 0 1 2 3 4 5 

/////////practice
// let n1 = 22;
// for (let i = 2; i <= n1; i+=2) {
//     console.log(i)
// }

//for loop= repeat some code a LIMITED amount of times
//// a while loop repeats an infinite number of times
///for (initialize; condition; increment/decrement)
///number of times you want to keep looping through- iteration
// for(let i = 0; i <= 2; i++){
//     console.log("Hello");
// }

///Count down
// for(let i = 10; i <= 0; i--){
//     console.log(i);
// }

// console.log("HAPPY NEW YEAR!")

////Continue and Break
//////Continue will skip a number 

/////break- will stop(wont go any further)


// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         continue;
//     }
//     else{

    
//     console.log(i);
//   }
// }

// for(let i = 1; i <= 20; i++){

//     if(i == 13){
//         break;
//     }
//     else{

    
//     console.log(i);
//   }
// }

// Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i = 0; i <= 100; i+=2){
//     console.log(i)
// }

/////Do WHILE LOOPS
// let i = 0 
///condition
// while (i <= 5){
//     console.log(i)
//     i++
// }

////DO WHILE LOOPS
// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i <= 5)


/////FOR OF LOOPS- used for ARRAYS- iterate through an array
///BASIC LAYOUT
// for (const element of arr){
//     console.log(num)
// }
/////EXAMPLE FOR OF LOOPS
// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//     console.log(num)
// }
////Example

// const webClasses = ["html", "css", "js", "react"]
// for (const classes of webClasses){
//   console.log(classes.toUpperCase());
// }


// let count = 0; 
// while (count < 3) { 
//   console.log("Hello"); 
//  count++; 
// }

// let x = 5; 
// do { 
//   console.log("Hello"); 
//  x--; 
// } while (!x > 0);

for (let i = 0; i < 5; i++) { 
    if (i === 2) { 
    continue; 
   } 
    console.log(i); 
  }