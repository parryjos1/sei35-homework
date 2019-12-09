$(document).ready( function () { // load after bank.js loaded

  // let $checkingBalance = $('#balance1');
  // let $savingsBalance = $('#balance2');
  // $checkingBalance.html( `$` + bank.account.checking );
  // $savingsBalance.html( `$` + bank.account.savings );

  const $checkingBalanceInput = parseInt( $('#checkingAmount').val() );
  const $savingsBalanceInput = parseInt( $('#savingsAmount').val() );
  const $checkingBalance = $('#balance1'); // i dont know if these are all needed here.
  const $savingsBalance = $('#balance2');
  $checkingBalance.html( `$` + bank.account.checking );
  $savingsBalance.html( `$` + bank.account.savings );

  const badInputError = function () {

    $('#errorBox').html(`ERROR - ENTER A VALID AMOUNT OF $1 OR MORE`)
    $('#errorBox').fadeIn(250).delay(2000).fadeOut(500);
  }

  const updateUI = function () {

    if (bank.account.checking === 0) { // might be a way to slim this down?
      $('#balance1').css({"background-color": "red", "border": "1px solid red"});

      } else {

        $('#balance1').css({"background-color": "#E3E3E3", "border": "1px solid #676767"});

      };

    if (bank.account.savings === 0) {

      $('#balance2').css({"background-color": "red", "border": "1px solid red"});

      } else {

        $('#balance2').css({"background-color": "#E3E3E3", "border": "1px solid #676767"});

    };

    // $('#checkingAmount').val('');
    // $('#savingsAmount').val('');

  }; // end of updateUI

  updateUI();

  const checkInput = function ( ) {

    if ( parseInt( $('#checkingAmount').val() ) > 0 ) { // must be a number above 1, this also returns false if is a letter/not a numberic character
      return amount

    } else {

      badInputError();

    };

  }; // end of checkInput


// test with checkinput - try get to work with above function
  $('#checkingDeposit').on('click', function () {

      checkInput();

    // console.log( $checkingBalanceInput );
      // if ( parseInt( $('#checkingAmount').val() ) > 0 ) { // must be a number above 1, this also returns false if is a letter/not a numberic character
        bank.banking( `deposit`, `checking`, parseInt( $('#checkingAmount').val() ) );
        updateUI();

      } else {

        updateUI();
        $('#errorBox').html(badInputError)
        $('#errorBox').fadeIn(250).delay(2000).fadeOut(500);

      }
  } ); // end of checkingDeposittest
  //
  // $('#savingsDeposit').on('click', function () {
  //   if ( parseInt( $('#savingsAmount').val() ) > 0 ) { // must be a number above 1, this also returns false if is a letter/not a numberic character
  //     bank.banking( `deposit`,  `savings`, parseInt( $('#savingsAmount').val() ) );
  //     updateUI();
  //
  //   } else {
  //
  //     updateUI();
  //     $('#errorBox').html(`error - you must enter a dollar amount of $1 or higher!`)
  //     // $('#errorBox').toggle().fadeOut(500).delay(3000);  // why did this have no delay the first time?
  //     $('#errorBox').fadeIn(250).delay(4000).fadeOut(500);
  //
  //   }
  // } ); // end of savingsDeposit
  //
  // $('#checkingWithdraw').on('click', function () {
  //     bank.banking( `withdraw`, `checking`, parseInt( $('#checkingAmount').val() ) );
  //     $('#errorBox').html( )
  //
  //     console.log( error );
  //     updateUI();
  // } ); // end of checkingWithdraw
  //
  // $('#savingsWithdraw').on('click', function () {
  //     bank.banking( `withdraw`, `savings`, parseInt( $('#savingsAmount').val() ) );
  //     updateUI();
  // } ); // end of savingsWithdraw
  //
  // updateUI();

}); // end of document.ready
