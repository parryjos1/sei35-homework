puts "MTA"




$mta = {
    "N" => ["TS", "34th", "28th", "23rd", "US", "8th"],
    "L" => ["8th", "6th", "US", "3rd", "1st"],
    "6" => ["GC", "33rd", "28th", "23rd", "US", "AP"]
  }


# single line trip


def single_line_trip( line, start, end_stop )

  current_line = $mta[ line ] #get line array

  start_index = current_line.find_index( start ) #index for start

  end_index = current_line.find_index( end_stop ) #index for end, +1 so it includes the end spot

  # p start_index
  # p end_index

  if start_index > end_index

    reversed_line_array = current_line.reverse
    # p reversed_line_array

    new_start_index = reversed_line_array.find_index( start ) #index for start

    new_end_index = reversed_line_array.find_index( end_stop )  #index for end, +1 so it includes the end spot

    # p new_start_index
    # p new_end_index

    reverse_trip = reversed_line_array[ new_start_index, new_end_index +1]

    p reverse_trip

  else


    trip = current_line[ start_index, end_index +1 ]

    p trip

  end

end

# single_line_trip( "N", "34th", "8th"  )
# single_line_trip( "N", "8th", "34th"  )
# single_line_trip( "L", "8th" , "3rd"  )
# single_line_trip( "6", "GC" , "AP"  )


# for multi-line

# find the index position of US - stop journey there
  # slice start_index to US index
# find the index position of US - start journey there
  # slice US index to end_index


def multi_line_trip( start_line, start, end_line, end_stop)

  current_line = $mta[ start_line ]

      # p current_line


    start_index = current_line.find_index( start )
    change_index_start = current_line.find_index( "US" )

      p start_index
      p change_index_start

    first_leg = current_line[ start_index, change_index_start + 1 ]

      p first_leg


  destination_line = $mta[ end_line ]

      p destination_line

    change_index_end = destination_line.find_index( "US" )
    end_index = destination_line.find_index( end_stop )

      p change_index_end
      p end_index

    second_leg = destination_line[ change_index_end, end_index +1 ]

      p second_leg

end

# multi_line_trip("N", "TS", "L", "1st")
multi_line_trip("6", "GC", "L", "1st")
