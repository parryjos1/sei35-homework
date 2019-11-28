/***** The Calculator *****/
const squareNumber = function(number) {
  const squaredNumber = number**2;
  console.log(`The result of squaring the number ${number} is ${squaredNumber}.`);
  return squaredNumber;
};

squareNumber(3);

const halfNumber = function (number) {
  const dividedNumber = number / 2;
  console.log(`Half of ${number} is ${dividedNumber}.`);
  return dividedNumber;
};

halfNumber(5);

const percentOf = function(num1, num2) {
  const percent = (num1/num2) * 100;
  console.log(`${num1} is ${percent.toFixed()}% of ${num2}.`);
  return percent.toFixed();
};

percentOf(2, 4);

const areaOfCircle = function (radius) {
  const area = Math.pow(radius, 2) * Math.PI;
  console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}.`);
  return area.toFixed(2);
};

areaOfCircle(2);

const executeAllFunctions = function (num) {
  let store1 = halfNumber(num);
  store1 = squareNumber(store1);
  const store2 = areaOfCircle(store1);
  percentOf(store1, store2);
};

executeAllFunctions(5);
