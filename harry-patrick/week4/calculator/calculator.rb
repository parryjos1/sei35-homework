loop do
  puts "Would you like to [a]dd, [m]ultiply, [s]ubtract, [d]ivide, square [r]oot, [sq]uare or [q]uit?"
  reply = gets.chomp.downcase.to_s
  response = reply
  # special_response = reply[0] + reply[1]
  def add (num_one, num_two)
    num_one + num_two
  end

  def subtract (num_one, num_two)
    num_one - num_two
  end

  def divide (num_one, num_two)
    num_one / num_two
  end

  def multiply (num_one, num_two)
    num_one * num_two
  end

  def squ_root (num_one)
    Math.sqrt(num_one)
  end

  def pow (num_one, num_two)
   Math.pow (num_one, num_two)
  end
    if response == 'q'
      break
    end

  print "First number: "
  num_one = gets.to_i

  print "Second number: "
  num_two = gets.to_i

  if response == 'a'
    puts "#{num_one} plus #{num_two} = #{add num_one, num_two}"

  elsif response == 'm'
    puts "#{num_one} times #{num_two} = #{multiply num_one, num_two}"

  elsif response == 's'
    puts "#{num_one} minus #{num_two} = #{subtract num_one, num_two}"

  elsif response == 'd'
    puts "#{num_one} divided by #{num_two} = #{divide num_one, num_two}"

  elsif response == 'r'
    puts "The square root of #{num_one} = #{squ_root num_one}"

  elsif response == 'sq'
    puts "#{num_one} squared = #{squ num_one, num_two}"
  end
end
