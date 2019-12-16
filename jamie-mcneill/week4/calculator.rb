#Calculator Explanation

#You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.

#Specification:

#A user should be given a menu of operations

loop do

print " Menu of operations : multiply = * ,
divide = /
add = +
subtract = -
square root = sqrt
exponent = **
modulus = %
quit = q
"

print "enter number one:"

first = gets.to_f

print "enter your operation: "

operation = gets.chomp

print "enter number two: "

second = gets.to_f

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
