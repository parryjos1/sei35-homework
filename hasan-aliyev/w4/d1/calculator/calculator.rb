




  require 'colorize'
  print 'choose your function: [m]ultiply, [d]ivide, [s]ubtract, [a]dd, [sq]root, [p]ow, [q]uit '
  reply = gets.chomp.downcase
  response = reply[0]


  until print == 'q'

  def multiply (num1, num2)
    num1 * num2
  end

  def divide (num1, num2)
    num1 / num2
  end

  def subtract (num1, num2)
   num1 - num2
  end

  def add (num1, num2)
   num1 + num2
  end

  def sqrt (num)
   Math.sqrt (num)
  end

  def pow (num1, num2)
    num1 ** num2
  end






if reply == 'm'
  print 'First number: '

  num1 = gets.to_i

  print 'Second number: '
  num2 = gets.to_i
  result = multiply(num1, num2)
  puts "Equal to: #{result}".blue

  print 'choose your function: [m]ultiply, [d]ivide, [s]ubtract, [a]dd, [sq]root, [p]ow, [q]uit '
  reply = gets.chomp.downcase
  response = reply[0]


elsif reply == 'd'
  print 'First number: '

  num1 = gets.to_i

  print 'Second number: '
  num2 = gets.to_i
  result = divide(num1, num2)
  puts "Equal to: #{result}".light_blue

  print 'choose your function: [m]ultiply, [d]ivide, [s]ubtract, [a]dd, [sq]root, [p]ow, [q]uit '
  reply = gets.chomp.downcase
  response = reply[0]

elsif reply == 's'
  print 'First number: '

  num1 = gets.to_i

  print 'Second number: '
  num2 = gets.to_i
  result = subtract(num1, num2)
  puts "Equal to: #{result}".yellow

  print 'choose your function: [m]ultiply, [d]ivide, [s]ubtract, [a]dd, [sq]root, [p]ow, [q]uit '
  reply = gets.chomp.downcase
  response = reply[0]

elsif reply == 'a'
  print 'First number: '

  num1 = gets.to_i

  print 'Second number: '
  num2 = gets.to_i
  result = add(num1, num2)
  puts "Equal to: #{result}".green

  print 'choose your function: [m]ultiply, [d]ivide, [s]ubtract, [a]dd, [sq]root, [p]ow, [q]uit '
  reply = gets.chomp.downcase
  response = reply[0]

elsif reply == 'p'
  print 'First number: '
  num1 = gets.to_i
  print 'Second number: '
  num2 = gets.to_i
  result = pow(num1, num2)
  puts "Number #{num1} exponent to number #{num2} equal to #{result}"

  print 'choose your function: [m]ultiply, [d]ivide, [s]ubtract, [a]dd, [sq]root, [p]ow, [q]uit '
  reply = gets.chomp.downcase
  response = reply[0]

elsif reply == 'sq'
  print 'Enter number for Square Meter: '
  num = gets.to_i
  result = sqrt(num)
  puts "Square root of #{num} is #{result}: ".red

  print 'choose your function: [m]ultiply, [d]ivide, [s]ubtract, [a]dd, [sq]root, [p]ow, [q]uit '
  reply = gets.chomp.downcase
  response = reply[0]
elsif reply == 'q'

 puts "You have left the Calculator "
  result = exit


end


end
