def menu
    puts "a - addition"
    puts "s - subtraction"
    puts "d - divison"
    puts "m - multiplication"
    puts "q - quit"


  menu_basic = gets.chomp.downcase
  if menu_basic == "a"
  puts "Enter number one"
  num1 = gets.to_f
  puts "Enter number two"
  num2 = gets.to_f
  puts "Result: "
  puts num1 + num2
  end

  if menu_basic == "s"
  puts "Enter number one"
  num1 = gets.to_f
  puts "Enter number two"
  num2 = gets.to_f
  puts "Result: "
  puts num1 - num2
  end

  if menu_basic == "d"
  puts "Enter number one"
  num1 = gets.to_f
  puts "Enter number two"
  num2 = gets.to_f
  puts "Result: "
  puts num1 / num2
  end

  if menu_basic == "m"
  puts "Enter number one"
  num1 = gets.to_f
  puts "Enter number two"
  num2 = gets.to_f
  puts "Result: "
  puts num1 * num2
  end

  if menu_basic == "q"
    puts "Byebye!"
    exit
  end
end

 loop do
   menu
 end
