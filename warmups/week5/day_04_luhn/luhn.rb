
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

    # add all digits
    total = numbers.inject(0, :+)

    #if valid
    if total % 10 == 0
      puts "#{@number} is a valid Luhn number."
    else
      #if invalid
      puts "#{@number} is NOT a valid Luhn number."
      # puts "sum: #{total}"

      #bonus: find a number that would be valid
      #how much to add for sum % 10 == 0
      digit_check = 10 - total % 10
      #find highest value to add to number so we only change the last digit and not the second to last digit
      overflow = 10 - @number % 10

      #condition to either add or substract digit_check to number 
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
