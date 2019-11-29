// In this homework, you'll create a basic bank in Javascript.

/*** Bank ***/
// This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

/*** Accounts ***/
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

const accounts = [
    {   fullName: 'Foo Bar',
        accNumber: 1,
        accBalance: 380
    },
    {   fullName: 'Harry Potter',
        accNumber: 2,
        accBalance: 900
    },
    {   fullName: 'Tony Stark',
        accNumber: 3,
        accBalance: 250
    }
];


const addAccount = function( name, accNo, balance ) {
    accounts[accounts.length] = {   fullName: name,
                                    accNumber: accNo,
                                    accBalance: balance
                                };
    console.log(`A new account has been created.`);
};


const showCurrentBalance = function( bankAccount ) {

    console.log(`Account number ${bankAccount.accNumber} of ${bankAccount.fullName} currently has a balance of $${bankAccount.accBalance}.`);
};


const deposit = function() {
    const userInputAccNo = parseInt(prompt('Please enter your account number: '));
    const depositAmount = parseInt(prompt('Please enter a deposit amount: '));

    // Loop through the accounts array
    // Access the accNumber of each account object in the array
    // Compare with userInputAccNo
    for (let i = 0; i < accounts.length; i++) {
        if ( accounts[i].accNumber === userInputAccNo ) {
            accounts[i].accBalance += depositAmount;
            console.log(`You have successfully deposited $${depositAmount}.`);
            showCurrentBalance( accounts[i] );
        }
    }
};

const withdraw = function() {
    const userInputAccNo = parseInt(prompt('Please enter your account number: '));
    const withdrawAmount = parseInt(prompt('Please enter a withdraw amount: '));

    // Loop through the accounts array
    // Access the accNumber of each account object in the array
    // Compare with userInputAccNo
    for (let i = 0; i < accounts.length; i++) {
        if ( accounts[i].accNumber === userInputAccNo ) {
            accounts[i].accBalance -= withdrawAmount;
            console.log(`You have successfully withdrawn $${withdrawAmount}.`);
            showCurrentBalance( accounts[i] );
        }
    }
};


// addAccount( 'John Doe', 4, 100 );
// showCurrentBalance( accounts[3] );
