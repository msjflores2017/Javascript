//1. Create an array called ages that contains the following values:
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Subtract the first element from the last element
const result = ages[ages.length - 1] - ages[0];
console.log("Result:", result);

//Add a new age to the array and repeat the subtraction
ages.push(18); // Adding a new age
const newResult = ages[ages.length - 1] - ages[0];
console.log("New result:", newResult);

//Use a loop to calculate the average age
let sum = 0;
for (let age of ages) {
  sum += age;
}
const averageAge = sum / ages.length;
console.log("Average age:", averageAge);

//2. Create an array called names
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Calculate the average number of letters per name
let totalLetters = 0;
for (let name of names) {
  totalLetters += name.length;
}
const averageLettersPerName = totalLetters / names.length;
console.log("Average letters per name:", averageLettersPerName);

//Concatenate all names together, separated by spaces
const concatenatedNames = names.join(" ");
console.log("Concatenated names:", concatenatedNames);

//3. Access the last element of any array
const lastElement = ages[ages.length - 1];
console.log("Last element of ages:", lastElement);

//4. Access the first element of any array
const firstElement = ages[0];
console.log("First element of ages:", firstElement);

//5. Create a new array called nameLengths
const nameLengths = [];
for (let name of names) {
  nameLengths.push(name.length);
}
console.log("Name lengths:", nameLengths);

//6. Calculate the sum of all elements in the nameLengths array
let sumNameLengths = 0;
for (let length of nameLengths) {
  sumNameLengths += length;
}
console.log("Sum of name lengths:", sumNameLengths);

//7. Function to concatenate a word n times
function repeatWord(word, n) {
  return word.repeat(n);
}
console.log("Repeated word:", repeatWord);

//8. Function to return full name
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log("Full name:", fullName);

//9. Function to check if the sum of array numbers is greater than 100
function isSumGreaterThan100(numbers) {
  const sum = numbers.reduce((num1, num2) => num1 + num2);
  return sum > 100;
}
console.log("Sum greater than 100:", isSumGreaterThan100);

//10. Function to calculate the average of array elements
function calculateAverage(numbers) {
  const sum = numbers.reduce((num1, num2) => num1 + num2);
  return sum / numbers.length;
}
console.log("Average of numbers:", calculateAverage);

//11. Function to compare averages of two arrays
function compareAverages(array1, array2) {
  return calculateAverage(array1) > calculateAverage(array2);
}
console.log(
  "First array average is greater than the second array:",
  compareAverages
);

//12. Function willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.5;
}
console.log("Will buy drink:", willBuyDrink);

//13. My own function: Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}
console.log("Is 23 even?", isEven(23)); // Output: false
console.log("Is 66 even?", isEven(66)); // Output: true
