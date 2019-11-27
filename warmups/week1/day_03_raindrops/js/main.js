// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// Examples
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

// console.log('hello from the javascript page')


// ###################
// Easy read solution
// ###################

const raindrops = function ( number ) {
    
    let string = '';

    if (number % 3 === 0) {
        string += 'Pling';
    }

    if (number % 5 === 0) {
        string += 'Plang';
    }

    if (number % 7 === 0) {
        string += 'Plong';
    }

    if (string.length === 0) {
        string += number;
    }

    return string
    
}

console.log(raindrops(28));
console.log(raindrops(1755));
console.log(raindrops(34));

// ###################
// Advanced solution
// ###################

const solutionX = function (num) { return [[3, 'Pling'], [5, 'Plang'], [7, 'Plong']].reduce((s, [k, v]) => num % k === 0 ? s + v : s, '') || num + ''};


console.log('####################')
console.log(solutionX(28))
console.log(solutionX(1755))
console.log(solutionX(34))



