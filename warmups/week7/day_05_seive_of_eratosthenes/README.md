# The Sieve of Eratosthenes
The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

Create your range, starting at two and ending at the given limit.

The algorithm consists of repeating the following over and over:

- take the next available unmarked number in your list (it is prime)
- remove all the multiples of that number for your list (they are not prime if they have factors other than themselves and 1)
Repeat until you don't have any possible primes left in your range.

When the algorithm terminates, all the numbers in the list that have not been removed are prime.

Do this in Javascript! 