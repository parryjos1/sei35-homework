
// Checking:
//
// when user enters amount on checking - grab that amount.
//
// if clicks deposit button on checking - run the deposit function with checking as argument and amount entered.
//
// if clicks withdraw button - run the withdraw function with checking as argument and amount entered.
//
// append new amount to inner html of balance.

// if balance is 0, turn red.
// if balance is >0, turn grey.

//input field checking
var $checkingAmount = $('#checkingAmount');

//input field savings
var $savingsAmount = $('#savingsAmount');

//checking deposit button.
var $checkingDepositButton = $('#checkingDeposit');

//withdraw button of checking.
var $checkingWithdrawButton = $('#checkingWithdraw');

//deposit button of savings.
var $savingsDepositButton = $('#savingsDeposit');

//withdraw button of savings.
var $savingsWithdrawButton = $('#savingsWithdraw');

//Balance amount div - Checking account
var $balanceChecking = $("#balance1");

//Balance amount div - Checking account.
var $balanceSavings = $("#balance2");


$balanceSavings.html(atm.Savings);

$balanceChecking.html(atm.Checking);

//checking deposit event listener:

var checkingDeposit = function() {
  var checkingAmountText = parseInt( $checkingAmount.val() );
  atm.deposit("Checking", checkingAmountText);

  $balanceChecking.html(atm.Checking);
  $balanceSavings.html(atm.Savings);

  if ( parseInt($balanceChecking.html() )  === 0) {
    $balanceChecking.css ("background-color", "red");
  }
};

$checkingDepositButton.on("click", checkingDeposit);

//checking withdraw event listener

var checkingWithdraw = function() {

  var $checkingAmountText = parseInt( $checkingAmount.val() );
  atm.withdraw("Checking",$checkingAmountText);

  $balanceChecking.html(atm.Checking);
  $balanceSavings.html(atm.Savings);

  if ( parseInt( $balanceChecking.html() ) === 0) {
  $balanceSavings.css ("background-color", "red");
  }
};

$checkingWithdrawButton.on("click",checkingWithdraw);

//Savings deposit button event listener



var savingsDeposit = function() {
  var $savingsAmountText = parseInt( $savingsAmount.val() );
  atm.deposit("Savings",$savingsAmountText);

  $balanceChecking.html(atm.Checking);
  $balanceSavings.html(atm.Savings);

  if ( parseInt( $balanceSavings.html() ) === 0 ) {
  $balanceSavings.css ("background-color", "red");
  }
};

$savingsDepositButton.on("click",savingsDeposit);

//Savings withdraw button event listener


var savingsWithdraw = function() {

  var $savingsAmountText = parseInt( $savingsAmount.val() );
  atm.withdraw("Savings",$savingsAmountText);

  $balanceChecking.html(atm.Checking);
  $balanceSavings.html(atm.Savings);

  if ( parseInt( $balanceSavings.html() ) === 0 ) {
    $balanceSavings.css ("background-color", "red");
  }
};

$savingsWithdrawButton.on("click",savingsWithdraw);

//
// Savings:
//
// when user enters amount on checking - grab that amount.
//
// if clicks deposit button on savings - run the deposit function with Savings as argument and amount entered.
//
// if clicks withdraw button - run the withdraw function with checking as argument and amount entered.
//
// append new amount to inner html of balance.
//
// if balance is 0, turn red.
// if balance is >0, turn grey.
