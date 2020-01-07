p '-----------------'
p "New Trip"

 mta = {
    :n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
    :six_line => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
# finds index of starting and ending station
def station_index obj, line, station
   index = obj[line].index(station)
end
# forward or backward add each item to list first half
# reverse result
def create_stop_list obj, start, change, line, station, exchange_station
  trip = []
  full_line = obj[line]
  # if half_one == true
    if  start < change
      start += 1
      trip.push(full_line[start..change])
    else
      rev = full_line.reverse
      change_rev = rev.index(exchange_station)
      start_rev = rev.index(station) + 1
      trip.push(rev[start_rev..change_rev])
    end

end
# foward and backward add each item to list second half
def stop_list_second obj, end_station, change, line, station, exchange_station
  trip = []
  full_line = obj[line]
  if end_station < change
    rev = full_line.reverse
    change_rev = rev.index(exchange_station) + 1
    end_rev = rev.index(station)
    trip.push(rev[change_rev..end_rev])
  else
    change += 1
    trip.push(full_line[change..end_station])
  end
end
# creates a half trip twice
def half_trip obj, line, station, line_two, station_two, exchange_station
  starting_index = station_index obj, line, station
  exchange = station_index obj, line, exchange_station
  first_half = create_stop_list obj, starting_index, exchange, line, station, exchange_station
  first_trip = first_half.flatten
  puts "Train starts at #{station}."
  puts "The train travels along the #{line} stoping at #{first_trip}."
  puts "Change stations at Union Square"
  exchange_two = station_index obj, line_two, exchange_station
  ending_index = station_index obj, line_two, station_two
  second_half = stop_list_second obj, ending_index, exchange_two, line_two, station_two, exchange_station
  second_trip = second_half.flatten
  puts "The train continues along the #{line_two} following stops #{second_trip}"
  trip_length = first_trip.length + second_trip.length
  puts "Your trip is #{trip_length} stops"
end
# call the all the functions
half_trip mta, :n_line, "Times Square", :n_line, "8th", "Union Square"

# print "What transit system are you traveling on? "
# mta = gets.chomp
# mta = mta.to_sym
# print "What train line are you starting on? "
# exp_one = gets.chomp
# exp_one = exp_one.to_sym
# print "What train station are you starting on? "
# exp_station_one = gets.chomp
# print "What train line are you ending on? "
# exp_two = gets.chomp
# exp_two = exp_two.to_sym
# print "What train station are you starting on? "
# exp_station_two = gets.chomp
# print "What train station are you swaping at? "
# exp_change = gets.chomp
# half_trip mta, exp_one, exp_station_one, exp_two, exp_station_two, exp_change
