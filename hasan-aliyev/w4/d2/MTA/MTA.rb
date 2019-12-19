require 'colorize'
print 'Choose your line: [t1], [t2], [t4]'
reply = gets.chomp.downcase
response = reply[0]

lines = {
  "t1" => ["north_strathfield", "strathfield", "burwood", "redfern", "town_hall", "wynyard", "circular_quay"],
  "t2" => ["summer_hill", "lewisham", "petersham", "stanmore", "newtown", "redfern"],
  "t4" => ["redfern", "central", "town_hall","martin_place", "kings_cross"]
}


# line_start = lines.keys
# station_start = lines.values_at("t1", "t2", "t4")
# line_stop = line_start
# station_stop = lines.values_at("t1", "t2", "t4")
# line_start = lines.keys
# station_start = lines.values_at("t1", "t2", "t4")
# line_stop = line_start
# station_stop = lines.values_at("t1", "t2", "t4")
#

line_start = lines.keys[0]
station_start = lines.values_at("t1", "t2", "t4")
line_stop = lines.keys[1]
station_stop = lines.values_at("t1", "t2", "t4")
line_stop = lines.keys[2]

def plan_trip (line_start, station_start, line_stop, station_stop)

  puts "Customer started his/her trip for line #{line_start} at station #{station_start} and ended trip on line #{line_stop} at #{station_stop} station".yellow
return


end

if reply == 't1'

  print 'Choose your start station: '
  station_start = gets.chomp
  print 'Choose your exit station: '
  station_stop = gets.chomp





  result = plan_trip(line_start, station_start, line_stop, station_stop)

elsif reply == 't2'

    print 'Choose your start station: '
    station_start = gets.chomp
    print 'Choose your exit station: '
    station_stop = gets.chomp




    result = plan_trip(line_start, station_start, line_stop, station_stop)

  elsif reply == 't4'

      print 'Choose your start station: '
      station_start = gets.chomp
      print 'Choose your exit station: '
      station_stop = gets.chomp




      result = plan_trip(line_start, station_start, line_stop, station_stop)

end


#
# print  "Customer started his/her trip for line ${line_start} at station ${station_start} and ended trip on line ${line_stop} at station ${station_stop}"








#
# users = {
#   "Jonathan" => {
#     :twitter => "tronathan",
#     :favorite_numbers => [12, 42, 75],
#   },
#   "Erik" => {
#     :twitter => "sferik",
#     :favorite_numbers => [8, 12, 24],
#   },
#   "Anil" => {
#     :twitter => "bridgpal",
#     :favorite_numbers => [12, 14, 85],
#   },
# }
#
#
#
# users['Jonathan']
# users['Jonathan']['twitter']
# users['Jonathan'][:twitter]
# users['Erik'][:favorite_numbers]
#
# p plan_trip
#
# "hello".index('e')             #=> 1
#
# days_of_the_week = %w{monday tuesday wednesday thursday friday saturday sunday}
#
# week_days = days_of_the_week[0..4]
#
#
#
#
#
#
# plan_trip( t1, "north_strathfield", :t2, "summer_hill" )
#
#
#
#
# Students should create a program that models a simple subway system.
#
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:
#
# the stations the user must pass through, in order
# where to change lines, if necessary
# the total number of stops for the trip.
# There are 3 subway lines:
#
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "1st" )
# # Or something along those lines
