#  formula repayment = A/D a = amount borrow, d is formula

print "How much would your like to borrow? "
ammount_borrow = gets.chomp.to_i

print "How many years would you like to repay? "
years = gets.chomp.to_i

period = years * 12

print "Interest rate in decimals? "
rate = gets.chomp.to_f

# def repay (borrow, period, rate) 
  rate_plus_one = 1 + rate
  to_the_pow_of_top = rate_plus_one ** period
  top_half = to_the_pow_of_top - 1
  rate_plus_one_to_the_pow =  rate_plus_one ** period
  to_the_pow_times_rate = rate_plus_one_to_the_pow * rate
  d = top_half/to_the_pow_times_rate
  total = ammount_borrow/d

monthly_payment = total.round(2)
puts "Your monthly payments will be #{monthly_payment}"
