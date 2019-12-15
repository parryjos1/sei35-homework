/* Raindrops Exercise - Week 1 Day 3 */
var inputNum = prompt("Enter a random number...");
inputNum = +inputNum;
var concatenated = "";

var arrayObjects = [
    {
        index: 3,
        value: "Pling "
    },
    {
        index: 5,
        value: "Plang "
    },
    {
        index: 7,
        value: "Plong "
    }
];

var found = false;

function myFunction(item, index) {
    if(inputNum % arrayObjects[index].index == 0) {
        concatenated += `${arrayObjects[index].value} `;
        found = true;
    }
};

arrayObjects.forEach(myFunction);

if(found == false) {
    concatenated += `Number is: ${inputNum}`;
}

console.log(concatenated);