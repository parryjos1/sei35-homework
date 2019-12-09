
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

//inner HTML of checking amount entered by user.
var $checkingAmount = $('#checkingAmount');
var $checkingAmountHTML = $checkingAmount.html();

//inner HTML of amount entered by user
var $savingsAmount = $('#savingsAmount');
var $savingsAmountHTML = $savingsAmount.html();

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
atm.deposit("Checking",$checkingAmountHTML);

if ($balanceChecking.html() === 0) {
 $balanceChecking.css ("background", "red");
}
};

$checkingDepositButton.on("click", checkingDeposit);

//checking withdraw event listener

var checkingWithdraw = function() {
atm.withdraw("Checking",$checkingAmountHTML);

if ($balanceSavings.html() === 0) {
  $balanceSavings.css ("background", "red");
}
};

$checkingWithdrawButton.on("click",checkingWithdraw);

//Savings deposit button event listener



var savingsDeposit = function() {
atm.deposit("Savings",$savingsAmountHTML);

if ($balanceSavings.html() === 0) {
  $balanceSavings.css ("background", "red");
}
};

$savingsDepositButton.on("click",savingsDeposit);

//Savings withdraw button event listener


var savingsWithdraw = function() {
atm.withdraw("Savings",$savingsAmountHTML);
if ($balanceSavings.html() === 0) {

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
