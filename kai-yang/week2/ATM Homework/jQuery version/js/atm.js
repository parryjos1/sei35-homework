$(document).ready(function(){
  //set global variables
  var currentCheckingBalance = 0;
  var currentSavingsBalance = 0;
  var totalBalance = 0;
  // var totalBalance = currentCheckingBalance + currentSavingsBalance;
/// Only runs once

  // set functions
  // clear input box functions
  var clearInput = function(input){
    input.val('');
  };

  // set backgroundColor changing function
  const backgroundColorChange = function(){
    if (currentCheckingBalance > 0) {
      $('#checkingAccount').css('background-color', '#6C9A74');
    } else {
      $('#checkingAccount').css('background-color', 'red');
    }
    if (currentSavingsBalance > 0) {
      $('#savingsAccount').css('background-color', '#6C9A74');
    } else {
      $('#savingsAccount').css('background-color', 'red');
    }
  };

  //set display functions
  const updateUI = function(){
    $('#balance1').text(`$${currentCheckingBalance}`);
    $('#balance2').text(`$${currentSavingsBalance}`);
    backgroundColorChange();
  };

  // deposit functions
  const deposit = function(accountType, depositAccountInput){
    //reveive value from input
    var receivedDepositInput = parseInt(depositAccountInput.val());
    // check if input is number
    if (!isNaN(receivedDepositInput)){
      if( accountType === 'checking'){
        // add value into current balance
        currentCheckingBalance += receivedDepositInput;
        totalBalance = currentCheckingBalance + currentSavingsBalance;
        updateUI();
      }
      if( accountType === 'savings') {
        // add value into current balance
        currentSavingsBalance += receivedDepositInput;
        totalBalance = currentCheckingBalance + currentSavingsBalance;
        updateUI();
      }
    }
  }; // end

  // withdraw function
  const withdraw = function(accountType, withdrawAccountInput){
    //reveive value from input
    var receivedWithdrawInput = parseInt(withdrawAccountInput.val());
    //check if the input is number
    if (!isNaN(receivedWithdrawInput)) {
      //check if the total balance is overdue
      console.log(totalBalance)
      if (totalBalance >= receivedWithdrawInput){
        // console.log(totalBalance >= receivedWithdrawInput)
        if (accountType === 'checking') {
          var offset = receivedWithdrawInput - currentCheckingBalance;
          if (offset >= 0 ){
            currentCheckingBalance = 0;
            currentSavingsBalance -= offset;
            totalBalance = currentCheckingBalance + currentSavingsBalance;
            updateUI();
          } else {
            currentCheckingBalance -= receivedWithdrawInput;
            totalBalance = currentCheckingBalance + currentSavingsBalance;
            updateUI();
          }
        };
        if (accountType === 'savings') {
          var balanceOffset = receivedWithdrawInput - currentSavingsBalance;
          if (balanceOffset >= 0 ){
            currentSavingsBalance = 0;
            currentCheckingBalance -= balanceOffset;
            totalBalance = currentCheckingBalance + currentSavingsBalance;
            updateUI();
          } else {
            currentSavingsBalance -= receivedWithdrawInput;
            totalBalance = currentCheckingBalance + currentSavingsBalance;ßß
            updateUI();
          }
        };
      } else {
        $('#title').html('No sufficient Amount!');
        window.setTimeout(function(){
        $('#title').html('Bank of GA')
        }, 3000);
      };//check totalBalance end
    };//check number if end
  };//withdraw function end

  //call events
  // call deposit functions
  $('#checkingDeposit').on('click', function(){
    deposit('checking', $('#checkingAmount'));
    clearInput($('#checkingAmount'));
  });
  $('#savingsDeposit').on('click', function(){
    deposit('savings', $('#savingsAmount'));
    clearInput($('#savingsAmount'));
  });
  //call withdraw functions
  $('#checkingWithdraw').on('click', function(){
    withdraw('checking', $('#checkingAmount'));
    clearInput($('#checkingAmount'));
  });
  $('#savingsWithdraw').on('click', function(){
    withdraw('savings', $('#savingsAmount'));
    clearInput($('#savingsAmount'));
  });
});//window end
