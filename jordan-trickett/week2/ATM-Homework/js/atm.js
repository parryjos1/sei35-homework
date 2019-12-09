$(document).ready( function() {
  console.log('dom loaded');


  $('#checkingDeposit').on('click', function( eve ){
    // console.log( eve );

    // console.log(updateUI());

    $checkingDeposit = parseInt($('#checkingAmount').val(), 10);


    // console.log($checkingDeposit);
    //above works, returns string saves amount into variable

    bank.deposit('checking', $checkingDeposit)
    //calling function

    // updateUI('checking');

    updateUI();

    // let checkingBalance = bank.accounts.checking
    // //
    //
    // $('#balance1').html('$' + (checkingBalance));
    // //updating balance gui
    //
    // if (checkingBalance > 0) {
    //   $('#checkingAccount').css('backgroundColor', 'green');
    // }; //updating background


  }); //deposit checking


  $('#checkingWithdraw').on('click', function( eve ){
    // console.log( eve );

    $checkingWithdraw = parseInt($('#checkingAmount').val(), 10);

    // console.log($checkingWithdraw);
    //above works, returns string saves amount into variable

    bank.withdrawal('checking', $checkingWithdraw)
    //calling function, 2 arguments

    // updateUI('checking');

    updateUI();

    // let checkingBalance = bank.accounts.checking
    //
    // $('#balance1').html('$' + (checkingBalance));
    // //updating balance gui
    //
    // if (checkingBalance <= 0) {
    //   $('#checkingAccount').css('backgroundColor', 'red');
    // }; // changing background color

  }); //withdrawal checking


  $('#savingsDeposit').on('click', function( eve ){
    // console.log( eve );

    $savingsDeposit = parseInt($('#savingsAmount').val(), 10);

    // console.log($savingsDeposit);
    //above works, returns string saves amount into variable

    bank.deposit('savings', $savingsDeposit)
    //calling function

    // updateUI('savings');

    updateUI();

    // let savingsBalance = bank.accounts.savings
    // //
    //
    // $('#balance2').html('$' + (savingsBalance));
    // //updating balance gui
    //
    // if (savingsBalance > 0) {
    //   $('#savingsAccount').css('backgroundColor', 'green');
    // }; //updating background


  }); //deposit savings


  $('#savingsWithdraw').on('click', function( eve ){
    // console.log( eve );

    $savingsWithdraw = parseInt($('#savingsAmount').val(), 10);

    // console.log($savingsWithdraw);
    //above works, returns string saves amount into variable

    bank.withdrawal('savings', $savingsWithdraw)
    //calling function, 2 arguments

    // updateUI('savings');

    updateUI();

    // let savingsBalance = bank.accounts.savings
    //
    // $('#balance2').html('$' + (savingsBalance));
    // //updating balance gui
    //
    // if (savingsBalance <= 0) {
    //   $('#savingsAccount').css('backgroundColor', 'red');
    // }; // changing background color

  }); //withdrawal checking

  const updateUI = function () {

    for (let key in bank.accounts) {

      let currentBalance = bank.accounts[key];

          if (key === 'checking') {

            $('#balance1').html('$' + (currentBalance));

            if (currentBalance > 0) {
              $('#checkingAccount').css('backgroundColor', 'green');
              //should update both accounts divs
            } else {
              $('#checkingAccount').css('backgroundColor', 'red');
            };//update color


          } else if (key === 'savings') {

              $('#balance2').html('$' + (currentBalance));

              if (currentBalance > 0) {
                $('#savingsAccount').css('backgroundColor', 'green');
                //should update both accounts divs
              } else {
                $('#savingsAccount').css('backgroundColor', 'red');
              };//update color

            }; //updating balance gui

    }; //for loop
  }; //updateU2


}); // DOM ready








// const accountColor = function () {
  //
  //   for (let key in bank.accounts) {
    //
    //     let currentBalance = bank.accounts[key]
    //
    //     if (currentBalance > 0) {
      //       $('#checkingAccount').css('backgroundColor', 'green');
      //       //should update both accounts divs
      //     } else {
        //       $('#checkingAccount').css('backgroundColor', 'red');
        //     };//update color
        //
        //   }
        //
        // }







        // $.fn.updateUI = function(){
          //       ;
          //   }



          // $(".call-btn").click(function(){
            //     $.fn.myFunction();
            // });
