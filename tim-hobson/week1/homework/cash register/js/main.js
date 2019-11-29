// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

let prices = [ ]
let total = 0

// let cashRegister = function ( INPUT ) {
//
//     for ( var key in INPUT )
//     {
//         console.log(parseFloat(cartForParty[key]));
//         // total = (total + parseFloat(cartForParty[key])
//         // console.log(total);
//     }
//
//
// }
//
// console.log(cashRegister(cartForParty));


// Output
// cashRegister(cartForParty); // 60.55


// for ( var key in cartForParty )
// {
//     prices.push( parseFloat(cartForParty[key]) );
// };
// for ( i = 0; i < prices.length; i++) {
//   total = (total + prices[i]);
//   console.log(total);
// }

const totalAmount = function ( input ) {
for ( var key in input )
{
    prices.push( parseFloat(input[key]) );
};
for ( i = 0; i < prices.length; i++) {
  total = (total + prices[i]);
  console.log(total);
}
};

console.log(totalAmount(cartForParty));
