# MTA Ruby

def mta
  {
    'n' => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    'l' => [ "8th", "6th", "Union Square", "3rd", "1st" ],
    'six' => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
end

def prompt
  puts "please enter your start line and stop and your end line and stop:"
end

def journey_plan (start_line, first_stop, end_line, second_stop)

  index_stop1 = mta[start_line].index(first_stop)

  index_stop2 = mta[end_line].index(second_stop)

  index_union1 = mta[start_line].index("Union Square")

  index_union2 = mta[end_line].index("Union Square")

puts "You would like to travel from #{start_line} line, #{first_stop} to #{end_line} line #{second_stop}"

puts "Your route is:"

if  start_line == end_line  && index_stop1 < index_stop2

    index_stop1 = mta[start_line].index(first_stop)
    index_stop2 = mta[end_line].index(second_stop) + 1

    journey_single_line = mta[start_line].slice(index_stop1, index_stop2)

    p "Take the #{start_line} line through the following stops: #{journey_single_line}"

elsif start_line == end_line  && index_stop1 > index_stop2

    index_stop1 = mta[start_line].index(first_stop) + 1
    index_stop2 = mta[end_line].index(second_stop)
    journey_single_reverse = mta[start_line].slice(index_stop2,index_stop1)

    reverse = journey_single_reverse.reverse

    p "Take the #{start_line} line through the following stops: #{reverse}"

elsif start_line != end_line && index_stop1 < index_union1 &&  index_union2 < index_stop2

  index_stop1 = mta[start_line].index(first_stop)
  index_union1 = mta[start_line].index("Union Square")+ 1
  journey_to_union =  mta[start_line].slice(index_stop1,index_union1)

  p "Take the #{start_line} line through the following stops: #{journey_to_union}."
  p "Change at Union Square"

  index_stop2 = mta[end_line].index(second_stop) + 1
  index_union2 = mta[end_line].index("Union Square")
  journey_to_stop2 = mta[end_line].slice(index_union2, index_stop2)

  p "Take the #{end_line} line through the following stops: #{journey_to_stop2}"

elsif start_line != end_line && index_stop1 < index_union1  &&  index_union2 > index_stop2

    index_stop1 = mta[start_line].index(first_stop)
    index_union1  = mta[start_line].index("Union Square") + 1
    journey_to_union = mta[start_line].slice(index_stop1 , index_union1 )

    p "Take the #{start_line} line through the following stops: #{journey_to_union}."
    p "Change at Union Square"

    index_stop2 = mta[end_line].index(second_stop);
    index_union2 = mta[end_line].index("Union Square") + 1
    line2_journey = mta[end_line].slice(index_stop2, index_union2)
    reverse2 = line2_journey.reverse()
    p "Then continue on #{end_line} line through #{reverse2}"

 elsif start_line != end_line && index_stop1 > index_union1 && index_union2 > index_stop2

    index_stop1 = mta[start_line].index(first_stop) + 1
    index_union1  = mta[start_line].index("Union Square")
    line1_journey_union = mta[start_line].slice(index_union1,index_stop1)
    reverse1 = line1_journey_union.reverse()

    p "Take the #{start_line} line through the following stops: #{reverse1}"

    p "Change at Union Square"

    index_stop2 = mta[end_line].index(second_stop)
    index_union2 = mta[end_line].index("Union Square") + 1
    line2_journey = mta[end_line].slice(index_stop2, index_union2)
    reverse2 = line2_journey.reverse()
    p "Then continue on #{end_line} line through #{reverse2}"

 else

    index_stop1 = mta[start_line].index(first_stop) + 1
    index_union1  = mta[start_line].index("Union Square")
    line1_journey_union = mta[start_line].slice(index_union1,index_stop1)
    reverse1 = line1_journey_union.reverse()

    p "Take the #{start_line} line through the following stops: #{reverse1}"

    p "Change at Union Square"

    indexNumStop2 = mta[end_line].index(second_stop) + 1
    index_union2 = mta[end_line].index("Union Square")
    journey_to_stop2 = mta[end_line].slice(index_union2, index_stop2)

    p "Then take the #{end_line} line through the following stops: #{journey_to_stop2}"

 end

end

#journey_plan('n', "Times Square", 'n' , "Union Square")
#journey_plan('n', "Union Square", 'n' , "Times Square")
# journey_plan('n', "Times Square", 'l' , "1st")
# journey_plan('n', "8th", 'six' , "Grand Central")
# journey_plan('n', "8th", 'six' , "Astor Place")
journey_plan('n', "Times Square", 'l' , "8th")
