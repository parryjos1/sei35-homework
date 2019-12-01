const cartForParty = {
  banana: '1.25',
  handkerchief: '.99',
  Tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  proteinShake: '22.36',
};

const cashRegister = function(cart) {
  let total = 0;
  for (const key in cart) {
    total += Number.parseFloat(cart[key]);
  }

  return total;
};

console.log(cashRegister(cartForParty));