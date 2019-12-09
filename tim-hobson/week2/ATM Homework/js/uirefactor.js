$(document).ready( function () { // load after bank.js is loaded

  let $checkingBalance = $('#balance1');
  let $savingsBalance = $('#balance2');

  $checkingBalance.html( `$` + bank.account.checking );
  $savingsBalance.html( `$` + bank.account.savings );

  $('#checkingDeposit').on('click', function () {
      if ( parseInt( $('#checkingAmount').val() ) > 0 ) { // must be a number above 1, this also returns false if is a letter/not a numberic character
        bank.deposit( `checking`, parseInt( $('#checkingAmount').val() ) );
        checkForZero();

      } else {

        checkForZero();
        $('#errorBox').html(`error - you must enter a dollar amount of $1 or higher!`)
        $('#errorBox').fadeIn(250).delay(2000).fadeOut(500);

      }
  } ); // end of checkingDeposit

  $('#savingsDeposit').on('click', function () {
    if ( parseInt( $('#savingsAmount').val() ) > 0 ) { // must be a number above 1, this also returns false if is a letter/not a numberic character
      bank.deposit( `savings`, parseInt( $('#savingsAmount').val() ) );
      checkForZero();

    } else {

      checkForZero();
      $('#errorBox').html(`error - you must enter a dollar amount of $1 or higher!`)
      // $('#errorBox').toggle().fadeOut(500).delay(3000);  // why did this have no delay the first time?
      $('#errorBox').fadeIn(250).delay(4000).fadeOut(500);

    }
  } ); // end of savingsDeposit

  $('#checkingWithdraw').on('click', function () {
      bank.withdraw( `checking`, parseInt( $('#checkingAmount').val() ) );
      checkForZero();
      console.log(errorWithdraw)
  } ); // end of checkingWithdraw

  $('#savingsWithdraw').on('click', function () {
      bank.withdraw( `savings`, parseInt( $('#savingsAmount').val() ) );
      checkForZero();
  } ); // end of savingsWithdraw

  checkForZero();

}); // end of document.ready

const checkForZero = function () { // to update the dollar amounts and make red if $0

  if (bank.account.checking === 0) {

    $('#balance1').css({"background-color": "red", "border": "1px solid red"});

    } else {

      $('#balance1').css({"background-color": "#E3E3E3", "border": "1px solid #676767"});

    };

  if (bank.account.savings === 0) {

    $('#balance2').css({"background-color": "red", "border": "1px solid red"});

    } else {

      $('#balance2').css({"background-color": "#E3E3E3", "border": "1px solid #676767"});

  };

  let $checkingBalance = $('#balance1');
  let $savingsBalance = $('#balance2');
  $('#checkingAmount').val('');
  $('#savingsAmount').val('');


  $checkingBalance.html( `$` + bank.account.checking );
  $savingsBalance.html( `$` + bank.account.savings );

}; // end of checkForZero
