let money = [0,0,0]; // money[0] is checking amount, money[1] is savings amount, money[2] is the overdraft
$("#checkingDeposit").on("click", function() {
  if (isNaN(parseInt($("#checkingAmount").val())) === false) {
    money[0] = money[0] + parseInt($("#checkingAmount").val());
  } else {
    console.log( "Not a number");
  }
})
$("#checkingWithdraw").on("click", function() {
  if (isNaN(parseInt($("#checkingAmount").val())) === false) {
    if (money[0] - parseInt($("#checkingAmount").val()) < 0) {
      money[2]  = parseInt($("#checkingAmount").val()) - money[0];
      if (money[2] < money[1] === true) {
        money[0] = 0;
        money[1] = money[1] - money[2];
        money[2] = 0;
      } else if (money[2] > money[1] === true){
        console.log("Not enough money");
      }
    } else {
      money[0] = money[0] - parseInt($("#checkingAmount").val());
    }
  } else {
    console.log( "Not a number");
  }
})
$("#savingsDeposit").on("click", function() {
  if (isNaN(parseInt($("#savingsAmount").val())) === false) {
    money[1] = money[1] + parseInt($("#savingsAmount").val());
  } else {
    console.log( "Not a number");
  }
})
$("#savingsWithdraw").on("click", function() {
  if (isNaN(parseInt($("#savingsAmount").val())) === false) {
    if (money[1] - parseInt($("#savingsAmount").val()) < 0) {
      money[2]  = parseInt($("#savingsAmount").val()) - money[1];
      if (money[2] < money[0]) {
        money[1] = 0;
        money[0] = money[0] - money[2];
        money[2] = 0;
      } else if (money[2] > money[0] === true){
        console.log("Not enough money");
      }
    } else {
      money[1] = money[1] - parseInt($("#savingsAmount").val());
    }
  } else {
    console.log( "Not a number");
  }
})
let Update = function () {
    if($("#balance1").text() === "$0") {
    $("#checkingAccount").css("background-color", "red");
  } else {
    $("#checkingAccount").css("background-color", "grey");
  };
  if($("#balance2").text() === "$0") {
    $("#savingsAccount").css("background-color", "red");
  } else {
    $("#savingsAccount").css("background-color", "grey");
  };
  $("#balance1").text("$" + money[0]);
  $("#balance2").text("$" + money[1]);
};
Update();
$("body").on("click", function() {
  Update();
})
