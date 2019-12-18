const accounts = [
    {
    accName: "checking",
    value: 0
    },
    {
    accName: "savings",
    value: 0
    }
];

$('.withdraw').hover( function() {
    $(this).toggleClass('withdraw_hover');
} );


$('#checking-deposit').on( 'click', function() {
    const checkingInput = Number($('#checking-amount').val());
    console.log("Boom");
    accounts[0].value = accounts[0].value + checkingInput;
    $('#checking-balance').text("$" + accounts[0].value);
    $('#checking-amount').val('');
} );


$('#savings-deposit').on( 'click', function() {
    const savingsInput = Number($('#savings-amount').val());
    accounts[1].value = accounts[1].value + savingsInput;
    $('#savings-balance').text("$" + accounts[1].value);
    $('#savings-amount').val('');
} );


$('#checking-withdraw').on( 'click', function() {
    const checkingInputM = Number($('#checking-amount').val());
    accounts[0].value = accounts[0].value - checkingInputM;
    $('#checking-balance').text("$" + accounts[0].value);
    $('#checking-amount').val('')
} );


$('#savings-withdraw').on( 'click', function() {
    const savingsInputM = Number($('#savings-amount').val());
    accounts[1].value = accounts[1].value - savingsInputM;
    $('#savings-balance').text("$" + accounts[1].value);
    $('#savings-amount').val('')
} );