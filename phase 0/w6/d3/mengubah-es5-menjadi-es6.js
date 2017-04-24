// Tugas 1

const phi = 3.14;
let power = 2;
let radius = 0;
let calculateArea = function (radius) {
  return phi * Math.pow(radius, power);
}

radius = 21;
let area21 = calculateArea(radius);

radius = 7;
let area7 = calculateArea(radius);

console.log('area with 21 radius: %d, and area with 7 radius: %d', area21, area7);

// Tugas 2

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const doubleMe = num => num * 2;

console.log(multiply(5,2));
console.log(divide(10,2));
console.log(doubleMe(2));
