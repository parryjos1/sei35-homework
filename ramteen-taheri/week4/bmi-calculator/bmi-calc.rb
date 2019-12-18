puts "Welcome to the BMI Calculator. A few Questions."
print "Your Name?:  "
name = gets.chomp
print "Your Weight? (kg):  "
weight = gets.chomp
weight = weight.to_f.round(2)
print "Your Height? (cm):  "
height = gets.chomp
height = height.to_f.round(2)

puts "Loading..."

result = (weight/height/height) * 10000

puts "Well #{name}, your BMI is: #{result.round(1)}"
