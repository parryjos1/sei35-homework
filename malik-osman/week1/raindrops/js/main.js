console.log("hello");

const raindrops = function ( num ) {
  let string = "";
  if ( num % 3 === 0 ) {
    string += "pling"
  }

  if ( num % 5 === 0 ) {
    string += "plang"
  }

  if ( num % 7 === 0 ) {
    string += "plong"
  }

  if (string.length === 0) {
    string += num;
  }
  return string
}

console.log( raindrops(3) );
console.log( raindrops(28) );
console.log( raindrops(1755) );
console.log( raindrops(9) );
console.log( raindrops(34) );

const squareNumber = function ( num1, num2 ) {
  return num1 * num2;
};

console.log(squareNumber(3,3));


const divideNumber = function ( num1, num2 ) {
  return num1 / num2;
};

console.log(divideNumber(9,3));
