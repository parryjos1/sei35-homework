let checkingBalance = 0;
let savingsBalance = 0;


$(document).ready(function (){
	$('#checking-deposit').click(depositChecking);
	$('#checking-withdraw').click(withdrawChecking);
	$('#savings-deposit').click(depositSaving);
	$('#savings-withdraw').click(withdrawSaving);
});


let depositSaving = function () {
	let savingsAmount = $('#savings-amount').val();
	savingsAmount = parseInt(savingsAmount);
	savingsBalance += savingsAmount;

	$('.savings-balance').text('$' + savingsBalance);

	warningDisplay();
	clearInputs();
  greyDisplay();
}

let depositChecking = function() {
	let checkingAmount = $('#checking-amount').val();
	checkingAmount = parseInt(checkingAmount);
  checkingBalance += checkingAmount;

	$('.checking-balance').text('$' +checkingBalance);

	warningDisplay();
	clearInputs();
  greyDisplay();
}

let withdrawSaving = function(){
	let savingsAmount = $('#savings-amount').val();
	savingsAmount = parseInt(savingsAmount);

	let totalBalance = withdrawingProcess(savingsAmount, savingsBalance, checkingBalance); //value1: savingsBalance
	savingsBalance = totalBalance[0];
	checkingBalance = totalBalance[1];

	$('.checking-balance').text('$' +checkingBalance);
	$('.savings-balance').text('$' +savingsBalance);

	warningDisplay();
	clearInputs();
  greyDisplay();
};

let withdrawChecking = function() {

	let checkingAmount = $('#checking-amount').val();
	checkingAmount = parseInt(checkingAmount);

	let totalBalance = withdrawingProcess(checkingAmount, checkingBalance, savingsBalance); //value1: checkingBalance
	checkingBalance = totalBalance[0];
	savingsBalance = totalBalance[1];

	$('.checking-balance').text('$' +checkingBalance);
	$('.savings-balance').text('$' +savingsBalance);

	warningDisplay();
	clearInputs();
  greyDisplay();
}
////////////////////////////////////////////////////////////
let withdrawingProcess = function(amount, value1, value2) {

	//Process 1: Check saving/checking amount > 0 and do normal withdrawing
	if (value1 >= amount) {
		value1 -= amount;
	} else if ((value1 + value2) >= amount) {
			var remainingAmount = value1 - amount;
			value1 = 0;
			value2 += remainingAmount;
		} else {
			alert("Sorry, you have not enough money to withdraw from both accounts with this amount $" + amount);
		}

  return [value1, value2];

}

let warningDisplay = function() {

	if (savingsBalance === 0){
		$('.savings-balance').addClass("zero");
	} else {
		$('.savings-balance').removeClass("zero");
	}

	if (checkingBalance === 0){
		$('.checking-balance').addClass("zero");
	} else {
		$('.checking-balance').removeClass("zero");
	}
}

let greyDisplay = function() {

	if (savingsBalance > 0){
		$('.savings-balance').addClass("money-background");
	} else {
		$('.savings-balance').removeClass("money-background");
	}

	if (checkingBalance > 0){
		$('.checking-balance').addClass("money-background");
	} else {
		$('.checking-balance').removeClass("money-background");
	}
}

let clearInputs = function() {
	$('#savings-amount').val("");
	$('#checking-amount').val("");
}
