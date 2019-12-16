print "Borrowed amount: "
borrow_amount = gets.to_i
print "Yearly interest rate in percentage: "
rate = gets.to_f/12/100  # monthly percentage
print "Length of loan in years: "
loan_length_in_years = gets.to_i * 12  # in months therefore multiply by 12

p = borrow_amount
i = rate
n = 12 * loan_length_in_years

def calculate_mortgage(p, i, n)
  m = p*((i*(1+i)**n)/(1-(1+i)**n))
end

monthly_payment = calculate_mortgage(borrow_amount, rate, loan_length_in_years)

puts "Your monthly repayments will be $#{monthly_payment.abs().round(2)}."
