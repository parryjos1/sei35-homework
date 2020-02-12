//To run in the terminal
//node collatz.js

const collatz = num => {
  let count = 0; //initialize steps count
  let arr = [num]; //keep track of nums 

  while (num > 1) {
    //if num is even
    if (num % 2 === 0) {
      num /= 2;
    }
    else { //if num is odd
      num = num * 3 + 1;
    }
    count ++
    arr.push(num);
  }
  console.log(count);
  console.dir(arr, {maxArrayLength: null});
}

collatz(12); //9 steps
collatz(27); //111 steps
collatz(64); //6 steps


const collatz_rec = (num, count=0, arr=[num]) => {
  //base case
  if (num === 1) {
    console.log(count);
    console.dir(arr, {maxArrayLength: null});
    return;
  }
  //if num even
  if (num % 2 === 0) {
    num /= 2;
  }
  else { //if num odd
    num = num * 3 + 1;
  }
  count ++; //increase steps
  arr.push(num); //add new num to arr

  collatz_rec(num, count, arr);
}

collatz_rec(12); //9 steps
collatz_rec(27); //111 steps
collatz_rec(64); //6 steps
