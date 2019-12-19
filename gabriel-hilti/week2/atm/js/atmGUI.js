$(document).ready(function() {
  const bankGui = {

    checking: {
            checkingBalance: $('#balance1'),
            checkingAmount: $('#checkingAmount'),
            checkingDeposit: $('#checkingDeposit'),
            checkingWithdraw: $('#checkingWithdraw')
    },

    savings: {
            savingsBalance: $('#balance2'),
            savingsAmount: $('#savingsAmount'),
            savingsDeposit: $('#savingsDeposit'),
            savingsWithdraw: $('#savingsWithdraw')
    },

    messages: {
            checkingMessage: null,
            savingsMessage: null
    },

    init: function() {
      this.checking.checkingBalance.html(`$${bank.balance.checking}`);
      this.savings.savingsBalance.html(`$${bank.balance.savings}`);

      this.messages.checkingMessage = $('<p id="msg1"></p>').insertBefore(this.checking.checkingBalance);
      this.messages.savingsMessage = $('<p id="msg1"></p>').insertBefore(this.savings.savingsBalance);


      $('#checkingAccount').css('backgroundColor', bank.balance.checking > 0 ? '#6C9A74' : '#e04a47');
      $('#savingsAccount').css('backgroundColor', bank.balance.savings > 0 ? '#6C9A74' : '#e04a47');

      this.eventHandler( this.savings.savingsDeposit,
                    this.savings.savingsAmount,
                    'deposit',
                    'savings',
                    [[this.savings.savingsBalance, 'savingsBalance']]
      );

      this.eventHandler( this.savings.savingsWithdraw,
                    this.savings.savingsAmount,
                    'withdraw',
                    'savings',
                    [[this.savings.savingsBalance, 'savingsBalance'], [this.checking.checkingBalance, 'checkingBalance']]
      );

      this.eventHandler( this.checking.checkingDeposit,
                    this.checking.checkingAmount,
                    'deposit',
                    'checking',
                    [[this.checking.checkingBalance, 'checkingBalance']]
      );

      this.eventHandler( this.checking.checkingWithdraw,
                    this.checking.checkingAmount,
                    'withdraw',
                    'checking',
                    [[this.checking.checkingBalance, 'checkingBalance'], [this.savings.savingsBalance, 'savingsBalance']]
      );
    },

    returnBalance: function($account) {
      // transmits input amount as integer value if it's valid
      const regex = /[^0-9]/g; // not a number between 0-9
      const amount = $account.val();
      if (amount.match(regex)) {
        return 0;
      }
      return parseInt(amount);
    },

    eventHandler: function(account, amountRef, accountOption, accountType, balance) {
      account.on('click', () => { // arrow function to bind this to bankGui and not to the account DOM object
        const amount = this.returnBalance(amountRef);
        this.printMessage(accountType, bank[accountOption](amount, accountType));
        for (const item of balance) {
          item[0].html(`$${bank[item[1]]}`);
          let color = '#e04a47';
          if (accountOption === 'withdraw' && bank[item[1]] === 0) {
            color = '#e04a47';
          } else if (bank[item[1]] > 0){
            color = '#6C9A74'
          }
          $(`#${item[1].replace('Balance', 'Account')}`).css('backgroundColor', color);
        }

      });
    },

    printMessage: function(sort, message) {
      if (sort === 'checking') {
        this.messages.checkingMessage.html(message);
      }
      else if (sort === 'savings') {
        this.messages.savingsMessage.html(message);
      }
    }

  };

  bankGui.init();

  // $savingsDeposit.on('click', function() {
  //   const amount = returnBalance($savingsAmount);
  //   bank.deposit(amount, 'savings');
  //   $savingsBalance.html(`$${bank.savingsBalance}`);
  // });
  //
  // $savingsWithdraw.on('click', function() {
  //   const amount = returnBalance($savingsAmount);
  //   bank.withdraw(amount, 'savings');
  //   $savingsBalance.html(`$${bank.savingsBalance}`);
  //   $checkingBalance.html(`$${bank.checkingBalance}`);
  // });
  //
  // $checkingDeposit.on('click', function() {
  //   const amount = returnBalance($checkingAmount);
  //   bank.deposit(amount, 'checking');
  //   $checkingBalance.html(`$${bank.checkingBalance}`);
  // });
  //
  // $checkingWithdraw.on('click', function() {
  //   const amount = returnBalance($checkingAmount);
  //   bank.withdraw(amount, 'checking');
  //   $checkingBalance.html(`$${bank.checkingBalance}`);
  //   $savingsBalance.html(`$${bank.savingsBalance}`);
  // });

});
