account = {
  savings: 0,
  checking: 0
};

let errorWithdraw = null

const deposit = function (depositAccount, depositAmount) {

  account[depositAccount] += depositAmount;
  return account[depositAccount];

};

const withdraw = function ( withdrawAccount , withdrawAmount ) {

  let accountTotal = (account.checking + account.savings)

  if ( account[withdrawAccount] >= withdrawAmount ) {

    account[withdrawAccount] -= withdrawAmount;

  } else if ((account.checking + account.savings) >= withdrawAmount ) {

    if (withdrawAccount === 'savings') {

      overdrawAccount = `checking`;

    } else {

      overdrawAccount = `savings`;

    }

    withdrawAmount -= account[withdrawAccount];
    account[withdrawAccount] = 0;
    account[overdrawAccount] -= withdrawAmount;

  } else {

    errorWithdraw = (`error - not enough money in your account. \nplease withdraw less than $${accountTotal} or deposit more money!`);

  };

}; // end of withdraw
