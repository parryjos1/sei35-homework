require 'Rainbow'

@subway = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
} #instance variable allows the hash to be accessed by any method in the "global class"

def new_trip(start_station, start_line, end_station, end_line)
    # Display trip
    puts Rainbow("\nYou are travelling from #{ start_line } on the #{ start_line } to #{ end_station} on the #{ end_line }").lavenderblush
    puts "YOUR TRIP DETAILS"

    # check for a single line trip
    if start_line == end_line
        get_trip(start_station, end_station, start_line)
    else
        get_trip(start_station, "Union Square", start_line)
        get_trip("Union Square", end_station, end_line)
    end
end # end of new_trip

def get_trip(start_point, end_point, line)
    # reset
    line_stops = 0
    total_stops = 0
    stops = []

    puts Rainbow("Start: #{start_point}").mediumvioletred
    station_1_index = @subway[line].index(start_point.to_s)
    station_2_index = @subway[line].index(end_point.to_s)

    if  station_1_index < station_2_index
        stops = @subway[line][ (station_1_index + 1 )..station_2_index ]
    else
        stops = @subway[line][ ( station_2_index + 1 )..station_1_index ].reverse!
    end
    line_stops = stops.length
    total_stops += stops.length
    puts Rainbow("Travel on the #{line} line for #{line_stops} stops").thistle
    puts stops
    if (end_point != "Union Square")
        puts Rainbow("Arrive: #{end_point}").mediumvioletred
    else
        puts "Change at Union Square"
    end
    puts "Number of stops: #{total_stops}"
end

new_trip("Times Square", "N", "Astor Place", "6")