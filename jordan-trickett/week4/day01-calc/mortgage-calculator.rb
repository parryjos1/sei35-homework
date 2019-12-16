puts "mortgage calculator"

# Calculate the monthly required payment given the other variables as input (look up the necessary variables)


puts "Loan amount:"
loan_amount = gets.to_f

puts "Annual interest rate:"
annual_interest_rate = gets.to_f

puts "How many years:"
loan_term_years = gets.to_i



def mortgage_calculator(loan, interest, term)

    monthly_interest_rate = ((interest/100)/12)

    number_of_payments = (12 * term)

    monthly_repayment =

      (loan * ( ( monthly_interest_rate * (( 1 + monthly_interest_rate ) ** number_of_payments)))  / ((( 1 + monthly_interest_rate  ) ** number_of_payments) - 1  )).round(2)

    puts "Monthly repayment amount is $#{monthly_repayment}"

end

mortgage_calculator(loan_amount, annual_interest_rate, loan_term_years)
