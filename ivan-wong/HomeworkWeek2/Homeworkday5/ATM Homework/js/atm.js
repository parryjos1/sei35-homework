let checkings = 0;
let savings = 0;
let overdraft = 0;
let updateValue = function() {
  $("#balance1").text("$" + checkings);
  $("#balance2").text("$" + savings);
}
$("#checkingDeposit").on("click", function() {
  if (isNaN(parseInt($("#checkingAmount").val())) === false) {
    checkings = checkings + parseInt($("#checkingAmount").val());
    $("#balance1").text("$" + checkings);
  } else {
    console.log( "Not a number");
  }
  backgroundUpdateCheckings();
})
$("#checkingWithdraw").on("click", function() {
  if (isNaN(parseInt($("#checkingAmount").val())) === false) {
    if (checkings - parseInt($("#checkingAmount").val()) < 0) {
      overdraft  = parseInt($("#checkingAmount").val()) - checkings;
      if (overdraft < savings === true) {
        checkings = 0;
        savings = savings - overdraft;
        overdraft = 0;
        updateValue();
      } else if (overdraft > savings === true){
        console.log("Not enough money");
      }
    } else {
      checkings = checkings - parseInt($("#checkingAmount").val());
      $("#balance1").text("$" + checkings);
    }
  } else {
    console.log( "Not a number");
  }
  backgroundUpdateCheckings();
})
$("#savingsDeposit").on("click", function() {
  if (isNaN(parseInt($("#savingsAmount").val())) === false) {
    savings = savings + parseInt($("#savingsAmount").val());
    $("#balance2").text("$" + savings)
  } else {
    console.log( "Not a number");
  }
  backgroundUpdateSavings();
})
$("#savingsWithdraw").on("click", function() {
  if (isNaN(parseInt($("#savingsAmount").val())) === false) {
    if (savings - parseInt($("#savingsAmount").val()) < 0) {
      overdraft  = parseInt($("#savingsAmount").val()) - savings;
      if (overdraft < checkings) {
        savings = 0;
        checkings = checkings - overdraft;
        overdraft = 0;
        updateValue();
      } else if (overdraft > checkings === true){
        console.log("Not enough money");
      }
    } else {
      savings = savings - parseInt($("#savingsAmount").val());
      $("#balance2").text("$" + savings);
    }
  } else {
    console.log( "Not a number");
  }
  backgroundUpdateSavings();
})
let backgroundUpdateCheckings = function () {
    if($("#balance1").text() === "$0") {
    $("#checkingAccount").css("background-color", "red");
  } else {
    $("#checkingAccount").css("background-color", "grey");
  };
};

let backgroundUpdateSavings = function () {
  if($("#balance2").text() === "$0") {
    $("#savingsAccount").css("background-color", "red");
  } else {
    $("#savingsAccount").css("background-color", "grey");
  };
};
backgroundUpdateSavings();
backgroundUpdateCheckings();
