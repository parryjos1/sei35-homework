require 'rainbow'


loop do

    puts Rainbow("Which operation would you like to perform?").gold.bright.blink
    puts Rainbow("1 - Addition").plum.bright
    puts Rainbow("2 - Subtraction").plum.bright
    puts Rainbow("3 - Multiplication").plum.bright
    puts Rainbow("4 - Division").plum.bright
    puts Rainbow("5 - Exponentiation").plum.bright
    puts Rainbow("6 - Square root").plum.bright
    puts Rainbow("7 - Quit").plum.bright
    print "Enter your number of choice: "
    menu = gets.to_i

    if menu == 7
        puts Rainbow("You have quit.").aqua.bright
        break

    elsif menu > 0 && menu < 7

        print "Enter the first number: "
        num1 = gets.to_f

        print "Enter the second number: "
        num2 = gets.to_f

        case menu
        when 1
            puts Rainbow("Addition: #{num1} + #{num2} = #{num1 + num2}").green.bright
            puts Rainbow("-").silver.bright * 40
        when 2
            puts Rainbow("Subtraction: #{num1} - #{num2} = #{num1 - num2}").green.bright
            puts Rainbow("-").silver.bright * 40
        when 3
            puts Rainbow("Multiplication: #{num1} * #{num2} = #{num1 * num2}").green.bright
            puts Rainbow("-").silver.bright * 40
        when 4
            puts Rainbow("Division: #{num1} / #{num2} = #{num1 / num2}").green.bright
            puts Rainbow("-").silver.bright * 40
        when 5
            puts Rainbow("Exponentiation: #{num1}^#{num2} = #{num1 ** num2}").green.bright
            puts Rainbow("-").silver.bright * 40
        when 6
            puts Rainbow("Square root of #{num1} is #{Math.sqrt(num1).round(2)}.\nSquare root of #{num2} is #{Math.sqrt(num2).round(2)}.").green.bright
            puts Rainbow("-").silver.bright * 40
        end

    else
        puts Rainbow("Invalid selection!").red.bright

    end

end