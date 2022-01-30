const array1 = ['kartik', 'python', 23, 'javascript', 2, 1]
console.log(`Array.pop() -> ${array1.pop()}`) //? removes last element and returns the element . 

const array3 = [3, 4, 5, 6, 7, 8]
console.log(`Array.shift -> ${array3.shift()}`) //? removes the first element and returns the element .

const array2 = [23, 'kartik', 'python', 'javascript', 2]
console.log(`Array.push() -> ${array2.push(12)}`) //? adds element to last place and returns the length of array .

const array4 = [10, 9, 8, 67, 34, 232]
console.log(`Array.unshift() -> ${array4.unshift()}`) //? adds element to first place and returns the length of array

const actors = [{
    name: 'actor1',
    payment: 100
  }, {
    name: 'actor2',
    payment: 3500
  }, {
    name: 'actor3',
    payment: 3000
  },
  {
    name: 'actor4',
    payment: 1200
  }
]

//* For loops
// ? Simple For Loop                         
for (let i = 0; i <= actors.length; i++) { //! For loop is used when we want to process every item (eg-> reverse array)
  console.log(actors[i])
}
// ? For Each Loop
actors.forEach((actor) => { //! forEach() is a function that is used when we do not care about the index value . 
  console.log(actor)
})
//? For of Loop
for (let actor of actors) { //! for of statement creates a loop iterating over iterable objects
  console.log(`name is ${actor.name} and payment${actor.payment}`)
}
// * CONCLUSION 1: for and for in loops gives us access to the index of the array not the actual element.
// *               for of and forEach () gives access to the actual element
//*                With for and for/in, you need to print out arr[i]:
// * CONCLUSION 2: forEach() and for in skip empty elements in the array, for and for of do not. 


//* Array methods

//? Array filter method
const words = ['hello', 'hi', 'python', 23, 'javascript', 'goodbye']
const result = words.filter(element => element.length > 6)
console.log(result) //! array.filter() method creates a new array with all the elements that 
//!                    pass the test case implemented by the function

//? Array Map method                    
const users = [{
  fname: 'kartik',
  lname: 'varanasi'
}, {
  fname: 'john',
  lname: 'Doe'
}]
const fullname = users.map((user) => { //! array.map() method creates a new array from calling a function on every element
  return `fullname : ${user.fname} ${user.lname}` //! does not executes function for empty element and does not change the original array
})
console.log(fullname)

//? Array Reduce Method
//! we can reduce all these elements in the array into a single value that single value can be a number , string , object or anything
const numbers = [1, -1, 6, 9, 5]
// ? example of sum on array 
// let sum = 0;
// for (let n of numbers) {
//   sum += n
// }
// console.log(sum)
//? array.reduce() -> it has 2 arguments , first is the callback and 2nd is intital value of accumulator
const sum = numbers.reduce((acc, n) => { //! here accumulator is sum from above example and n will be set to one element in number arr.
  return acc + n
}, 0) //! initial value of acc
console.log(sum)

//? Array.indexOf()
//! returns the first index at which the element is found in the array ,if not present return -1.
const animals = ['tiger', 'rihno', 'cat', 'dog', 'tiger']
console.log(animals.indexOf('tiger'))
//indexof tiger after 2nd index
console.log(animals.indexOf('tiger', 2))

//? array.includes()
//! determines whether the array includes a certain value among its entries, returns true || false 
const nums = [1, 2, 3];
console.log(nums.includes(2));
// expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('bed'));

//? array.find()
//! returns the value of the first element that passes the test condition , return undefined if not found.
const cars = [1, 2, 3, 10, 5, 11, 20, 44]
const found = cars.find(e => e > 10) //! The find() method executes a function for each array element.
console.log(found)

//? array.slice()
const Animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//! array.slice(start,end) return new array containing elements b/w start and end
console.log(Animals.slice(2))
console.log(Animals.slice(2, 4))

//?array.splice()
//! changes content of the array by removing/replaacing existing elements or adding new elements in place
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]