 print "enter the amount you would like to borrow"
  borrow_amount = gets.chomp.to_f

 print "enter your interest rate"

 interest_rate = gets.chomp.to_f

  print "please enter the length of the loan in years"

  years = gets.chomp.to_f


  if operation == '*'
   puts "#{first * second}"
  elsif operation == '/'
   puts "#{first / second}"
  elsif operation == '-'
   puts "#{first - second}"
  elsif operation == '+'
   puts "#{first + second}"
  elsif operation == 'sqrt'
   puts Math.sqrt(first)
  elsif operation == '**'
   puts "#{first ** second}"
  elsif operation ==  '%'
   puts "#{first % second}"
  elsif operation == 'q'
   break
  end

end
