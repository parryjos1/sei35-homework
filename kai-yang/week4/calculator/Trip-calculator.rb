# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
def trip_time
  print "Please input your distance: "
  distance = gets.to_f
  print "Please input your speed: "
  speed = gets.to_f
  distance/speed
end
puts "Trip time is #{trip_time}"

def cost
  print "Please input your distance: "
  distance = gets.to_f
  print "Please input miles per gallon: "
  miles_per_gallon = gets.to_f
  print "Please input price per gallon: "
  price_per_gallon = gets.to_f
  distance * miles_per_gallon * price_per_gallon

end
puts "Trip cost is #{cost}"
