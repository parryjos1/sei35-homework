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
