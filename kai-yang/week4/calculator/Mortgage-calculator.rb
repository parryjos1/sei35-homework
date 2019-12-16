# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
def mortgage
  print "Please type your loan($): "
  loan = gets.to_f
  print "Please type your term of months: "
  n = gets.to_f
  print "Please type your monthly interest rate: "
  rate = gets.to_f
  loan * (rate * (1 + rate) ** n)/((1 + rate) ** n - 1)
end
 puts "The monthly required payment is #{mortgage}"
