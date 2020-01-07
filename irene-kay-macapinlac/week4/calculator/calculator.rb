# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should
# continue until the user selects a quit option from the menu
# puts "What's the first number?: "
# num_1 = gets.chomp
#
# print "What's the second number?: "
# num_2 = gets.chomp
#
# print "Menu of Operations: addition, subtraction, multiplication and division "
# puts
#
#
# print "Which operation?: "
# operation = gets.chomp



def operations_menu
  puts "Calculator
   1: Addition
   2: Subtraction
   3: Multiplication
   4: Division"

  print "Which operation? "

end

operations_menu
 choose_operation = gets.chomp

  print "What's the first number: "
  num_1 = gets.to_i
  print "What's the second number: "
  num_2 = gets.to_i

  case choose_operation
  when '1'
    puts "Addition: #{num_1} + #{num_2} = #{num_1 + num_2}"
  when '2'
    puts "Subtraction #{num_1} - #{num_2} = #{num_1 - num_2}"
  when '3'
    puts "Multiplication #{num_1} * #{num_2} = #{num_1 * num_2}"
  when '4'
    puts "Division #{num_1} / #{num_2} = #{num_1 / num_2}"
  end

  operations_menu #calculator loops again
  choose_operation = gets.chomp
