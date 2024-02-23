const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const countries = countries.filter((country) => country.includes('land'))
console.log(countries)

// Explain the difference between forEach, map, filter, and reduce.

// Define a callback function before you use it in forEach, map, filter or reduce.
// Use forEach to console.log each country in the countries array.
// Use forEach to console.log each name in the names array.
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// names.forEach(name => {
//     console.log(name);
// });
// Use forEach to console.log each number in the numbers array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(number => {
//     console.log(number);
// });


// Use map to create a new array by changing each country to uppercase in the countries array.
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// const uppercaseCountries = countries.map(country => country.toUpperCase());
// console.log(uppercaseCountries);
// Use map to create an array of countries length from countries array.
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// const countryNameLengths = countries.map(country => country.length);
// console.log(countryNameLengths);
// Use map to create a new array by changing each number to square in the numbers array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squaredNumbers = numbers.map(num => num ** 2);
// console.log(squaredNumbers);

// Use map to change to each name to uppercase in the names array
// const names = ["Sadie", "Benny", "Weston"]
// const newNames = names.map((element) => element.toUpperCase())
// console.log(newNames)


// Use map to map the products array to its corresponding prices.
// const listOfPrice=products.map(product=>product.price)
// console.log(listOfPrice)
// Use filter to filter out countries containing land.

// Use filter to filter out countries having six character.
// Use filter to filter out countries containing six letters and more in the country array.
// Use filter to filter out country start with 'E';
// Use filter to filter out only prices with values.
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// Use reduce to sum all the numbers in the numbers array.
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// Explain the difference between some and every