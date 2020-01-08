require 'colorize'
selection = ''

def basic
  puts "welcome to the basic arithmetic menu"
  puts "choose an option"
  puts "addition: +"
  puts "subtraction: -"
  puts "multiplication: *"
  puts "division: /"
  print "enter your desired operation (+,-,/,*): ".yellow
  operator = gets.chomp
  print "what is first number: "
  num1 = gets.to_f
  print "what is second number: "
  num2 = gets.to_f
  answer = case operator
    when '+' then num1 + num2
    when '-' then num1 - num2
    when '/' then num1 / num2
    when '*' then num1 * num2
  end
  puts "the answer to #{num1} #{operator} #{num2} = #{answer}!".green
end

def advanced
  puts "welcome to the advanced calculator"
  puts "choose an option"
  puts "exponent: e"
  puts "square root: s"
  print "enter your desired operation (e,s): ".yellow
  operation = gets.chomp
  if operation == 'e' # make below it's own function
    print "what's the base number in your calculation: "
    base = gets.to_f
    print "what's the second number in your calculation: "
    power = gets.to_f
    exponent = base ** power
    puts "the exponent of #{base} to the power of #{power} is #{exponent}".green
  elsif operation == 's' # make below it's own function
    print "what number do you want to find the squre root of: "
    root = gets.to_i
    square_root = Math.sqrt( root )
    puts "the square root of #{root} is #{square_root}".green
  end
end

def custom
  puts "welcome to the bonus calculator"
  puts "choose an option"
  puts "Mortgage calculator: m"
  puts "BMI calculator: b"
  puts "Trip calculator: t"
  print "enter your desired operation (m, b, t): ".yellow
  operation = gets.chomp
  if operation == 'm'# make below it's own function
    print "what amount do you want to borrow: "
    amount = gets.to_i
    print "how many years: "
    term_length = gets.to_i
    print "what is your interest percent rate: "
    interest_rate = gets.to_f
    def mortgage_calc(p, r, n)
      monthly_repayment = p * ( (r * ( ( 1 + r ) ** n ) ) / ((( 1 + r) ** (n * 1)) -1) )
    end
    monthly_repayment = mortgage_calc(amount, ((interest_rate/100) / 12), (term_length * 12))
    puts "with a loan amount of $#{amount} over #{term_length} years with a interest rate of #{interest_rate}% your montly repayments will be #{monthly_repayment}".green
  elsif operation == 'b'# make below it's own function
    print 'what is your weight in kgs: '
    weight = gets.to_f
    print 'what is your height in meters: '
    height = gets.to_f
    bmi = weight / ( height ** 2 )
    puts "with a height of #{height}m tall and a weight of #{weight}kgs you have a BMI of #{bmi}"
  elsif operation == 't'# make below it's own function
    print "what is the distance in kms: "
    distance = gets.to_f
    print "what is the kilometers per litre: "
    kms_per_litre = gets.to_f
    print "what is the price per litre in $: "
    price_per_litre = gets.to_f
    print "what is the speed in kmp/h: "
    speed_in_kmph = gets.to_f
    trip_time = trip_time_in_hours = ( distance / speed_in_kmph )
    trip_cost = distance / kms_per_litre * price_per_litre
    puts "it will take #{trip_time} hours to travel #{distance}kms.".green
    puts "it will cost $#{trip_cost} to travel #{distance}kms with a consumption of #{kms_per_litre}kms per litre when fuel is $#{price_per_litre} per litre".green
  end
end

until selection == 'q'

puts "welcome to the ruby calculator"
puts "choose an option"
puts "basic arithmetic: b"
puts "advanced arithmetic: a"
puts "custom calculators: c"
puts "quit: q"
print "enter option(b,a,c,q): ".yellow
selection = gets.chomp
case selection
when 'b' then basic
when 'a' then advanced
when 'c' then custom
end

end
