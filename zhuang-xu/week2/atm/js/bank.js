const account = function(type, initialBalance = 0) {
  this.type = type;
  this.balance = initialBalance;
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

  withdraw: function(accountType, amount, callback) {
    if (this.totalBalance() <= amount) {
      callback({
        error: 'Insufficient balance',
      });

      return;
    }

    const withdrawFrom = function(_account, _amount) {
      const amountToWithdraw = Math.min(_amount, _account.balance);
      _account.withdraw(amountToWithdraw);

      return _amount - amountToWithdraw;
    };

    const targetAccount = this.account(accountType);
    let remainder = withdrawFrom(targetAccount, amount);

    if (remainder > 0) {
      const otherAccounts = this.accounts.filter(
          (act) => act.type !== accountType);

      for (let i = 0; i < otherAccounts.length; i++) {
        const otherAccount = otherAccounts[i];
        remainder = withdrawFrom(otherAccount, remainder);
        if (remainder === 0) {
          break;
        }
      }
    }

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

account.prototype.deposit = function(amount) {
  this.balance += amount;
};

account.prototype.withdraw = function(amount) {
  this.balance -= amount;
};