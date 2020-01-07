puts "Trips calculator"

# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

puts "How many miles are you travelling:"
length_of_journey = gets.to_i

puts "How fast will you drive in mph:"
speed = gets.to_i

puts "Whats the miles per gallon:"
miles_pg = gets.to_i

puts "What's the price of petrol per gallon:"
price_pg = gets.to_f


def trip_calculator(distance, speed, mpg, ppg)

  cost = (distance / mpg) * ppg

  duration = distance / speed

  puts "Your journey will take #{duration} hours, and cost $#{cost}"

end

trip_calculator(length_of_journey, speed, miles_pg, price_pg)
