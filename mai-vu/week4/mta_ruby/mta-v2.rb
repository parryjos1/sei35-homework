require 'rainbow'

# Dollar sign makes mta a global variable (accessible inside any method)
$mta = {
    :line_n => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
    :line_l => [ "8th", "6th", "Union Square", "3rd", "1st" ],
    :line_6 => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
}


def plan_single_trip( line, idx1, idx2 )
    
    # Initialize an array to hold all stations the user will travel through
    trip = []

    if idx1 < idx2   #forward trip
        trip = $mta[ line ][ idx1..idx2 ]
    elsif idx1 > idx2   #backward trip
        line_backward = $mta[ line ].reverse
        trip = line_backward[ idx2..idx1 ]
    else
        trip = intersection
    end   #end of if...else (travel forward vs backward)

    # Return value of plan_single_trip() is the 'trip' array containing all stations the user will travel through
    trip

end   #end of plan_single_trip


# Main function
def plan_trip( line1, station1, line2, station2 )

    intersection = "Union Square"

    # Translate the line arguments, which are strings, into $mta's symbol (e.g. from "line_n" to :line_n)
    line1 = line1.to_sym
    line2 = line2.to_sym

    # Translate the station arguments, which are strings, into index positions (e.g. from "Times Square" to 0)
    index1 = $mta[line1].index( station1 )
    index2 = $mta[line2].index( station2 )

    if line1 == line2   #single-line trip

        trip1 = plan_single_trip( line1, index1, index2 )
        puts Rainbow("At #{station1} you will board #{line1} and pass through #{trip1.join(" - ")} to reach #{station2}.").plum
        puts "In total you will travel through #{trip1.length} stops."
    
    else   #multi-line trip
        
        trip1 = plan_single_trip( line1, index1, $mta[line1].index(intersection) )
        trip2 = plan_single_trip( line2, $mta[line2].index(intersection), index2 )

        puts Rainbow("You will get on #{line1} at #{station1} and pass through #{trip1.join(' - ')}. Then you will get off at Union Square and change to #{line2}. You will continue through #{trip2.join(' - ')} to reach #{station2}.").aqua
        puts "In total you will travel through #{trip1.length + trip2.length - 1} stops."

    end

end   #end of plan_trip


plan_trip("line_n", "Times Square", "line_l", "1st")
puts "-" * 50
plan_trip("line_6", "Grand Central", "line_n", "34th")
puts "-" * 50
plan_trip("line_n", "Times Square", "line_n", "23rd")

# # To debug in console
# require 'pry'; binding.pry