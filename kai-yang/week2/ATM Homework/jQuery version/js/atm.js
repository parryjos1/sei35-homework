$(document).ready(function(){
  console.log('ready!')
  //set global variables
  const $clearButton = $('#clearButton');
  // const accountBox = document.querySelector('.account');

  //for checking account
  const $checkingInput = $('#checkingAmount');
  const $balance1 = $('#balance1');
  const $checkingBox = $('#checkingAccount');

  //for savings account
  const $savingsInput = $('#savingsAmount');
  const $balance2 = $('#balance2');
  const $savingsBox = $('#savingsAccount');

  //checking buttons
  const $checkingDepositButton = $('#checkingDeposit');
  const $checkingWithdrawButton = $('#checkingWithdraw');

  //savings buttons
  const $savingsDepositButton = $('#savingsDeposit');
  const $savingsWithdrawButton = $('#savingsWithdraw');

  //initial balance for checking and savings
  var currentCheckingBalance = 0;
  var currentSavingsBalance = 0;
  // var totalBalance = currentCheckingBalance + currentSavingsBalance;


  // set functions
  // clear input box functions
  var clearInput = function(input){
    input.value = '';
  };

  // deposit functions
  var deposit = function(depositAccountInput, currentBalanceDeposit, balanceDisplayDeposit){
    //reveive value from input
    var receivedDepositInput = parseInt(depositAccountInput.value);
    // add value into current balance
    currentBalanceDeposit += receivedDepositInput;
    // change the display of balance
    balanceDisplayDeposit.innerText = '$' + currentBalanceDeposit;
  };


  // withdraw functions
  var withdraw = function(withdrawAccountInput, currentBalanceWithdraw, balanceDisplayWithdraw, anotherBalance, anotherBalanceDisplay){
    //reveive value from input
    var receivedWithdrawInput = parseInt(withdrawAccountInput.value);
    var offset = currentBalanceWithdraw - receivedWithdrawInput;
    if(offset >= 0){
      //add value into current balance
      currentBalanceWithdraw -= receivedWithdrawInput;
      //change the display of balance
      balanceDisplayWithdraw.innerText = '$' + currentBalanceWithdraw;
    }
    else {
      currentBalanceWithdraw = 0;
      balanceDisplayWithdraw.innerText = '$0';
      anotherBalance -= Math.abs(offset);
      anotherBalanceDisplay.innerText = '$' + anotherBalance;
      offset = 0;
      withdrawAccountInput.value = '';
    }
  }



  //call events
  $checkingDepositButton.on('click', deposit($checkingInput, currentCheckingBalance, $balance1), clearInput($checkingInput) );

  $checkingWithdrawButton.on('click', withdraw($checkingInput, currentCheckingBalance, $balance1, currentSavingsBalance, $balance2), clearInput($checkingInput) );





  // //calculation function for checking Deposit
  // const checkingBalanceDeposit = function(){
  //   //reveive value from input
  //   var receivedCheckingInput = parseInt(checkingEnterAmount.value);
  //   //add value into currentCheckingBalance
  //   currentCheckingBalance += receivedCheckingInput;
  //   //return totalbalance to #balance1
  //   balance1.innerText = '$' + currentCheckingBalance;
  //   //clear input box.
  //   checkingEnterAmount.value = '';
  //   checkingBox.style.backgroundColor = '#6C9A74';
  // };//checkingBalanceDeposit end
  //
  // //calculation function for savings Deposit
  // const savingsBalanceDeposit = function(){
  //   //reveive value from input
  //   var receivedSavingsInput = parseInt(savingsEnterAmount.value);
  //   //add value into currentCheckingBalance
  //   currentSavingsBalance += receivedSavingsInput;
  //   //return totalbalance to #balance1
  //   balance2.innerText = '$' + currentSavingsBalance;
  //   //clear input box.
  //   savingsEnterAmount.value = '';
  //   savingsBox.style.backgroundColor = '#6C9A74';
  // };//savingsBalanceDeposit end
  //
  // // // total balance variables
  // // var totalBalance = currentCheckingBalance + currentSavingsBalance;
  // // if (totalBalance < parseInt(checkingEnterAmount.value) && totalBalance < parseInt(savingsEnterAmount.value)) {
  // //   checkingBox.style.backgroundColor = 'rgb(244, 26, 26)';
  // //     savingsBox.style.backgroundColor = 'rgb(244, 26, 26)';
  // //     checkingEnterAmount.value = '';
  // //     savingsEnterAmount.value = '';
  // // };
  //
  // //if statement for total balance to check if the total balance is overdue
  //
  // //calculation function for checking Withdraw
  // const checkingBalanceWithdraw = function(){
  //   //reveive value from input
  //   var receivedCheckingInput = parseInt(checkingEnterAmount.value);
  //
  //   var offsetFromChecking = currentCheckingBalance - receivedCheckingInput;
  //   if(offsetFromChecking >= 0){
  //     //add value into currentCheckingBalance
  //     currentCheckingBalance -= receivedCheckingInput;
  //     checkingBox.style.backgroundColor = '#6C9A74';
  //     //return totalbalance to #balance1
  //     balance1.innerText = '$' + currentCheckingBalance;
  //     //clear input box.
  //     checkingEnterAmount.value = '';
  //   }
  //   else {
  //     currentCheckingBalance = 0;
  //     balance1.innerText = '$0';
  //     currentSavingsBalance -= Math.abs(offsetFromChecking);
  //     balance2.innerText = '$' + currentSavingsBalance;
  //     offsetFromChecking = 0;
  //     checkingBox.style.backgroundColor = 'rgb(242, 240, 18)';
  //     checkingEnterAmount.value = '';
  //   }
  // };//checkingBalanceWithdraw end
  //
  // //calculation function for savings Withdraw
  // const savingsBalanceWithdraw = function(){
  //   //reveive value from input
  //   var receivedSavingsInput = parseInt(savingsEnterAmount.value);
  //
  //   var offsetFromSavings = currentSavingsBalance - receivedSavingsInput;
  //
  //   if(offsetFromSavings >= 0){
  //     //add value into currentSavingsBalance
  //     currentSavingsBalance -= receivedSavingsInput;
  //     checkingBox.style.backgroundColor = '#6C9A74';
  //     //return totalbalance to #balance1
  //     balance2.innerText = '$' + currentSavingsBalance;
  //     //clear input box.
  //     savingsEnterAmount.value = '';
  //   }
  //   else {
  //     currentSavingsBalance = 0;
  //     balance2.innerText = '$0';
  //     currentCheckingBalance -= Math.abs(offsetFromSavings);
  //     balance1.innerText = '$' + currentCheckingBalance;
  //     offsetFromSavings = 0;
  //     savingsBox.style.backgroundColor = 'rgb(242, 240, 18)';
  //     savingsEnterAmount.value = '';
  //   }
  // };//savingsBalanceWithdraw end
  //
  // //clear-button clears input and balance.
  // const clear = function(){
  //   //checking account
  //   balance1.innerText = '$0';
  //   currentCheckingBalance = 0;
  //   checkingEnterAmount.value = '';
  //   checkingBox.style.backgroundColor = '#6C9A74';
  //   //saving account
  //   balance2.innerText = '$0';
  //   currentSavingsBalance = 0;
  //   savingsEnterAmount.value = '';
  //   savingsBox.style.backgroundColor = '#6C9A74';
  // };//clear end
  //
  // //call event
  // clearButton.addEventListener('click', clear);
  // //checking account
  // checkingDepositButton.addEventListener('click', checkingBalanceDeposit);
  // checkingWithdrawButton.addEventListener('click', checkingBalanceWithdraw);
  // //savings account
  // savingsDepositButton.addEventListener('click', savingsBalanceDeposit);
  // savingsWithdrawButton.addEventListener('click', savingsBalanceWithdraw);

});//window end
