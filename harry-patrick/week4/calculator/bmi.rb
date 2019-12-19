require 'pry' # debuuger

puts "Please enter your weight and height"

print "Weight: "
weight = gets.chomp.to_i
print "Height: "
height = gets.chomp.to_f

def bmi (x, y)
  result = x / (y * y)
  return result.round(2)
end
# Formula: weight (kg) / [height (m)]2

puts "Your BMI is #{bmi weight, height}"
