puts '---calculator---'

def show_menu
  puts "welcome to the calculator"
  puts "choose an option"
  puts "1. basic arithmetic"
  puts "2. advanced arithmetic"
  puts "3. custom calculators"
  print "enter option(1,2,3): "
  gets.to_i
end

def basic_menu
  puts "welcome to the basic arithmetic menu"
  puts "choose an option"
  puts "addition: +"
  puts "subtraction: -"
  puts "multiplication: *"
  puts "division: /"
  print "enter your desired operation (+,-,/,*): "
  gets.chomp
end

def first_number
  print "what's the first number in your calculation: "
  gets.to_f
end

def second_number
  print "what's the second number in your calculation: "
  gets.to_f
end

def calc( sign, num1, num2 )
  case sign
  when '+' then num1 + num2
  when '-' then num1 - num2
  when '/' then num1 / num2
  when '*' then num1 * num2
  end
end

def show_adv_menu
  puts "welcome to the advanced calculator"
  puts "choose an option"
  puts "exponent: e"
  puts "square root: s"
  print "enter your desired operation (e,s): "
  gets.chomp
end

def base_number
  print "what's the base number in your calculation: "
  gets.to_f
end

def power_number
  print "what's the second number in your calculation: "
  gets.to_f
end

def root_number
  print "what number do you want to find the squre root of: "
  gets.to_i
end

def findexponent( num1, num2 )
 num1 ** num2
end

def squareroot( num1 )
  Math.sqrt( num1 )
end

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
  amount = get_borrow_amount
  term_length = get_term_length
  interest_rate = get_interest_rate
  monthly_rate = (interest_rate/100) / 12
  monthly_rate_plus_one = monthly_rate + 1
  num_of_months = term_length * 12
  minus_from_1 = monthly_rate_plus_one ** (num_of_months * -1)
  divide_monthly_rate_by = 1 - minus_from_1
  amount_multiply_by = monthly_rate / divide_monthly_rate_by
  monthly_repayment = (amount * amount_multiply_by).round(2)
  puts "with a loan amount of #{amount} over #{term_length} years with a interest rate of #{interest_rate}% your montly repayments will be #{monthly_repayment}"
end

def weight
  print 'what is your weight in kgs: '
  gets.to_f
end

def height
  print 'what is your height in meters: '
  gets.to_f
end

def bmi
  weight / ( height ** 2 )
end

def distance
  print "what is the distance in kms: "
  gets.to_f
end

def kms_per_litre
  print "what is the kilometers per litre: "
  gets.to_f
end

def price_per_litre
  print "what is the price per litre: "
  gets.to_f
end

def speed_in_kmph
  print "what is the speed in kmp/h: "
  gets.to_f
end

def trip
  puts "#{trip_time_in_hours = ( distance / speed_in_kmph )} hours"
  trip_cost = distance / kms_per_litre * price_per_litre
end 

def basic
  calc( basic_menu, first_number, second_number)
end

def advanced
  menu_selection = show_adv_menu
  if menu_selection == 'e'
    findexponent base_number, power_number
  elsif menu_selection == 's'
    squareroot root_number
  end
end

def custom
  menu_selection = show_bonus_menu
  case menu_selection
  when 'm'
    mortgage
  when 'b'
    bmi
  when 't'
    trip
  end
end


menu_selection = show_menu
case menu_selection
when 1
  puts basic
when 2
  puts advanced
when 3
  puts custom
end
