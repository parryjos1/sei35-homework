/***** BUSINESS LOGIC *****/
// Banking functions: deposit, withdrawal, checking for overdraft, etc.

const accounts = {

    checkingBalance: 0,
    savingsBalance: 0,
    
    totalBalance: function() {
        return ( this.checkingBalance + this.savingsBalance );
    },

    checkingDeposit: function( amount ) {
        this.checkingBalance += Number(amount);
    },
    
    checkingWithdraw: function( amount ) {
        amount = Number(amount);
        if ( amount <= this.checkingBalance ) {
            this.checkingBalance -= amount;
        } else if ( amount > this.checkingBalance && amount <= this.totalBalance() ) {
            const difference = amount - this.checkingBalance;
            this.checkingBalance = 0;
            this.savingsBalance -= difference;
        }
    },

    savingsDeposit: function( amount ) {
        this.savingsBalance += Number(amount);
    },

    savingsWithdraw: function( amount ) {
        amount = Number(amount);
        if ( amount <= this.savingsBalance ) {
            this.savingsBalance -= amount;
        } else if ( amount > this.savingsBalance && amount <= this.totalBalance() ) {
            const difference = amount - this.savingsBalance;
            this.savingsBalance = 0;
            this.checkingBalance -= difference;
        }
    },

};