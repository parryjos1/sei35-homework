//arrays

//top choices

let topChoices = ['red', 'blue', 'green', 'orange', 'yellow'];

for(let x = 0; x < topChoices.length; x++) {
  console.log(`My ${x+1}${getSuffix(x+1)} choice is ${topChoices[x]}`);
}

function getSuffix(n) {
  if (n >= 11 && n <= 13) {
      return "th";
  }
  switch (n % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
  }
}