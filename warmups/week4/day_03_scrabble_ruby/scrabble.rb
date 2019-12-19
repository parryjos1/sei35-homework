require 'pry'


# version 1

def scrabble_score word

  letter_values = {
    1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2 => %w{D G},
    3 => %w{B C M P},
    4 => %w{F H V W Y},
    5 => %w{K},
    8 => %w{J X},
    10 => %w{Q Z}
  }

  score = 0

  word.upcase.each_char do |w|
    letter_values.each do |key, value|
      #puts "Key: #{key}, Value: #{value}"
      if value.include? w
        score += key
      end
    end
  end

    # Return the score 
    score

end

print "Type the word: "
input = gets.chomp

puts "The score for the word #{input} is #{ scrabble_score input }"


# Version 2

# def scrabble_score word
#     scores = {
#         'a' => 1, 'e' => 1, 'i' => 1, 'o' => 1,
#         'u' => 1, 'l' => 1, 'n' => 1, 'r' => 1,
#         's' => 1, 't' => 1, 'd' => 2, 'g' => 2,
#         'b' => 3, 'c' => 3, 'm' => 3, 'p' => 3,
#         'f' => 4, 'h' => 4, 'v' => 4, 'w' => 4,
#         'y' => 4, 'k' => 5, 'j' => 8, 'x' => 8,
#         'q' => 10, 'z' => 10
#     }

#     total = 0
#     # binding.pry
#     word.each_char do |letter|
#         total += scores[letter]
#     end

#     total
# end

# print "Type the word: "
  
# input = gets.chomp

# puts "The score for the word #{input} is #{scrabble_score input}"