console.log("hi");

const sieve = {
  list: [],
  primes: [],
  calcPrime: function(max){

    // begin with all numbers as being unmarked
    // Fills an array of true values
    this.list = new Array(max).fill(true);
    

    // Initially, we use i < max but if we use j = Math.pow(currentNum, 2)
    // in the inner loop then there's no need to iterate until max
    // For example, if your max was 100, there's no need to interate past 10,
    // becuase the 10^2 is 100 and your inner loop won't run because j(100) is NOT < max(100)
    // Square root is a number times itself so sqrt 16 is 4
    for (let i = 2; i < Math.sqrt(max); i++) {
      let currentNum = i;

      // Initially, we started with j = currentNUm + 1
      // BUT we can actually start at the square of currentNum
      // For example, when we look at 3, 6 is ready FALSE because
      // it is a multiple of 2, therefore we can start from 9 (which is the square of 3)

      for (let j = Math.pow(currentNum, 2); j < max; j++) {
    //   for (let j = currentNum +1; j < max; j++) {
          
        if (this.list[j] === true && j % currentNum === 0) {
          this.list[j] = false;
        }
      } // inner loop
    } // outer loop

    // console.log(this.list);

    // for (let i = 2; i < max; i++) {
    //   if(this.list[i] === true){
    //     this.primes.push(i);
    //   }
    // }
    // arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])  
    // array is the empty array we're producing, confusing as we're actually reducing down to a single array
    // elem is the value at this.list[index]
    // index is the index we're up to
    this.primes = this.list.reduce(function(array, elem, index){

        
      if(index > 1 && elem === true){
        array.push(index);
        
      }
      return array;
    }, []); // set initial value as empty array
    
    return this.primes;
  }
};

console.log(sieve.calcPrime(50)); 