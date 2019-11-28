function isLeapYear(year) {
    if(year % 4 == 0) {
        if(year % 100 == 0 && year % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let yearInput = prompt("Enter the year: ");
yearInput = +yearInput;
let flag = isLeapYear(yearInput);
if(flag == true) {
    console.log(`${yearInput} is a leap year!`);
} else {
    console.log(`${yearInput} is not a leap year :(`);
}