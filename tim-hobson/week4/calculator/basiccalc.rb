
puts "calculator"

# loop do

def show_menu
  puts "welcome to the calculator"
  puts "choose an option"
  puts "addition: +"
  puts "subtraction: -"
  puts "multiplication: *"
  puts "division: /"
  print "enter your desired operation (+,-,/,*): "
  gets.chomp
end

def get_first_number
  print "what's the first number in your calculation: "
  gets.to_f
end

def get_second_number
  print "what's the second number in your calculation: "
  gets.to_f
end

def calc( num1, sign, num2 )
  case sign
  when '+' then num1 + num2
  when '-' then num1 - num2
  when '/' then num1 / num2
  when '*' then num1 * num2
  end
end

menu_selection = show_menu
first_number = get_first_number
second_number = get_second_number
answer = calc( first_number, menu_selection, second_number)
puts "the answer to #{first_number} #{menu_selection} #{second_number} = #{answer}!"
#
# # end
