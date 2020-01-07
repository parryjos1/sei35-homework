puts "MTA-BEST"


$mta = {
    "N" => ["TS", "34th", "28th on N", "23rd on N", "US", "8th on N"],
    "L" => ["8th on L", "6th", "US", "3rd", "1st"],
    "6" => ["GC", "33rd", "28th on 6", "23rd on 6", "US", "AP"]
  }



def change_index( line )  #returns index of US when given line

  line.find_index( "US" )

end


def station_index( line, station)

  line.find_index( station )

end


def reverse_line( line, start_station, end_station )   #returns reversed line index

  reversed_array = line.reverse
  # p reversed_array
  # return value?

  new_start_index = station_index(reversed_array, start_station)
  new_end_index = station_index(reversed_array, end_station)

  trip_array(reversed_array, new_start_index, new_end_index)

end


def trip_array( line, start_index, end_index )


  line[ start_index, end_index +1 ]

end


def trip_planner( start_line, start_station, end_line, end_station)
# require 'pry' ; binding.pry

  current_line = $mta[ start_line ]
  destination_line = $mta[ end_line ]



if start_line != end_line

# first_leg
  start_station_index = station_index( current_line, start_station)
  # p start_station_index #works

  change_index_start = change_index( current_line )
  # p end_index  #works

      if start_station_index > change_index_start

        reverse_trip = reverse_line(current_line, start_station, "US")
        puts "You need to travel from #{start_station} through #{reverse_trip.join(', ')} changing at US"
        puts  "This will be a total of #{reverse_trip.length} stops"

      end

  first_leg = trip_array(current_line, start_station_index, change_index_start)
  # p first_leg  #works
  puts "You need to travel from #{start_station} through #{first_leg.join(', ')} exiting at US"
  puts  "This will be a total of #{reverse_trip.length} stops"
#

# second_leg
  change_index_end = change_index( destination_line )

  end_station_index = station_index( destination_line, end_station )

      if change_index_end > end_station_index

        reverse_trip = reverse_line(destination_line, "US", end_station)
        # p reverse_trip
        puts "You then need to travel from US through #{reverse_trip.join(', ')} exiting at #{end_station}"
        puts  "This will be a total of #{reverse_trip.length} stops"

      end

  second_leg = trip_array(destination_line, change_index_end, end_station_index)
  # p second_leg
  puts "You then need to travel from US through #{second_leg.join(', ')} exiting at #{end_station}"
  puts  "This will be a total of #{reverse_trip.length} stops"
#

else


#single_line_trip
  start_station_index = station_index( current_line, start_station)

  end_station_index = station_index( current_line, end_station)

      if start_station_index > end_station_index
        # require 'pry' ; binding.pry
        reverse_trip = reverse_line(current_line, start_station, end_station)
        puts "You need to travel from #{start_station} through #{reverse_trip.join(', ')} exiting at #{end_station}"
        puts  "This will be a total of #{reverse_trip.length} stops"

      end


  trip = trip_array(current_line, start_station_index, end_station_index)
  puts "You need to travel from #{start_station} through #{trip.join(', ')} exiting at #{end_station}"
  puts  "This will be a total of #{trip.length} stops"
#
end


end

# trip_planner("N", "TS", "6", "AP")
# trip_planner("N", "TS", "N", "8th on N")
# trip_planner("N", "US", "N", "TS")
# trip_planner("N", "TS", "6", "GC")
# trip_planner("N", "8th", "6", "AP")
# trip_planner("N", "8th on N", "6", "GC")

# puts "Please enter your current line"
# departure_line = gets.chomp
#
# puts "Please enter your current station"
# departure_station = gets.chomp
#
# puts "Please enter your destination line"
# destination_line = gets.chomp
#
# puts "Please enter your destination station"
# destination_station = gets.chomp


# $mta.each do | k, v |
# 	puts "Key: #{k} and Value: #{v}"
# end


# p trip_planner(departure_line, departure_station, destination_line, destination_station)
