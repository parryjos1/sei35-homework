# Phone Number Check
The rules for a valid phone number in this exercise are as follows:

- If the phone number has any non-numerals in it, they should be removed/ignored
- If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
- If the phone number is 11 digits and the first number is not 1, then it is an invalid number
- If the phone number is 10 digits long, it is valid; if not, it is invalid
## Exercise
1. Write a Javascript function which takes a phone number as a string and returns the cleaned-up version of the number if it is valid (ie. with non-numerals removed), or if not valid, returns '00000000' (ten zeroes)
2. Write a Javascript function which returns a formatted version of the given phone number, ie:
```
Input:  11234567890
Output: (123) 456-7890
I.e., the first 3 numbers are the area code, and are in brackets;
then comes a space, then the next 3 numbers (the exchange code),
followed by a dash, then then the last four numbers.
```