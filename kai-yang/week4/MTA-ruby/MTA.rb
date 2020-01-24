# subway lines objects
$subway_lines = {
  line_N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  line_L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line_6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

# method to get index of stops
def index_of_stop (line, stop)
  index = $subway_lines[line].index(stop)
end

# method to reverse trip
def reverse_trip (line)
  trip_reversed = $subway_lines[line].reverse
end

# multiple lines
def multiple_lines (first_line, start_stop, second_line, end_stop)
  # index of start_stop, end_stop and Union Square
  index_of_start_stop = index_of_stop(first_line, start_stop)
  index_of_UnionSquare_firstLine = index_of_stop(first_line, 'Union Square')
  index_of_end_stop = index_of_stop(second_line, end_stop)
  index_of_UnionSquare_secondLine = index_of_stop(second_line, 'Union Square')

  # define variables used later
  total_number_of_stops = 0
  stops = []
  # start with first_line trip
  # forward or backward?
  if index_of_start_stop < index_of_UnionSquare_firstLine
    # number of stops in first_line
    total_number_of_stops = index_of_UnionSquare_firstLine - index_of_start_stop
    # return all stops into stops array
    stops = $subway_lines[first_line][index_of_start_stop...index_of_UnionSquare_firstLine]
  else
    # reversed index of start_stop and Union Square
    reverse_index_of_start_stop = reverse_trip(first_line).index(start_stop)
    reverse_index_of_UnionSquare_firstLine = reverse_trip(first_line).index('Union Square')
    # number of stops in first_line
    total_number_of_stops = reverse_index_of_UnionSquare_firstLine - reverse_index_of_start_stop
    # return all stops into stopd array
    stops = reverse_trip(first_line)[reverse_index_of_start_stop...reverse_index_of_UnionSquare_firstLine]
  end
  # move to second_line
  # if it is backward or forward
  if index_of_end_stop > index_of_UnionSquare_secondLine
    # total number of stops
    total_number_of_stops += (index_of_end_stop - index_of_UnionSquare_secondLine)
    stops = stops + $subway_lines[second_line][index_of_UnionSquare_secondLine..index_of_end_stop]
  else
    # reverse index of end stop and Union Square
    reverse_index_of_end_stop = reverse_trip(second_line).index(end_stop)
    reverse_index_of_UnionSquare_secondLine = reverse_trip(second_line).index('Union Square')
    # total number of stops
    total_number_of_stops += (reverse_index_of_end_stop - reverse_index_of_UnionSquare_secondLine )
    stops = stops + reverse_trip(second_line)[reverse_index_of_UnionSquare_secondLine..reverse_index_of_end_stop]
  end
  puts "The user must past through #{stops.join(',')} and change at Union Square, and the total number of stops for the trip is #{total_number_of_stops}."
end
multiple_lines(:line_N, '34th', :line_6, 'Grand Central' )
# multiple_lines(:line_N, '34th', :line_L, '1st' )
# multiple_lines(:line_N, '34th', :line_6, '23rd' )
# multiple_lines(:line_L, '1st', :line_N, '8th' )
# multiple_lines(:line_L, '1st', :line_6, 'Grand Central' )
# multiple_lines(:line_L, '1st', :line_L, '8th' )
