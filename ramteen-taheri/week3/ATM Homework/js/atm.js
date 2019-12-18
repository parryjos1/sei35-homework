
//mock database and functions
const bankOfGa = {
    checking: 0,
    savings: 0,
    depositInChecking: function(entry) {
        if(isNaN(entry)) {
            $('.errorMessage')[0].style.display = "flex";
            $('.notANumber')[0].style.display = "block";
            $('.clearBtn')[0].style.display = "block";
        } else {
            if(entry < 0) {
                entry *= -1;
            }
            let result = this.checking + entry;
            this.checking = result;
            this.updateAll();
        }
    },
    depositInSavings: function(entry) {
        if(isNaN(entry)) {
            $('.errorMessage')[0].style.display = "flex";
            $('.notANumber')[0].style.display = "block";
            $('.clearBtn')[0].style.display = "block";
        } else {
            if(entry < 0) {
                entry *= -1;
            }
            let result = this.savings + entry;
            this.savings = result;
            this.updateAll();
        }
    },
    withdrawFromChecking: function(entry) {
        if(isNaN(entry)) {
            $('.errorMessage')[0].style.display = "flex";
            $('.notANumber')[0].style.display = "block";
            $('.clearBtn')[0].style.display = "block";
        } else {
            if(entry < 0) {
                entry *= -1;
            }
            let result = this.checking - entry;
            if(result < 0) {
                //display errors
                $('.errorMessage')[0].style.display = "flex";
                $('.checkingError')[0].style.display = "block";
                $('.clearBtn')[0].style.display = "block";
            } else {
                this.checking = result;
            }
            this.updateAll();
        }        
    },
    withdrawFromSavings: function(entry) {
        if(isNaN(entry)) {
            $('.errorMessage')[0].style.display = "flex";
            $('.notANumber')[0].style.display = "block";
            $('.clearBtn')[0].style.display = "block";
        } else {
            if(entry < 0) {
                entry *= -1;
            }
            let result = this.savings - entry;
            if(result < 0) {
                //display errors 
                $('.errorMessage')[0].style.display = "flex";
                $('.savingsError')[0].style.display = "block";
                $('.clearBtn')[0].style.display = "block";
            } else {
                this.savings = result;
            }
            this.updateAll();
        }
    },
    updateAll: function(){
        //refresh balance displays
        $('#balance1').text(`$${this.checking.toFixed(2)}`);
        $('#balance2').text(`$${this.savings.toFixed(2)}`);

        //reset input boxes
        $('#checkingAmount')[0].value = '';
        $('#savingsAmount')[0].value = '';

        //check colors of account boxes
        if(this.checking <= 0) {
            //make checking box red
            $('#checkingAccount')[0].style.backgroundColor = "red";
        } else {
            //green
            $('#checkingAccount')[0].style.backgroundColor = "#6C9A74";
        }

        if(this.savings <= 0) {
            //make savings box red
            $('#savingsAccount')[0].style.backgroundColor = "red";
        } else {
            //green
            $('#savingsAccount')[0].style.backgroundColor = "#6C9A74";
        }
    }
};


//events
$('#checkingDeposit').on('click', function() {
    let entry = $('#checkingAmount')[0].value;
    entry = +entry;
    bankOfGa.depositInChecking(entry);
});
$('#savingsDeposit').on('click', function() {
    let entry = $('#savingsAmount')[0].value;
    entry = +entry;
    bankOfGa.depositInSavings(entry);
});
$('#checkingWithdraw').on('click', function() {
    //withdraw from checking account
    
    let withdrawal = $('#checkingAmount')[0].value;
    withdrawal = +withdrawal;
    bankOfGa.withdrawFromChecking(withdrawal);
});
$('#savingsWithdraw').on('click', function() {
    //withdraw from savings account
    let withdrawal = $('#savingsAmount')[0].value;
    withdrawal = +withdrawal;
    bankOfGa.withdrawFromSavings(withdrawal);
});
$('.clearBtn').on('click', function() {
    $('.errorMessage')[0].style.display = "none";
    $('.checkingError')[0].style.display = "none";
    $('.savingsError')[0].style.display = "none";
    $('.notANumber')[0].style.display = "none";
    $('.clearBtn')[0].style.display = "none";
});

bankOfGa.updateAll();

