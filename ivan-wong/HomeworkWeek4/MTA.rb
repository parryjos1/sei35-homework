def plan_trip(startingLine, startingStation, endingLine, endingStation)
  lines = {
    :lineN => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :lineL => ["8th", "6th", "Union Square", "3rd", "1st"],
    :line6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
  if startingLine == endingLine
    if lines[startingLine].index(startingStation) > lines[startingLine].index(endingStation)
      lines[startingLine].reverse!
    end
    lines[startingLine].each_with_index do |station, index|
      puts "You are at #{station} station"
    end
  else
    if lines[startingLine].index(startingStation) > lines[startingLine].index("Union Square")
      lines[startingLine].reverse!
    end
    if lines[endingLine].index(endingStation) < lines[endingLine].index("Union Square")
      lines[endingLine].reverse!
    end
    lines[startingLine].each_with_index do |station, index|
      puts "You are at #{station} station"
      if station == "Union Square"
        puts "Transferring lines"
        break;
      end
    end
    lines[endingLine][lines[endingLine].index("Union Square")+1..lines[endingLine].index(endingStation)].each_with_index do |station, index|
      puts "You are at #{station} station"
      if station == endingStation
        return "You are at your destination"
      end
    end
  end
end
# plan_trip(:lineN, "Times Square", :lineN, "8th")
plan_trip(:lineL, "1st", :lineN, "Times Square" )
