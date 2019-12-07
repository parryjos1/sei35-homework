$(function() {
  const ACCOUNT_CHANGED = 'accountChanged';
  const CHECKING = 'checking';
  const SAVINGS = 'savings';

  // Initialise the UI with account details
  $('#balance1').html(`$${bank.account(CHECKING).balance}`);
  $('#balance2').html(`$${bank.account(SAVINGS).balance}`);

  // Listen for any response from the "backend" and update the UI accordingly.
  $(document).on(ACCOUNT_CHANGED, function(event, payload) {
    if (CHECKING in payload) {
      $('#balance1').html(`$${payload[CHECKING]}`);
      $('#checkingAmount').val('');
    }
    if (SAVINGS in payload) {
      $('#balance2').html(`$${payload[SAVINGS]}`);
      $('#savingsAmount').val('');
    }

    if ('error' in payload) {
      const $toast = $('.toast');
      $toast.slideDown();
      $toast.html(payload.error);

      $toast.delay(3000).fadeOut('slow');
    }
  });

  /**
   * This is our "callback generator" - to assemble the correct "backend" function to use.
   *
   * @param accountType
   * @param func
   * @returns {null|Function}
   */
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

      // We need to "bind", otherwise the function will lose track of its "this"
      // when its being called by the browser.
      func.bind(bank)(accountType, amount, (result) => {
        $(document).trigger(ACCOUNT_CHANGED, result);
      });
    };
  };

  // Wire up the "backend" functions to the UI.
  $('#checkingDeposit').on('click', transactionCallback(CHECKING, bank.deposit));
  $('#savingsDeposit').on('click', transactionCallback(SAVINGS, bank.deposit));
  $('#checkingWithdraw').on('click', transactionCallback(CHECKING, bank.withdraw));
  $('#savingsWithdraw').on('click', transactionCallback(SAVINGS, bank.withdraw));
});