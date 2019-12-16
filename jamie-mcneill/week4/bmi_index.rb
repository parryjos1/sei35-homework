print "Enter your weight in KG's:"

weight = gets.chomp.to_f

print "Enter your height in metres"

height = gets.chomp.to_f

def bmi_calc( weight, height )

  bmi = weight / (height * height)
  puts "your BMI index is: #{bmi}"

  if bmi > 25
    puts "you are overweight"
  elsif bmi >= 18.5
    puts "Healthy range"
  elsif bmi < 18.5
    puts "You are underweight"
  end

end

bmi_calc( weight , height )
