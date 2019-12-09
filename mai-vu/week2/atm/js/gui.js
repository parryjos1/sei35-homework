/***** DISPLAY LOGIC *****/
// Connect event handlers for form input and buttons with the core operations in bank.js



// display() updates all aspects of the webpage with current balances
const display = function() {

    $('#checkingBalance').text('$' + accounts.checkingBalance);
    $('#savingsBalance').text('$' + accounts.savingsBalance);
    
    $('.zero').removeClass('zero');
    
    // If balance falls below 0, override current styling with new class 'zero' and turn background color to red.
    if (accounts.checkingBalance <= 0) {
        $('#checkingBalance').addClass('zero');
    }

    if (accounts.savingsBalance <= 0) {
        $('#savingsBalance').addClass('zero');
    }

    // if ( Number($('#checkingBalance').html()) === NaN ) {
    //     $('#errorMessage').text('Please enter a valid amount!');
    //     $('#errorMessage').toggle().fadeIn(200).delay(5000).fadeOut(200);
    // }

};  //end of render() function



// All event handlers must wait for the DOM to finish loading
$(document).ready( function () {

    display(); // Update the page with balances and zeros ASAP.
    
    $('#checkingDeposit').on( 'click', function () {
        const amount = $('#checkingAmount').val();
        $('#checkingAmount').val('').focus();
        accounts.checkingDeposit(amount);
        display();
    } );

    $('#checkingWithdraw').on( 'click', function () {
        const amount = $('#checkingAmount').val();
        $('#checkingAmount').val('').focus();
        accounts.checkingWithdraw(amount);
        display();
    } );
    
    $('#savingsDeposit').on( 'click', function () {
        const amount = $('#savingsAmount').val();
        $('#savingsAmount').val('').focus();
        accounts.savingsDeposit(amount);
        display();
    } );

    $('#savingsWithdraw').on( 'click', function () {
        const amount = $('#savingsAmount').val();
        $('#savingsAmount').val('').focus();
        accounts.savingsWithdraw(amount);
        display();
    } );

});  //end of .ready() function