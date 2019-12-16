$(document).ready( function () { // load after bank.js is loaded

  let $checkingBalance = $('#balance1');
  let $savingsBalance = $('#balance2');
  $checkingBalance.html( `$` + bank.account.checking );
  $savingsBalance.html( `$` + bank.account.savings );

  const checkInput = function ( input ) {

    console.log(input);

    if ( input > true ) {

      // updateUI();
      let result = input
      return result

    } else {

      errorBadInput();

    };

  };

  const errorBadInput = function () {

    $('#errorBox').html(`ERROR - YOU MUST ENTER A DOLLAR AMOUNT OF $1 OR HIGHER`);
    $('#errorBox').fadeIn(250).delay(2000).fadeOut(500);
    // $('#errorBox').toggle().fadeOut(500).delay(3000);  // why did this have no delay the first time?
    updateUI();

  };

  $('#checkingDeposit').on('click', function () {

    let input = ( parseInt( $('#checkingAmount').val() ) );

    if ( input > 0 ) {
      bank.deposit( `checking`, input  );
      updateUI();

    } else {

      errorBadInput();

    };

  } ); // end of checkingDeposit

  $('#savingsDeposit').on('click', function () {

    let input = parseInt( $('#savingsAmount').val() );

    if ( input > 0 ) {
      bank.deposit( `savings`, input );
      updateUI();

    } else {

      errorBadInput();

    };

  } ); // end of savingsDeposit

  $('#checkingWithdraw').on('click', function () {

    let input = parseInt( $('#checkingAmount').val() )

    if (input > 0) {

      bank.withdraw( `checking`, input );
      updateUI();

    } else {

        errorBadInput();

    };
  }); // end of checkingWithdraw

  $('#savingsWithdraw').on('click', function () {

    let input = parseInt( $('#savingsAmount').val() )

    if (input > 0) {

      bank.withdraw( `savings`, input );
      updateUI();

    } else {

        errorBadInput();

    };
  }); // end of savingsWithdraw

  const updateUI = function () {

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

  }; // end of updateUI

  updateUI();

}); // end of document.ready
