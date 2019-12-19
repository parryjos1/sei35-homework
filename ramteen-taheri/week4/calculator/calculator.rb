option = -1
until option == 0
    puts "*********** The Calculator **************"
    puts "1) Addition"
    puts "2) Subtraction"
    puts "3) Multiplication"
    puts "4) Division"
    puts "5) Exponential"
    puts "6) Nth Root"
    puts "0) Quit"
    puts ""
    print "Enter an operation you would like to perform: "
    option = gets.chomp
    option = option.to_f
    if option == 0
        break
    elsif option == 1
        puts "You Selected: Addition."
        print "Enter Number 1: "
        num_one = gets.chomp
        num_one = num_one.to_f
        print "Enter Number 2: "
        num_two = gets.chomp
        num_two = num_two.to_f
        result = num_one + num_two
        puts "Your Result: "
        puts "#{num_one} + #{num_two} = #{result}"
    elsif option == 2
        puts "You Selected: Subtraction."
        print "Enter Number 1: "
        num_one = gets.chomp
        num_one = num_one.to_f
        print "Enter Number 2: "
        num_two = gets.chomp
        num_two = num_two.to_f
        result = num_one - num_two
        puts "Your Result: "
        puts "#{num_one} - #{num_two} = #{result}"
    elsif option == 3
        puts "You Selected: Multiplication."
        print "Enter Number 1: "
        num_one = gets.chomp
        num_one = num_one.to_f
        print "Enter Number 2: "
        num_two = gets.chomp
        num_two = num_two.to_f
        result = num_one * num_two
        puts "Your Result: "
        puts "#{num_one} * #{num_two} = #{result}"
    elsif option == 4
        puts "You Selected: Division."
        print "Enter Number 1: "
        num_one = gets.chomp
        num_one = num_one.to_f
        print "Enter Number 2: "
        num_two = gets.chomp
        num_two = num_two.to_f
        result = num_one / num_two
        puts "Your Result: "
        puts "#{num_one} / #{num_two} = #{result}"
    elsif option == 5
        puts "You Selected: Exponential Operations."
        print "Enter Base: "
        base = gets.chomp
        base = base.to_f
        print "Enter Exponent: "
        exponent = gets.chomp
        exponent = exponent.to_f
        result = base**exponent
        puts "Your Result: "
        puts "#{base} to the power of #{exponent} = #{result}"
    elsif option == 6
        puts "You Selected: Nth Root."
        print "Enter Number: "
        number = gets.chomp
        number = number.to_f
        print "Enter base logarithm: "
        base = gets.chomp
        base = base.to_f
        result = number**(1/base)
        puts "Your Result: "
        puts "#{number} to the root of #{base} = #{result}"
    end
    puts ""
end
puts "Thank you for using the calculator."