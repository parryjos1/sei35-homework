//PART ONE
const squareNumber = function (num) {
  const result = num*num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
};
squareNumber(2);

const halfNumber = function (num) {
  const result = num/2;
  console.log(`Half of ${num} is ${result}`);
};
halfNumber(10);

const percentOf = function (x, y) {
  const result = (x/y)*100;
  console.log(`${x} is ${result}% of ${y}.`);
};
percentOf(2.5, 10);

const areaOfCircle = function (radius) {
  const result = 3.141 * radius*radius;
  console.log(`The area for a circle with radius ${radius} is ${result.toFixed(2)}.`);
};
areaOfCircle(22);

//PART TWO

//STRINGS
//Dr.Evil
const drEvil = function(num) {
  if (num < 1000000) {
  console.log(`$${num} dollars`);
} else {
  console.log(`$${num} dollars (pinky)`)
};
drEvil(1000);
