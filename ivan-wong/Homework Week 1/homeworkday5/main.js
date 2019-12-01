  const LineN= ['Times Square', "34th", "28th", "23rd", "Union Square", "8th"]
  const LineL= ["8th", "6th", "Union Square", "3rd", "1st"]
  const Line6= ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  const Intersections= ["Union Square"]

let planTrip = function(StartLine, StartStation, EndLine, EndStation) {
  let lengthOfLine1 = 0
  let lengthOfLine2 = 0
  let lengthOf1Line = 0
  let StartingLine = undefined
  let EndingLine = undefined
  if (StartLine === "N") {
    StartingLine = LineN
  } else if (StartLine === "L") {
    StartingLine = LineL
  } else if (StartLine === "6") {
    StartingLine = Line6
  }
  if (EndLine === "N") {
    EndingLine = LineN
  } else if (EndLine === "L") {
    EndingLine = LineL
  } else if (EndLine === "6") {
    EndingLine = Line6
  }
  let Line1Start = StartingLine.indexOf(StartStation)
  let Line1Intersect = StartingLine.indexOf("Union Square")
  let Line2Start = EndingLine.indexOf(EndStation)
  let Line2Intersect = EndingLine.indexOf("Union Square")
  if (StartLine !== EndLine) { //Takes 2 lines
    if (Line1Start > Line1Intersect) {
      lengthOfLine1 = Line1Start - Line1Intersect
    } else if (Line1Start < Line1Intersect) {
      lengthOfLine1 = Line1Intersect - Line1Start
    } else if (Line1Start === Line1Intersect) {
      lengthOfLine1 = 0
    }
    if (Line2Start > Line2Intersect) {
      lengthOfLine2 = Line2Start - Line2Intersect
    } else if (Line2Start < Line2Intersect) {
      lengthOfLine2 = Line2Intersect - Line2Start
    } else if (Line2Start === Line2Intersect) {
      lengthOfLine2 = 0
    }
    EndingLine = EndingLine.reverse()
    if (lengthOfLine1 !== 0 && lengthOfLine2 !== 0) {
      console.log(`There will be ${lengthOfLine1+lengthOfLine2} stops on your trip`)
      for (i = Line1Start; i <= lengthOfLine1+1; i++) {
        if (StartingLine[i] === "Union Square") {
          console.log(`You are transferring stations at Union Square`)
          break;
        }
        console.log(`You are currently at ${StartingLine[i]} station`)
      }
      Line2Start = EndingLine.indexOf("Union Square")
      for (i = Line2Start; i <= lengthOfLine2; i++) {
        console.log(`You are currently at ${EndingLine[i]} station`)
      }
      console.log(`You have arrived at your destination ${EndStation}`)
    }
  }
  if (StartLine === EndLine) { //Takes 1 line
    if (Line1Start > Line2Start) {
      lengthOfLine1 = Line1Start - Line2Start  //CHANGE TO lengthOf1Line if necessary
      StartingLine = StartingLine.reverse();
    } else if (Line1Start < Line2Start) {
      lengthOfLine1 = Line2Start - Line1Start
    } else if (Line1Start === Line2Start) {
      lengthOfLine1 = 0
      return `You are already at the station you want to go to`
    }
    console.log(`There are ${lengthOfLine1} stops in your journey`)
    for (i = Line1Start; i <= lengthOfLine1+1; i++) {
      if (StartingLine[i] === EndStation) {
        return `You have arrived at your destination ${EndStation}`
      }
      console.log(`You are currently at ${StartingLine[i]} station`)
    }
  }
}
