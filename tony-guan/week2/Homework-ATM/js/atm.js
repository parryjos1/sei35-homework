
const bank = {

  balances: {
    checking: 100,
    savings: 300
  },

  deposit: function( accountType, amount ){
    console.log(`Depositing ${amount} into ${accountType}`);

    // if( accountType === 'checking' ){
    //   this.balances.checking += amount; // add the amount to the checking balance
    //   return this.balances.checking;
    // } else if( accountType === 'savings' ) {
    //   this.balances.savings += amount; // add the amount to the savings balance
    //   return this.balances.savings;
    // }

    // Use the string inside the variable called 'accountType' as the key of
    // the balances object; we add the deposit amount to this key's value.
    // NOTE this means we don't need any if-else blocks at all!
    this.balances[ accountType ] += amount;
    return this.balances[ accountType ];
  },

  // TODO:
  withdraw: function(accountType, amount){
  }

};


$('#checkingDeposit').on('click', function(){

  // Get the amount entered into the form, convert from a string
  // to a number, and save into a variable.
  const depositAmount = parseInt( $('#checkingAmount').val() );

  // Call the banking deposit method, telling it which account
  // to make the deposit into, and how much to deposit.
  // The method RETURNS the new balance, which we save into
  // a variable so we can update the DOM with it.
  const newBalance = bank.deposit( 'checking', depositAmount );

  // update the DOM with the value returned from the deposit method
  $('#balance1').html( '$' + newBalance );

});


// Initialise the DOM with the correct balances
// from inside our bank object
$('#balance1').html( '$' + bank.balances.checking );
$('#balance2').html( '$' + bank.balances.savings );




//method 2
// // Make sure the jQuery DOM queries are working...
// //
// // console.log('deposit button',  $('#checkingDeposit')  );
// // console.log('withdraw button', $('#checkingWithdraw') );
// //
//
//
// // The variables for storing the bank balances
// let checkingBalance = 100;
// let savingsBalance = 300;
//
// // Update the DOM from potentially non-0 starting balances
// $('#balance1').html('$' + checkingBalance);
// $('#balance2').html('$' + savingsBalance);
//
//
// const setBackgroundColours = function(){
//
//   if( checkingBalance > 0 ){
//     // All good, set BG to grey
//     $('#balance1').css('background-color', '#E3E3E3');
//   } else {
//     // No money, set to red
//     $('#balance1').css('background-color', 'red');
//   }
//   // Magical short version:
//   // $('#balance1').css(
//   //   'background-color',
//   //   checkingBalance > 0 ? '#E3E3E3' : 'red'
//   //   // check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//   // );
//
//   if( savingsBalance > 0 ){
//     // All good, set BG to grey
//     $('#balance2').css('background-color', '#E3E3E3');
//   } else {
//     // No money, set to red
//     $('#balance2').css('background-color', 'red');
//   }
//
// }; // setBackgroundColours()
//
//
//
//
// // This function does ALL the work of updating the UI, indiscriminately
// // setting the div contents for BOTH accounts, clearing the form inputs
// // for both, and call the function for updating the background colours
// // of both accounts
// const updateUI = function(){
//
//   $('#balance1').html('$' + checkingBalance);
//   $('#balance2').html('$' + savingsBalance);
//   $('#checkingAmount').val('');
//   $('#savingsAmount').val('');
//   setBackgroundColours();
//
// };
//
//
// // Event handler using a named function
// //
// // const handler = function(){
// //   console.log('deposit button clicked!');
// // };
// //
// // $('#checkingDeposit').on('click', handler );
//
//
// $('#checkingDeposit').on('click', function(){
//
//   // 1. get the amount that was entered in the text input
//   const enteredAmount = $('#checkingAmount').val();
//
//   // 2. add the entered amount to the total balance
//   checkingBalance = checkingBalance + parseInt(enteredAmount);
//   // checkingBalance += enteredAmount;
//   // console.log('new checking balance is:', checkingBalance );
//
//   // 3. Update the total balance figure displayed in the DOM
//   // document.getElementById('balance1').innerHTML = checkingBalance;
//   // $('#balance1').text( checkingBalance );
//
//   // $('#balance1').html( '$' + checkingBalance );
//   //
//   // // 4. Clear the contents of the form
//   // $('#checkingAmount').val('');
//   //
//   // setCheckingColour();
//   updateUI();
// });
//
//
//
// $('#checkingWithdraw').on('click', function(){
//
//   const enteredAmount = parseInt( $('#checkingAmount').val() );
//
//   // Under what conditions is the withdrawal allowed to proceed?
//   if( enteredAmount <= checkingBalance ){
//     checkingBalance = checkingBalance - enteredAmount;
//     // $('#balance1').html('$' + checkingBalance);
//     // $('#checkingAmount').val('');
//     // setCheckingColour();
//     updateUI();
//   } else {
//
//     // Check the special case where the requested amount CAN be withdrawn
//     // if we take some money from both accounts
//     if( enteredAmount <= (checkingBalance + savingsBalance) ){
//
//       const remainingAmount = enteredAmount - checkingBalance;
//       checkingBalance = 0;
//       savingsBalance  = savingsBalance - remainingAmount;
//       //
//       // $('#balance1').html('$' + checkingBalance);
//       // $('#balance2').html('$' + savingsBalance);
//       // $('#checkingAmount').val('');
//       // setCheckingColour();
//       updateUI();
//
//     } else {
//       // The withdrawal is impossible under any conditions
//       $('#title').html('Insufficient funds!');
//
//       window.setTimeout(function(){
//         // Wait three seconds before resetting the title
//         $('#title').html('Bank of GA');
//       }, 3000 );
//
//     }
//
//   } // else
//
// });
