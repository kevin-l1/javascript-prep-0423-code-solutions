function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log(addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const getGreetingResult = getGreeting('World');
console.log(getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const getCircleCircumferenceResult = getCircleCircumference(5);
console.log(getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const getFullNameResult = getFullName('Juan', 'Ramirez');
console.log(getFullNameResult);

function cube(number) {
  return number ** 3;
}
const cubeResult = cube(5);
console.log(cubeResult);
