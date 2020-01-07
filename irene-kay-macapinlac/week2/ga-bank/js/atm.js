let startingChBalance = 0;
let startingSavBalance = 0;

if ( startingChBalance  <= 0 && startingSavBalance  <= 0) {
  $('#checkingAccount').css({'background-color': 'red'});
  $('#savingsAccount').css({'background-color': 'red'});
};


//Add functionality so that a user can deposit money - CHECK ACCOUNT
$('#checkingDeposit').on('click', function(){

  const chAmount = parseInt($('#checkingAmount').val());//Get the current value of the first element in the set of matched elements or set the value of every matched element.

  startingChBalance = startingChBalance + chAmount;

  $('#balance1.balance').text(`$${startingChBalance}`);

  if ( $('#balance1.balance').text() > '$0' ) {
    $('#checkingAccount').css({'background-color': 'grey'});
  } else {
    $('#checkingAccount').css({'background-color': 'red'});
  }
  });


//Add functionality so that a user can deposit money - SAVINGS ACCOUNT
$('#savingsDeposit').on('click', function(){
  //console.log('i click'); // test
  const savAmount = parseInt($('#savingsAmount').val());//Get the current value of the first element in the set of matched elements or set the value of every matched element.

  startingSavBalance = startingSavBalance + savAmount;
  $('#balance2').text(`$${startingSavBalance}`);


  //change color to 'red' when balance is 0 and grey to a positive amount
  if ( startingSavBalance > 0) {
    $('#savingsAccount').css({'background-color': 'grey'});
  };

  //change to number (parseInt???) then +
  });


//Add functionality so that a user can withdraw money from one of the bank accounts.
$('#checkingWithdraw').on('click', function(){

  const chWithdraw = parseInt($('#checkingAmount').val());
  // console.log(chWithdraw); //test

  startingChBalance = startingChBalance - chWithdraw;

  $('#balance1.balance').text(`$${startingChBalance}`);

  });

  //

  $('#savingsWithdraw').on('click', function(){

    const savWithdraw = parseInt( $('#savingsAmount').val() );

    startingSavBalance = startingSavBalance - savWithdraw;

    $('#balance2').text(`$${startingSavBalance}`);

//overdraft protection

//    if (savWithdraw > startingSavBalance &&  <= savWithdraw
//      ( startingChBalance + startingSavBalance )
//    ) { console.log(working);
// };

    });
