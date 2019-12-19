
# loop do

def show_bonus_menu
  puts "welcome to the bonus calculator"
  puts "choose an option"
  puts "Mortgage calculator: m"
  puts "BMI calculator: b"
  puts "Trip calculator: t"
  print "enter your desired operation (m, b, t): "
  gets.chomp
end

def get_borrow_amount
  print "what amount do you want to borrow: "
  gets.to_i
end

def get_term_length
  print "how many years: "
  gets.to_i
end

def get_interest_rate
  print "what is your interest percent rate: "
  gets.to_f
end

def mortgage
  # For example, say you borrowed $265,000 on a 15-year mortgage at 4.32 percent.
  amount = get_borrow_amount
  term_length = get_term_length
  interest_rate = get_interest_rate
  # Start by dividing 0.0432 by 12 to find that the monthly rate equals 0.0036. rate / 12
  monthly_rate = (interest_rate/100) / 12
  puts monthly_rate # 0.0036
  # Next, add 1 to 0.0036 to get 1.0036. ( rate / 12 ) + 1
  monthly_rate_plus_one = monthly_rate + 1
  puts monthly_rate_plus_one # 1.0036
  # Third, multiply 15 years by 12 payments per year to find that your loan consists of 180 monthly payments. term * 12
  num_of_months = term_length * 12
  puts num_of_months # 180
  # Fourth, raise 1.0036 to the negative 180th power to get 0.5237.  ((rate / 12) + 1)^180 *-1
  minus_from_1 = monthly_rate_plus_one ** (num_of_months * -1) # 0.5237
  puts minus_from_1
  # Fifth, subtract 0.5237 from 1 to get 0.4763.
  divide_monthly_rate_by = 1 - minus_from_1
  puts divide_monthly_rate_by
  # # Sixth, divide 0.0036 by 0.4763 to get 0.00755826.
  amount_multiply_by = monthly_rate / divide_monthly_rate_by
  puts amount_multiply_by
  # # Finally, multiply 0.00755826 by $265,000 to find your monthly payment will be $2,002.93.
  monthly_repayment = (amount * amount_multiply_by).round(2)
  puts "with a loan amount of #{amount} over #{term_length} years with a interest rate of #{interest_rate}% your montly repayments will be #{monthly_repayment}"
end

# M = P[r(1+r)^n/((1+r)^n)-1)]
#
# M = the total monthly mortgage payment.
# P = the principal loan amount.
# r = your monthly interest rate. Lenders provide you an annual rate so you’ll need to divide that figure by 12 (the number of months in a year) to get the monthly rate. If your interest rate is 5%, your monthly rate would be 0.004167 (0.05/12=0.004167)
# n = number of payments over the loan’s lifetime. Multiply the number of years in your loan term by 12 (the number of months in a year) to get the number of payments for your loan. For example, a 30-year fixed mortgage would have 360 payments (30x12=360)

def get_weight
  print 'what is your weight in kgs: '
  gets.to_f
end

def get_height
  print 'what is your height in meters: '
  gets.to_f
end

def bmi
  height = get_height
  weight = get_weight
  answer = weight / ( height ** 2 )
  puts "with a height of #{height}m tall and a weight of #{weight}kgs you have a BMI of #{answer}"
end

def get_distance
  print "what is the distance in kms: "
  gets.to_f
end

def get_kms_per_litre
  print "what is the kilometers per litre: "
  gets.to_f
end

def get_price_per_litre
  print "what is the price per litre: "
  gets.to_f
end

def get_speed_in_kmph
  print "what is the speed in kmp/h: "
  gets.to_f
end



def trip
  distance = get_distance
  kms_per_litre = get_kms_per_litre
  price_per_litre = get_price_per_litre
  speed_in_kmph = get_speed_in_kmph
  trip_time_in_hours = distance / speed_in_kmph
  trip_cost = distance / kms_per_litre * price_per_litre
  puts "it will take #{trip_time_in_hours} hours to travel #{distance}."
  puts "it will cost $#{trip_cost} to travel #{distance} with a consumption of #{kms_per_litre} when fuel is $#{price_per_litre} per litre"
end # is there a way to use the function as a input without calling it again?


menu_selection = show_bonus_menu
case menu_selection
when 'm'
  mortgage
when 'b'
  bmi
when 't'
  trip
end
