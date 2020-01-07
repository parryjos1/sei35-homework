#Calculator Explanation

#You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.

#Specification:

#A user should be given a menu of operations

loop do

print "Menu of operations :

Multiply = * ,
Divide = /
Add = +
Subtract = -
Square root = sqrt
Exponent = **
Modulus = %
Quit = q

"
print "Enter number one: "

first = gets.to_f

print "Enter your operation: "

operation = gets.chomp

print "Enter number two: "

second = gets.to_f

  if operation == '*'
   puts "#{first} multiplied by #{second} = #{first * second}"
  elsif operation == '/'
   puts "#{first} divided by #{second} = #{first / second}"
  elsif operation == '-'
   puts "#{first} subtracted by #{second} = #{first - second}"
  elsif operation == '+'
   puts "#{first} plus  #{second} = #{first + second}"
  elsif operation == 'sqrt'
   puts "The square root of #{first} = #{Math.sqrt(first)}"
  elsif operation == '**'
   puts "#{first} to the power of #{second} = #{first ** second}"
  elsif operation ==  '%'
   puts "#{first} modulus #{second} = #{first % second}"
  elsif operation == 'q'
  puts "you have exited the calculator"
   break
  end

end
