//conditionals exercises

//the even-odd reporter
for(let x = 0; x <= 20; x++) {
    let result = x % 2;
    if(result === 0) {
        console.log(x + " is even...");
    } else {
        console.log(x + " is odd...");
    }
}


//multiplication tables
for(let x = 0; x <= 10; x++) {
    for(let y = 0; y <= 10; y++) {
        console.log(`${x} * ${y} = ${x*y}`);
    }  
    console.log("******************");
}

//the grade assigner
const assignGrade = function (score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
};

for(let x = 60; x <= 100; x++) {
    console.log(`For ${x}, you got a ${assignGrade(x)}`);
}