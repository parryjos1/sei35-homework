// Geometry Function Lab
// Part 1, Rectangle
const isSquare = function(rect) {
  return rect.length === rect.width;
};

const area = function(rect) {
  return rect.length * rect.width;
};

const perimeter = function(rect) {
  return 2*rect.length + 2*rect.width;
};

const rectangle1 = {
  length: 4,
  width: 4
};

const rectangle2 = {
  length: 5,
  width: 3
};

console.log(`Rectangle1: [square: ${isSquare(rectangle1)}, area: ${area(rectangle1)}, perimeter: ${perimeter(rectangle1)}]`);
console.log(`Rectangle2: [square: ${isSquare(rectangle2)}, area: ${area(rectangle2)}, perimeter: ${perimeter(rectangle2)}]`);

// Part 2, Triangle
const isEquilateral = function(tri) {
  return (tri.sideA === tri.sideB) && (tri.sideA === tri.sideC);
};

const isIsosceles = function(tri) {
  return (tri.sideA === tri.sideB) && (tri.sideA !== tri.sideC) ||
         (tri.sideA === tri.sideC) && (tri.sideA !== tri.sideB) ||
         (tri.sideB === tri.sideC) && (tri.sideB !== tri.sideA);
};

const triArea = function(tri) {
  // Area = squrt(p(p-a)(p-b)(p-c))
  const p = (tri.sideA + tri.sideB + tri.sideC) / 2; // half perimeter
  const area = Math.sqrt(p*(p-tri.sideA)*(p-tri.sideB)*(p-tri.sideC));
  return area;
};

const isObtuse = function(tri) {

  const sortedTriangleLengths = Object.values(tri).sort((a,b) => a - b);
  const longestSide = sortedTriangleLengths[sortedTriangleLengths.length -1];
  const shortSides = [];
  let counter = 0;
  for(const value of Object.values(tri)) {
    if (value === longestSide) {
      counter++;
    } else {
      shortSides.push(value);
    }
  }
  if (counter > 1) {
    return false;
  }
  return Math.pow(shortSides[0], 2) + Math.pow(shortSides[1], 2) < longestSide ** 2;
};

const triangle1 = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangle2 = {
  sideA: 5,
  sideB: 5,
  sideC: 8
};

const triangle3 = {
  sideA: 2,
  sideB: 2,
  sideC: 2
};

console.log(`Triangle1: [equilateral: ${isEquilateral(triangle1)}, isosceles: ${isIsosceles(triangle1)}, area: ${triArea(triangle1)}, obtuse: ${isObtuse(triangle1)}]`);
console.log(`Triangle2: [equilateral: ${isEquilateral(triangle2)}, isosceles: ${isIsosceles(triangle2)}, area: ${triArea(triangle2)}, obtuse: ${isObtuse(triangle2)}]`);
console.log(`Triangle3: [equilateral: ${isEquilateral(triangle3)}, isosceles: ${isIsosceles(triangle3)}, area: ${triArea(triangle3)}, obtuse: ${isObtuse(triangle3)}]`);


// The Cash Register
const cashRegister = function(cart) {
  let totalPrice = 0;
  for(const price of Object.values(cart)) {
    totalPrice += parseFloat(price);
  }

  return totalPrice;
};

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
console.log(cashRegister(cartForParty)); // 60.55


// JavaScript Bank
const CreateAccount = function(name) {
  this.name = name;
  this.balance = 0;
  this.deposit = function(amount) {
    this.balance += amount;
  };
  this.withdraw = function(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    } else {
      console.log("You don't have sufficient funds to withdraw");
    }
  };
};


// const account1 = {
//   ownerName: 'Owner1',
//   balance: 0,
//   deposit: function(amount) {
//     this.balance += amount;
//   },
//   withdraw: function(amount) {
//     if (this.balance - amount >= 0) {
//       this.balance -= amount;
//     } else {
//       console.log("You don't have sufficient funds to withdraw");
//     }
//   }
// };
//
// const account2 = {
//   ownerName: 'Owner2',
//   balance: 0,
//   deposit: function(amount) {
//     this.balance += amount;
//   },
//   withdraw: function(amount) {
//     if (this.balance - amount >= 0) {
//       this.balance -= amount;
//     } else {
//       console.log("You don't have sufficient funds to withdraw");
//     }
//   }
// };

const bank = {
  accounts: [],
  getTotalSum: function() {
    let totalSum = 0;
    for(let i = 0; i < this.accounts.length; i++) {
      totalSum += this.accounts[i].balance;
    }
    return totalSum;
  },
  addAccount: function(acc) {
    this.accounts.push(acc);
  },
  transfer: function(fromAccount, toAccount, amount) {
    if (fromAccount.balance >= amount) {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
    } else {
      console.log('There are insufficient funds to transfer');
    }
  }
};

const account1 = new CreateAccount('Owner1');
const account2 = new CreateAccount('Owner2');

account1.deposit(100);
account2.deposit(200);
bank.addAccount(account1);
bank.addAccount(account2);
account1.withdraw(50);
console.log(bank.getTotalSum());
bank.transfer(account1, account2, 30);
console.log(account1.balance);
console.log(account2.balance);

console.log(bank.getTotalSum());


// Credit Card Validation
const creditCardReturnObj = {
  valid: false,
  number: '',
  error: '',
  authenticate: function(bool) {
    this.valid = bool;
  },
  setNumber: function(num) {
    this.number = num;
  },
  dedectError: function(err) {
    this.error = err;
  },
  print: function() {
    return this.error.length === 0 ? {valid: this.valid, number: this.number} : {valid: this.valid, number: this.number, error: this.error};
  }
};

const luhnAlgorithm = function(numbers) {
  if (typeof numbers !== 'string') {
    numbers = numbers.toString();
  }
  const numberArray = numbers.split('').map(a => parseInt(a));
  //console.log(numberArray);
  const evenOrOdd = (numberArray.length - 1) % 2;
  //console.log(evenOrOdd);
  for (let i = numberArray.length - 1; i >= 0; i--) {
    if (i % 2 !== evenOrOdd) {
      let doubleNumber = numberArray[i] * 2;
      if (doubleNumber < 10) {
        numberArray[i] = doubleNumber
      } else {
        numberArray[i] = (doubleNumber % 10) + Math.floor(doubleNumber/10);
      }
    }
  }
  //console.log(numberArray);
  return numberArray.reduce((a,b) => a + b) % 10 === 0;
};

const validateCreditCard = function(creditCard) {
  let cardNumber = '';
  creditCardReturnObj.setNumber(creditCard);
  if (!luhnAlgorithm(creditCard)) {
     creditCardReturnObj.authenticate(false);
     creditCardReturnObj.dedectError('Doesn\'t fulfill the luhn algorithm condition');
     return creditCardReturnObj.print();
  }
  const regex = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[02468]/;
  if (creditCard.match(regex) !== null) {
    //console.log(creditCard.match(regex));
    cardNumber = creditCard.split('-').join('');
    const firstVal = cardNumber[0];
    const firstValRegex = new RegExp('[^' + firstVal + ']', 'g');
    if (cardNumber.slice(1).match(firstValRegex) !== null) {
      const cardNumberArray = cardNumber.split('');
      //console.log(cardNumberArray);
      if (cardNumberArray.reduce((a,b) => parseInt(a) + parseInt(b)) > 16) {
         //return true;
         creditCardReturnObj.authenticate(true);
         return creditCardReturnObj.print();
      } else {
        creditCardReturnObj.authenticate(false);
        creditCardReturnObj.dedectError('sum_below_16');
      }
    } else {
      creditCardReturnObj.authenticate(false);
      creditCardReturnObj.dedectError('only_one_figure');
    }

  } else {
    creditCardReturnObj.authenticate(false);
    creditCardReturnObj.dedectError('no_16_numbers_or_no_even_ending');
  }
  //return false;
  return creditCardReturnObj.print();
};

console.log('9999-9999-8888-0000', validateCreditCard('9999-9999-8888-0000'));
console.log('6666-6666-6666-1666', validateCreditCard('6666-6666-6666-1666'));
console.log('a923-3211-9c01-1112', validateCreditCard('a923-3211-9c01-1112'));
console.log('4444-4444-4444-4444', validateCreditCard('4444-4444-4444-4444'));
console.log('1111-1111-1111-1110', validateCreditCard('1111-1111-1111-1110'));
console.log('6666-6666-6666-6661', validateCreditCard('6666-6666-6666-6661'));
