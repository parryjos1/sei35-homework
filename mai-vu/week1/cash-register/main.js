// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.

const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function( cart ) {

    //Write all values of the cart object into an array
    const allItemPricesStr = Object.values( cart );

    //Cast from string type to number type
    let allItemPrices = [];
    for (let i = 0; i < allItemPricesStr.length; i++) {
        allItemPrices.push(parseFloat(allItemPricesStr[i]));
    }

    //Calculate sum of all array elements
    let total = 0;
    for (let i = 0; i < allItemPrices.length; i++) {
        total += allItemPrices[i];
    }
    console.log(`The total amount due in your shopping cart is ${total}.`);
};

cashRegister( cartForParty );
