console.log('happy nums');

//version 1 (demo in class - using while loop)
const happyNumbers = {
  happyList: [],
//   Squaring logic
  findSquareSum: function(digit){
    let sum = 0;
    let stringNumber = digit.toString();

    for (let i = 0; i < stringNumber.length; i++) {
      sum += +stringNumber[i] * +stringNumber[i];
    }

    return sum;
  },
  happyLogic: function(digit){
    let cycle = {};
    let squareSum = digit;

    // console.log('checking', digit);
    while(true){
      squareSum = this.findSquareSum(squareSum);

      if(squareSum === 1){
        console.log('found happy number', digit);
        return true;
      }

      if(cycle[squareSum]){
        console.log('repeated number', digit);
        return false
      }

      cycle[squareSum] = true;
      console.log('cycle', cycle);
      console.log('squareSum', squareSum);
    }
  },
//   Need to print out up to a certain number 
  printNumbers: function(num){
    let found = 0;
    for (let i = 0; found < num; i++) {
      if(this.happyLogic(i)){
        found++;
        this.happyList.push(i);
      }
    }
    console.log(this.happyList);
  }
}

happyNumbers.printNumbers(10);



// version 2 (using recursion)
const findHappyNum = function(num, cycle={}){


    if(num == 1){ // base case
      return true
    }

    const numStr = num.toString();
    let sumOfSquares = 0;

    for (var i = 0; i < numStr.length; i++) {
      sumOfSquares += +numStr[i] * +numStr[i]
    }

    if(sumOfSquares in cycle){ //base case 2
      return false;
    }

    cycle[sumOfSquares] = true;
    return findHappyNum(sumOfSquares, cycle);

}


const generateHappyNumbers = function(count){
  let found = 0;
  for (let i = 0; found < count; i++) {
    if( findHappyNum(i) ){
      found ++
      console.log(`Found happy number ${found}: ${i}`);
    }
  }
};

generateHappyNumbers(10);