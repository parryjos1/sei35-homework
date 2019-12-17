require 'pry'
require 'Rainbow'

@subway = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def new_trip(station1, line1, station2, line2)
    # reset
    @stops = []
    @line_stops = 0
    @total_stops = 0

    # Display trip
    puts ""
    puts Rainbow("You are travelling from #{ station1 } on the #{ line1 } to #{ station2 } on the #{ line2 }").lavenderblush
    puts "///" * 20
    puts "YOUR TRIP DETAILS"
    puts "///" * 20

    # travel on the same line
    if line1 == line2
        puts Rainbow("Start: #{station1}").mediumvioletred
        get_trip(station1, station2, line1)
        puts Rainbow("Travel on the #{line1} line for #{@line_stops} stops").blanchedalmond
        puts @stops
        puts Rainbow("Arrive: #{station2}").mediumvioletred
    else
        puts Rainbow("Start: #{station1}").mediumvioletred
        get_trip(station1, "Union Square", line1)
        puts Rainbow("Travel on the #{line1} line for #{@line_stops} stops:").thistle
        puts "Change at Union Square"
        get_trip("Union Square", station2, line2)
        puts Rainbow("Travel on the #{line2} line for #{@line_stops} stops:").thistle
        puts @stops
        puts Rainbow("Arrive: #{station2}").mediumvioletred
        puts "Number of stops: #{@total_stops}"
    end

end # end of new_trip

def get_trip(start_point, end_point, line)
    station_1_index = @subway[line].index(start_point.to_s)
    station_2_index = @subway[line].index(end_point.to_s)

    if  station_1_index < station_2_index
        @stops = @subway[line][ (station_1_index + 1 )..station_2_index ]
    else
        @stops = @subway[line][ ( station_2_index + 1 )..station_1_index ].reverse!
    end
    @line_stops = @stops.length
    @total_stops += @stops.length
end

# method gets the starting point and destination from user
def get_station(start)
    if start == true
        puts ""
        puts Rainbow(" ~ Welcome to the New York City MTA Service ~ ").royalblue
        puts ""
        puts Rainbow("Where are you starting your journey? ").darksalmon
    else
        puts Rainbow("Where would you like to go? ").darksalmon
    end
    print Rainbow("Station: ").blanchedalmond
    dept_dest_station = gets.chomp
end

def get_line
  print Rainbow("Line: ").blanchedalmond
  line = gets.chomp
end

def another_trip
    print "Would you to plan another trip (y/n)? "
    input = gets.chomp
    if input == 'y'
        new_trip(get_station(true), get_line, get_station(false), get_line)
    elsif input == 'n'
        puts Rainbow("See you next time!").blanchedalmond
        exit(true)
    else
        puts Rainbow("Invalid input!").red
    end
end

new_trip(get_station(true), get_line, get_station(false), get_line)
loop { another_trip }