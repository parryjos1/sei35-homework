$(document).ready(function() {

  const $checkingBalance = $('#balance1'),
        $checkingAmount = $('#checkingAmount'),
        $checkingDeposit = $('#checkingDeposit'),
        $checkingWithdraw = $('#checkingWithdraw');

  const $savingsBalance = $('#balance2'),
        $savingsAmount = $('#savingsAmount'),
        $savingsDeposit = $('#savingsDeposit'),
        $savingsWithdraw = $('#savingsWithdraw');

  const returnBalance = function($account) {
    // transmits input amount as integer value if it's valid
    const regex = /[^0-9]/g; // not a number between 0-9
    const amount = $account.val();
    if (amount.match(regex)) {
      return 0;
    }
    return parseInt(amount);
  };

  $savingsDeposit.on('click', function() {
    const amount = returnBalance($savingsAmount);
    bank.deposit(amount, 'savings');
    $savingsBalance.html(`$${bank.savingsBalance}`);
  });

  $savingsWithdraw.on('click', function() {
    const amount = returnBalance($savingsAmount);
    bank.withdraw(amount, 'savings');
    $savingsBalance.html(`$${bank.savingsBalance}`);
    $checkingBalance.html(`$${bank.checkingBalance}`);
  });

  $checkingDeposit.on('click', function() {
    const amount = returnBalance($checkingAmount);
    bank.deposit(amount, 'checking');
    $checkingBalance.html(`$${bank.checkingBalance}`);
  });

  $checkingWithdraw.on('click', function() {
    const amount = returnBalance($checkingAmount);
    bank.withdraw(amount, 'checking');
    $checkingBalance.html(`$${bank.checkingBalance}`);
    $savingsBalance.html(`$${bank.savingsBalance}`);
  });

});
