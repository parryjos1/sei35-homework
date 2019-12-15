// // Credit Card Validation
// // You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// // Here are the rules for a valid number:
// // Number must be 16 digits, all of them must be numbers
// // You must have at least two different digits represented (all of the digits cannot be the same)
// // The final digit must be even
// // The sum of all the digits must be greater than 16
// // Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
// // Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
// // { valid: true, number: 'a923-3211-9c01-1112' }
// // { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// // Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
//
//


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.





const validateCreditCard =  function (cardNumber) {
  cardStatus = { intArray: [], cardNumber: ( cardNumber ), valid: null, error: ['nil'], numTotal: null} // creating our cardStatusArray
  cardStatus.numArray = cardStatus.cardNumber.split('')
  // return cardStatus.numArray;
  for (var i = 0; i < cardStatus.numArray.length; i++) {
    num = parseInt(cardStatus.numArray[i])
    if (num >= 0) { // for some reason (num === NaN) doesn't show as true if NaN, not sure why
      cardStatus.intArray.push(parseInt(num)) // storing intergers for the array
      cardStatus.numTotal += num
    }
  } if (cardStatus.intArray.length !== 16) {
    cardStatus.error.push('wrong_length')
    cardStatus.valid = false
  } if ((cardStatus.intArray[15]) % 2 !== 0) { // checks last digit to see if it's even - maybe replace 15 with a variale in case used for diff amount of numbers?
    cardStatus.error.push(`last_num_not_even`)
    cardStatus.valid = false
  } if (cardStatus.numTotal <= 16 ) {
    cardStatus.error.push(`sum_not_greater_than_16`)
    cardStatus.valid = false
  } else {
    cardStatus.valid = true
  }
  console.log(`Valid: ${cardStatus.valid}, Number: ${cardStatus.cardNumber}, Error: ${cardStatus.error}`);
};

  // must have at least 2 numbers(can't all be the same)
  //   moreThan2Numbers : function () {
  //     for (var i = 0; i < cardStatus.intArray.length; i++) { // create loop to check number to previous
  //       console.log(cardStatus.intArray[i]);
  //       if (cardStatus.intArray[i] === cardStatus.intArray[) { // this fails on one loop.
  //         console.log(`Invalid Card - All numbers are the same`)
  //         return (`Invalid Card - All numbers are the same`)
  //       }
  //   }
  // },





// ccNum = "2222-2222-2222-2222"
// array = ccNum.split('')

console.log(validateCreditCard("1111-3333-2222-5556"))
// console.log(validateCreditCard("1111-33X3-2222-5555"))
// console.log(validateCreditCard("1111-1111-1111-1111"))
// console.log(validateCreditCard("2346-7623-1236-2547"))
console.log(validateCreditCard("1101-1111-1111-1111"))
console.log(validateCreditCard("0000-0000-0000-0000"))


// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }

// The following credit card numbers are valid:
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true




// const validateCreditCard = {
//
// //    COMBINED BOTH BELOW
// //   createArray : function ( cardNumber ) { // splits the card number into an array
// //     cardStatus = {}
// //     cardStatus.numArray = cardNumber.split('')
// //     return cardStatus.numArray;
// // },
//
// // must be 16 digits long - // no letters (obv)
//   createArray : function ( cardNumber ) { // makes intergers in array
//     cardStatus = {}
//     cardStatus.numArray = cardNumber.split('')
//     // return cardStatus.numArray;
//     cardStatus.intArray = [] // create empty array
//     // cardStatus.numArray = this.createArray ( cardNumber ) // take the numArray from createArray function
//     for (var i = 0; i < cardStatus.numArray.length; i++) {
//       num = parseInt(cardStatus.numArray[i])
//       // console.log(num); // print for test
//       if (num >= 0) { // for some reason (num === NaN) doesn't show as true if NaN, not sure why
//         // console.log(num);
//         cardStatus.intArray.push(parseInt(num))
//         // console.log(cardStatus.intArray);
//       // } else { // redundant
//       }
//     }
//     if (cardStatus.intArray.length === 16) {
//       // console.log(cardStatus.intArray)
//       return cardStatus.intArray // if storing in an object, can I just make this return true?
//     } else {
//       console.log(`Invalid Card - Not enough numbers`)
//       return `Invalid Card - Not enough numbers` // and this return "ERROR MESSAGE" and have if statement on validate that either returns validation or error message?
//     }
//   },
//
//   // must have at least 2 numbers(can't all be the same)
//   //   moreThan2Numbers : function () {
//   //     for (var i = 0; i < cardStatus.intArray.length; i++) { // create loop to check number to previous
//   //       console.log(cardStatus.intArray[i]);
//   //       if (cardStatus.intArray[i] === cardStatus.intArray[) { // this fails on one loop.
//   //         console.log(`Invalid Card - All numbers are the same`)
//   //         return (`Invalid Card - All numbers are the same`)
//   //       }
//   //   }
//   // },
//
//   // the final digit must be even number
//   finalDigitEven : function () {
//     if ((cardStatus.intArray[15]) % 2 === 0) { // checks last digit to see if it's even - maybe replace 15 with a variale in case used for diff amount of numbers?
//       return
//     } else {
//       console.log(`Card Number Invalid - Last Digit is Odd`)
//       return (`Card Number Invalid - Last Digit is Odd`)
//     }
//   },
//
//   // the sum of all the digits must be > 16
//   sumOfAllNumbers: function () {
//     cardStatus.numTotal = 0
//     for (var i = 0; i < cardStatus.intArray.length; i++) {
//       cardStatus.numTotal += cardStatus.intArray[i]
//     }
//     if (cardStatus.numTotal > 16) {
//       console.log(cardStatus.numTotal);
//       return
//     } else {
//       console.log(`Card Number Invalid - Sum Of All Numbers Is Less Than 16`);
//     }
//   },
//
//   //      WAS ABLE TO PUT THIS IN CREATE INT ARRAY
//   // removeNonNumbers : function ( cardNumber ) {
//   //   numArray = this.createArray( cardNumber )
//   //   numbers = []
//   //   for (var i = 0; i < numArray.length; i++) {
//   //
//   //     if (numArray[i] !== NaN ) {
//   //     numbers.push(numArray[i])
//   //   }
//   // }
//   validate : function ( cardNumber ) {
//     this.createArray( cardNumber )
//     // this.moreThan2Numbers()
//     this.finalDigitEven()
//     this.sumOfAllNumbers()
//     console.log(cardStatus.intArray);
//   }
//
// };
//
//
//
//
// // ccNum = "2222-2222-2222-2222"
// // array = ccNum.split('')
//
// console.log(validateCreditCard.validate("1111-3333-2222-5556"))
// console.log(validateCreditCard.validate("1111-33X3-2222-5555"))
// console.log(validateCreditCard.validate("1111-1111-1111-1111"))
// console.log(validateCreditCard.validate("2346-7623-1236-2547"))
// console.log(validateCreditCard.validate("1101-1111-1111-1111"))
//
// // { valid: true, number: 'a923-3211-9c01-1112' }
// // { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
//
// // The following credit card numbers are valid:
// // 9999-9999-8888-0000
// // 6666-6666-6666-1666
// // The following credit card numbers are invalid:
// // a923-3211-9c01-1112 invalid characters
// // 4444-4444-4444-4444 only one type of number
// // 1111-1111-1111-1110 sum less than 16
// // 6666-6666-6666-6661 odd final number
// // Example
// // validateCreditCard('9999-9999-8888-0000'); // Returns: true
