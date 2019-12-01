const validateCreditCard = function(cardNumber) {
  const allDigitsCardNumber = cardNumber.split('').
      filter((char) => char !== '-').
      filter((char) => /^[0-9]+$/.test(char)).
      map((char) => Number.parseInt(char));

  if (allDigitsCardNumber.length < 16) {
    return false;
  }

  if (allDigitsCardNumber[allDigitsCardNumber.length - 1] % 2 !== 0) {
    return false;
  }

  const result = allDigitsCardNumber.reduce((accu, digit) => {
        if (!accu.valid && digit !== accu.previousDigit) {
          accu.valid = true;
        }
        accu.previousDigit = digit;
        accu.sum += digit;
        return accu;
      },
      {
        sum: 0,
        previousDigit: allDigitsCardNumber[0],
        valid: false,
      });

  if (result.sum <= 16) {
    return false;
  }

  return result.valid;
};

console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));
