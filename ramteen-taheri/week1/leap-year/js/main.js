function isLeapYear(year) {
    if(year % 4 === 0) {
        if(year % 100 === 0 && year % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let yearInput =  prompt("Enter the year: ");
if (yearInput !== null) {
    while(yearInput.length > 4 || isNaN(yearInput)) {
        console.log("Invalid Year Entered...");
        yearInput = prompt("Enter the year: ");
        if(yearInput == null) {
            break;
        }
    }
    if(yearInput) { 
        yearInput = +yearInput;
        let flag = isLeapYear(yearInput);
        if(flag == true) {
            console.log(`${yearInput} is a leap year!`);
        } else {
            console.log(`${yearInput} is not a leap year :(`);
        }
    }
}
console.log("You have quit the appliation.");

