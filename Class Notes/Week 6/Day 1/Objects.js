// 📔 Object
// Creating an empty object
// const house={
//     color:"pink",
//     bedrooms:6,
//     levels:3,
//     bathrooms:3,
//     address: {
//         street: "777 Russell Ave.",
//         City:"Raleigh",
//         state:"North Carolina"
//     }
// }
// house.garage="two car"
// console.log(house)


//  const person={
//     height:"short",
//     eyeColor:"Brown",
//     hairColor:"Black",
//     age:45,
//     isMarried:false,
//     // Creating object methods
//     introduce:function(){
//         return `Hi I am a ${this.height} guy with ${person.eyeColor} eyecolor`
//     }
//  }
//  console.log(person.introduce())

 
// Creating an objecting with values
//  const Sadie={
//     height:"tall",
//     age:26,
//     eyeColor:"Brown",
//     jobTitle:"cashier",
//     greatAtSpelling:true,
//     skills:["HTML", "CSS", "JS", "Python", "React", "Node", "Express", "MangoDB"],
//     canSwim:null,
//     canDrive:true,
//     Honda:{
//         color:"Green",
//         make:"Accord",
//     }
//  }

// Getting values from an object

// console.log(Sadie)
// console.log(Sadie.age)
// console.log(Sadie["age"])

// console.log(Sadie.jobTitle)
// console.log(Sadie.skills)
// console.log(Sadie.Honda.color)
// console.log(Sadie["Honda"]["color"])



// Setting new key for an object


// Object Methods
// const person={
//     firstName: "Elon",
//     lastName: "Musk",
//     greet: function greet(){
//         console.log("Hello World");
//     }
// }
// person.greet();

// Getting object keys using Object.keys()
// Getting object values using Object.values()
// Getting object keys and values using Object.entries()
// Checking properties using hasOwnProperty()

//..........................................To Do............................................
// Create an empty object called dog
// const dog={
//     name:"Mocha",
//     legs:4,
//     color:"Brown",
    
// }
// console.log(dog)


// Print the the dog object on the console



// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof



// Get name, legs, color, age and bark value from the dog object
// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog["color"])

///////scope
/////variables can be declared at different scope(var, let const)
/////variable scope can be global or local

///////global scope 
////////variable that can be used anywhere within your code 

//////create an object with 5 properties with values amd include an array of values in your property; access certain values using the dot notation 

const dog = {
    color: "brown",
    color2: "white spot",
    legs: 4,
    age: 6,
    name: "Spot",
    likes: [
        "chasing tail",
        "birds",
        "flyball",
        "treats",
        "agility",
    ],
    bark: function() {
        return "bow wow"
    }
}
console.log(dog.bark())





