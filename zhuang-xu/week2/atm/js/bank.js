const account = function(type, initialBalance = 0) {
  this.type = type;
  this.balance = initialBalance;
};

account.prototype.deposit = function(amount) {
  this.balance += amount;
};

account.prototype.withdraw = function(amount) {
  this.balance -= amount;
};

const bank = {
  accounts: [
    new account('checking', 250),
    new account('savings', 300),
  ],

  account: function(type) {
    return this.accounts.find((act) => act.type === type);
  },

  totalBalance: function() {
    return this.accounts.reduce((accu, act) => {
      accu += act.balance;
      return accu;
    }, 0);
  },

  deposit: function(accountType, amount, callback) {
    const targetAccount = this.account(accountType);
    if (targetAccount) {
      targetAccount.balance += amount;
      callback({[accountType]: targetAccount.balance});
      return targetAccount.balance;
    }
    return -1;
  },

  /**
   * The main withdraw method with overdraft facility.
   *
   * @param accountType
   * @param amount
   * @param callback
   */
  withdraw: function(accountType, amount, callback) {
    // Not enough money in all accounts.
    if (this.totalBalance() < amount) {
      callback({
        error: 'Insufficient balance',
      });

      return;
    }

    /**
     * Withdraw from specified account and return the remaining amount, if any,
     * that still needs to be withdrawn after this transaction.
     *
     * @param _account
     * @param _amount
     * @returns {number}
     */
    const withdrawFrom = function(_account, _amount) {
      const amountToWithdraw = Math.min(_amount, _account.balance);
      _account.withdraw(amountToWithdraw);

      return _amount - amountToWithdraw;
    };

    // Money will always come out of the requested account first.
    const targetAccount = this.account(accountType);
    let remainder = withdrawFrom(targetAccount, amount);

    // If needed, keep taking money out of other accounts.
    if (remainder > 0) {
      const otherAccounts = this.accounts.filter(
          (act) => act.type !== accountType);

      for (let i = 0; i < otherAccounts.length; i++) {
        const otherAccount = otherAccounts[i];
        remainder = withdrawFrom(otherAccount, remainder);
        if (remainder === 0) {
          // This means we have successfully withdrawn all the money requested.
          break;
        }
      }
    }

    // Notify the UI so that it can refresh the numbers on the screen.
    const newBalances = this.accounts.reduce((accu, act) => {
      accu[act.type] = act.balance;
      return accu;
    }, {});

    callback({
      result: 'Success',
      ...newBalances,
    });
  },
};