
# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
def bmi
  print "Please type your height(m): "
  height = gets.to_f
  print "Please type your weight(kg): "
  weight = gets.to_f
  weight/(height**2)
end
puts "The body mass index(BMI) is #{bmi}"
