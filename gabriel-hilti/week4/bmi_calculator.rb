print "Your weight in kg: "
weight_in_kg = gets.to_f
print "Your height in cm: "
height_in_cm = gets.to_f

def calculate_bmi_index(weight, height)
  bmi = ((weight/ height**2) * 10_000).round(1)
end
bmi_index = calculate_bmi_index(weight_in_kg, height_in_cm)
bmi_info = case
when bmi_index < 18 then "You are underweight."
when bmi_index > 25 then "You are overweight."
else "Your weight is within the normal range."
end

puts "Your BMI is #{bmi_index}. " + bmi_info
