//rectangle
//declare rectangle object
const rectangle = {
    Length: 4,
    Width: 4,
};
//the required functions
//A rectangle is a square if it has equal length and width
const isSquare = function(rect)
{
    if (rect.Length === rect.Width){
        return `This be a square bro!`;
    }else
        {
            return `Not a square ma dude!`;
        }
};
//area = width x length
const area = function(rect)
{
    const area = rect.Length * rect.Width
    return `The area of your rectangle is ${area}`;
};
//A rectangle has 4 sides, 2 lengths, 2 widths
const perimeter = function(rect)
{
    const perimeter = rect.Length * 2 + rect.Width * 2;
    return `The perimeter of your rectangle is ${perimeter}`;
};


console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));


//triangle
const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

//check whether or not the 3 sides are equal
const isEquilateral = function (tri)
{
    if ( tri.sideA === tri.sideB && tri.sideB === tri.sideC)
    {
        console.log(`Your triangle is equilateral!`);
    }else
        {
            console.log(`Your triangle is not equilateral!`);
        };
};

isEquilateral(triangle);
//check whether or not any of the two sides are equal
const isIsoceles = function (tri)
{
    const sideASideBMatch = (tri.sideA === tri.sideB) && tri.sideB !== tri.sideC;
    const sideBSideCMatch = (tri.sideB === tri.sideC) && tri.sideC !== tri.sideA;
    const sideASideCMatch = (tri.sideA === tri.sideC) && tri.sideC !== tri.sideB;
    if ( sideASideBMatch || sideBSideCMatch || sideBSideCMatch )
    {
        console.log(`Your triangle is isoceles!`);
    }else
        {
            console.log(`Your triangle is not isoceles!`);
        };
};

isIsoceles(triangle);

//using Herron's Formula
const areaTriangle = function (tri)
{
    let totalLengthOfSides = tri.sideA + tri.sideB + tri.sideC;
    let area = Math.sqrt(totalLengthOfSides*((totalLengthOfSides-tri.sideA)*(totalLengthOfSides-tri.sideB)*(totalLengthOfSides-tri.sideC)));
    console.log(area);
};

areaTriangle(triangle);

//Use Pythagorus' Theorem (if a^2 + b^2 < c^2, triangle is obtuse)
const isObtuse = function (tri)
{
    const obtuseCheckLeft = Math.pow(tri.sideA,2) + Math.pow(tri.sideB,2);
    const obtuseCheckRight = Math.pow(tri.sideC,2);
    if( obtuseCheckLeft < obtuseCheckRight )
    {
        console.log(`Your triangle is obtuse!`);
    }else
        {
            console.log(`Your triangle is not obtuse!`);
        };
};

isObtuse(triangle);
//cash register
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function (itemPrices)
{
    const shoppingList = itemPrices;
    let totalPrice = 0.00;
    for ( itemName in shoppingList )
    {
        totalPrice += parseFloat(shoppingList[itemName]);
    };
    console.log(totalPrice);
};

cashRegister(cartForParty);

//Bank
let bank = 
{  
    account: [
        {   AccountHolder: `Lawrence Carreon`,
            Balance: 15000
        },
        {   AccountHolder: `Sasuke Uchiha`,
            Balance: 1000
        },
        {   AccountHolder: `Zelda Williams`,
            Balance: 150000
        }
    ],
    totalMoneyInBank: function(){
        const accounts = this.account;
        let outputNum = 0;
        for (let i = 0; i < accounts.length; i++)
        {
            let objectCheck = accounts[i]
            for ( accountProperty in objectCheck)
            {
                //checks whether or not it is interacting with the "Balance" property
                if ( accountProperty === "Balance")
                {
                    //Adds the value of the current Balance property to the output number
                    //Number() is used to ensure the value of Balance is being fed in as a number
                    outputNum += Number(objectCheck[accountProperty]);
                }
            };
        };
        return outputNum;
    },
    newAccount: function(name,openingBalance)
    {
        //adds the new account object to the end of the array
        //set balance to zero if a negative value was inputted
        if (openingBalance < 0)
        {
            openingBalance = 0;
        };
        this.account.push({AccountHolder:`${name}`,Balance:Number(openingBalance)});
        return `A new account was created for ${name} with a balance of $${openingBalance}`;
    },
    //accountNumber is a number passed in to help determine which account is being accessed
    WithdrawOrDeposit: function(accountNumber, amount)
    {  
        //ensure the amount withdrawn or depositted is a number
        const amountNum = Number(amount);
        //Get the account Holder's name
        const accountOwner = this.account[accountNumber].AccountHolder;
        //setting up for the bonus part of the question, 1 references the Balance
        let balanceCurrent = this.account[accountNumber].Balance;
        if (amount > 0 && balanceCurrent > 0)
        {
            console.log(`${accountOwner}, you are making a withdrawal of: ${amountNum}`);
            balanceCurrent -= amountNum;
            //this next line is added so the actual object's property is changed
            this.account[accountNumber].Balance -= amountNum;
            //let's make sure their account balance doesn't fall under zero
            if (balanceCurrent < 0){
                balanceCurrent = 0;
                this.account[accountNumber].Balance = 0;
            }
            console.log(`${accountOwner}, your current balance is: ${balanceCurrent}`);
        }else
            {
                const depositAmount = amountNum * -1;
                console.log(`${accountOwner}, you are making a deposit of: ${depositAmount}`);
                balanceCurrent += depositAmount;
                this.account[accountNumber].Balance += depositAmount;
                console.log(`${accountOwner}, your current balance is: ${balanceCurrent}`);
            };
    },
    Transfer: function (transferer, transferAmount, recipient)
    {
        let accounts = this.account;
        //iterate through the account array, looking for match to recipient and transferer
        //subtract or add to their account accordingly
        //this is done in 2 separate loops to prevent the transfer amount from being incorrect
        //if the recipient's index is lower than the transferer
        for ( let i = 0; i < accounts.length; i++ )
        {
            let currentAccount = accounts[i];
            //look for the transferer first so it can adjust transfer amount if the
            //account goes into the negative
            if ( transferer === currentAccount.AccountHolder)
            {
                if ( (currentAccount.Balance - transferAmount) < 0 ){
                    //subtract the negative amount from the transferAmount by adding it
                    transferAmount += (currentAccount.Balance - transferAmount);
                    currentAccount.Balance -= transferAmount;
                }else
                    {
                        currentAccount.Balance -= transferAmount;
                    };
            };
        };
        for ( let j = 0; j < accounts.length; j++ )
        {
            let currentAccount = accounts[j];
            //looking for the recipient
            if ( recipient === currentAccount.AccountHolder)
            {
                currentAccount.Balance += transferAmount;
            };
        };

        return `${transferer} has transferred $${transferAmount} to ${recipient}.`
    }
    //The following function is more or less a copy and paste of the total money function
    //this is because it traverses the object and array for the same object property
    //just checking for a different value - NOTE: commented out since I misinterpretted the question
    // noNegatives: function(){
    //     const accounts = this.account;
    //     let output = ``;
    //     //setup an empty string for recoding the account owner
    //     accountOwner = ``;
    //     for (let i = 0; i < accounts.length; i++)
    //     {
    //         let objectCheck = accounts[i]
    //         for ( accountProperty in objectCheck)
    //         {
    //             //checks whether or not it is interacting with the "Balance" property
    //             if ( accountProperty === "Balance")
    //             {
    //                 //searches all accounts for a negative balance and returns the appropriate message
    //                 if (Number(objectCheck[accountProperty] < 0))
    //                 {
    //                     output = `${accountOwner} has a negative balance, it will be returned to zero.`;
    //                     objectCheck[accountProperty] = 0;
    //                 }else
    //                     {
    //                         output = `${accountOwner} has no issues with their balance.`;
    //                     };
    //             }else
    //                 {
    //                     accountOwner = `${objectCheck[accountProperty]}`;
    //                 };
    //         };
    //     };
    //     return output;
    // }
};
console.log(bank.totalMoneyInBank());
bank.WithdrawOrDeposit(1,1500);
bank.WithdrawOrDeposit(1,-1000);
console.log(bank.newAccount(`Herp Derp`, 1337));
console.log(bank.Transfer(`Zelda Williams`, 1000, `Sasuke Uchiha`));


//Credit Card - commented out as I am still writing it
// const createCreditCard = function( validity, cardNumber )
// {
//     let creditcard = 
//     {

//     };
// };

// const validateCreditCard = function ( cardNumber )
// {
//     let cardNumberString = cardNumber;
//     //creating an array to check against
//     let cardNumberArray = [];
//     let containsInvalidChar = true;
//     let containsTwoUniqueDigits = true;
//     let lastNumberEven = true;
//     let lengthValid = true;
//     let cardValid = true;
//     for ( let i = 0; i < cardNumberString.length; i++)
//     {
//         currentCharacter = cardNumberString.charAt(i);
//         if (currentCharacter.match(/^[0-9]*$/)) 
//             {
//                 convertToNumber = Number(currentCharacter);
//                 cardNumberArray.push(convertToNumber);
//             }else
//                 {
//                     cardNumberArray.push(currentCharacter);
//                     containsInvalidChar = true;
//                 };
//     };
//     //The HW conditions
//     const lastDigitInArray = cardNumberArray[cardNumberArray.length-1];
//     if ( cardNumberArray.length < 19)
//     {
//         cardValid = false;
//         lengthValid = false;
//     };
//     if ( lastDigitInArray%2 === 0)
//     {
//         cardValid = false;
//         lastNumberEven = false;
//     }
// };

// testCardNumber0 = '9999-9999-8888-0000';
// testCardNumber1 = 'a923-3211-9c01-1112';
// createCreditCard(validateCreditCard(testCardNumber0),testCardNumber0);
// createCreditCard(validateCreditCard(testCardNumber1),testCardNumber1);