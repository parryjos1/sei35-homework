$(function() {
  console.log('Connected');

  const ACCOUNT_CHANGED = 'accountChanged';
  const CHECKING = 'checking';
  const SAVINGS = 'savings';

  // Initialising the UI with account details
  $('#balance1').html(`$${bank.account(CHECKING).balance}`);
  $('#balance2').html(`$${bank.account(SAVINGS).balance}`);

  $(document).on(ACCOUNT_CHANGED, function(event, payload) {
    console.log(event, payload);
    if (CHECKING in payload) {
      $('#balance1').html(`$${payload[CHECKING]}`);
      $('#checkingAmount').val('');
    }
    if (SAVINGS in payload) {
      $('#balance2').html(`$${payload[SAVINGS]}`);
      $('#savingsAmount').val('');
    }
  });

  const depositCallback = function(accountType) {
    let inputId;

    if (accountType === CHECKING) {
      inputId = '#checkingAmount';
    } else if (accountType === SAVINGS) {
      inputId = '#savingsAmount';
    } else {
      return null;
    }

    return function(event) {
      const amount = parseFloat($(inputId).val());

      if (isNaN(amount)) {
        return false;
      }

      bank.deposit(accountType, amount, (newBalance) => {
        console.log('called');
        $(document).trigger(ACCOUNT_CHANGED, [{[accountType]: newBalance}]);
      });
    };
  };

  const withdrawCallback = function(accountType) {
    let inputId;

    if (accountType === CHECKING) {
      inputId = '#checkingAmount';
    } else if (accountType === SAVINGS) {
      inputId = '#savingsAmount';
    } else {
      return null;
    }

    return function(event) {
      const amount = parseFloat($(inputId).val());

      if (isNaN(amount)) {
        return false;
      }

      bank.withdraw(accountType, amount, (newBalance) => {
        console.log('called');
        $(document).trigger(ACCOUNT_CHANGED, [{[accountType]: newBalance}]);
      });
    };
  };

  const transactionCallback = function(accountType, func) {
    let inputId;

    if (accountType === CHECKING) {
      inputId = '#checkingAmount';
    } else if (accountType === SAVINGS) {
      inputId = '#savingsAmount';
    } else {
      return null;
    }

    return function(event) {
      const amount = parseFloat($(inputId).val());

      if (isNaN(amount)) {
        return false;
      }

      func.bind(bank)(accountType, amount, (result) => {
        $(document).trigger(ACCOUNT_CHANGED, result);
      });
    };
  };

  // $('#checkingDeposit').on('click', depositCallback(CHECKING));
  // $('#savingsDeposit').on('click', depositCallback(SAVINGS));
  $('#checkingDeposit').on('click', transactionCallback(CHECKING, bank.deposit));
  $('#savingsDeposit').on('click', transactionCallback(SAVINGS, bank.deposit));
  // $('#checkingWithdraw').on('click', depositCallback(SAVINGS));
});