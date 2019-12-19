require 'pry'
require 'colorize'

def add(num1, num2)
  num1 + num2
end

def multiply(num1, num2)
  num1 * num2
end

def divide(num1, num2)
  num1 / num2
end

def subtract(num1, num2)
  num1 - num2
end

def exponent(num1, num2)
  num1**num2
end

def square_root(num)
  Math.sqrt(num)
end

number1, number2, arithmetic_operator = nil, nil, nil

until number1 == 'q' || number2 == 'q' || arithmetic_operator == 'q'
  print "First number: "
  number1 = gets.chomp
  next if number1 == 'q'
  print "Arithmetic operation ('*', '/', '-', '+', 'root', 'exp'): "
  arithmetic_operator = gets.chomp.strip
  next if arithmetic_operator == 'q'
  unless arithmetic_operator == 'root'
    print "Second number: "
    number2 = gets.chomp
    next if number2 == 'q'
  end

  answer = case arithmetic_operator
  when '*'    then multiply(number1.to_f, number2.to_f)
  when '/'    then divide(number1.to_f, number2.to_f)
  when '+'    then add(number1.to_f, number2.to_f)
  when '-'    then subtract(number1.to_f, number2.to_f)
  when 'exp'  then exponent(number1.to_f, number2.to_f)
  when 'root' then square_root(number1.to_f)
  else "You need to select a valid arithmetic operator"
  end

  arithmetic_operator = '**' if arithmetic_operator == 'exp'
  if arithmetic_operator.length > 4
    puts "#{arithmetic_operator}"
  elsif arithmetic_operator == 'root'
    puts "Square root of #{number1} is #{answer}."
  else
    puts "#{number1} #{arithmetic_operator} #{number2} = #{answer}".green
  end

end
