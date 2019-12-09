const bank = {

  account : {

    savings: 200,
    checking: 150

  },

  deposit : function ( accountType, amount ) {

    this.account[accountType] += amount;

  }, // end of deposit

  findAccountTotal : function () {

    const accountTotal = this.account.savings + this.account.checking;
    return accountTotal;

  }, // end of findAccountTotal

  findOverdrawAccount : function ( amount, accountType ) {

    if ( accountType === `savings`) {

      overdrawAccount = `checking`;

    } else {

      overdrawAccount = `savings`;

    };

  }, // end of findOverdrawAccount

  withdraw : function ( accountType, amount ) {

    const total = this.findAccountTotal();
    // console.log(total);
    if ( amount > total ) {

      this.errorInsufficientFunds();

    } else if ( amount > this.account[accountType] ) {

      this.findOverdrawAccount( amount, accountType );
      amount -= this.account[accountType];
      this.account[accountType] = 0;
      this.account[overdrawAccount] -= amount;

    } else {

      this.account[accountType] -= amount;

    };

  }, // end of withdraw

  errorInsufficientFunds : function () {

    $('#errorBox').html(`ERROR - INSUFFICIENT FUNDS - WITHDRAW LESS THAN $${this.findAccountTotal()}`);
    $('#errorBox').fadeIn(250).delay(2000).fadeOut(500);

  }, // end of errorInsufficientFunds

  banking: function ( transactionType, accountType, amount ) {

    if (transactionType === `deposit`) {
      this.deposit( accountType, amount );
    } else {
      this.withdraw( accountType, amount );
    }
  }, // end of banking

}; // end of bank
