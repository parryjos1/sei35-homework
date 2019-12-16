  #basic calculator
#A user should be given a menu of operations
#A user should be able to choose from the menu
#A user should be able to enter numbers to perform the operation on
#A user should be shown the result
#The menu should be displayed again, and process should continue until the user selects a quit option from the menu
#Phase 1
#Calculator functionality
#Calculator should be able to do basic arithmetic (+,-, *, /)

#menu ??x
#"Calculator"
#
# user imput flow:
#
#
# "enter your first numbers"
#  ____
#
# "enter your desired operator : +,-,*,/"
#  ____
#
#
# "enter your second integers"
#
#  ____
#
# "return  result"
#
# Basic Function Example:
# operator: add
#
# result = x + y
#
# return result
#
#
# x = 5
# y =10


print "enter your first number:"
num1 = gets.to_f


print "enter your desired operator ( +, -, *, /, q ): "
operator = gets.chomp()

#puts operator

print "enter your second number:"
num2 = gets.to_f


if operator =="+"
  puts (num1 + num2)
elsif operator =="-"
  puts (num1 - num2)
if operator =="*"
  puts (num1 * num2)
elsif operator =="/"
  puts (num1 / num2)
else
  puts "invalid operator!"
end

end
