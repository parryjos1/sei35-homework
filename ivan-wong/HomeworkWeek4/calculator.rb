chosenOperation = 0
def Plus(number1, number2)
  return number1 + number2
end
def Minus(number1, number2)
  return number1 - number2
end
def Multiply(number1, number2)
  return number1 * number2
end
def Divide(number1, number2)
  return number1/number2
end
def Power(number1, number2)
  return number1**number2
end
def SquareRoots(number1)
  return Math.sqrt(number1)
end
def Mortgage(amount, payments, rate)
  return amount*((rate(1+rate)**number)/((1+rate)**number)-1)
end
def BMI(weight, height)
  return weight/(height**2)
end
def Trip(distance, miles, price, speed)
  p "#{distance/speed} hours"
  p "#{distance/miles*price} dollars"
end
while chosenOperation != "quit"
  p "Plus, Minus, Divide, Multiply, Power, SquareRoots, Mortgage, BMI, Trip or quit"
  chosenOperation = gets.chomp
  if chosenOperation == "Plus"
    print "What is the first number "
    number1 = gets.chomp.to_i
    print "What is the second number "
    number2 = gets.chomp.to_i
    p Plus(number1, number2)
  elsif chosenOperation == "Minus"
    print "What is the first number "
    number1 = gets.chomp.to_i
    print "What is the second number "
    number2 = gets.chomp.to_i
    p Minus(number1, number2)
  elsif chosenOperation == "Divide"
    print "What is the first number "
    number1 = gets.chomp.to_i
    print "What is the second number "
    number2 = gets.chomp.to_i
    p Divide(number1, number2)
  elsif chosenOperation == "Multiply"
    print "What is the first number "
    number1 = gets.chomp.to_i
    print "What is the second number "
    number2 = gets.chomp.to_i
    p Multiply(number1, number2)
  elsif chosenOperation == "Power"
    print "What is the first number "
    number1 = gets.chomp.to_i
    print "What is the second number "
    number2 = gets.chomp.to_i
    p Power(number1, number2)
  elsif chosenOperation == "SquareRoots"
    print "What is the first number "
    number1 = gets.chomp.to_i
    p SquareRoots(number1)
  elsif chosenOperation == "Mortgage"
    print "What is the principle "
    amount = gets.chomp.to_i
    print "How many payments are there "
    payments = gets.chomp.to_i
    print "What is the rate of the mortgage "
    rate = gets.chomp.to_i
    p Mortgage(amount, payments, rate)
  elsif chosenOperation == "BMI"
    print "What is your weight "
    weight = gets.chomp.to_i
    print "What is your height "
    height = gets.chomp.to_f
    p BMI(weight, height)
  elsif chosenOperation == "Trip"
    print "How long is the journey"
    distance = gets.chomp.to_f
    print "How much miles per gallon "
    miles = gets.chomp.to_f
    print "Price per gallon "
    price = gets.chomp.to_f
    print "Speed of vehicle "
    speed = gets.chomp.to_f
    Trip(distance, miles, price, speed)
  end
end
