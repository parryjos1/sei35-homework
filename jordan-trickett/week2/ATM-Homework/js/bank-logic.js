console.log('the mula');


const bank = {

  accounts: {
    checking: 0,
    savings: 0,
  },


  deposit: function(accountType, amount){

    for (let key in this.accounts) {
        // console.log('key', key);
        // console.log('value', this.accounts[key]);

        if (accountType === key){
            // console.log('match');
            this.accounts[key] += amount //returns matching accounts balance
            return 'Deposit successful';
        }; //if


    }; //for

  }, //deposit


  withdrawal: function(accountType, amount){

    for (let key in this.accounts) {
        // console.log('key', key);
        // console.log('value', this.accounts[key]);

        let balance = this.accounts[key]

        if (accountType === key){  //not sure if i need this
            // console.log('match');
             //returns matching accounts balance
            // return 'Withdrawal successful';

            if ((balance - amount) >= 0) {
              //if enough money in account, proceed with withdrawal
              return this.accounts[key] -= amount;

            } else if ( balance < amount) {

              let liquidity = this.sumOfBalances();

                    if (liquidity >= amount) {

                      return this.overdraft(amount);

                    };//2nd nested
            }; //1st nested

        } else {

          // console.log('something didnt work');

        } //if accounttype


    }; // for

  }, // withdrawal


  sumOfBalances: function(){

    let total = 0;

    for (let key in this.accounts) {

        total += this.accounts[key];

    }; //for

    return total;

  }, //sumOfBalances


  overdraft: function (amount) { //this works, returns zeros values for both accounts

    let withdrawalAmount = amount;

    for (let key in this.accounts) {

      if (this.accounts[key] > 0) {

        // const balance = this.accounts[key]

        this.accounts[key] -= withdrawalAmount; // this is taking the value away from both and updating balance.

        //need to stop it going past 0

          if (this.accounts[key] < 0){

            withdrawalAmount = this.accounts[key] *(-1);

            // this block stops number from going past 0
            this.accounts[key] = 0;

          }; //nested if


      } else {

        console.log('no luck');

      }; //if


    };//for

  }, //OD


}; // bank object




// findAccount: function(accountType){
//
//   for (let key in this.accounts) {
//       // console.log('key', key);
//       // console.log('value', this.accounts[key]);
//
//       if (accountType === key){
//           // console.log('match');
//           return this.accounts[key]; //returns matching accounts balance
//       } else {
//         console.log('error');
//       }; //if
//
//   }; // for loop
//
// }, // find account
