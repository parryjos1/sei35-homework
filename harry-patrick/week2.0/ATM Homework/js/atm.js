// accessing the inputs in both ths checking and savings accounts
let $currentCheckingBalance = $('#balance1');
console.log($currentCheckingBalance);
let checkingBalance = 0
let $checkingAmountEntered = $('#checkingAmount');
console.log($checkingAmountEntered);
let $checkingDeposit = $('#checkingDeposit');
console.log($checkingDeposit);
let $checkingWithdraw = $('#checkingWithdraw');
console.log($checkingWithdraw);
let $currentSavingsBalance = $('#balance2');
console.log($currentSavingsBalance);
let savingsBalance = 0
let $savingsAmountEntered = $('#savingsAmount')
console.log($savingsAmountEntered);
let $savingsDeposit = $('#savingsDeposit');
console.log($savingsDeposit);
let $savingsWithdraw = $('#savingsWithdraw');
console.log($savingsWithdraw);


// adds value to checking balance when deposit button is clicked
$checkingDeposit.on('click', function () {
    // add checkingBalance to $checkingAmountEntered
    checkingBalance = checkingBalance += parseInt($checkingAmountEntered.val());
    // places currentBalance into html
    $('#balance1').replaceWith(`<div>$${checkingBalance}</div>`);
    // add class and id back to div and add money-background
    $('div #checkingAccount').removeClass('zero-background').addClass('money-background')
    $('#checkingAccount div').addClass('balance').attr('id', 'balance1');
    //clears the enter amount input
    $checkingAmountEntered.val('');
});


// adds value to savings balance when deposit button is clicked
$savingsDeposit.on('click', function (){
  // added $savingsAmountEntered to savings balance
  savingsBalance = savingsBalance += parseInt($savingsAmountEntered.val());
  //update screen to display new value
  $('#balance2').replaceWith(`<div>$${savingsBalance}</div>`);
  //add class and id back to ATM screen and add money background
  $('div #savingsAccount').removeClass('zero-background').addClass('money-background')
  $('#savingsAccount div').addClass('balance').attr('id', 'balance2');
  // clear the $savingsAmountEntered
  $savingsAmountEntered.val('');});


// decreases value of checking balance when withdraw button is clicked
$checkingWithdraw.on('click', function () {
  // decreases checking balance by $checkingAmountEntered
  // if currentBalance is greater the ammount to be decreased
  if (checkingBalance >= $checkingAmountEntered.val()) {
    checkingBalance = checkingBalance - $checkingAmountEntered.val()
  // take amount from checking balance then rest from savingsBalance
} else if ((checkingBalance + savingsBalance) >= $checkingAmountEntered.val()){
    let remainder = function (){
      return Math.abs(checkingBalance - $checkingAmountEntered.val())
    }
    let extra = remainder();
    checkingBalance -= checkingBalance;
    savingsBalance = savingsBalance - extra;
    // add new value to the html
    $('#balance2').replaceWith(`<div>$${savingsBalance}`);
    // add class and id back to the div
    $('#savingsAccount div').addClass('balance').attr('id', 'balance2');
  } else {
    console.log("Not enough money");
  };

  // places currentBalance into html
  if (checkingBalance === 0 && savingsBalance !== 0) {
    $('div #checkingAccount').removeClass('money-background').addClass('zero-background')
  } else if (checkingBalance === 0 && savingsBalance === 0) {
    $('div #checkingAccount').removeClass('money-background').addClass('zero-background')
    $('div #savingsAccount').removeClass('money-background').addClass('zero-background')
  }
  $('#balance1').replaceWith(`<div>$${checkingBalance}</div>`)–
  // add class and id back to div
  $('#checkingAccount div').addClass('balance').attr('id', 'balance1');
  //clears the enter amount input
  $checkingAmountEntered.val('');});


// decreases value of the savings balance when withdraw button is clicked
$savingsWithdraw.on('click', function (){
    // decrease value of savingsBalance when withdraw is clicked
    if (savingsBalance >= $savingsAmountEntered.val()) {
      savingsBalance = savingsBalance - $savingsAmountEntered.val()
    // take amount from checking balance then rest from savingsBalance
  } else if ((checkingBalance + savingsBalance) >= $savingsAmountEntered.val()){
      let remainder = function (){
        return Math.abs(savingsBalance - $savingsAmountEntered.val())
      }
      let extra = remainder();
      savingsBalance -= savingsBalance;
      checkingBalance = checkingBalance - extra;
      // add new value to the html
      $('#balance1').replaceWith(`<div>$${checkingBalance}`);
      // add class and id back to the div
      $('#checkingAccount div').addClass('balance').attr('id', 'balance1');
    } else {
      console.log("Not enough money");
    };

    if (savingsBalance === 0 && checkingBalance !== 0) {
      $('div #savingsAccount').removeClass('money-background').addClass('zero-background')
    } else if (checkingBalance === 0 && savingsBalance === 0){
      $('div #checkingAccount').removeClass('money-background').addClass('zero-background')
      $('div #savingsAccount').removeClass('money-background').addClass('zero-background')
    }
    // add new value to the html
    $('#balance2').replaceWith(`<div>$${savingsBalance}`);
    // add class and id back to the div
    $('#savingsAccount div').addClass('balance').attr('id', 'balance2');
    // clear the $savingsAmountEntered input
    $savingsAmountEntered.val('');
  });
