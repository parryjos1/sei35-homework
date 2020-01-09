# Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit. For any digits that thus become 10 or more, subtract 9 from the result.
#
# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).
#
# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.


class Luhn

  def initialize number
    @number = number
  end

  def prepare_digits
    #initialize array
    all_digits = []

    @number.digits.each_with_index do |digit, index|
      #multiply by 2 every 2nd digit
      # if index % 2 != 0
      #   digit *= 2
      # end
      digit *= 2 if index % 2 != 0

      # if >= 10 , do -9
      digit -= 9 if digit >= 10
      # save digit to array
      all_digits << digit
    end
    #return array
    all_digits
  end

  def valid?
    numbers = prepare_digits

    total = numbers.inject(0, :+)

    if total % 10 == 0
      puts "#{@number} is a valid Luhn number."
    else
      puts "#{@number} is NOT a valid Luhn number."
      puts "sum: #{total}"

      digit_check = 10 - total % 10
      overflow = 10 - @number % 10

      @number += digit_check if digit_check < overflow
      @number -= 10 - digit_check if digit_check > overflow

      puts "#{@number} would be a valid Luhn number."
    end
  end
end


l1 = Luhn.new(3554)
l1.valid?
# => false

l2 = Luhn.new(8763)
l2.valid?
# => true

l3 = Luhn.new(3578)
l3.valid?
# => false

l4 = Luhn.new(3574)
l4.valid?
# => true
