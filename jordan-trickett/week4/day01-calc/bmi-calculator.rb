puts  "BMI"

# Calculate the body mass index (BMI) for an individual, given their height and weight

puts "Enter weight in KG:"
weight = gets.to_f

puts "Enter height in metres:"
height = gets.to_f

def bmi_calculator(weight, height)

    height_squared = height * height

    bmi = (weight / height_squared).round(2)

    puts "Your BMI is #{bmi}"

end

bmi_calculator(weight, height)
