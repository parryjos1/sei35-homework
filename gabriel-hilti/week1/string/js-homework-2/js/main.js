/***** DrEvil *****/
const DrEvil = function(amount) {
  let money = `${amount} dollars`;
  return (amount === 1000000) ? `${money} (pinky)` : money;
};

console.log(DrEvil(10));
console.log(DrEvil(1000000));


/***** MixUp *****/
const mixUp = function(str1, str2) {
  const newStr1 = str2.slice(0, 2) + str1.slice(2);
  const newStr2 = str1.slice(0, 2) + str2.slice(2);
  return newStr1 + " " + newStr2;
};

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));


/***** FixStart *****/
const fixStart = function(str) {
  const firstChar = str.toLowerCase()[0];
  const re = new RegExp(firstChar, 'g');
  const newStr = firstChar + str.slice(1).replace(re, '*');
  return newStr;
};

console.log(fixStart('babble'));
console.log(fixStart('Mkiwmmqohymopqm owm'))


/***** Verbing *****/
const verbing = function(str) {
  if (str.length >= 3) {
    return str.endsWith('ing') ? str + 'ly' : str + 'ing';
  } else {
    return str;
  }
};

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));


/***** Not Bad *****/
const notBad = function(str) {
  const indexOfBad = str.indexOf('bad');
  const indexOfNot = str.indexOf('not');
  if (indexOfBad !== -1 && indexOfNot !== -1 && indexOfNot < indexOfBad) {
    const newStr = str.slice(0, indexOfNot) + 'good' + str.slice(indexOfBad + 3);
    return newStr;
  } else {
    return str;
  }
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
