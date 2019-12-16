puts "***********************************"
puts "Welcome to the mortgage calculator."
puts ""
puts "We are going to ask you some questions."
print "What is the principal amount borrowed? $"
p_amount = gets.chomp
p_amount = p_amount.to_f

print "Enter the total number of months in repayments: "
months = gets.chomp
months = months.to_i
int_rate = 0.003

puts "Calculating..."
repayments = p_amount * ( (int_rate*(1+int_rate)**months) / ((1+int_rate)**months - 1))

puts "Repayments: $#{repayments.round(2)} per month"

