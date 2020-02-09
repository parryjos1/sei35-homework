
const prime = {

  //array of all numbers
  range: [],

  //array of only prime numbers
  primeRange: [],

  //array of prime factors for given number
  primeFactorRange: [],

  getRange: function(num) {

    for (let i = 2; i <= num; i++) {
      this.range.push(i);
    }
    return this.range;
  },

  getPrimeRange: function(array){

    for (let i = 0; i < array.length; i++) {
      let isPrime = true;
      let potentialPrime = array[i];

      for (let j = 2; j < potentialPrime; j++) {
        // console.log('j', j);
          if (potentialPrime % j === 0) {
            isPrime = false;
          }
      }

      if (isPrime === true) {
        this.primeRange.push(array[i]);
      }
    }
    return this.primeRange;
  },
  //get only primes that are factor of number given
  getPrimeFactors: function(num) {
    let primes = this.getPrimeRange(this.getRange(num));

    console.log('primes', primes);

    for (let i = 0; i < primes.length; i++) {

      while (num % primes[i] === 0) {
        this.primeFactorRange.push(primes[i]);
        num /= primes[i];
      }
    }
    return this.primeFactorRange;
  }
}

console.log(prime.getPrimeFactors(60)); //[2,2,3,5]


const primeFactors = num => {

  let factors = [];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }

  return factors;

}

console.log(primeFactors(60)); //[2,2,3,5]
console.log(primeFactors(37)); //[37]
