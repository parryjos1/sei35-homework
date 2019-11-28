const squarenumber = function(number) {
  console.log(`The result of squaring the number of ${number} is ${(number*number).toFixed(2)}`);
  return  (number*number).toFixed(2);
};
const halfnumber = function(number) {
  console.log(`Half of ${number} is ${(number/2).toFixed(2)}`);
  return  (number/2).toFixed(2);
};
const percentof = function(num1, num2) {
  console.log(`${num1} is ${(num2/num1).toFixed(2)}% of ${num2}`);
  return  (num2/num1).toFixed(2);
};
const areaofcircle = function(radius) {
  console.log(`The area of a circle with a radius of ${radius} is ${(radius*radius*Math.PI).toFixed(2)}`);
  return (radius*radius*Math.PI).toFixed(2)
};
const calculator = function() {
  let number = prompt("Enter a number")
  let calculatorhalf = halfnumber(number);
  let calculatorsquare = squarenumber(calculatorhalf);
  let calculatorarea = areaofcircle(calculatorsquare);
  let calculatorpercent = percentof(calculatorsquare, calculatorarea);
};
calculator();

const drevil = function(amount) {
  if (amount === 1000000) {
    return `${amount} Dollar (pinky)`
  } else {
    return `${amount} Dollar`
  }
}
console.log(drevil(1000000));

const mixup = function(word1,word2) {
  return word1.replace(word1[0], word2[0]).replace(word1[1],word2[1]) + " "  + word2.replace(word2[0], word1[0]).replace(word2[1],word1[1])
} //word1.charAt(0);
console.log(mixup("blips","polio"));

const fixstart = function(word1) {
  let first = word1.slice(0,0);
  let word2 = word1.replace(/first/g, "*");
  word2 = word2.replace(word2[0], word1[0])
  return word2;
}
console.log(fixstart("session"));

const verbify = function(word) {
  if (word.length >= 3) {
    return word+"ing"
  } else {
    return word
  }
}
console.log(verbify("tunnel"));
const notbad = function(word) {
  const not = word.search("not")
  const bad = word.search("bad")
  if (not < bad) {
      return word.replace(/not.*bad/, "good");
  } else {
    return word
  }
}
console.log(notbad("this is not that bad"));
