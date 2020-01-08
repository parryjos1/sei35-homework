
class SimpleSums

    def initialize( number )
        @number = number
    end

    # getter method
    def number
        @number
    end

    attr_reader :number

    def s1
        @number % 2
    end 

    def s2

        # Option 1
        # sum_s2 = (@number * (@number + 1)) / 2
        # sum_s2
        sum_s2 = 0

        # (1..@number).each do |num| 
        #     sum_s2 += num
        # end 

        @number.times do |num| 
            sum_s2 += num + 1
        end 
        sum_s2

        # Option 3
        # (1..@number).sum
    end 

end

sum = SimpleSums.new(4)

p sum.number 
p sum.s1
p sum.s2 