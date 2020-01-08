#this contains a condition incase seperate lines given for Union Square - probably add conditions here for wrong input etc

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
    stations[line][start_index..end_index]
  elsif start_index > end_index
    stations[line][end_index..start_index].reverse # to reverse the array for backwards trips
  end
end

def plan_trip from_line, from_station, to_line, to_station # takes in all the tip data
  if from_line == to_line
    single_line_trip = line_trip from_line, from_station, to_station
    puts "travel on the #{from_line} through the following stop(s)", single_line_trip.join(' - ')
  elsif to_station == "Union Square" # if the destination in union square, treats it as a single line trip only
    single_line_trip = line_trip from_line, from_station, to_station
    puts "travel on the #{from_line} through the following stops", single_line_trip
  else # if it's a 2 line trip it takes the user to union square then changes them to the destination line
    to_interchange = line_trip from_line, from_station, "Union Square"
    puts "on the #{from_line} line you need to travel through", to_interchange.join(' - ')
    puts "change at Union Square to the #{to_line} line"
    from_interchange = line_trip to_line, "Union Square", to_station
    puts "travel through the following stop(s) to your destination", from_interchange[1..-1].join(' - ') # range [1..-1] is from second value to last - cuts off union square
  end
end

puts "welcome to the mta"
print "please enter your departure line( #{stations.keys.join(' - ')} ): " # print asks you for you trip details
from_line = gets.chomp.to_sym #to_sym changes a string into a symbol
p from_line
print "please enter your departure station from the #{from_line} line( #{stations[from_line].join(' - ')} ): "
from_station = gets.chomp
p from_station
print "please enter your destination line( #{stations.keys.join(' - ')} ): "
to_line = gets.chomp.to_sym
p to_line
print "please enter your destination station from the #{to_line} line( #{stations[to_line].join(' - ')} ): "
to_station = gets.chomp
p to_station
plan_trip from_line, from_station, to_line, to_station
