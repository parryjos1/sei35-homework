puts 'Welcome to yout trip calculator'

print "How many kms is your journey? "
kms = gets.chomp.to_i

print "How many kms can you drive per litre of petrol? "
efficency = gets.chomp.to_i

print "What is the price per litre of petrol($)? "
price = gets.chomp.to_f

print "What will your average speed be (km/hr)? "
speed = gets.chomp.to_f

def cost (distance, eff, price)
    (distance / eff) * price
end

def time (distance, speed)
    distance / speed
end

puts "Your trip of #{kms}kms will cost: $#{cost(kms, efficency, price)}"
puts "Your trip will take #{time kms, speed} hours"
