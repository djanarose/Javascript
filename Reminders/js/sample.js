// The following lines of code are for practice and reference purposes.

// Primitive Types
let name = 'Mary'; // String literal
let age = 30; // Number literal
let lovesArt = true; //Boolean literal
let color = null; // Null
let list; // Undefined

let message = `${name} is ${age} years old`;
console.log(message);

//Reference Types
// - Array Literals
const numbers = new Array(1, 2, 3, 4, 5);
numbers[4] = 'five';
numbers[5] = 'six'; // adding an element to the array
console.log(numbers);

const colors = ['red', 'blue', 'green'];
console.log(colors.length);
colors.push('black');
console.log(colors);
let lastColor = colors.pop();
let firstColor = colors.shift();
console.log(`${firstColor} : ${lastColor}`);
console.log(colors);

// - Object Literals
const person = {
	firstName: 'John',
	lastName: 'Smith',
	age: 30,
	address: {
		street: '3 Sesame Street',
		city: 'Sydney',
		state: 'NSW'
	}
}
console.log(person.age) // dot notation
console.log(person['lastName']); // bracket notation
person.email = 'John@email.com'; // adding property to object
delete person.age; // removing a property
console.log(person);