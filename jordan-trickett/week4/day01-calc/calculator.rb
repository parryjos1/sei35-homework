puts "calculator"

# Explanation
# You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.

# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should continue until the user selects a quit option from the menu

# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

loop do

  puts "Select operation: (+, -, *, /, 'to the power of', 'square root', 'quit')"
  operation = gets.chomp.downcase


  if operation == "square root"

    puts "Enter number:"
    num1 = gets.to_i
    puts  "Answer is #{Math.sqrt(num1)}"

  elsif operation == "quit"

    puts "calculator closed"
    break

  else

    puts "Enter first number:"
    num1 = gets.to_i

    puts "Enter second number:"
    num2 = gets.to_i

      if operation == '+'
        puts "Answer is #{num1 + num2}"
      elsif operation == '-'
        puts "Answer is #{num1 - num2}"
      elsif operation == '*'
        puts "Answer is #{num1 * num2}"
      elsif operation == "to the power of"
        puts  "Answer is #{num1 ** num2}"
      else
        puts "Answer is #{num1 / num2}"
      end


  end


end
