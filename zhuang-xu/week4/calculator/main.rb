require 'io/console'
require 'colorize'

trap("INT") { puts "Shutting down."; exit }

def print_menu
  puts "\nPlease choose your operation: [1]"
  puts '  1. Addition'
  puts '  2. Subtraction'
  puts '  3. Multiplication'
  puts '  4. Division'
  puts '  5. Exponent'
  puts '  6. Square Root'
  puts '  7. Mortgage Repayment'
  puts '  q. Quit'
end

def ask_for_numbers(operation)
  print "\nPlease input operator 1: "
  operand_1 = gets.to_f

  if operation != 6
    print "Please input operator 2: "
    operand_2 = gets.to_f
  end

  [operand_1, operand_2]
end

def show_result(result)
  puts "\nResult is #{result}".green
end

def get_mortgage_variables
  print "\nPrinciple: "
  principle = gets.to_i

  print "Annual interest rate: "
  interest_rate = gets.to_f

  print "Years: "
  years = gets.to_i

  [principle, interest_rate, years]
end

loop do
  print_menu

  operation = STDIN.getch

  if operation == "\r"
    operation = 1
  end

  if operation == "q" || operation == "\C-c" || operation == "\C-d"
    puts "\nThanks for coming in today!"
    break
  else
    operation = operation.to_i
    if (1..6).include? operation
      operand_1, operand_2 = ask_for_numbers operation

      if operation == 1
        show_result(operand_1 + operand_2)
      end

      if operation == 2
        show_result(operand_1 - operand_2)
      end

      if operation == 3
        show_result(operand_1 * operand_2)
      end

      if operation == 4
        show_result(operand_1 / operand_2)
      end

      if operation == 5
        show_result(operand_1 ** operand_2)
      end

      if operation == 6
        show_result(Math.sqrt(operand_1))
      end
    else
      # Mortgage calculator
      principle, interest_rate, years = get_mortgage_variables
      monthly_rate = interest_rate / 12
      months = years * 12
      show_result (principle * monthly_rate / (1 - (1 / (1 + monthly_rate) ** months))).round(2)
    end
  end
end
