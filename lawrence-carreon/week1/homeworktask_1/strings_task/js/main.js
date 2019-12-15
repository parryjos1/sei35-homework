//Dr Evil

const DrEvil = function (money){
    if (money === 1000000)
    {   
        return `${money} dollars (pinky)`;
    }else
        {
            return `${money} dollars`;
        }
};

//I am using the examples as parameters so I know
//things are going well
console.log(DrEvil(10));
console.log(DrEvil(1000000));
console.log(DrEvil(1337));

//Mix up
const mixUp = function(string1, string2){
    //set up a string variable for each argument
    const firstString = string1;
    const secondString = string2;
    //get the first 2 characters of each string using the substr function
    //this function takes 2 integer arguments which tell it where to start
    //in the string you provide it (0 being the start)
    //You can also use substr() here
    const firstStringEarly = firstString.substr(0,2);
    const secondStringEarly = secondString.substr(0,2);
    //Using the replace function to take away the first two characters of the
    //initial two strings. Similarly to substr it takes 2 arguments to know
    //where to replace an expression and then a string to use for the replacement
    const firstStringAfter = firstString.replace(firstStringEarly,secondStringEarly);
    const secondStringAfter = secondString.replace(secondStringEarly,firstStringEarly);
    //Putting it altogether in an output variable
    const output = `${firstStringAfter} ${secondStringAfter}`;
    //return output so it can be console.log'd later
    return output;
};

//I am using the examples as parameters so I know things are going well
console.log(mixUp(`mix`,`pod`));
console.log(mixUp(`dog`, `dinner`));
console.log(mixUp(`done`,`dine`));
console.log(mixUp(`hello`,`salutations`));
console.log(mixUp(`boy`,`girl`));

//FixStart
const fixStart = function(stringToFix){
    //using the charAt function to check for the first
    //letter. The variables below are also to be use in
    //the for loop's scope.
    const startChar = stringToFix.charAt(0);
    //getting the length of the string for delimiting the loop
    const stringLength = stringToFix.length;
    //preparing an output string for return later
    //it immediately contains the first character
    let output = `${startChar}`;
    //Use a for loop to traverse the string and add a character to the output container
    //based on a condition
    for (i = 1; i < stringLength; i++){
        let currentChar = stringToFix.charAt(i);
        //Check whether or not the current character
        //is the same as the first character.
        if (currentChar === startChar) 
        {
            //adding to the output string
            output = `${output}*`;
        }else
            {
                output = `${output}${currentChar}`;
            };
    };
    return output;
};

//I am using the examples as parameters so I know
//things are going well
console.log(fixStart(`babble`));
console.log(fixStart(`google`));

//Verbing

//I am using the examples as parameters so I know
//things are going well
const verbing = function(checkVerb){
    const lengthOfWord = checkVerb.length;
    //I am going to use the "endsWith" function to check
    //the verb's last three letters for ing
    const ingCheck = checkVerb.endsWith(`ing`);
    if (lengthOfWord < 3)
    {
        return checkVerb;
    }else if( ingCheck === false )
        {
            return `${checkVerb}ing`;
        }else  
            {
                return `${checkVerb}ly`;
            }
};

console.log(verbing(`swim`));
console.log(verbing(`swimming`));
console.log(verbing(`go`));
console.log(verbing(`script`));
console.log(verbing(`scripting`));
console.log(verbing(`hi`));

//Notbad
const notBad = function(notBadString){
    //use indexOf function in the string to find the starting positions of "not" and "bad"
    //this produces 2 numbers to compare later
    const positionOfNot = notBadString.indexOf(`not`);
    const positionOfBad = notBadString.indexOf(`bad`);
    //set up output empty string for use later
    let output = ``;
    //check if the "not" occurs earlier than "bad" in the string and act accordingly
    if ( positionOfNot < positionOfBad )
    {
        //Using a regular expression to replace everything between, including "not" and "bad"
        //the "/" indicates the start of a regular expression or, a search pattern
        //the "." catches any character
        //the "*" lets the expression account for any amount of characters before it
        //after the replace function determines everything between and including "not" and "bad"
        //it replaces it with "good"
        output = notBadString.replace(/not.*bad/,`good`);
    }else
        {
            output = notBadString;
        };
    //returns output for logging to the console later
    return output;
};

console.log(notBad(`This dinner is not that bad!`));
console.log(notBad(`The movie is not so bad!`));
console.log(notBad(`This is dinner is bad!`));
console.log(notBad(`Was Luigi's Mansion bad? Not really.`));