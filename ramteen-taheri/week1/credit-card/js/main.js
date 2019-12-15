function validateCreditCard(cardNumber) {

    let checkedNumbers = [];

    if(cardNumber.length === 16 || cardNumber.length === 19) {
        let moreThanTwo = false;
        let finalEven = false;
        let sum = 0;
        let count = 0;

        //strip dashes
        cardNumber = cardNumber.replace(/-/g,"");

        if(isNaN(+cardNumber)) {
            return false;
        }

        if(cardNumber.length != 16) {
            return false;
        }

        let lastDigit = +cardNumber[15];

        if(lastDigit % 2 !== 0) {
            return false;
        }

        //count digits and add
        for(let x = 0; x < cardNumber.length; x++) {
            sum += +cardNumber[x];
            if(!checkedNumbers.includes(cardNumber[x])) {
                checkedNumbers.push(cardNumber[x]);
                count++;
            }
        }

        if(count < 2) {
            return false;
        }

        if (sum <= 16) {
            return false;
        }

        return true;


    } else {
        return false;
    }
}

if(validateCreditCard("9999999988880000") == true) {
    console.log('card is valid');
} else {
    console.log('card is not valid');
}

if(validateCreditCard("6666-6666-6666-1666") == true) {
    console.log('card is valid');
} else {
    console.log('card is not valid');
}

if(validateCreditCard("a92332119c011112") == true) {
    console.log('card is valid');
} else {
    console.log('card is not valid');
}

if(validateCreditCard(4444444444444444) == true) {
    console.log('card is valid');
} else {
    console.log('card is not valid');
}

if(validateCreditCard(1111111111111110) == true) {
    console.log('card is valid');
} else {
    console.log('card is not valid');
}

if(validateCreditCard(6666666666666661) == true) {
    console.log('card is valid');
} else {
    console.log('card is not valid');
}