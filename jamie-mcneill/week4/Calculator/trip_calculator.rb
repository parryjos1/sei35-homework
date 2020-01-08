print "Enter your distance in miles:"

distance = gets.chomp.to_i

print "Enter your mpg:"

mpg = gets.chomp.to_i

print "Enter your ppg:"

ppg = gets.chomp.to_i

print "Enter your average miles per hour:"

mph = gets.chomp.to_i

def trip( distance, mpg , ppg , mph )

  time_hours = distance / mph

  gallons = distance / mpg

  fuel_price = gallons * ppg

puts ("your journey time is #{time_hours} hours")
puts ("total fuel cost is £#{fuel_price}")
end

trip( distance , mpg , ppg , mph )
