//Input

const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

function cashRegister(cart) {
    let total = 0;
    total += +cart.banana;
    total += +cart.handkerchief;
    total += +cart.Tshirt;
    total += +cart.apple;
    total += +cart.nalgene;
    total += +cart.proteinShake;
    return total;
}

// Output
console.log(`Total is: ${cashRegister(cartForParty)}`);