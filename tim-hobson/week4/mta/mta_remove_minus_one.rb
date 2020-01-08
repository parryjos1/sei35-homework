def stations
  { n: [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ], l: [ '8th', '6th', 'Union Square', '3rd', '1st' ], six: [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ] }
end

def get_index line, station # gets index of the station on the line
  index = stations[line].index( station )
end

def line_trip line, from_station, to_station # creates the trip for that line. every trip runs through this method
  start_index = get_index(line, from_station)
  end_index = get_index(line, to_station)
  if start_index < end_index
    stations[line][start_index...end_index]
  elsif start_index > end_index
    stations[line][end_index...start_index].reverse # to reverse the array for backwards trips
  end
end

def plan_trip from_line, from_station, to_line, to_station # takes in all the tip data
  if from_line == to_line
    single_line_trip = line_trip from_line, from_station, to_station
    puts "Board at #{from_station} station on the #{from_line.upcase} through the following #{single_line_trip.length} stop(s)", single_line_trip[1..-1].join(' - ')
  else # if it's a 2 line trip it takes the user to union square then changes them to the destination line
    to_interchange = line_trip from_line, from_station, "Union Square"
    puts "Board at #{from_station} station on the #{from_line.upcase} line and travel through the following #{to_interchange.length} stop(s)", to_interchange[1..-1].join(' - ')
    puts "Change at Union Square to the #{to_line.upcase} line"
    from_interchange = line_trip to_line, "Union Square", to_station
    totalstops = (to_interchange.length) + (from_interchange.length)
    puts "Travel through the following #{from_interchange.length} stop(s) to your destination, for a total of #{totalstops} stops", from_interchange[1..-1].join(' - ')
  end
end

print "Welcome to the mta - please enter your departure line( #{stations.keys.join(' - ')} ): " # print asks you for you trip details
from_line = gets.chomp.downcase.to_sym #to_sym changes a string into a symbol
print "Please enter your departure station from the #{from_line} line( #{stations[from_line].join(' - ')} ): "
from_station = gets.chomp#.downcase
print "Please enter your destination line( #{stations.keys.join(' - ')} ): "
to_line = gets.chomp.downcase.to_sym
print "Please enter your destination station from the #{to_line} line( #{stations[to_line].join(' - ')} ): "
to_station = gets.chomp#.downcase
puts "Boarding on the #{from_line.upcase} line at #{from_station} station, headed to #{to_station} station on the #{to_line.upcase} line."
plan_trip from_line, from_station, to_line, to_station
