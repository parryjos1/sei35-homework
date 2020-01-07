puts "MTA"




$mta = {
    "N" => ["TS", "34th", "28th", "23rd", "US", "8th"],
    "L" => ["8th", "6th", "US", "3rd", "1st"],
    "6" => ["GC", "33rd", "28th", "23rd", "US", "AP"]
  }


# def change_index( line )  #returns index of US when given line
#
#   current_line = $mta[ line ]
#
#   current_line.find_index( "US" )
#
# end
#
# end_index = change_index('N') #value of end_index is US for that line
#
#
# def reverse_line( line )   #returns reversed line index
#
#   current_line = $mta[ line ]
#
#   current_line.reverse
#   # p reversed_line_array
#   # return value?
#
# end
#
# reversed_array = reverse_line("N") #value reversed_array is argument array reversed
#
#
# # if change
#   # 1st leg US for end
#   # 2nd left US for start
#
# # just needs to slice an array between 2 index
# def trip_array( line, start_index, end_index )
#
#   current_line = $mta[ line ]
#
#   current_line[ start_index, end_index +1 ]
#
# end
#
# trip = trip_array("N", 2, 5)  #value is array between two station index's
#
#
#
# def station_index( line, station)
#
#   current_line = $mta[ line ]
#
#   start_index = current_line.find_index( station )
#
# end
#
# station = station_index( "6", "28th")  #value is the index position of the station


def change_index( line )  #returns index of US when given line

  line.find_index( "US" )

end


def station_index( line, station)

  line.find_index( station )

end


# def reverse_line( line )   #returns reversed line index
#
#   current_line = $mta[ line ]
#
#   current_line.reverse
#   # p reversed_line_array
#   # return value?
#
#
# end
#
# reversed_array = reverse_line("N") #value reversed_array is argument array reversed

def reverse_line( line, start_station, end_station )   #returns reversed line index

  reversed_array = line.reverse
  # p reversed_array
  # return value?

  new_start_index = station_index(reversed_array, start_station)
  new_end_index = station_index(reversed_array, end_station)

  trip_array(reversed_array, new_start_index, new_end_index)

end

# reverse_trip = reverse_line(current_line, start_station, end_station) # returns a reversed and sliced array


def trip_array( line, start_index, end_index )


  line[ start_index, end_index +1 ]

end

# trip = trip_array("N", 2, 5)  #value is array between two station index's




def trip_planner( start_line, start_station, end_line, end_station)


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
        p reverse_trip

      end

  first_leg = trip_array(current_line, start_station_index, change_index_start)
  p first_leg  #works
#

# second_leg
  change_index_end = change_index( destination_line )

  end_station_index = station_index( destination_line, end_station )

      if change_index_end > end_station_index

        reverse_trip = reverse_line(destination_line, "US", end_station)
        p reverse_trip

      end

  second_leg = trip_array(destination_line, change_index_end, end_station_index)
  p second_leg
#

else


#single_line_trip
  start_station_index = station_index( current_line, start_station)

  end_station_index = station_index( current_line, end_station)

      if start_station_index > end_station_index
        # require 'pry' ; binding.pry
        reverse_trip = reverse_line(current_line, start_station, end_station)
        p reverse_trip

      end


  trip = trip_array(current_line, start_station_index, end_station_index)
  p trip
#
end


end

# trip_planner("N", "TS", "6", "AP")
# trip_planner("N", "TS", "N", "8th")
# trip_planner("N", "US", "N", "TS")
# trip_planner("N", "TS", "6", "GC")
# trip_planner("N", "8th", "6", "AP")
# trip_planner("N", "8th", "6", "GC")
