# Calculator
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
require 'colorize'

loop do
  print "Do you want to calcualte? (y/n): "
  yes_or_no = gets.chomp.downcase

  if yes_or_no == "n"
    puts "Calculation quits".green
    break
  elsif yes_or_no == "y"
    print "Please type your operation: "
    operation = gets.chomp
    basic_operation = ["+", "-", "*", "/", "%"]
    # determine if it is a basic calculation
    if basic_operation.include? operation
      print "Please type your fisrt number: "
      first_number = gets.to_i
      print "Please type your second number: "
      second_number = gets.to_i
      def basic_calcualte (first_number, operation, second_number)
        first_number.send operation, second_number
      end #def end
      puts "The result is #{basic_calcualte(first_number, operation, second_number)}".yellow

    elsif operation == "exp"
      def exponential_calculate
        print "Please type your base number: "
        base_number = gets.to_i
        print "Please type your power number: "
        power_number = gets.to_i
        base_number**power_number
      end
      puts "The exponential results is #{exponential_calculate}".red

    elsif operation == "sqrt"
      def square_roots
        print "Please type your number: "
        number = gets.to_i
        Math.sqrt(number)
      end
      puts "The square roots results is #{square_roots}".blue
    end#if end

  end #if end

end #loop end

# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
