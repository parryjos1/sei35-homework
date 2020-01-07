

class Roman
    
    def initialize
        @roman_numerals = {
            3000 => "MMM",
            2000 => "MM",
            1000 => "M",
            900 => "CM",
            500 => "D",
            400 => "CD",
            100 => "C",
            90 => "XC",
            50 => "L",
            40 => "XL",
            10 => "X",
            9 => 'IX',
            5 => "V",
            4 => "IV",
            1 => "I"
          }
    end

    # def calculate number 
    #     result = ''

    #     @roman_numerals.each do | key, value |
    #         while number >= key 
    #             result += value 
    #             p "The result is: #{ result }"
    #             number -= key
    #             p "The number is: #{ number }"
    #         end 
    #     end 
    #     result
    # end # end of calcuate

    def calculate number
        result = ''
        @roman_numerals.keys.each do |divisor|
            p "divisor #{divisor}"
            quotient, modulus = number.divmod(divisor)
            p "#{quotient}, #{modulus}"
            result << @roman_numerals[divisor] * quotient
            puts "#{result}"
            number = modulus
        end 
        result
    end

end

to_roman = Roman.new 

p to_roman.calculate 1990
