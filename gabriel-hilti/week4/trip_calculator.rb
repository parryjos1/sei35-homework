print "Distance of your trip in miles? "
distance = gets.to_i
print "Miles per gallon? "
mpg = gets.to_f
print "Price per gallon? "
ppg = gets.to_f
print "Speed in miles per hour? "
mph = gets.to_f

def calculate_trip_time(distance, speed)
  time = (distance/speed).round(1)
end

def calculate_trip_cost(price_per_gallon, miles_per_gallon, distance)
  cost = (price_per_gallon * distance/ miles_per_gallon).round(1)
end

needed_time = calculate_trip_time(distance, mph)

hour = 'hour'
if needed_time > 1.0
  hour = 'hours'
end

puts "Your trip will take #{calculate_trip_time(distance, mph)} #{hour} and will cost around #{calculate_trip_cost(ppg, mpg, distance)}."
