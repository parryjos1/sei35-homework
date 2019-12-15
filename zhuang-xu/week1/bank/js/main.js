class Account {
  constructor(ownersName, balance) {
    this.ownersName = ownersName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} to ${this.ownersName}'s account.`);
    return this.balance;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log(`Insufficient balance for ${this.ownersName}'s account.`);
      return false;
    }
    this.balance -= amount;
    console.log(`Withdrew $${amount} from ${this.ownersName}'s account.`);
    return true;
  }
}

const bank = {
  accounts: [
    new Account('John', 1200),
    new Account('Jack', 5000),
    new Account('Peter', 3200),
    new Account('Rachel', 4000),
  ],
  totalBalance: function() {
    return this.accounts.reduce((accu, item) => {
      accu += item.balance;
      return accu;
    }, 0);
  },
  addAccount: function(ownersName, initialBalance) {
    this.accounts.push(new Account(ownersName, initialBalance));
    console.log(
        `New account added. Current totally balance is ${this.totalBalance()}`);
  },
  transfer: function(fromAccount, toAccount, amount) {
    if (!fromAccount.withdraw(amount)) {
      console.log('Transfer aborted.');
      return;
    }
    toAccount.deposit(amount);
  },
};

console.log('Initial total balance: ', bank.totalBalance());
bank.addAccount('Douglas', 500);
bank.accounts[1].withdraw(400);
console.log('Total balance is now: ', bank.totalBalance());
bank.accounts[2].deposit(300);
console.log('Total balance is now: ', bank.totalBalance());
bank.accounts[0].withdraw(1300);
console.log('Total balance is still: ', bank.totalBalance());
bank.transfer(bank.accounts[3], bank.accounts[0], 100);
console.log('Total balance is still: ', bank.totalBalance());
