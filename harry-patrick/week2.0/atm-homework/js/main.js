let bankGA = {
  credit: 100,
  savings: 0,

  // takes in the account name as the argument and returns the value
  findCurrentBalance: function ( account ) {
    return this[account]
  },

  changeBankBalance: function ()
};

console.log(bankGA.findCurrentBalance('credit'));
// to be updated with either the withdraw or deposit on click
 amount = 0

$(document).ready(function ( currentBalance ) {
  let newBalance = 0
  //if user clicks on deposit
  if () {
    newBalance = currentBalance + amount
  // if user click on withdraw
  } else {
    newBalance = currentBalance - amount
  }

  return newBalance

});
