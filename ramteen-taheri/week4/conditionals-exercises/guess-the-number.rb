correct_number = rand(0..10)
guessed_number = -1

until guessed_number == correct_number
    print "Guess a number between 1 and 10: "
    guessed_number = gets.chomp.to_i
    if guessed_number > correct_number
        puts "Lower..."
    elsif guessed_number < correct_number
        puts "Higher..."
    end
end

puts "Correct!"
