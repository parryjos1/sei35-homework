  puts 'hello'


puts "calculator test"

# loop do

def show_adv_menu
  puts "welcome to the advanced calculator"
  puts "choose an option"
  puts "exponent: e"
  puts "square root: s"
  print "enter your desired operation (e,s): "
  gets.chomp
end

def get_base_number
  print "what's the base number in your calculation: "
  gets.to_f
end

def get_power_number
  print "what's the second number in your calculation: "
  gets.to_f
end

def find_square_root_of
  print "what number do you want to find the squre root of: "
  gets.to_i
end

def findexponent( num1, num2 )
 num1 ** num2
end

def squareroot( num1 )
  Math.sqrt( num1 )
end

menu_selection = show_adv_menu
if menu_selection == 'e'
  base_number = get_base_number
  power_number = get_power_number
  answer = findexponent( base_number, power_number)
  puts "the answer to #{base_number} #{menu_selection} #{power_number} = #{answer}!"
elsif menu_selection == 's'
  rootnum = find_square_root_of
  answer = squareroot(rootnum)
  puts "the square root of #{rootnum} is #{answer}"
end

# end
