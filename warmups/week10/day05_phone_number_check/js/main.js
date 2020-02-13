console.log('working');


///////////////////////////// version without regex

// Three part process
// Show with console logs the whole time

const phoneNumberCheck = {
    cleanNumber: function(num){
      let cleaned = [];
      let numberals = "0123456789";
  
      for (let i = 0; i < num.length; i++) {
        let currentNum = num[i];
        // indexOf returns -1 if it never occurs
        // index of returns the position of the first occurance of a value in a string
        if(numberals.indexOf(currentNum) !== -1){
          cleaned.push(currentNum);
        }
      } // for
      cleaned = cleaned.join('');
      return cleaned
    },
    isValid: function(num){
      let cleanNumber = this.cleanNumber(num);
      if( cleanNumber.length === 11 && cleanNumber[0] === '1'){
        return cleanNumber.substr(1);
      } else if (cleanNumber.length === 10){
        return cleanNumber;
      } else {
        return "00000000";
      }
    },
    getFormattedNumber: function(num){
      const validNumber = this.isValid(num);
    //   substring gets a range of the string
      const areaCode = validNumber.substr(0,3);
      const exchangeCode = validNumber.substr(3,3);
      const remaining = validNumber.substr(6);
      return `(${areaCode}) ${exchangeCode}-${remaining}`;
    }
  
  }
  
  
  console.log(phoneNumberCheck.cleanNumber('11234567890'));
  console.log(phoneNumberCheck.cleanNumber('D112s3456!789?0sdf'));
  
  console.log(phoneNumberCheck.isValid('11234567890'));
  console.log(phoneNumberCheck.isValid('D1s3456!789?0sdf'));
  
  console.log(phoneNumberCheck.getFormattedNumber('11234567890'));
  console.log(phoneNumberCheck.getFormattedNumber('71234567890'));


//   RegEx Version

//Version 2

// const phoneNumberCheck = {

//     cleanNumber (input) {
//       let number = input.match(/\d/g);
//       number = number.join("");
  
//       return (number.length === 11 && number[0] === "1") ? number.substr(1) : number
//     },
  
//     checkValidation (input) {
//       const number = this.cleanNumber(input)
  
//       return (number.length !== 10) ? "0000000000" : number
//     },
  
//     getFormattedNumber (input) {
//       const validNumber = this.checkValidation(input);
//       const areaCode = validNumber.substr(0,3);
//       const exchangeCode = validNumber.substr(3,3);
//       const remaining = validNumber.substr(6);
//       return `(${areaCode}) ${exchangeCode}-${remaining}`
//     }
//   }
//   console.log(phoneNumberCheck.getFormattedNumber('11234567890'));  





