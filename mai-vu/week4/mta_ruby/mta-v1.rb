$mta = {
    :line_n => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
    :line_l => [ "8th", "6th", "Union Square", "3rd", "1st" ],
    :line_6 => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
}


def travel_forward( line, idx1, idx2 )
    line = line.to_sym
    first_index = idx1
    second_index = idx2
    $mta[ line ][ first_index..second_index ]   # Return value is an array of stations the users will travel through
end   #end of travel_forward


def travel_backward( line, idx1, idx2 )
    line = line.to_sym
    line_backward = $mta[ line ].reverse
    first_backward_index = idx2
    second_backward_index = idx1
    line_backward[ first_backward_index..second_backward_index ]
end   #end of travel_backward


def plan_trip( line1, station1, line2, station2 )

    intersection = "Union Square"
    line1 = line1.to_sym
    line2 = line2.to_sym
    index1 = $mta[ line1 ].index( station1 )
    index2 = $mta[ line2 ].index( station2 )

    if line1 == line2
        case
        when index1 < index2 
            trip1 = travel_forward( line1, index1, index2 )
        when index1 > index2
            trip1 = travel_backward( line1, index1, index2 )
        else
            trip1 = intersection
        end   #end of single-line switch case

        puts "On #{line1} you will get on at #{station1} and pass through #{trip1.join(' - ')} to reach #{station2}."
        puts "In total you will travel through #{trip1.length} stops."
    
    else
        
        case
        when index1 < $mta[ line1 ].index( intersection )
            trip1 = travel_forward( line1, index1, $mta[line1].index(intersection) )
        when index1 > $mta[ line1 ].index( intersection )
            trip1 = travel_backward( line1, index1, $mta[line1].index(intersection) )
        else
            trip1 = intersection
        end   #end of first leg of multi-line switch case

        case
        when index2 > $mta[ line2 ].index( intersection )
            trip2 = travel_forward( line2, $mta[line2].index(intersection), index2 )
        when index2 < $mta[ line2 ].index( intersection )
            trip2 = travel_backward( line2, $mta[line2].index(intersection), index2 )
        else
            trip2 = intersection
        end   #end of second leg of multi-line switch case

        puts "On #{line1} you will get on at #{station1}."
        puts "You will pass through the following stations #{trip1.join(' - ')}."
        puts "You will get off at Union Square and change to #{line2}."
        puts "From Union Square you will travel through #{trip2.join(' - ')} to reach #{station2}."
        puts "In total you will travel through #{trip1.length + trip2.length - 1} stops."

    end   #end of if...else (single-line vs multi-line)

end   #end of plan_trip


plan_trip("line_n", "Times Square", "line_l", "1st")
puts "-" * 50
plan_trip("line_6", "Grand Central", "line_n", "34th")
puts "-" * 50
plan_trip("line_n", "Times Square", "line_n", "23rd")